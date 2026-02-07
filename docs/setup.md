# GI Cancer MDT Web App — Setup Guide (Firebase)

## 1) Create Firebase project
1. Go to Firebase Console → Create Project.
2. Enable **Authentication**, **Firestore**, **Storage**, and **Hosting**.

## 2) Authentication
1. Enable **Email/Password** authentication.
2. Create your first coordinator user (manual admin creation).
3. In Firestore, create a `users/{uid}` document for each user with:
   - `role`: `coordinator` or `doctor`
   - `email`: organizational email

## 3) Firestore
1. Create a Firestore database (production or test mode).
2. Create the following top-level collections:
   - `users`
   - `cases`
   - `decisions`
   - `templates`
   - `auditLogs`

## 4) Storage
1. Ensure the default storage bucket is enabled.
2. Create folders (optional, for organization):
   - `templates/`
   - `attachments/`
   - `branding/`

## 5) Security rules (recommended)
- Apply the rules in:
  - `firebase/firestore.rules`
  - `firebase/storage.rules`
- These enforce coordinator-only decision/template updates and allow doctors to manage cases.

## 6) Configure local environment
1. Copy `web/.env.example` to `web/.env`.
2. Paste Firebase config values from Project Settings → General → Your apps.
3. `measurementId` is optional (Firebase SDK v7.20.0+).
4. Add template paths and logo URL (download URL from Storage).

## 7) Run the app locally
```bash
cd web
npm install
npm run dev
```

## 8) Template upload workflow (next wiring step)
- The app currently shows buttons for template upload and printing.
- Once templates are uploaded to Storage, we will map each Word field to form inputs.
- Printing will render a pixel-perfect PDF from the template.


### Example template and logo values
```
VITE_TEMPLATE_CASE_PATH=gs://mdt-assistant.firebasestorage.app/OKYpY 1-708 [3-4-25 - Α] (1).docx
VITE_LOGO_URL=<firebase-download-url-for-logo.svg>
```
