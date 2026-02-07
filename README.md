# mdt

This repository tracks the GI cancer MDT web application. It includes product requirements plus the initial web UI prototype.

## Requirements
See [`docs/requirements.md`](docs/requirements.md) for the consolidated scope, roles, workflow, and compliance requirements.

## Getting started (web UI prototype)
1. Install dependencies:
   ```bash
   cd apps/web
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Visit the local URL shown in your terminal.

## Next steps you will need to do
- Provide the Word template so we can map the exact fields to the database schema.
- Confirm your preferred hosting stack (Firebase is viable; we can also use a relational database + object storage for complex reporting).
- Confirm the visual styling direction (colors, branding, hospital logo).

## Open decisions
- Finalize the Word template fields to complete the data model.
- Choose the deployment stack for phase 1.
