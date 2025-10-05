Why we added server.fs.allow

Problem

During development Vite refused to serve `index.html` at the repository root with the error:

"403 Restricted: The request id \"C:/Users/patil/Downloads/pixel-oasis/index.html\" is outside of Vite serving allow list."

Cause

Vite restricts which filesystem paths the dev server can serve for security. The original `vite.config.ts` allowed only `./client` and `./shared`, so the repo root `index.html` was blocked.

Change made

We updated `vite.config.ts` to include the project root in `server.fs.allow`:

fs: {
  allow: [path.resolve(__dirname), path.resolve(__dirname, './client'), path.resolve(__dirname, './shared')],
  deny: ['.env', '.env.*', '*.{crt,pem}', '**/.git/**', 'server/**']
}

This lets Vite serve `index.html` at the repo root during development.

Security notes

- Prefer keeping the allow list as narrow as possible. If you only need `index.html` at the repo root, consider moving it into `client/` or creating a small proxy. Adding the repo root increases the surface of files Vite can serve.
- Keep `deny` configured for secrets and server code (`server/**`) as a safety measure.

How to revert

Replace the `fs.allow` entry with just the directories you want to permit, e.g.:

allow: ['./client', './shared']

How to test

- Install dependencies (pnpm recommended): `pnpm install`
- Run dev server: `pnpm dev`
- Open http://localhost:8080/index.html

If `pnpm` is not available you can use `npm` or `yarn` but the project is configured for `pnpm`.