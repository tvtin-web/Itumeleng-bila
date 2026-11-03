# YETS website

Marketing site for Youth Empowerment Training Solutions (YETS). Built with
[Astro](https://astro.build) as a static site and deployed to Cloudflare Workers (static assets).

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview
```

## Structure

- `src/pages/` — `index.astro` (Home), `services.astro`
- `src/components/` — `Header`, `Footer`, `CtaBand`, `ServiceCard`
- `src/data/services.ts` — the six services (edit copy here)
- `src/styles/global.css` — colour and type tokens, buttons, shared grid
- `public/` — static files served as-is

## Deploy (Cloudflare Workers Builds)

| Setting        | Value               |
| -------------- | ------------------- |
| Build command  | `npm run build`     |
| Deploy command | `npx wrangler deploy` |
| Root directory | `/`                 |

`wrangler.jsonc` serves `./dist` as static assets.

## Placeholders still to fill

Contact email, phone/WhatsApp, social links, hero photo, logo, testimonials and impact stories are marked in
square brackets. The "Book a training", "Reserve a seat" and quote buttons currently scroll to `#contact`; wire them
to a form or booking link when one exists.
