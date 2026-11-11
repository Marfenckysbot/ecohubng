# EcoHubNG

EcoHubNG is a static landing page for an eco-solutions marketplace concept.

## Project structure

- `index.html` — root static-hosting entry point.
- `apps/web/index.html` — app/web entry point. It is intentionally kept byte-for-byte in sync with the root page.
- `scripts/validate.mjs` — checks that both entry points remain synchronized and that the expected page sections exist.
- `automations/` and `docs/packages/` — reserved for future project documentation and automation notes.

## Local preview

Open `index.html` in a browser, or run a simple local static server from the repository root.

## External forms

Vendor and service enquiry forms are embedded from Google Forms. Their collection, retention, access permissions and privacy wording are managed in Google Forms, not by this static repository. Verify those settings before collecting real customer or vendor information.

## Current limitations

This repository is a static presentation site. It does not currently provide marketplace accounts, vendor verification, payments, order management, inventory or delivery tracking. Do not describe those services as operational until they are implemented and tested.
