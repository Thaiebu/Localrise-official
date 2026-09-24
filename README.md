# LocalRise (localrise.co.in)

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)
[![Deploy to GitHub Pages](https://github.com/Thaiebu/Localrise-official/actions/workflows/deploy.yml/badge.svg)](https://github.com/Thaiebu/Localrise-official/actions/workflows/deploy.yml)

> **Empowering manufacturers in Madurai, Tenkasi & Tirunelveli to launch and scale on India's top marketplaces — Amazon, Flipkart, and Meesho — with hands-on, boots-on-the-ground seller execution.**

---

## 📌 Overview

**LocalRise** is a dedicated regional e-commerce growth partner built specifically for traditional factory owners, artisan cooperatives, and MSME manufacturers across South Tamil Nadu. 

Unlike conventional digital marketing agencies that only offer remote consulting or generic ad management, LocalRise provides direct, on-ground seller execution — handling everything from GST cataloging and packaging compliance to marketplace optimization, platform fee modeling, and returns (RTO) protection.

---

## ✨ Key Features

- **🌐 Dual-Language Experience (English & தமிழ்):** Full bilingual interface tailored for Tamil-speaking factory owners and English-speaking executives, complete with native typography (`Noto Sans Tamil` & `Plus Jakarta Sans`) and smooth cross-fade state transitions.
- **🧮 Interactive Profitability & Margin Calculator:** Real-time simulation engine calculating platform commissions, logistics/shipping tiers, GST impact, and net margins across **Amazon India**, **Flipkart**, and **Meesho**.
- **🏭 Regional Manufacturing Cluster Playbooks:** Tailored launch strategies for key industrial hubs:
  - **Madurai:** Sungudi sarees, covering & 1-gram gold jewellery, bag manufacturing (school, jute & travel), bronze & brass metalware.
  - **Tenkasi & Puliyangudi:** Kadayanallur handloom towels & lungis, Puliyangudi lemon & agro value-adds, hill spices, coir fiber, agro implements.
  - **Tirunelveli:** Halwa & confectionery, handcrafted bags & jute totes, palm crafts (karupatti), bell metal utensils.
- **📋 Lead Ingestion & Factory Audit Flow:** Integrated factory audit questionnaire with automated submissions via [Formspree](https://formspree.io) and direct WhatsApp escalation.
- **💼 Transparent Service Tiers:** Clear pricing breakdown covering Fast-Track Launch, Full-Funnel Growth, and Custom Enterprise scaling.
- **❓ Comprehensive Regional FAQ:** Direct answers to manufacturer concerns regarding GST, RTO returns, barcoding, daily dispatch, and marketplace payout cycles.
- **🚀 Built-in Domain & Deployment Blueprint:** In-app walkthrough modal providing DNS configuration and hosting steps for `localrise.co.in`.

---

## 🛠️ Tech Stack

- **Core Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling:** [Vite 8](https://vitejs.dev/) with `@vitejs/plugin-react`
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- **Icons & UI:** [Lucide React](https://lucide.dev/)
- **Animations:** [Motion](https://motion.dev/) (Framer Motion)
- **Forms & Integration:** [Formspree](https://formspree.io) & WhatsApp Business Click-to-Chat API
- **Deployment & CI/CD:** GitHub Actions + GitHub Pages (`deploy.yml`)

---

## 📁 Repository Structure

```text
Localrise-official/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── src/
│   ├── components/             # Reusable UI sections & interactive modals
│   │   ├── AuditModal.tsx      # Factory audit request form modal (Formspree)
│   │   ├── Calculator.tsx      # Marketplace profit & fee calculator
│   │   ├── CaseStudies.tsx     # Regional manufacturer success stories
│   │   ├── ContactForm.tsx     # Direct inquiry & lead capture section
│   │   ├── DeploymentModal.tsx # Step-by-step domain & DNS setup modal
│   │   ├── FAQSection.tsx      # Bilingual manufacturer FAQ
│   │   ├── Footer.tsx          # Site footer & contact links
│   │   ├── Hero.tsx            # Hero section with primary CTAs & badges
│   │   ├── HowItWorks.tsx      # 4-stage execution roadmap
│   │   ├── Navbar.tsx          # Sticky navigation with language switcher
│   │   ├── RegionalClusters.tsx# Madurai, Tenkasi & Tirunelveli cluster tabs
│   │   ├── ServicesPricing.tsx # 3-tier pricing matrix
│   │   └── WhyLocalRise.tsx    # Value differentiators (on-ground vs agencies)
│   ├── data/
│   │   └── content.ts          # Centralized bilingual copy (EN & TA)
│   ├── types.ts                # TypeScript interfaces and domain models
│   ├── App.tsx                 # Root application component
│   ├── main.tsx                # React DOM entry point
│   └── index.css               # Global styling & Tailwind imports
├── .env.example                # Environment variables template
├── index.html                  # HTML entry point with SEO & Schema.org JSON-LD
├── metadata.json               # Application metadata definition
├── package.json                # Project dependencies and run scripts
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite configuration with Tailwind CSS plugin
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (`v20.x` or higher recommended)
- `npm` (bundled with Node.js) or `pnpm` / `yarn`

### 1. Clone the Repository

```bash
git clone https://github.com/Thaiebu/Localrise-official.git
cd Localrise-official
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables (Optional)

Copy the example `.env` file if you plan on adding custom endpoints:

```bash
cp .env.example .env
```

| Variable | Description | Default |
|---|---|---|
| `GEMINI_API_KEY` | Optional API key for Google Gemini GenAI features | None |
| `APP_URL` | Base public URL of the deployed application | `https://localrise.co.in` |

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔨 Available Scripts

In the project root, you can run:

| Command | Action |
|---|---|
| `npm run dev` | Starts the Vite dev server at `http://localhost:3000` with HMR |
| `npm run build` | Compiles TypeScript and creates optimized production bundle in `/dist` |
| `npm run preview` | Locally preview the production build output from `/dist` |
| `npm run lint` | Runs TypeScript compiler type-check (`tsc --noEmit`) |
| `npm run clean` | Removes `/dist` and temporary build artifacts |

---

## 🌐 Deployment

### GitHub Pages (Automated via GitHub Actions)

The repository includes a ready-to-use GitHub Action in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

1. Go to your repository **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Push changes to the `main` branch to trigger automatic build and deployment.

### Custom Domain Setup (`localrise.co.in`)

To connect a custom domain:
1. Add a `CNAME` file pointing to `localrise.co.in` in your root or publish directory.
2. In your DNS provider (e.g., Cloudflare, GoDaddy, Namecheap), add:
   - **Apex `@` A Records:** Point to GitHub Pages IPs:
     ```text
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - **`www` CNAME Record:** Point to `<your-username>.github.io`
3. Enable **Enforce HTTPS** in GitHub Pages settings.

---

## 📞 Contact & Support

- **Website:** [localrise.co.in](https://localrise.co.in)
- **WhatsApp / Direct Line:** [+91 80563 93181](https://wa.me/918056393181)
- **Email:** [thaiebu@gmail.com](mailto:thaiebu@gmail.com)
- **Focus Region:** Madurai, Tenkasi & Tirunelveli, Tamil Nadu, India

---

## 📄 License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.
