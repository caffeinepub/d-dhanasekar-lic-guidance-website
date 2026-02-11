# Specification

## Summary
**Goal:** Prompt users for their mobile number on any site-wide button/link click, then open WhatsApp with a prefilled message containing that number before proceeding.

**Planned changes:**
- Add a site-wide click interception for clickable controls (at minimum: `<button>`, `<a>`, and TanStack Router `<Link>`) to open a mobile-number prompt/modal before the original action runs.
- Implement a mobile-number prompt/modal that validates Indian mobile numbers, prevents re-triggering from interactions inside the modal, and allows cancel/confirm behavior.
- On confirm, generate a WhatsApp `wa.me` link to `9095077994` using the existing WhatsApp link helper (`frontend/src/lib/contactLinks.ts`) with a consistent, URL-encoded prefilled message that includes the entered mobile number; open it in a new tab/window and close the modal.

**User-visible outcome:** When a user clicks any button/link anywhere on the site, they must enter a valid mobile number; after confirming, WhatsApp opens to chat with 9095077994 with a prefilled message containing their number, and the prompt closes.
