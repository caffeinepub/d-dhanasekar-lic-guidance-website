import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  policyInterest: string;
  message: string;
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: InquiryFormData) => {
      if (!actor) {
        throw new Error('Actor not available');
      }

      const inquiry = await actor.submit(
        data.name.trim(),
        data.phone.trim(),
        data.email.trim(),
        data.policyInterest.trim(),
        data.message.trim()
      );

      return inquiry;
    },
    onSuccess: () => {
      // Invalidate any queries that might list inquiries
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    },
  });
}
