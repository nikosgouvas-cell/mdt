# GI Cancer MDT Web App — Setup Guide (Firebase)

## 1) Create Firebase project
1. Go to Firebase Console → Create Project.
2. Enable **Authentication**, **Firestore**, **Storage**, and **Hosting**.

## 2) Authentication
1. Enable **Email/Password** authentication.
2. Create your first coordinator user (manual admin creation).

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

## 5) Hosting
1. Enable hosting so the app can be deployed later.

## 6) Configure local environment
1. Copy `web/.env.example` to `web/.env`.
2. Paste Firebase config values from Project Settings → General → Your apps.

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
