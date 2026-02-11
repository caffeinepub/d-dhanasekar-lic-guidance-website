import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Inquiry, AgentApplication, AdminStatus } from '../backend';
import { Principal } from '@dfinity/principal';

// ============== Inquiry Admin Hooks ==============

export function useGetAllInquiries(sort?: string | null, reverse?: boolean | null) {
  const { actor, isFetching } = useActor();

  return useQuery<Inquiry[]>({
    queryKey: ['inquiries', 'admin', sort, reverse],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAll(sort || null, reverse || null);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useUpdateInquiryStatus() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      inquiryId,
      newStatus,
      notes,
    }: {
      inquiryId: bigint;
      newStatus: AdminStatus;
      notes?: string;
    }) => {
      if (!actor) {
        throw new Error('Actor not available');
      }
      await actor.updateInquiryStatus(inquiryId, newStatus, notes || null);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    },
  });
}

export function useDeleteInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (inquiryId: bigint) => {
      if (!actor) {
        throw new Error('Actor not available');
      }
      await actor.deleteInquiry(inquiryId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    },
  });
}

export function useAdminCreateInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      phone,
      email,
      policyInterest,
      message,
      status,
      adminNotes,
      submittedBy,
    }: {
      name: string;
      phone: string;
      email: string;
      policyInterest: string;
      message: string;
      status: AdminStatus;
      adminNotes: string;
      submittedBy: Principal;
    }) => {
      if (!actor) {
        throw new Error('Actor not available');
      }
      return actor.adminCreateInquiry(
        name,
        phone,
        email,
        policyInterest,
        message,
        status,
        adminNotes,
        submittedBy
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    },
  });
}

// ============== Agent Application Admin Hooks ==============

export function useGetAllAgentApplications(sort?: string | null, reverse?: boolean | null) {
  const { actor, isFetching } = useActor();

  return useQuery<AgentApplication[]>({
    queryKey: ['agentApplications', 'admin', sort, reverse],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllAgentApplications(sort || null, reverse || null);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useUpdateAgentApplicationStatus() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      applicationId,
      newStatus,
      notes,
    }: {
      applicationId: bigint;
      newStatus: AdminStatus;
      notes?: string;
    }) => {
      if (!actor) {
        throw new Error('Actor not available');
      }
      await actor.updateAgentApplicationStatus(applicationId, newStatus, notes || null);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['agentApplications'] });
    },
  });
}

export function useDeleteAgentApplication() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (applicationId: bigint) => {
      if (!actor) {
        throw new Error('Actor not available');
      }
      await actor.deleteAgentApplication(applicationId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['agentApplications'] });
    },
  });
}

export function useAdminCreateAgentApplication() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      phone,
      email,
      age,
      location,
      notes,
      status,
      adminNotes,
    }: {
      name: string;
      phone: string;
      email: string;
      age: bigint;
      location: string;
      notes: string;
      status: AdminStatus;
      adminNotes: string;
    }) => {
      if (!actor) {
        throw new Error('Actor not available');
      }
      return actor.adminCreateAgentApplication(
        name,
        phone,
        email,
        age,
        location,
        notes,
        status,
        adminNotes
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['agentApplications'] });
    },
  });
}

// ============== User Profile Hooks ==============

export function useGetCallerUserProfile() {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery({
    queryKey: ['currentUserProfile'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getCallerUserProfile();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}

export function useIsCallerAdmin() {
  const { actor, isFetching } = useActor();

  return useQuery<boolean>({
    queryKey: ['isAdmin'],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isCallerAdmin();
    },
    enabled: !!actor && !isFetching,
  });
}
