# Specification

## Summary
**Goal:** Add the provided Google AdSense loader script to the global HTML `<head>` so it loads on every route/page of the React SPA.

**Planned changes:**
- Insert the exact provided Google AdSense `<script async ...>` tag into `frontend/index.html` inside the `<head>`.

**User-visible outcome:** After deployment, the page source for all routes includes the AdSense loader script in the document `<head>` (with no other UI or markup changes).
