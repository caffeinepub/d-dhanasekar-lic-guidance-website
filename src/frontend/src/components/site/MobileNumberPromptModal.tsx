import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface MobileNumberPromptModalProps {
  isOpen: boolean;
  onConfirm: (mobileNumber: string) => void;
  onCancel: () => void;
  modalRef: React.RefObject<HTMLDivElement | null>;
}

export default function MobileNumberPromptModal({
  isOpen,
  onConfirm,
  onCancel,
  modalRef,
}: MobileNumberPromptModalProps) {
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState('');

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setMobileNumber('');
      setError('');
    }
  }, [isOpen]);

  const validateMobileNumber = (number: string): boolean => {
    // Remove spaces, dashes, and +91 prefix
    const cleaned = number.replace(/[\s\-+]/g, '');
    
    // Check if it's empty
    if (!cleaned) {
      setError('Mobile number is required');
      return false;
    }

    // Remove country code if present
    const withoutCountryCode = cleaned.startsWith('91') ? cleaned.slice(2) : cleaned;

    // Check if it's a valid 10-digit Indian mobile number starting with 6-9
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(withoutCountryCode)) {
      setError('Please enter a valid 10-digit Indian mobile number');
      return false;
    }

    setError('');
    return true;
  };

  const handleConfirm = () => {
    if (validateMobileNumber(mobileNumber)) {
      // Normalize the number (remove spaces, dashes, etc.)
      const cleaned = mobileNumber.replace(/[\s\-+]/g, '');
      const normalized = cleaned.startsWith('91') ? cleaned.slice(2) : cleaned;
      onConfirm(normalized);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMobileNumber(e.target.value);
    if (error) {
      setError('');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onCancel()}>
      <DialogContent ref={modalRef} className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Enter Your Mobile Number</DialogTitle>
          <DialogDescription>
            Please provide your mobile number to continue. We'll send you a WhatsApp message.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input
              id="mobile"
              type="tel"
              placeholder="Enter 10-digit mobile number"
              value={mobileNumber}
              onChange={handleInputChange}
              className={error ? 'border-destructive' : ''}
            />
            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}
          </div>
        </div>
        <DialogFooter className="flex-col gap-2 sm:flex-row">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            className="w-full sm:w-auto"
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleConfirm}
            className="w-full sm:w-auto"
          >
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
