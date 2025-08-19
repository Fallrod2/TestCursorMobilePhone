# Snake Mobile (Next.js)

A mobile-friendly Snake game built with Next.js and exported as a static site for GitHub Pages.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

You can edit the game in `src/components/SnakeGame.tsx`. The page auto-updates as you edit the file.

## Build and Export Static Site

```bash
npm run build:static
```

This outputs the static site to `out/`.

## Deploy to GitHub Pages

1. Create a GitHub repository and push this project to it.
2. Ensure your default branch is `main`.
3. The workflow at `.github/workflows/deploy.yml` builds and deploys on push to `main`.
4. In your repository Settings → Pages, set Source to “GitHub Actions”.

Your site will be available at `https://<your-user>.github.io/<repo-name>/`.

## TODO

- [ ] Persist best score in `localStorage`
- [ ] Add pause/resume button and improved haptics on eat/over
- [ ] Add PWA manifest for offline play