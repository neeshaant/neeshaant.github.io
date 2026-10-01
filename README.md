# neeshaant.github.io

Portfolio of **Nishant Tripathi**, QA Engineer. Live at **https://neeshaant.github.io**

Plain HTML, CSS and JavaScript — no framework, nothing to compile. Every push to `main`
is tested and deployed automatically by GitHub Actions.

## Project layout

```
.
├── index.html                  # page structure
├── assets/
│   ├── css/style.css           # colours, fonts, layout
│   ├── js/data.js              # ← ALL editable content lives here
│   ├── js/main.js              # renders data.js into the page
│   ├── img/nishant.jpeg        # profile photo
│   └── Nishant_Tripathi_Resume.pdf
├── favicon.svg, site.webmanifest, robots.txt, sitemap.xml, .nojekyll
├── scripts/check-site.mjs      # pre-deploy checks
└── .github/workflows/deploy.yml
```

## Editing content

Open `assets/js/data.js`.

- **Growth** (certifications) → add objects to `GROWTH`
- **Build** (projects / frameworks) → add objects to `BUILD`
- Stack, work history and key projects → `STACK`, `ROLES`, `PROJECTS`

```js
const GROWTH = [
  { kind: 'Certification', title: 'Postman API Fundamentals Expert',
    description: 'Collections, tests, environments and request chaining.',
    tags: ['Postman', '2024'], url: 'https://...' },
];
```

While a list is empty, the section shows "pending…" placeholder cards.
Required fields: `kind` and `title`. `url` is optional and must start with `https://`.

To replace the resume, overwrite `assets/Nishant_Tripathi_Resume.pdf` keeping the same name.

## First-time setup (once)

1. On GitHub, create a **public** repository named exactly **`neeshaant.github.io`**
   under the account **`neeshaant`**.
2. Push this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/neeshaant/neeshaant.github.io.git
   git push -u origin main
   ```
3. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Repo → **Actions** tab → re-run the first workflow if it ran before step 3.

After that, every `git push` to `main` updates the site in about a minute.

## CI/CD pipeline

| Trigger | What runs |
|---|---|
| Push to `main` | Validate & build → Deploy to GitHub Pages |
| Pull request to `main` | Validate & build only (no deploy) |
| Manual (Actions → Run workflow) | Validate & build → Deploy |

The **Validate & build** job runs `npm test`, which fails the pipeline (and blocks the
deploy) if any of these break:

- JavaScript syntax in `data.js` / `main.js`
- A file referenced in `index.html` is missing (image, CSS, resume…)
- An in-page link like `#growth` has no matching section
- An entry in `data.js` is missing a required field, or has a bad URL
- HTML validation errors (`html-validate`)

## Run locally

```bash
npm install
npm test        # run the same checks as CI
npm start       # preview at http://localhost:3000
```
