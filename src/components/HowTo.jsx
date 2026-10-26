import { MousePointerClick, ShoppingBag, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  {
    icon: MousePointerClick,
    title: "1. Pilih produk",
    desc: "Telusuri koleksi, gunakan filter kategori untuk mempercepat.",
  },
  {
    icon: ShoppingBag,
    title: "2. Masukkan keranjang",
    desc: "Atur jumlah tiap item di keranjang sampai pas.",
  },
  {
    icon: MessageCircle,
    title: "3. Checkout via WhatsApp",
    desc: "Pesanan terkirim otomatis ke admin — lanjut bayar & ongkir di chat.",
  },
];

export default function HowTo() {
  return (
    <section id="cara-pesan" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-clay">
            Cara Pemesanan
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
            Tiga langkah, <em className="text-clay">selesai</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className="relative h-full rounded-2xl border border-bark/10 bg-white p-8">
                <step.icon className="h-8 w-8 text-clay" />
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-bark/60">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
