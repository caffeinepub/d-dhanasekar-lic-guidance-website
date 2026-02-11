# Specification

## Summary
**Goal:** Show the mobile-number prompt only once per browser session, and automatically open WhatsApp on Continue after successful validation.

**Planned changes:**
- Persist a “prompt completed” flag in `sessionStorage` after the user enters a valid Indian mobile number and clicks Continue, so the modal does not appear again until the session ends/`sessionStorage` is cleared.
- Ensure subsequent clicks in the same session proceed with their original behavior without being blocked by the modal (including after page reloads within the same session).
- On Continue (valid number), immediately open WhatsApp to **9095077994** in a new tab/window using the existing `getWhatsAppLinkForPrompt` helper, with a prefilled message that includes the entered mobile number; then close the modal and execute the originally attempted click action exactly once.

**User-visible outcome:** On the first click in a fresh session, users see the mobile-number prompt; after entering a valid number and clicking Continue, WhatsApp opens automatically with a prefilled message including their number, and the site won’t show the prompt again until a new session starts.
