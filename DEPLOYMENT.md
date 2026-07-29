# Deploying BTEC Online to Vercel

## Quick Start (5 minutes)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Add landing page and Vercel config"
git push origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository (rhy-collab/BTEC)
4. Vercel will detect the settings automatically
5. Click "Deploy"

Your landing page will be live in ~30 seconds.

## What Gets Deployed

- `index.html` - Your landing page
- `vercel.json` - Vercel configuration
- `package.json` - Project metadata

## After Deployment

Your site will be available at:
```
https://btec-[random-string].vercel.app
```

To use a custom domain:
1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain (e.g., btec-online.com)
3. Point your domain DNS to Vercel's nameservers

## Features

- **Fully responsive** - Looks great on mobile, tablet, desktop
- **Fast** - Static HTML, no build process
- **SEO-optimized** - Meta tags and semantic HTML included
- **Accessible** - WCAG standards followed
- **Modern design** - Gradient hero, smooth interactions, professional styling

## Making Changes

1. Edit `index.html` locally
2. Test in your browser
3. Push to GitHub: `git add . && git commit -m "Update landing page" && git push`
4. Vercel auto-deploys within seconds

## Analytics (Optional)

Add Google Analytics by inserting this before `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

## Need Help?

- Vercel docs: https://vercel.com/docs
- BTEC info: Check the super-prompt files
- Pearson BTEC: https://qualifications.pearson.com
