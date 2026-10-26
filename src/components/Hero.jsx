import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.35em] text-clay"
          >
            Batik &amp; Tenun Nusantara
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 font-display text-5xl leading-[1.08] font-semibold md:text-6xl"
          >
            Tenun budaya, <em className="text-clay">dipakai</em> setiap hari.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-md leading-relaxed text-bark/70"
          >
            Koleksi pakaian dan aksesori bernuansa batik &amp; tenun
            Nusantara — dari Troso, Toraja, sampai Pekalongan — dibuat
            bersama pengrajin lokal dengan bahan yang nyaman dipakai.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#koleksi"
              className="rounded-full bg-clay px-7 py-3.5 text-sm font-semibold text-ivory transition-transform hover:scale-105"
            >
              Lihat Koleksi
            </a>
            <a
              href="#cara-pesan"
              className="rounded-full border border-bark/25 px-7 py-3.5 text-sm font-semibold transition-colors hover:border-bark hover:bg-bark/5"
            >
              Cara Pemesanan
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="overflow-hidden rounded-t-[10rem] rounded-b-2xl">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80"
              alt="Pelanggan berbelanja koleksi Teinun"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-2xl bg-bark px-5 py-4 text-ivory shadow-xl md:-left-10">
            <p className="font-display text-2xl text-gold">2016</p>
            <p className="text-xs text-ivory/70">Berkarya bersama pengrajin</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
