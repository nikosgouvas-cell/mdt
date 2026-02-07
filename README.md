# mdt

Draft requirements and discovery notes live in `docs/requirements.md`.

## Web app (prototype)

### Requirements
- Node.js 18+

### Setup
```bash
cd web
npm install
npm run dev
```

Then open <http://localhost:5173>.

### Firebase setup
- Copy `web/.env.example` to `web/.env` and paste in your Firebase credentials.
- Follow the step-by-step Firebase setup guide in `docs/setup.md`.

### Notes
- This is a front-end prototype that maps the agreed workflow (roles, case intake, decisions, search, reports).
- Firebase authentication is wired; without credentials the app runs in demo mode.
- Template upload, pixel-perfect Word printing, and full Firebase data wiring will be implemented next.
