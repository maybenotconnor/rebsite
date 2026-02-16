# Rebecca May Ristow — Portfolio Site

Portfolio website for Rebecca May Ristow, built with [Astro](https://astro.build) and Tailwind CSS.

## Project Structure

```
src/
├── assets/                  # All images (headshot, project photos)
├── components/
│   ├── Card.astro           # Project card (used in portfolio grid)
│   ├── Footer.astro         # Site footer (email, social links)
│   ├── Header.astro         # Navigation bar
│   └── Hero.astro           # Hero component (currently unused)
├── content/
│   ├── projects/            # Portfolio project entries (markdown)
│   └── settings/            # Site configuration (JSON)
├── layouts/
│   └── Layout.astro         # Base page layout
├── pages/
│   ├── index.astro          # Home page
│   ├── about.astro          # About page
│   ├── portfolio.astro      # Portfolio grid page
│   ├── resume.astro         # Resume page (PDF embed + download)
│   └── project/
│       └── [...slug].astro  # Individual project detail page
└── scripts/
    └── config.ts
public/
└── resume.pdf               # Downloadable resume
```

## How to Change Content

### Site Name, Description & SEO

Edit `src/content/settings/general.json`:

```json
{
  "title": "R.M. Ristow",
  "description": "Rebecca May Ristow — Theatre Artist & Administrator",
  "keywords": ["theatre", "portfolio", ...]
}
```

### Social Links (Footer)

Edit `src/content/settings/footer.json`:

```json
{
  "socials": [
    { "target": "_blank", "name": "Instagram", "link": "https://instagram.com/yourhandle" },
    { "target": "_blank", "name": "LinkedIn", "link": "https://linkedin.com/in/yourprofile" }
  ]
}
```

The email address in the footer is hardcoded in `src/components/Footer.astro`.

### Portfolio Tags

Edit `src/content/settings/project.json`:

```json
{
  "project_tags": ["Theatre", "Film"]
}
```

### Adding or Editing a Project

Each project is a markdown file in `src/content/projects/`. Create a new `.md` file or edit an existing one.

**Frontmatter fields:**

| Field      | Required | Description                                          |
|:-----------|:---------|:-----------------------------------------------------|
| `title`    | Yes      | Project name                                         |
| `image`    | Yes      | Cover image path (relative to `src/`, e.g. `assets/hartford-stage-1.jpg`) |
| `gallery`  | No       | Array of additional image paths for the detail page   |
| `date`     | Yes      | Date or date range as a string (e.g. `"2024"`, `"2023-2025"`) |
| `tag`      | Yes      | Array of tags (e.g. `["Theatre"]` or `["Film"]`)      |
| `location` | No       | Location (e.g. `Hartford, CT`)                        |
| `role`     | No       | Role on the project (e.g. `Assistant Director`)       |
| `credit`   | No       | Photo/credit attribution                              |
| `link`     | No       | External link object with `text` and `url` fields     |

**Example project file** (`src/content/projects/my-project.md`):

```markdown
---
tag:
  - Theatre
title: My New Project
image: assets/my-project-cover.jpg
gallery:
  - assets/my-project-2.jpg
  - assets/my-project-3.jpg
date: "2025"
location: Hartford, CT
role: Director
credit: "Photos By: Jane Doe"
link:
  text: Watch the trailer
  url: https://youtube.com/watch?v=example
---

Description of the project goes here. This is rendered as markdown on the
project detail page.
```

The body text (below the `---`) is the project description shown on the detail page.

### Adding Project Images

1. Place image files in `src/assets/` using the naming convention `{project-slug}-{n}.jpg`
2. Reference them in the project's frontmatter under `image` (cover) and `gallery` (additional)
3. Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

### Editing the Home Page

The home page content (hero text, bio paragraphs) is in `src/pages/index.astro`. Edit the HTML directly.

### Editing the About Page

The about page content is in `src/pages/about.astro`. Edit the paragraph text directly in the file.

### Updating the Resume

Replace `public/resume.pdf` with a new PDF file. The resume page embeds this PDF and provides a download link.

### Navigation

Nav links are defined in `src/components/Header.astro` in the `navLinks` array. Add or remove entries there.

## Commands

All commands are run from the root of the project:

| Command            | Action                                       |
|:-------------------|:---------------------------------------------|
| `bun install`      | Install dependencies                         |
| `bun run dev`      | Start local dev server at `localhost:4321`    |
| `bun run build`    | Build production site to `./dist/`            |
| `bun run preview`  | Preview the build locally before deploying    |

## Deployment

The site builds to static HTML in `dist/` and is designed to be served with nginx.

### Build

```sh
bun run build
```

### nginx Configuration

```nginx
server {
    listen 80;
    server_name rmristow.com www.rmristow.com;

    root /var/www/rmristow.com/dist;
    index index.html;

    location / {
        try_files $uri $uri/ $uri.html =404;
    }

    # Cache static assets
    location ~* \.(css|js|jpg|jpeg|png|webp|svg|woff2?)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    error_page 404 /404.html;
}
```

Copy the built `dist/` directory to your server and point nginx at it. For HTTPS, add your SSL config or use certbot.
