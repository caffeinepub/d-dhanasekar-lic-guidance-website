import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Iter "mo:core/Iter";
import Nat "mo:core/Nat";
import Int "mo:core/Int";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";



actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // ===================== Admin/Status Extensions =========================

  type AdminStatus = {
    #pending;
    #inProgress;
    #completed;
    #approved;
    #rejected;
    #paused;
  };

  module AdminStatus {
    public func compare(lhs : AdminStatus, rhs : AdminStatus) : Order.Order {
      let toNum = func(status : AdminStatus) : Nat {
        switch (status) {
          case (#pending) { 0 };
          case (#inProgress) { 1 };
          case (#completed) { 2 };
          case (#approved) { 3 };
          case (#rejected) { 4 };
          case (#paused) { 5 };
        };
      };

      let lVal = toNum(lhs);
      let rVal = toNum(rhs);
      Nat.compare(lVal, rVal);
    };
  };

  // ============== Inquiry Expansion ====================

  type Inquiry = {
    name : Text;
    phone : Text;
    email : Text;
    policyInterest : Text;
    message : Text;
    createdAt : Int;
    id : Nat;
    submittedBy : Principal;
    status : AdminStatus;
    statusTimestamps : [(AdminStatus, Int)];
    adminNotes : Text;
    lastUpdated : Int;
  };

  module Inquiry {
    public func compareByCreatedAt(lhs : Inquiry, rhs : Inquiry) : Order.Order {
      Int.compare(lhs.createdAt, rhs.createdAt);
    };

    public func compareByStatus(lhs : Inquiry, rhs : Inquiry) : Order.Order {
      AdminStatus.compare(lhs.status, rhs.status);
    };
  };

  let inquiryDb = Map.empty<Nat, Inquiry>();
  var inquiryIndex = 0;

  public shared ({ caller }) func submit(
    name : Text,
    phone : Text,
    email : Text,
    policyInterest : Text,
    message : Text,
  ) : async Inquiry {
    let inquiry : Inquiry = {
      name;
      phone;
      email;
      policyInterest;
      message;
      createdAt = Time.now();
      id = inquiryIndex;
      submittedBy = caller;
      status = #pending;
      statusTimestamps = [(#pending, Time.now()) : (AdminStatus, Int)];
      adminNotes = "";
      lastUpdated = Time.now();
    };
    inquiryDb.add(inquiryIndex, inquiry);
    inquiryIndex += 1;
    inquiry;
  };

  public shared ({ caller }) func getAll(sort : ?Text, reverse : ?Bool) : async [Inquiry] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all inquiries");
    };

    var inquiries = inquiryDb.values().toArray();

    switch (sort) {
      case (?"status") {
        inquiries := inquiries.sort(
          func(a, b) { Inquiry.compareByStatus(a, b) }
        );
      };
      case (_) {
        // Default to createdAt sorting
        inquiries := inquiries.sort(
          func(a, b) { Inquiry.compareByCreatedAt(a, b) }
        );
      };
    };

    switch (reverse) {
      case (?true) { inquiries := inquiries.reverse() };
      case (_) {};
    };

    inquiries;
  };

  public query ({ caller }) func getMyInquiries() : async [Inquiry] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view their inquiries");
    };
    inquiryDb.values().filter(
      func(inquiry) { inquiry.submittedBy == caller }
    ).toArray();
  };

  // -------- Inquiry Extended Admin Flow --------------

  public shared ({ caller }) func updateInquiryStatus(
    inquiryId : Nat,
    newStatus : AdminStatus,
    notes : ?Text,
  ) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can update status of inquiries");
    };

    switch (inquiryDb.get(inquiryId)) {
      case (null) {
        Runtime.trap("No inquiry found with ID: " # inquiryId.toText());
      };
      case (?existingInquiry) {
        let updated : Inquiry = {
          existingInquiry with
          status = newStatus;
          statusTimestamps = existingInquiry.statusTimestamps.concat([(newStatus, Time.now())]);
          adminNotes = switch (notes) { case (?n) { n }; case (null) { existingInquiry.adminNotes } };
          lastUpdated = Time.now();
        };
        inquiryDb.add(inquiryId, updated);
      };
    };
  };

  public shared ({ caller }) func deleteInquiry(inquiryId : Nat) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can delete inquiries");
    };
    inquiryDb.remove(inquiryId);
  };

  public shared ({ caller }) func adminCreateInquiry(
    name : Text,
    phone : Text,
    email : Text,
    policyInterest : Text,
    message : Text,
    status : AdminStatus,
    adminNotes : Text,
    submittedBy : Principal,
  ) : async Inquiry {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can create inquiries");
    };

    let inquiry : Inquiry = {
      name;
      phone;
      email;
      policyInterest;
      message;
      createdAt = Time.now();
      id = inquiryIndex;
      submittedBy;
      status;
      statusTimestamps = [(status, Time.now())];
      adminNotes;
      lastUpdated = Time.now();
    };
    inquiryDb.add(inquiryIndex, inquiry);
    inquiryIndex += 1;
    inquiry;
  };

  // ============== Agent Application Expansion ==========

  type AgentApplication = {
    name : Text;
    phone : Text;
    email : Text;
    age : Nat;
    location : Text;
    notes : Text;
    createdAt : Int;
    id : Nat;
    status : AdminStatus;
    statusTimestamps : [(AdminStatus, Int)];
    adminNotes : Text;
    lastUpdated : Int;
  };

  module AgentApplication {
    public func compareByCreatedAt(lhs : AgentApplication, rhs : AgentApplication) : Order.Order {
      Int.compare(lhs.createdAt, rhs.createdAt);
    };

    public func compareByStatus(lhs : AgentApplication, rhs : AgentApplication) : Order.Order {
      AdminStatus.compare(lhs.status, rhs.status);
    };
  };

  let agentApplicationDb = Map.empty<Nat, AgentApplication>();
  var applicationIndex = 0;

  public shared ({ caller }) func submitAgentApplication(
    name : Text,
    phone : Text,
    email : Text,
    age : Nat,
    location : Text,
    notes : Text,
  ) : async AgentApplication {
    let application : AgentApplication = {
      name;
      phone;
      email;
      age;
      location;
      notes;
      createdAt = Time.now();
      id = applicationIndex;
      status = #pending;
      statusTimestamps = [(#pending, Time.now()) : (AdminStatus, Int)];
      adminNotes = "";
      lastUpdated = Time.now();
    };
    agentApplicationDb.add(applicationIndex, application);
    applicationIndex += 1;
    application;
  };

  // ---- Agent Application Extended Admin Flow --------------

  public shared ({ caller }) func updateAgentApplicationStatus(
    applicationId : Nat,
    newStatus : AdminStatus,
    notes : ?Text,
  ) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can update status of applications");
    };

    switch (agentApplicationDb.get(applicationId)) {
      case (null) {
        Runtime.trap("No application found with ID: " # applicationId.toText());
      };
      case (?existingApplication) {
        let updated : AgentApplication = {
          existingApplication with
          status = newStatus;
          statusTimestamps = existingApplication.statusTimestamps.concat([(newStatus, Time.now())]);
          adminNotes = switch (notes) { case (?n) { n }; case (null) { existingApplication.adminNotes } };
          lastUpdated = Time.now();
        };
        agentApplicationDb.add(applicationId, updated);
      };
    };
  };

  public shared ({ caller }) func deleteAgentApplication(applicationId : Nat) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can delete applications");
    };
    agentApplicationDb.remove(applicationId);
  };

  public shared ({ caller }) func adminCreateAgentApplication(
    name : Text,
    phone : Text,
    email : Text,
    age : Nat,
    location : Text,
    notes : Text,
    status : AdminStatus,
    adminNotes : Text,
  ) : async AgentApplication {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can create applications");
    };

    let application : AgentApplication = {
      name;
      phone;
      email;
      age;
      location;
      notes;
      createdAt = Time.now();
      id = applicationIndex;
      status;
      statusTimestamps = [(status, Time.now())];
      adminNotes;
      lastUpdated = Time.now();
    };
    agentApplicationDb.add(applicationIndex, application);
    applicationIndex += 1;
    application;
  };

  public shared ({ caller }) func getAllAgentApplications(sort : ?Text, reverse : ?Bool) : async [AgentApplication] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view agent applications");
    };

    var applications = agentApplicationDb.values().toArray();

    switch (sort) {
      case (?"status") {
        applications := applications.sort(
          func(a, b) { AgentApplication.compareByStatus(a, b) }
        );
      };
      case (_) {
        // Default to createdAt sorting
        applications := applications.sort(
          func(a, b) { AgentApplication.compareByCreatedAt(a, b) }
        );
      };
    };

    switch (reverse) {
      case (?true) { applications := applications.reverse() };
      case (_) {};
    };

    applications;
  };
};

