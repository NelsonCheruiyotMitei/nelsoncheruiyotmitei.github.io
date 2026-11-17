# Nelson Mitei · MEL Consultant portfolio

An interactive portfolio website built with plain HTML, CSS and JavaScript. It has no build step, so GitHub Pages can host it for free exactly as it is.

## What's inside

| File | What it does |
|---|---|
| `index.html` | Page structure (you rarely need to edit this) |
| `assets/js/data.js` | **All your content.** Edit this to change text, projects, jobs, skills, testimonials, certificates and map pins |
| `assets/js/app.js` | Interactivity: Theory of Change, filters, demo dashboard, map, timeline |
| `assets/css/style.css` | Design, colours, dark/light mode |
| `assets/vendor/` | Chart.js and Leaflet, bundled locally so nothing breaks |
| `assets/img/og-image.png` | The picture shown when the link is shared on LinkedIn, WhatsApp etc. |
| `sitemap.xml`, `robots.txt` | Help Google find and index the site |

## Put it live on GitHub Pages (about 10 minutes)

1. Sign in at github.com (or create a free account).
2. Click **New repository**. Name it exactly **`nelsoncheruiyotmitei.github.io`**. Set it to **Public** and click **Create repository**.
3. On the new repo page, click **uploading an existing file**.
4. Unzip this folder on your computer, open it, select **everything inside** (`index.html`, `assets`, `README.md`, `.nojekyll`) and drag it into the upload area. Click **Commit changes**.
   - `.nojekyll` is a hidden file. On Windows, turn on *View → Hidden items*; on Mac, press `Cmd + Shift + .` to see it. If you miss it, the site still works.
5. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
6. Wait 1–2 minutes, then open **https://nelsoncheruiyotmitei.github.io**.

## After it goes live: activate the contact form (one time)

The contact form uses FormSubmit, which needs no account.
1. Open your live site and send yourself a test message through the form.
2. FormSubmit emails **mcmitey@gmail.com** an activation link. Click **Activate Form** (check Spam if you don't see it).
3. Every message after that arrives in your inbox.

## Still open (optional)

- [ ] `links.upwork` in `data.js`: add your Upwork profile URL (hidden until you do)
- [ ] `photo`: upload a photo to `assets/img/` and put its path in `data.js`
- [ ] `skills`: each tool shows its evidence (case studies + certificate); update `evidence` when you earn a new certificate
- [ ] `testimonials`: add more LinkedIn recommendations, copied word for word
- [ ] `kpis`: add baseline years to the `src` lines if you have them (e.g. "DQA scores, 2021 → 2023")
- [ ] After a big content change, update `<lastmod>` in `sitemap.xml`
- [ ] When you fine-tune your CV, replace `assets/Nelson-Mitei-CV.pdf` with a new PDF of the same name

## Privacy rules for images

Images live in `assets/img/gallery/` (WebP format keeps them small; JPG also works) and are listed under `gallery` in `data.js`. Before adding a new one:
- Blur participants' faces unless you have written consent
- Blur client figures unless the client has approved publishing them
- Don't publish recruitment test materials

## Adding a new project later

Copy any block inside `projects: [ ... ]` in `data.js`, paste it below, change the text, and commit. The card, the filters and the skills explorer all update automatically.

## Custom domain (optional)

Buy a domain (e.g. `melgenius.co.ke`), then in **Settings → Pages → Custom domain** enter it and follow GitHub's DNS instructions.

## Note on the demo dashboard

The "Live M&E dashboard demo" uses **synthetic data generated in the browser**. No real client or programme data is included anywhere on the site. Keep it that way: never publish SEMA II, Ajira Digital or any other client dataset.
