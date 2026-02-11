import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface AgentApplicationFormData {
  name: string;
  phone: string;
  email: string;
  age: bigint;
  location: string;
  notes: string;
}

export function useSubmitAgentApplication() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: AgentApplicationFormData) => {
      if (!actor) {
        throw new Error('Actor not available');
      }

      const application = await actor.submitAgentApplication(
        data.name,
        data.phone,
        data.email,
        data.age,
        data.location,
        data.notes
      );

      return application;
    },
    onSuccess: () => {
      // Invalidate any queries that might list agent applications
      queryClient.invalidateQueries({ queryKey: ['agentApplications'] });
    },
  });
}
