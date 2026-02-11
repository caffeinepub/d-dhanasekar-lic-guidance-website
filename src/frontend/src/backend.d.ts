import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface AgentApplication {
    id: bigint;
    age: bigint;
    status: AdminStatus;
    name: string;
    createdAt: bigint;
    lastUpdated: bigint;
    email: string;
    notes: string;
    statusTimestamps: Array<[AdminStatus, bigint]>;
    phone: string;
    adminNotes: string;
    location: string;
}
export interface Inquiry {
    id: bigint;
    status: AdminStatus;
    policyInterest: string;
    name: string;
    createdAt: bigint;
    lastUpdated: bigint;
    submittedBy: Principal;
    email: string;
    message: string;
    statusTimestamps: Array<[AdminStatus, bigint]>;
    phone: string;
    adminNotes: string;
}
export interface UserProfile {
    name: string;
}
export enum AdminStatus {
    pending = "pending",
    completed = "completed",
    approved = "approved",
    rejected = "rejected",
    inProgress = "inProgress",
    paused = "paused"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    adminCreateAgentApplication(name: string, phone: string, email: string, age: bigint, location: string, notes: string, status: AdminStatus, adminNotes: string): Promise<AgentApplication>;
    adminCreateInquiry(name: string, phone: string, email: string, policyInterest: string, message: string, status: AdminStatus, adminNotes: string, submittedBy: Principal): Promise<Inquiry>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    deleteAgentApplication(applicationId: bigint): Promise<void>;
    deleteInquiry(inquiryId: bigint): Promise<void>;
    getAll(sort: string | null, reverse: boolean | null): Promise<Array<Inquiry>>;
    getAllAgentApplications(sort: string | null, reverse: boolean | null): Promise<Array<AgentApplication>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getMyInquiries(): Promise<Array<Inquiry>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submit(name: string, phone: string, email: string, policyInterest: string, message: string): Promise<Inquiry>;
    submitAgentApplication(name: string, phone: string, email: string, age: bigint, location: string, notes: string): Promise<AgentApplication>;
    updateAgentApplicationStatus(applicationId: bigint, newStatus: AdminStatus, notes: string | null): Promise<void>;
    updateInquiryStatus(inquiryId: bigint, newStatus: AdminStatus, notes: string | null): Promise<void>;
}
