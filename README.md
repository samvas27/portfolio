# Samuel Vasington — Engineering Portfolio

Responsive, minimalist portfolio with editable content and **locally hosted media**. No framework, account, or subscription required.

## Preview

Open `index.html` in your browser. For a local server, run `python3 -m http.server 8000` in this folder and open http://localhost:8000.

## Edit projects and text

All website content lives in **`content.js`**. Each project has `title`, `category`, `year`, `subtitle`, `description` (paragraphs), and `images` (image/video paths). Move project entries to reorder them. The first image is used as the project's main thumbnail and hero; later media is shown in its gallery. Put added images in `assets/images/<project-folder>/` and enter paths relative to `index.html`. To add a video, enter its `.mp4` path in `images` after the cover.

Edit the `resume` and `linkedin` fields in `content.js` to enable those links. Modify visual design in `style.css`. Project detail pages and filtering are built by `script.js`.

## Missing image uploads

No media was provided for **Jigs and Manufacturing** or **Piston**. These project entries have empty image arrays until new media is provided. Resume and LinkedIn direct links also remain unset.

## Publishing

Upload the *contents* of this folder to Netlify Drop, GitHub Pages, or Cloudflare Pages. All included images and videos are hosted alongside the website, with no external image dependency.
