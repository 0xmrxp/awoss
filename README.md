# AWOSS (Awesome Open Source Hub)

> **Discover, curate, and manage the best open source repositories — all in one place.**

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-0.30-C5F74F?logo=drizzle)](https://orm.drizzle.team/)
[![Auth.js](https://img.shields.io/badge/Auth.js-5.0-black?logo=nextdotjs)](https://authjs.dev/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com)

AWOSS is an open-source repository curation platform that helps developers discover, manage, and share high-quality open-source projects with a strong focus on license compliance and community health.

## Key Features

- 🔍 **Discovery:** Search GitHub repositories with advanced filters (license, language, stars).
- 📁 **Collections:** Create personal or public collections to group your favorite repositories.
- 🔐 **GitHub Integration:** Secure login using your GitHub account via OAuth.
- 📜 **License Focused:** Clear license information for every repository to ensure compliance.
- 📝 **Notes:** Add personal notes to repositories within your collections.

## Tech Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Database:** [PostgreSQL](https://www.postgresql.org/) (via Vercel Postgres)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication:** [Auth.js (NextAuth v5)](https://authjs.dev/)
- **API:** [Octokit](https://github.com/octokit/octokit.js) (GitHub API)

## Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/0xmrxp/awoss.git
   cd awoss
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file and fill in the following:
   ```env
   # Database (Vercel Postgres or any PostgreSQL)
   DATABASE_URL="postgres://..."

   # Auth.js (NextAuth v5)
   # Generate a secret with: npx auth secret
   AUTH_SECRET="your-secret-here"
   AUTH_URL="http://localhost:3000"

   # GitHub OAuth
   # Create at: https://github.com/settings/developers
   AUTH_GITHUB_ID="your-github-client-id"
   AUTH_GITHUB_SECRET="your-github-client-secret"
   ```

4. **Run database migrations:**
   ```bash
   pnpm drizzle-kit push
   ```

5. **Start the development server:**
   ```bash
   pnpm dev
   ```

## Deployment Guide (Vercel)

1. **Push to GitHub:** Ensure all changes are pushed to your GitHub repository.
2. **Vercel Project:** Connect your GitHub repository to a new project on Vercel.
3. **Environment Variables:** Add all variables from `.env.local` to Vercel settings (except `AUTH_URL` which Vercel handles automatically).
4. **Postgres:** Provision a Vercel Postgres database for seamless integration.
5. **Deploy:** Click deploy and your AWOSS instance is live!

## Roadmap

- [x] Setup Next.js 15 & Tailwind CSS
- [x] Drizzle ORM & Database Schema Integration
- [x] GitHub OAuth Authentication
- [x] Repository Search via GitHub API
- [x] Collection Creation (Private/Public)
- [x] Add Repositories to Collections with Notes
- [ ] Advanced License Compatibility Checker
- [ ] Social Features (Likes & Following Collections)
- [ ] Collection Analytics Dashboard

## License

Distributed under the Apache License 2.0. See `LICENSE` for more information.

## Acknowledgments

- [GitHub API](https://docs.github.com/en/rest) for providing the data.
- The open-source community for building the tools we love.
