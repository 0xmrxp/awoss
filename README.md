# AWOSS

> **Discover, curate, and manage the best open source repositories — all in one place.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com)

AWOSS (Awesome Open Source Hub) is a modern platform to discover, organize, and share high-quality open source repositories with a strong focus on **licenses**.

## Features

- Advanced search and filtering by license, language, stars, and more
- Real-time repository data from GitHub
- Create and manage personal or public collections
- License detection and information
- Trending and popular repositories
- Clean, fast, and responsive interface

## Tech Stack

- **Framework**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Database**: Vercel Postgres + Drizzle ORM
- **Authentication**: Auth.js with GitHub OAuth
- **GitHub Integration**: Octokit
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- GitHub account

### Installation

```bash
git clone https://github.com/0xmrxp/awoss.git
cd awoss
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
DATABASE_URL=your_vercel_postgres_url
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

### Run the Project

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Roadmap

- [ ] License compatibility checker
- [ ] Team collections
- [ ] Weekly digest emails
- [ ] Advanced analytics

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- GitHub for their excellent API
- The open source community