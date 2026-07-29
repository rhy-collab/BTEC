# Deployment & Operations Reference

**See also**: [[00 - BTEC Project Home]]

---

## Git Workflow

### Quick Push
```bash
cd "/Users/rhys/Downloads/Projects/BTEC AI/BTEC/"
git add .
git commit -m "Descriptive message"
git push origin main
# Vercel auto-redeploys in ~30 seconds
```

### Check Status
```bash
git status
git log --oneline --stat
```

### Remote URL (PAT configured)
```
https://github.com/rhy-collab/BTEC.git
```

---

## Vercel

- **Dashboard**: https://vercel.com/dashboard
- **Team**: rhy-collab
- **Project**: BTEC
- **Auto-deploy**: Enabled (main branch)

### Find Your URL
1. Go to https://vercel.com/dashboard
2. Click BTEC project
3. Copy "Production URL"
4. Format: `https://btec-[random].vercel.app`

### Custom Domain (Optional)
1. Vercel → Settings → Domains
2. Add your domain (e.g., `btec-online.com`)
3. Follow DNS setup instructions
4. 24–48 hours to propagate

---

## GitHub

- **Repository**: https://github.com/rhy-collab/BTEC
- **Access**: PAT-based (saved in password manager)
- **If PAT is lost**: Regenerate at https://github.com/settings/tokens
- **Push protection**: Enabled (GitHub blocks secrets from commits)

---

## Files to Deploy

Only `index.html`, `vercel.json`, and `package.json` are deployed to Vercel. Markdown files are in GitHub for version control.

---

## Quick Links

| Service | URL |
|---------|-----|
| Vercel Dashboard | https://vercel.com/dashboard |
| GitHub Repo | https://github.com/rhy-collab/BTEC |
| PAT Settings | https://github.com/settings/tokens |
| Pearson BTEC | https://qualifications.pearson.com |
| Google Ads | https://ads.google.com |
| Facebook Ads | https://business.facebook.com/ads |

---

## Troubleshooting

### Landing Page Not Updating?
1. `git log --oneline | head -1` — verify push succeeded
2. Check Vercel → Deployments for status
3. Wait 30–60 seconds
4. Hard refresh: Cmd+Shift+R

### Can't Push?
1. `git remote -v` — verify remote URL has PAT
2. If wrong: `git remote set-url origin https://[PAT]@github.com/rhy-collab/BTEC.git`
3. Push again

### Vercel Deployment Failed?
1. Check Vercel → Deployments → Failed deployment logs
2. Usually a syntax error in HTML
3. Fix locally, commit, push again