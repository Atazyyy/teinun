import Reveal from "./Reveal";

const STATS = [
  { value: "40+", label: "Pengrajin mitra di 6 daerah" },
  { value: "100%", label: "Pewarna alami untuk koleksi tenun" },
  { value: "8rb+", label: "Pesanan terkirim sejak 2016" },
];

export default function About() {
  return (
    <section id="tentang" className="scroll-mt-20 bg-bark py-20 text-ivory md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-2 md:px-8">
        <Reveal className="order-2 md:order-1">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=700&q=80"
              alt="Butik kain Teinun"
              loading="lazy"
              className="aspect-[3/4] w-full rounded-2xl object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=700&q=80"
              alt="Motif kontemporer khas Teinun"
              loading="lazy"
              className="mt-10 aspect-[3/4] w-full rounded-2xl object-cover"
            />
          </div>
        </Reveal>

        <div className="order-1 md:order-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
              Tentang Teinun
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight font-semibold md:text-5xl">
              Setiap helai punya <em className="text-gold">cerita</em> pulau
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 leading-relaxed text-ivory/70">
              Teinun lahir dari perjalanan singgah di rumah-rumah pengrajin:
              dari Troso, Sumba, Toraja, sampai Pekalongan. Kami melihat
              motif-motif yang indah tapi pasarnya makin sempit, sementara
              anak muda mencari gaya yang bercerita.
            </p>
            <p className="mt-4 leading-relaxed text-ivory/70">
              Jadi kami menjembataninya: karya pengrajin dikemas dalam
              potongan yang siap dipakai sehari-hari — tanpa mematikan
              teknik turun-temurunnya.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-ivory/15 pt-8">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl text-gold md:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-xs leading-snug text-ivory/60 md:text-sm">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
