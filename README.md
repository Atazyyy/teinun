# Teinun — Toko Online Batik & Tenun

> **Kategori proyek: Toko Online (E-commerce)** — storefront katalog produk
> dengan keranjang belanja dan checkout via WhatsApp (tanpa payment gateway).

Landing + katalog untuk brand fiktif "Teinun", toko pakaian & aksesori
bernuansa batik/tenun Nusantara. Proyek ini adalah **concept demo** untuk
portofolio jasa pembuatan web — seluruh merek, produk, dan testimoni
bersifat fiktif.

**Live:** https://teinun.vercel.app

## Fitur

- Hero dengan CTA dan strip keunggulan layanan
- Katalog 10 produk dengan filter kategori (Semua / Pakaian / Aksesoris)
- Keranjang belanja (drawer slide-over): ubah jumlah, hapus item, subtotal
- Checkout via WhatsApp — isi pesan otomatis sesuai isi keranjang
- Keranjang tersimpan di localStorage (tetap ada walau halaman di-refresh)
- Section Tentang, Cara Pemesanan (3 langkah), dan Testimoni
- Fully responsive + animasi scroll-reveal

## Kenapa checkout via WhatsApp?

Kebanyakan penjual kecil-menengah di Indonesia belum butuh payment
gateway — cukup pesanan masuk ke WhatsApp admin, lalu pembayaran dan
ongkir disepakati di chat. Pola ini yang direplikasi di demo.

## Tech Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion
- Lucide Icons

## Menjalankan

```bash
npm install
npm run dev      # development
npm run build    # production build ke folder dist/
npm run preview  # preview hasil build
```

---

Dibuat oleh [Agni Miftah Fauzi](https://github.com/Atazyyy) — jasa pembuatan
website & web app. Live demo lainnya: [tanamanies-cafe.vercel.app](https://tanamanies-cafe.vercel.app)
