// ============================================================
//  shadcn/ui Setup Guide — Vite + React (JavaScript)
// ============================================================

// PREREQUISITES
// - Node.js installed
// - Vite + React project (plain JavaScript)
// - Tailwind CSS configured

// ─────────────────────────────────────────────
// STEP 1 — Create jsconfig.json in project root
// ─────────────────────────────────────────────
jsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}

// ─────────────────────────────────────────────
// STEP 2 — Initialize shadcn/ui (Run this command in your terminal)
// ─────────────────────────────────────────────
npx shadcn@latest init

// ─────────────────────────────────────────────
// STEP 3 — Update vite.config.js
// ─────────────────────────────────────────────
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
// ─────────────────────────────────────────────

// ─────────────────────────────────────────────
// STEP 3 — Add components
// ─────────────────────────────────────────────
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add dialog
npx shadcn@latest add badge

// Components are copied into: src/components/ui/



// ─────────────────────────────────────────────
// STEP 4 — Use a component in your app
// ─────────────────────────────────────────────
import { Button } from "@/components/ui/button";

export default function App() {
  return <Button>Click me</Button>;
}

// ─────────────────────────────────────────────
//  IMPORTANTS NOTES
// ─────────────────────────────────────────────
// - shadcn/ui is NOT a package. It copies component
//   source code directly into your project.
// - You can freely edit files inside src/components/ui/.
// - Tailwind CSS must be set up before running init.
// - Full component list: https://ui.shadcn.com/docs/components
