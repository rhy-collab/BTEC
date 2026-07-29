# BTEC Deployment Credentials & URLs

⚠️ **KEEP THIS SECURE - SAVE TO PASSWORD MANAGER**

---

## GitHub PAT (Personal Access Token)

⚠️ **Your PAT was provided separately. Save it to your password manager NOW.**

**Repository**: https://github.com/rhy-collab/BTEC

**What it does**: Allows you to push code directly to GitHub without entering username/password

**Permissions**: Full repo access (public and private)

**Store in**: 
- [ ] 1Password
- [ ] LastPass
- [ ] Bitwarden
- [ ] Your password manager of choice

**DO NOT commit this PAT to any repository (GitHub will block it automatically)**

**To regenerate if lost**: 
1. Go to https://github.com/settings/tokens
2. Click "Generate new token"
3. Select scopes: `repo` (full repo access)
4. Create and save securely

---

## Vercel Deployment

### Landing Page (Live Now)

**URL**: Check your Vercel dashboard at https://vercel.com/rhy-collab-projects

**Status**: Live and auto-deployed

**How it works**: 
1. You push to `main` branch on GitHub
2. Vercel automatically detects the change
3. Your site redeplooys in ~30 seconds
4. No manual deployment needed

**To view your live site**: 
- Go to https://vercel.com
- Click on the BTEC project
- Look for "Production URL" or "Visit"

### Custom Domain (Optional)

If you want `btec-online.com` or similar:
1. Go to Vercel dashboard → BTEC project → Settings → Domains
2. Add your domain
3. Point your domain registrar DNS to Vercel's nameservers
4. Wait 24-48 hours for DNS to propagate

---

## GitHub Push Command (For Future Reference)

```bash
cd /path/to/BTEC
git add .
git commit -m "Your message here"
git push origin main
```

The PAT is already configured in the remote, so this will work without prompting.

---

## What's Currently Deployed

✅ **Landing page** (`index.html`) — Live on Vercel  
✅ **Strategic docs** (all `.md` files) — In GitHub repo  
✅ **Configuration files** (`vercel.json`, `package.json`) — Deployed  

**Files in GitHub**:
- `index.html` — Landing page
- `vercel.json` — Vercel config
- `package.json` — Project metadata
- `DEPLOYMENT.md` — Deployment guide
- `btec-website-super-prompt.md` — Phase 1 strategy (20k words)
- `PHASE-1-MARKET-VALIDATION-OBSIDIAN.md` — Obsidian version (18k words)
- `PHASE-1-AT-A-GLANCE.md` — One-page reference
- `BTEC_Landing_Page_Summary.md` — Landing page overview
- `ai-native-btec-online-school-super-prompt.md` — Business thesis
- `hermes-btec-ai-project-super-prompt.md` — Hermes project

---

## Vercel Dashboard

**URL**: https://vercel.com/dashboard

**What to look for**:
- Production URL (your live site)
- Recent deployments (auto-triggered on GitHub push)
- Domain settings (if you add custom domain)
- Analytics (traffic, performance, geographic data)
- Environment variables (if needed later)

---

## Quick Verification

✅ **GitHub**: All commits pushed successfully  
✅ **Vercel**: Project auto-detects GitHub changes  
✅ **Landing page**: Live and responsive  
✅ **Auto-deploy**: Enabled (push to `main` = auto-redeploy)  

---

## Next Phase 1 Steps

Once you're ready to launch ads and gather leads:

1. **Record sample lesson** (8-10 mins on Unit 1, Business Environment)
2. **Set up form tracking** (add UTM params to landing page if desired)
3. **Create ad accounts** (Google Ads, Facebook Ads, LinkedIn Ads)
4. **Launch ads** in six test markets (UK, Dubai, Singapore, HK, Nairobi, KL)
5. **Create tracking spreadsheet** (lead source, geography, booked calls, outcomes)
6. **Start consultation calls** (15-min listening calls, log everything)

---

## Support & Next Steps

- **Vercel docs**: https://vercel.com/docs
- **GitHub docs**: https://docs.github.com
- **BTEC info**: https://qualifications.pearson.com
- **Your super-prompts**: All in `/home/claude/BTEC/` and GitHub repo

---

**Everything is live. You're ready to go.**

Save this document to your password manager and start Phase 1.
