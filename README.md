# AWOSS (Awesome Open Source Hub)

AWOSS adalah platform kurasi repositori open source yang membantu pengembang menemukan, mengelola, dan berbagi proyek open source terbaik dengan fokus pada lisensi dan kualitas kode.

## Fitur Utama

- 🔍 **Discovery:** Cari repositori GitHub dengan filter canggih (lisensi, bahasa, bintang).
- 📁 **Collections:** Buat koleksi pribadi atau publik untuk mengelompokkan repositori favorit Anda.
- 🔐 **GitHub Integration:** Login aman menggunakan akun GitHub Anda.
- 📜 **License Focused:** Informasi lisensi yang jelas untuk setiap repositori.

## Tech Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Database:** [PostgreSQL](https://www.postgresql.org/) (via Vercel Postgres)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Auth:** [Auth.js (NextAuth v5)](https://authjs.dev/)
- **API:** [Octokit](https://github.com/octokit/octokit.js) (GitHub API)

## Persiapan Lokal

1. Clone repositori:
   ```bash
   git clone https://github.com/0xmrxp/awoss.git
   cd awoss
   ```

2. Instal dependensi:
   ```bash
   pnpm install
   ```

3. Konfigurasi Environment Variables:
   Buat file `.env.local` dan isi dengan nilai berikut:
   ```env
   # Database
   DATABASE_URL="postgres://..."

   # Auth.js
   AUTH_SECRET="gunakan-perintah-npx-auth-secret-untuk-generate"
   AUTH_URL="http://localhost:3000"

   # GitHub OAuth
   AUTH_GITHUB_ID="your-github-client-id"
   AUTH_GITHUB_SECRET="your-github-client-secret"
   ```

4. Jalankan migrasi database:
   ```bash
   pnpm drizzle-kit push
   ```

5. Jalankan aplikasi:
   ```bash
   pnpm dev
   ```

## Panduan Deployment ke Vercel

1. **Push ke GitHub:** Pastikan semua perubahan sudah di-push ke repositori GitHub Anda.
2. **Vercel Project:** Hubungkan repositori GitHub Anda ke proyek baru di Vercel.
3. **Environment Variables:** Masukkan semua variabel dari `.env.local` ke pengaturan Vercel (kecuali `AUTH_URL` yang otomatis ditangani Vercel).
4. **Postgres:** Gunakan Vercel Postgres untuk database yang cepat dan terintegrasi.
5. **Deploy:** Klik deploy dan AWOSS siap digunakan!

## Roadmap

- [x] Setup Next.js 15 & Tailwind CSS
- [x] Integrasi Drizzle ORM & Database Schema
- [x] Autentikasi GitHub OAuth
- [x] Fitur Pencarian Repositori via GitHub API
- [x] Fitur Membuat Koleksi (Private/Public)
- [x] Fitur Menambahkan Repo ke Koleksi
- [ ] Filter Lisensi yang lebih mendalam
- [ ] Fitur Social (Like & Follow Collections)
- [ ] Dashboard Statistik untuk Koleksi

## Lisensi

Distributed under the MIT License. See `LICENSE` for more information.
