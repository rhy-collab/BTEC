# UK BTEC Online — Website Expansion Plan

Based on thorough analysis of Crimson Global Academy (CGA) and current BTEC site.

## Current State

| Aspect | Current BTEC | Crimson Global Academy |
|--------|-------------|----------------------|
| Pages | 2 (index.html, visa.html) | 35+ pages |
| Footer links | ~8 | ~26 links, social icons, region selector |
| CTAs | ~6 mailto links | ~20 buttons, links, forms |
| Forms | None | Multi-step enquiry form |
| Media | 7 static images | Video gallery, testimonial carousel, logo carousel |
| Accreditation display | Small footer logos | Full-width logo carousel strip |
| Subject detail | None | Individual subject pages with teacher profiles |
| Content format | Text blocks | Cards, tabs, carousels, accordions, stats |

---

## Phase 1 — New Pages (Build the Information Architecture)

CGA has 35+ pages across Discover, Academics, Admissions, and Beyond the Classroom sections. BTEC needs a comparable structure.

### 1.1 About Us Section (3 new pages)

| Page | File | What to cover |
|------|------|--------------|
| **Welcome / About Us** | `about.html` | Mission, story of why Rhys started UK BTEC Online, what makes it different, teaching philosophy (written reports over exams, international focus). Include a photo of Rhys. |
| **Our Teachers** | `teachers.html` | Rhys Coombes profile expanded. Add placeholder profiles for future teachers. Crimson has a full `/about/teachers` page. |
| **Why Choose BTEC** | `why-btec.html` | In-depth comparison: BTEC vs A-levels vs IB vs other quals. Detail the written-report model, why 95% Distinction rate is possible, how feedback cycles work. |

### 1.2 Curriculum Section (2 new pages)

| Page | File | What to cover |
|------|------|--------------|
| **Curriculum Overview** | `curriculum.html` | The 2-year BTEC Business programme in detail. Module breakdown: what each unit covers. Assessment criteria. How reports are graded. Similar to Crimson's `/ae/curriculum`. |
| **Sample Lesson / Free Taster** | `taster.html` | Embed a sample lesson video (recorded by Rhys, YouTube unlisted). Booking CTA. What to expect in a lesson. Class size, teaching style, homework policy. |

### 1.3 University & Outcomes Section (2 new pages)

| Page | File | What to cover |
|------|------|--------------|
| **University Destinations** | `universities.html` | Expand the current Russell Group grid. Add acceptance data, student testimonials per university, entry requirements. Like Crimson's `/ae/outcomes`. |
| **Student Outcomes** | `outcomes.html` | Detailed stats: 95% Distinction rate, 95% university acceptance, 7+ years teaching. Add success stories (even if anonymised). |

### 1.4 Admissions Section (2 new pages)

| Page | File | What to cover |
|------|------|--------------|
| **How to Enrol** | `enrol.html` | Step-by-step process: free consultation → enrolment → induction → start. Like Crimson's `/ae/admissions/admissions-criteria-and-process`. Payment options, entry requirements (age 16+, English level). |
| **Fees & Scholarships** | `fees.html` | Detailed pricing. Payment plans. Any discounts for siblings or early enrolment. Like Crimson's `/ae/admissions/fees-and-scholarships`. |

### 1.5 Resources Section (1 new page)

| Page | File | What to cover |
|------|------|--------------|
| **Blog / Resources** | `blog.html` | Articles about: "What is BTEC?", "Written reports vs exams", "Russell Group university guide", "How to apply to UK universities with BTEC", "International student visa guides" for each country. |

### 1.6 Legal & Contact Pages (3 new pages)

| Page | File | What to cover |
|------|------|--------------|
| **Contact Us** | `contact.html` | Full contact form (Formspree or Web3Forms), email, phone, Dubai location. Like Crimson's `/ae/contact-us`. |
| **Privacy Policy** | `privacy.html` | GDPR-compliant privacy policy for a UK online school serving international students. |
| **Terms of Service** | `terms.html` | Terms for enrolment, payment, cancellation, refunds. |

**Total new pages:** 13

---

## Phase 2 — index.html Content Expansion (Deepen Existing Sections)

CGA's homepage has far richer content than BTEC's. These additions go in `index.html`.

### 2.1 Urgency / Countdown Banner
Add an announcement bar at top of page (like Crimson's "1 week left to enrol!"):
- "Enrolling Now — September Cohort Starting Soon" or "Limited Places Available — Enquire Today"
- Styled as a thin gold/amber banner above the nav

### 2.2 Accreditation Strip
Replace small footer logos with a **full-width logo carousel/strip** right below or inside the trust bar:
- Pearson Edexcel, Ofqual, Cambridge Assessment
- Show logos in a horizontal scrollable strip with faded edges
- Like Crimson's "OUR QUALIFICATIONS AND ACCREDITATIONS" section

### 2.3 "How It Works" Expandable Steps
The current "How It Works" is a bullet list + image. Upgrade to:
- 6 visual step cards with circular step numbers
- Each step: icon, title, 2-line description
- Steps: Free Consultation → Enrol → Receive Assignments → Draft & Feedback → Submit → University Acceptance
- Like Crimson's community section cards

### 2.4 Community / Student Types Section
Add a section like Crimson's "Explore the Community" with 3-4 audience personas:

| Tab | Message | Image |
|-----|---------|-------|
| **Exam-Anxious Students** | "If exams make you freeze, written reports are your path to success" | Student photo |
| **International Families** | "Study from anywhere — Dubai, Hong Kong, Singapore, Nairobi, London" | World map / globe |
| **Aspiring Entrepreneurs** | "Business BTEC is the perfect foundation for starting your own company" | Student working |
| **Late Starters** | "Didn't get the A-levels you wanted? BTEC is a fresh start to university" | Student photo |

### 2.5 University Success Stories Tab Section
Like Crimson's stat tabs but with university focus:
- Tab 1: Russell Group (Cambridge, Warwick, Manchester, etc.)
- Tab 2: Australian (Melbourne, Sydney, UNSW, etc.)
- Tab 3: Global (Canada, US, Europe, UAE)
Each tab shows: university logos, entry requirements, number of students accepted

### 2.6 "Why CGA For Your Child?" Equivalent
Add a dual-column "Why Choose UK BTEC Online?" section:
- Left: "How It Works" (live lessons, small classes, feedback cycles, flexible scheduling, university support)
- Right: "The Difference" (UK-qualified teachers, Pearson Edexcel, Ofqual regulated, no exams, 95% Distinction, global acceptance)

---

## Phase 3 — Conversion & Interactive Features

### 3.1 Multi-Step Enquiry Form (Critical Missing Piece)
Create a `booking-form.html` or embed in a modal on index.html:
- Step 1: Student or Parent/Guardian?
- Step 2: Name, Email, Phone (with country code)
- Step 3: Current age/grade, country
- Step 4: How did you hear about us? + Privacy consent
- Step 5: Submit → "Thank you, we'll be in touch"
- Like Crimson's form-builder-section

### 3.2 Video Gallery Section
Add a section to index.html with YouTube video thumbnails:
- 4-6 placeholder video cards (Rhys can record later)
- Each card: thumbnail image → play button overlay → title → duration badge
- Grid layout on desktop, horizontal scroll on mobile
- Videos needed: welcome message, sample lesson excerpt, student testimonial (future)

### 3.3 Downloadable Resources / Prospectus
Add a "Download Prospectus" CTA:
- Creates a PDF download
- Can be a simple HTML page formatted for print
- Like Crimson's `/ae/admissions/download-prospectus`

### 3.4 Live Chat / WhatsApp Widget
Add a WhatsApp button floating at bottom-right:
- "Chat on WhatsApp" — links to Rhys's WhatsApp number
- Common on UAE/edtech sites
- Stays visible while scrolling

### 3.5 Cookie Consent Banner
GDPR-compliant cookie notice (required for UK-based business serving EU users):
- Banner at bottom: "This site uses cookies" — Accept / Preferences
- Simple CSS-only implementation, no JS library needed

---

## Phase 4 — Enhanced visa.html Page

Current visa.html covers AU, UK, Canada, plus chips for 6 other countries. Expand to:

### 4.1 New Country Cards (6 additional countries)

| Country | Detail |
|---------|--------|
| 🇸🇬 **Singapore** | Student Pass. How BTEC supports ICA applications. Accepted by NUS, NTU, SMU, foreign branch campuses. |
| 🇭🇰 **Hong Kong** | Student visa. HK universities accepting BTEC. English-medium study recognition. |
| 🇰🇪 **Kenya** | Study visa pathway. BTEC as preparation for overseas study. UK/AU university pipeline. |
| 🇳🇬 **Nigeria** | Student visa process. BTEC strengthening academic profile. WAEC alternative. |
| 🇿🇦 **South Africa** | Study visa. SA universities accepting BTEC. Matric equivalency. |
| 🇮🇳 **India** | Student visa (SDS/non-SDS). BTEC as preparation for AU/UK/CA study. Gap year legitimisation. |

### 4.2 Visa FAQ Expansion
Add 3-4 more FAQ items:
- "Can I study BTEC while waiting for my visa decision?"
- "Will a BTEC help if my previous academic record is weak?"
- "Does BTEC count toward the UK Graduate Route (2-year work visa)?"
- "Can my parents use my BTEC progress for their dependent visa application?"

### 4.3 Interactive Visa Pathfinder
A simple quiz/flow: "Where do you want to study?" → "Your age?" → "Currently in school?" → Shows which country card to focus on. Like a decision tree.

---

## Phase 5 — Trust & Credibility Builders

### 5.1 Student Success Stories (Testimonials)
- Move from the current static testimonial block to a proper carousel (already partially done in previous redesign)
- Add 5-7 testimonial entries (anonymised if needed)
- Each: name + initial avatar + country flag + quote + star rating
- Real-sounding quotes addressing: exam anxiety, career change, parental concern, international move

### 5.2 Ofqual / Accreditation Information Box
- Dedicated section explaining: "What is Ofqual?" + "Why it matters"
- Simple explanation of UK qualification regulation
- Builds trust with international families unfamiliar with UK system

### 5.3 Teacher Video Introduction
- Short video embed (YouTube) of Rhys introducing himself and the school
- Placed in the "Meet Your Teachers" section
- More personal than just text — builds trust quickly

### 5.4 Live Counter / Progress Tracker
- Animated counters: "95% Distinction Rate", "500+ Students", "15+ Countries", "7+ Years"
- Numbers animate upward on scroll
- Simple CSS/JS, no library needed

### 5.5 Newsletter / Updates Signup
- Email signup box in footer: "Get BTEC updates, study tips, and university pathway guides"
- Simple input + button, sends to email

---

## Phase 6 — Technical & SEO

### 6.1 Google Analytics (Lightweight)
- Add GA4 script to both pages
- Track: page views, button clicks (CTA clicks), form submissions
- Use the GA ID if Rhys has one, or recommend setting up

### 6.2 Structured Data (JSON-LD)
Add to index.html `<head>`:
- **Organization schema** — UK BTEC Online as an educational organization
- **Course schema** — Pearson Edexcel BTEC Level 3 Business
- **FAQ schema** — enable Google rich results
- **LocalBusiness schema** — based in Dubai

### 6.3 Track CTAs with UTM Parameters
- All mailto links and form submissions should preserve or suggest UTM parameters
- "?utm_source=website&utm_medium=cta&utm_campaign=consultation" for tracking in email replies

### 6.4 Page Speed Optimization
- Already fast (static HTML), but add:
  - `<link rel="preload">` for hero image
  - `loading="lazy"` on below-fold images (already done)
  - Inline critical CSS (already done)

### 6.5 Error Pages
- Create a custom `404.html` that matches the site design
- Vercel supports custom 404 pages automatically

---

## Summary Roadmap

| Phase | Focus | Time Estimate | Pages Changed |
|-------|-------|--------------|---------------|
| 1 | New pages (13 new HTML files) | 2-3 sessions | +13 pages |
| 2 | index.html content expansion | 1 session | index.html |
| 3 | Conversion features (form, video, chat, cookies) | 1 session | index.html + 1 new |
| 4 | visa.html expansion | 1 session | visa.html |
| 5 | Trust builders (testimonials, video, counters) | 1 session | index.html |
| 6 | Technical SEO & analytics | 1 session | index.html, 404.html |

## Design Consistency Rules

All new pages must follow the existing patterns:
- **Colour**: Purple gradient (#667eea → #764ba2), white backgrounds, gray text (#6b7280, #4b5563, #1f2937)
- **Font**: Inter or system font stack
- **Header**: Same sticky gradient header with nav
- **Footer**: Same 4-column dark footer pattern
- **Cards**: White with 16px border-radius, subtle shadow, purple accent border-left
- **CTAs**: White button on purple gradient, or purple text on white
- **Animations**: Fade-in on scroll (Intersection Observer)
- **Responsive**: Mobile-first, hamburger menu