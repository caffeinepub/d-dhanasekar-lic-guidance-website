import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import MobileNumberPromptModal from './MobileNumberPromptModal';
import { getWhatsAppLinkForPrompt } from '../../lib/contactLinks';

interface MobileNumberPromptContextType {
  showPrompt: (action: () => void) => void;
}

const MobileNumberPromptContext = createContext<MobileNumberPromptContextType | null>(null);

export function useMobileNumberPrompt() {
  const context = useContext(MobileNumberPromptContext);
  if (!context) {
    throw new Error('useMobileNumberPrompt must be used within MobileNumberPromptProvider');
  }
  return context;
}

interface MobileNumberPromptProviderProps {
  children: React.ReactNode;
}

export default function MobileNumberPromptProvider({ children }: MobileNumberPromptProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);
  const bypassNextClick = useRef(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const showPrompt = useCallback((action: () => void) => {
    setPendingAction(() => action);
    setIsOpen(true);
  }, []);

  const handleConfirm = useCallback((mobileNumber: string) => {
    // Open WhatsApp with prefilled message
    const whatsappUrl = getWhatsAppLinkForPrompt(mobileNumber);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Close modal
    setIsOpen(false);

    // Execute the original action with bypass flag
    if (pendingAction) {
      bypassNextClick.current = true;
      setTimeout(() => {
        pendingAction();
        setPendingAction(null);
        // Reset bypass after a short delay
        setTimeout(() => {
          bypassNextClick.current = false;
        }, 100);
      }, 50);
    }
  }, [pendingAction]);

  const handleCancel = useCallback(() => {
    setIsOpen(false);
    setPendingAction(null);
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      // Skip if bypass flag is set
      if (bypassNextClick.current) {
        return;
      }

      const target = event.target as HTMLElement;

      // Check if click is inside the modal
      if (modalRef.current && modalRef.current.contains(target)) {
        return;
      }

      // Check if the target is a clickable element
      const clickableElement = target.closest('button, a, [role="button"], [role="link"]');
      
      if (clickableElement) {
        // Prevent the default action
        event.preventDefault();
        event.stopPropagation();

        // Store the original action
        const originalAction = () => {
          // Recreate the click event
          if (clickableElement instanceof HTMLAnchorElement) {
            const href = clickableElement.getAttribute('href');
            const targetAttr = clickableElement.getAttribute('target');
            
            if (href) {
              if (targetAttr === '_blank') {
                window.open(href, '_blank', 'noopener,noreferrer');
              } else if (href.startsWith('tel:') || href.startsWith('mailto:')) {
                window.location.href = href;
              } else {
                // For internal navigation, trigger a click
                clickableElement.click();
              }
            }
          } else if (clickableElement instanceof HTMLButtonElement) {
            // For buttons, trigger a click
            clickableElement.click();
          } else {
            // For other clickable elements, trigger a click
            (clickableElement as HTMLElement).click();
          }
        };

        // Show the prompt
        showPrompt(originalAction);
      }
    };

    // Add capture-phase listener to intercept clicks before they bubble
    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [showPrompt]);

  return (
    <MobileNumberPromptContext.Provider value={{ showPrompt }}>
      {children}
      <MobileNumberPromptModal
        isOpen={isOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        modalRef={modalRef}
      />
    </MobileNumberPromptContext.Provider>
  );
}
