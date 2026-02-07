# GI Cancer MDT Web App — Requirements Summary

## Roles & permissions
- **Doctor**: create/edit cases, export/print, view stats.
- **MDT coordinator**: all doctor permissions plus record/edit MDT decisions, delete cases.
- **Admin**: full access including user management.

## Authentication & audit
- Local username/password authentication.
- Full audit logging for create/read/update/delete/print/export actions with timestamp, user, and case ID.

## MDT workflow
- Weekly MDT on Wednesdays.
- Cases are assigned to a specific MDT date and can roll over to later dates.
- Proposed status flow: **Draft → Submitted → Scheduled → Discussed → Closed**.
- MDT decisions are recorded by the coordinator and editable only by the coordinator or admin.

## Forms & templates
- One Word template used for both **new case** and **decision** documents.
- Template upload managed by admin (single active template stored for printing).
- Data fields in the template define the required database schema.
- Output must be available as **Word** and **PDF** with layout matching the template.

## Case data requirements
- Required fields: all clinical fields in the template except MDT decision (completed after discussion).
- Patient identifier: **ID number**.
- Cancer fields include tumor site, stage (e.g., TNM), histology, biomarkers, prior treatments.

## Search, reporting, and exports
- Search filters: doctor, stage, cancer type, date range, outcome, and other relevant fields.
- Export formats: CSV, Excel, PDF.
- Reporting: dashboards plus audit-friendly printouts of search results.

## Analytics
- Metrics: cases by doctor, cancer type, stage, outcomes, time-to-decision.
- Filters by date range and MDT week.
- Chart drill-down to underlying cases.
- Analytics should support anonymized views.

## Compliance & retention
- GDPR compliance.
- Data retained indefinitely.
- Analytics should anonymize patient identifiers.

## Hosting & integrations
- Cloud-first deployment.
- Firebase is an acceptable initial platform (Auth, Firestore, Cloud Storage, Functions, and Hosting).
- Alternative: a relational database + object storage if you need complex reporting at scale.
- No current data migration.
- Future integrations possible (PACS/pathology/EHR).
