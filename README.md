# Ashish Patil — Professional Portfolio Website

Personal portfolio website for **Ashish Patil**, Data Analyst & Power BI Developer specializing in Power BI dashboards, SQL analysis, DAX calculations, and business intelligence reporting.

Built directly in the workspace root with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Quick Start (Running Locally)

To run this portfolio on your computer:

### 1. Install Dependencies
Open your terminal in this workspace folder and run:
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:3000
```
The site will reload automatically as you make changes to files.

### 3. Create a Production Build
To test that your project compiles with zero errors (the same check Vercel runs):
```bash
npm run build
```

---

## 📁 Key Files and Project Structure

```
My portfolio/
├── app/
│   ├── globals.css         # Styling, theme variables & utilities
│   ├── icon.svg            # Browser tab favicon (AP icon)
│   ├── layout.tsx          # Root layout, Google Fonts, SEO metadata
│   └── page.tsx            # Main single-page scroll layout
├── components/
│   ├── Navbar.tsx          # Sticky navigation, mobile menu & resume link
│   ├── Hero.tsx            # Dark navy hero screen, AP avatar & CTAs
│   ├── About.tsx           # Professional summary & value pillars
│   ├── Skills.tsx          # Categorized technical toolkit (no fake meters)
│   ├── Experience.tsx      # Chronological career timeline
│   ├── Projects.tsx        # Public GitHub projects & confidential case studies
│   ├── Services.tsx        # 8 freelance/contract service cards
│   ├── Education.tsx       # MBA, B.Com. & Power BI course credential
│   ├── Contact.tsx         # Direct contact details & Formspree contact form
│   └── Footer.tsx          # Footer with dynamic year & quick links
├── lib/
│   └── data.ts             # All portfolio content (easy to update in one place)
├── public/
│   ├── files/
│   │   └── Ashish_Patil_Resume.pdf    # Your downloadable resume PDF
│   └── images/
│       └── ashish-profile.jpeg        # Your profile photograph
├── .env.example            # Sample environment variables
├── .gitignore              # Files ignored by Git (protects private keys)
├── package.json            # Project dependencies and npm scripts
├── tailwind.config.ts      # Tailwind CSS configuration and color tokens
└── tsconfig.json           # TypeScript configuration
```

---

## 📷 How to Add or Replace Your Photo

1. Prepare your photograph in JPEG format.
2. Save it with the exact name:
   ```
   public/images/ashish-profile.jpeg
   ```
3. If this file is ever removed or fails to load, the website automatically falls back to an elegant **AP initials avatar badge** so the page never looks broken.

---

## 📄 How to Add or Replace Your Resume PDF

1. Save your latest resume in PDF format.
2. Place it with the exact name:
   ```
   public/files/Ashish_Patil_Resume.pdf
   ```
3. The **"Download Resume"** buttons in both the Navbar, Hero, and Footer link directly to this file and trigger an instant download.

---

## 📬 How to Configure the Contact Form (Formspree)

The contact form is built to send inquiries straight to your email using **Formspree** (a free form handling service).

### Steps:
1. Go to [formspree.io](https://formspree.io) and sign up for a free account.
2. Click **"+ New Form"**, name it (e.g. `Portfolio Contact`), and set your email to receive submissions: `ashishpatil1432100@gmail.com`.
3. Copy the Formspree Form ID URL provided (e.g., `https://formspree.io/f/mqkvnxyz`).
4. In your project, create a file named `.env.local` (this file is already ignored by `.gitignore` so your ID stays private):
   ```env
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id_here
   ```
5. Restart your local server (`npm run dev`).
6. **Graceful Fallback**: If you haven't set up Formspree yet, the website displays an informative notice and provides an instant **"Send via Email"** button that opens the visitor's mail client with your pre-filled email (`ashishpatil1432100@gmail.com`).

---

## 🌐 How to Publish to GitHub and Deploy to Vercel

### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com) and click **"New repository"**.
2. Name it `ashish-portfolio` (or any name you prefer). Keep it **Public** and leave "Initialize with README" unchecked.
3. In your local terminal, initialize and push:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Ashish Patil portfolio website"
   git branch -M main
   git remote add origin https://github.com/Ashish14-Patil/YOUR_REPO_NAME.git
   git push -u origin main
   ```

### Step 2: Deploy on Vercel
1. Log in to [Vercel](https://vercel.com) using your GitHub account.
2. Click **"Add New..."** → **"Project"**.
3. Select your GitHub repository (`ashish-portfolio`) and click **"Import"**.
4. In the **Environment Variables** section:
   - Key: `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
   - Value: `https://formspree.io/f/your_form_id_here`
5. Click **"Deploy"**.
6. Within ~60 seconds, your site will be live on a fast, global Vercel domain (e.g., `ashish-patil.vercel.app`) with free SSL!

---

## ✏️ How to Update Your Information Later

All content on the website is centralized in **`lib/data.ts`**:
- **Personal info**: Edit `PERSONAL_INFO` in `lib/data.ts` (email, headline, bio).
- **Projects**: Edit `PROJECTS` in `lib/data.ts` to add new dashboards or GitHub links.
- **Skills**: Edit `SKILL_CATEGORIES` in `lib/data.ts`.
- **Services**: Edit `SERVICES` in `lib/data.ts`.
- **Experience**: Edit `EXPERIENCES` in `lib/data.ts`.

Whenever you save changes and push to GitHub (`git push`), Vercel will automatically re-deploy your website within seconds.
