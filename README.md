# Sawaira Ijaz — Premium Portfolio

Single-page React + Vite personal brand portfolio for **Sawaira Ijaz**, designed around Computer Science, full-stack development, AI/data learning, technical writing and research interests.

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Contact configuration

Open `src/data/content.js` and replace:

```js
email: 'ADD_YOUR_EMAIL_HERE',
whatsapp: 'ADD_YOUR_WHATSAPP_NUMBER_HERE',
```

No real email address or phone number is hard-coded in the project.

## Profile image

The current `public/images/profile.png` is the profile image asset included with this project. Replace it with your preferred original image while keeping the same filename, or update `profileSrc` in `src/App.jsx`.

## CV

`public/Sawaira-Ijaz-CV.pdf` is a real, locally-generated PDF CV included for the download button. Replace it with your latest official CV when desired.

## GitHub Pages

The Vite base is configured for:

`/sawaira-ijaz-portfolio/`

GitHub Actions deployment is in `.github/workflows/deploy.yml`. Push the project to `sa23515193-hash/sawaira-ijaz-portfolio` on the `main` branch and enable GitHub Pages using **GitHub Actions** as the source.

## Content architecture

Most portfolio content is centralized in `src/data/content.js` so projects, experience, skills, certificates and contact configuration can be edited without restructuring the UI.

Certificate cards intentionally do not contain fabricated certificate files or verification URLs. Add original certificate PDFs/links when available.

Project concepts marked **PLANNED / IN PROGRESS** are not presented as completed work.
