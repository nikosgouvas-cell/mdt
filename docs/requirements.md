# GI Cancer MDT Web App — Draft Requirements & Questions

## Goals
- Provide a secure web application for the GI cancer MDT workflow.
- Support weekly case intake (every Wednesday), meeting-day decisions, reporting, and analytics.
- Ensure printed forms match uploaded Word templates for new cases and decisions (pixel-perfect output).

## Primary Roles
- **MDT Coordinator (Secretary)**
  - Creates/edits/deletes weekly cases.
  - Generates printable forms/lists.
  - Records and updates MDT decisions.
- **MDT Clinician (Doctor/Member)**
  - Creates/edits cases but cannot edit decisions.
  - Searches and reviews historical cases.
  - Resubmits cases for re-discussion.

## Core Features (Updated)
### Authentication & Access
- Individual user accounts for all MDT members and coordinator.
- Role-based permissions (coordinator vs member).
- Audit trail for edits and decisions.
- Manual admin creation with email invite (organizational emails only).
- GDPR compliance and 20-year record retention.

### Weekly Case Intake
- Create new case for each upcoming MDT (Wednesday).
- Required fields sourced from a **fixed** Word template.
- Ability to print the form **pixel-perfect** using the uploaded Word template.
- Support attachments (imaging, pathology reports, PDFs).
- Support both structured staging (e.g., TNM) **and** free-text where needed.

### MDT Day Decision Capture
- Coordinator can open a case and record/update MDT decisions.
- Decisions are printed **pixel-perfect** using the fixed Word template.

### Upcoming MDT List
- Generate and print list of cases for the upcoming MDT.
- Filters by meeting date and status.

### Search & Reporting
- Advanced search across the full database (doctor, diagnosis, stage, cancer type, date, etc.).
- Allow doctors or coordinator to resubmit cases for re-discussion via search.
- Export/report of search results (PDF/Excel/CSV).

### Analytics & Dashboards
- Stats and charts by doctor, stage, cancer type, timeframe, etc.
- Trend tracking for volume and outcomes.

## KPI Reporting (Defined)
### A. Core GI Cancer MDT KPIs (Must-have 10)
1. **Case readiness (pre-MDT completeness)**
   - KPI: % cases submitted by deadline with minimum dataset complete.
   - Definition: # cases with all required fields populated AND key docs attached / # cases listed for MDT.
   - Target: ≥85% initially → ≥95% mature.
   - Required fields: suspected site, staging summary, ECOG/ASA, key imaging report, histology/cytology (or plan), MDT question.

2. **Deferral rate due to missing information**
   - KPI: % cases deferred because missing imaging/pathology/clinical info.
   - Definition: # deferred for missing info / # discussed.
   - Target: <10% (trending down).

3. **Quorum & specialty attendance**
   - KPI: % meetings achieving quorum; attendance by role.
   - Definition: quorum = minimum roles present (or formally covered): surgeon + radiology + oncology (and pathology for cancer-confirmed cases).
   - Target: ≥95% quorum.

4. **Same-day decision documentation (structured)**
   - KPI: % cases with decision recorded within 24h in structured fields.
   - Definition: # decisions signed off within 24h / # discussed.
   - Target: ≥95%.
   - Structured items: intent (curative/palliative), stage (cTNM), plan, action owner, timeframe.

5. **Decision implementation (“closed loop”)**
   - KPI: % MDT decisions implemented within target timeframe.
   - Definition: # decisions with first action completed within target / # decisions.
   - Target: ≥80% initially → ≥90% mature.
   - Examples of first action: booking surgery, ordering PET/MRI, EUS/ERCP, biopsy, oncology consult, stoma nurse, prehab, referral.

6. **MDT-to-first-action time**
   - KPI: median days from MDT decision → first action.
   - Targets: urgent oncology/HPB obstruction cases median ≤7 days; standard pathway median ≤14 days.

7. **Diagnosis-to-treatment start (pathway timeliness)**
   - KPI: median days from diagnostic confirmation (or index suspicious imaging if no biopsy) → treatment start.
   - Stratify by site: CRC vs oesophago-gastric vs pancreas vs liver/biliary.
   - Use as trend + outlier detection.

8. **Guideline concordance with documented rationale for exceptions**
   - KPI: % concordant decisions; % discordant with justification; % discordant without justification.
   - Target: discordant-without-justification <5%.

9. **Re-discussion within 30 days**
   - KPI: % cases re-discussed within 30 days and reason.
   - Reasons: new imaging, new histology, response assessment, fitness/prehab, patient choice, intraop finding/complication.

10. **Patient-centredness: preference & communication**
   - KPI: % cases with documented patient preference/constraints; % outcomes communicated within X days.
   - Targets: preference ≥60% initially → ≥80% mature; communication ≥90% within 3 working days.

### B. GI-site–specific high-yield add-ons (pick 3–6)
- **Colorectal**
  - Rectal MRI completeness: % with CRM/EMVI/MRF status recorded before decision.
  - Neoadjuvant appropriateness: % locally advanced rectal cancer decisions aligned with agreed pathway.
  - Stoma counselling before APR/low anastomosis: % with stoma nurse/ERAS counselling documented.
- **Oesophago-gastric**
  - Stage-appropriate workup: % with EUS and/or PET-CT before definitive plan.
  - Nutrition & frailty screening: % with MUST/GLIM + prehab referral in curative intent.
- **Pancreas/HPB**
  - Biliary obstruction pathway time: obstructive jaundice referral → decompression/definitive plan.
  - Resectability documentation: % with explicit resectability category recorded.
  - MDT-to-surgery time (resectable): median days.
- **Liver (HCC/CRLM/ICC)**
  - Liver function documentation: Child-Pugh/ALBI recorded when relevant.
  - CRLM strategy clarity: % with documented intent and sequencing.

## Hosting & Integration
- Hosting preference: cloud (Firebase).
- No EHR/HIS integration required initially.
- No external identity provider; use organizational email addresses.

## Open Items / Decisions Needed
- **Template upload workflow:** Where and how the fixed Word template should be uploaded (admin-only upload vs deployment-time configuration).
- **Exact printing implementation:** confirm acceptable technical approach for pixel-perfect rendering (e.g., Word → PDF pipeline with locked templates).
- **Field extraction:** confirm if fields can be auto-extracted from the Word template or need manual mapping.

## Suggested Next Steps
1. Provide the fixed Word templates for new case + decision forms.
2. Confirm upload workflow for templates and pixel-perfect output approach.
3. Define minimum viable workflow (MVP) for intake, printing, and decisions.
4. Build a clickable prototype focusing on form entry and template-accurate printing.
