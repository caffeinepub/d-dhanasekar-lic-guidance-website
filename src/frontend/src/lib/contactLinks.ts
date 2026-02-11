const PHONE_NUMBER = '9095077994';

export function getPhoneLink(): string {
  return `tel:${PHONE_NUMBER}`;
}

export function getWhatsAppLink(message?: string): string {
  const baseUrl = 'https://wa.me/91' + PHONE_NUMBER;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
}

export function getWhatsAppLinkForPrompt(userMobileNumber: string): string {
  const message = `Hello, I'm interested in LIC policies. My mobile number is ${userMobileNumber}. Please contact me.`;
  return getWhatsAppLink(message);
}
