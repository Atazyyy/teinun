import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "Kemeja lasem-nya adem banget dan capnya halus. Sekali pakai langsung ditanya-tanya beli di mana.",
    name: "Bagus Prakoso",
    role: "Surabaya",
  },
  {
    quote:
      "Dress sintang-nya pas ukuran, warnanya cantik di orang kulit sawo matang. Packing aman rapi.",
    name: "Dinda Larasati",
    role: "Jakarta",
  },
  {
    quote:
      "Sudah 4 kali pesan sarung samarinda untuk hampers kantor. Adminnya fast respon banget.",
    name: "Hendra Wijaya",
    role: "Bandung",
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="scroll-mt-20 bg-parchment py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-clay">
            Testimoni
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
            Kata <em className="text-clay">pelanggan</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-bark/10 bg-ivory p-7">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <Quote className="h-5 w-5 text-clay/40" />
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-bark/75">
                  “{t.quote}”
                </p>
                <footer className="mt-6 border-t border-bark/10 pt-4">
                  <p className="font-display text-base font-semibold">
                    {t.name}
                  </p>
                  <p className="mt-0.5 text-xs text-bark/50">{t.role}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
