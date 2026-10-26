import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import { CATEGORIES, PRODUCTS, rupiah } from "../data/products";

export default function Products({ onAdd }) {
  const [active, setActive] = useState("Semua");

  const filtered =
    active === "Semua"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === active);

  return (
    <section id="koleksi" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-clay">
            Koleksi
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
            Karya para <em className="text-clay">pengrajin</em>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  active === cat
                    ? "bg-bark text-ivory"
                    : "border border-bark/20 text-bark/60 hover:border-bark hover:text-bark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group overflow-hidden rounded-2xl border border-bark/10 bg-white"
              >
                <div className="overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-bark/40">
                    {p.category}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg leading-snug font-semibold">
                    {p.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-snug text-bark/55">
                    {p.desc}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-semibold text-clay">
                      {rupiah(p.price)}
                    </span>
                    <button
                      onClick={() => onAdd(p.id)}
                      aria-label={`Tambah ${p.name} ke keranjang`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-bark text-ivory transition-transform hover:scale-110"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
