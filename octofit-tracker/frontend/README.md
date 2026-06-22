# OctoFit Tracker Frontend

## Requirements

- Node.js with npm
- VITE_CODESPACE_NAME environment variable for Codespaces deployment

## Environment Variables

Create a `.env.local` file in the frontend directory:

```
VITE_CODESPACE_NAME=your-codespace-name
```

If not set, the app will fall back to `localhost:8000`.

## Running the App

```bash
npm install
npm run dev
```

The app will run on `http://localhost:5173`

## Building for Production

```bash
npm run build
```
