# BRIEFING DOKUMENTASI & INSTRUKSI REKONSTRUKSI 1:1 BRUTALIST PORTFOLIO

Kepada: Antigravity CLI (`agy`) & Rusdi (Senior Fullstack / UI/UX Engineer)
Dari: Si Imut (Research, Manuscript & Technical Writing) atas instruksi Master Hamzah
Repositori GitHub: https://github.com/hamzahikhsan/hamzah-portfolio
Production Live Server: http://103.103.22.45 (Biznet GIO VPS)
Workspace Path: `/home/admin123/work/hamzah-portfolio`

---

## 1. Latar Belakang & Keluhan Master Hamzah
Master Hamzah menolak hasil desain yang berbau "AI slop" (border abu-abu tipis kotak-kotak SaaS, padding standar, tipografi generik Inter/Geist). Master menginstruksikan pembuatan ulang 1:1 mengacu pada:
1. Referensi Live: https://wonjyou.com/
2. Video Screen Recording: `reference-media/frame_001.png` sampai `frame_078.png` (diekstrak dari `Recording 2026-10-28 153058.mp4`).
3. Screenshot Komparasi Tema:
   - `reference-media/darkmode_ref.png` (Pitch Black `#000000`, teks `#FFFFFF`, aksen `#F10000`)
   - `reference-media/lightmode_ref.png` (Stark White `#FFFFFF`, teks `#000000`, aksen `#F10000`)
4. Figma Design File:
   - File Key: `eK5OuIqBrn5GkJYsSDMCDO` (BELAJAR)
   - Node 1: `2784:10570` (Hero & Cover layout)
   - Node 2: `2781:8740` (Splash screen & components)
   - Dokumentasi struktur node tersedia di `/home/admin123/work/figma-belajar/REPORT.md`.

---

## 2. Parameter Inti Non-Negotiable
- **Penamaan Hero**: `HAMZAH IKHSAN` (font display condensed masif `PP Right Grotesk Tall Bold` warna merah `#F10000` di layer z-index 10 di belakang foto cutout).
- **Asset Photo Hero**: Cutout transparent alpha potret (`public/assets/64ab076614894808e85ea405_hero-alpha.webp`) berdiri di z-index 20 dengan torso bawah meluruh ke background kanvas.
- **Navigasi Utama (5 Menu)**: `Life` (`/`), `Loves` (`/loves`), `Works` (`/work`), `Thoughts` (`/thoughts`), `Contact.` (`/contact`).
- **Default Bawaan**: Dark Mode `#000000` pitch black dengan pill switcher interaktif di navbar kanan untuk beralih instan ke Light Mode `#FFFFFF` stark white.
- **Splash Screen Loader**: Harus selalu tampil saat load, meniru 1:1 rekaman video:
  - Teks atas `LOADING` tracking lebar.
  - 2 Kartu Polaroid miring di tengah (`Loader_Img01` & `Loader_Img02`).
  - Teks masif diagonal `HAMZAH` (merah) & `IKHSAN` (outline stroke).
  - Odometer counter `00%` sampai `100%`.
  - Tirai hitam terangkat ke atas membuka halaman utama.

---

## 3. Tugas Antigravity CLI (`agy`)
Lakukan audit mandiri terhadap kode frontend Next.js 16 di `/home/admin123/work/hamzah-portfolio`:
1. Periksa `src/components/motion/SplashScreen.tsx` dan pastikan tidak terhalang sessionStorage/cookie, sehingga splash screen selalu muncul dan smooth.
2. Periksa `src/components/Navbar.tsx` dan `src/components/ThemeToggle.tsx` untuk memastikan kelancaran toggle dark/light mode.
3. Periksa `src/components/Hero.tsx` agar stacking 3 layer (teks merah Z-10, foto Z-20, descriptor Z-30) tidak saling tumpang tindih secara rusak di viewport mobile maupun desktop.
4. Periksa seluruh halaman (`/`, `/loves`, `/work`, `/thoughts`, `/contact`) agar bebas dari pola AI-slop card borders.
5. Jawab dengan analisis kritis dan rencana penyempurnaan kode.
