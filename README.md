# AUTOSHINE Detailing & Spray Painting

Interactive 3D website for AUTOSHINE Detailing & Spray Painting — car detailing business site featuring a morphing glass 3D shape (polymorphism) and a full glassmorphism UI.

## Stack

- Vite + React 19 + TypeScript
- Three.js via React Three Fiber (@react-three/drei, @react-three/postprocessing)
- Tailwind CSS v4
- Framer Motion
- Lucide icons

## Features

- **Polymorphism hero** — a real-time morphing 3D glass object (Globe → Prism → Octa → Nova → Gear) driven by time and scroll position, rendered with transmission/refraction materials, bloom and vignette postprocessing
- **Glassmorphism UI** — frosted-glass navbar, hero, service cards, stats and contact panel with backdrop blur
- Sections: Hero, Services (Interior, Exterior, Spray Painting, Ceramic Coating), Contact (WhatsApp booking form)

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Customize

- Business contact details: `src/components/Nav.tsx` → `CONTACT` object
- Morph shapes / colors: `src/three/shapes.ts`
- Services list: `src/components/Services.tsx`

## Deploy

Static site (no server required) — works with Vercel, Netlify, or GitHub Pages.

```bash
npm run build
```
