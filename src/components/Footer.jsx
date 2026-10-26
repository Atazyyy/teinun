import { Github, Instagram } from "lucide-react";
import { WA_NUMBER } from "../data/products";

const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Halo Teinun! Saya mau tanya-tanya dulu boleh?"
)}`;

export default function Footer() {
  return (
    <footer className="border-t border-bark/10 bg-ivory">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <a href="#" className="font-display text-3xl font-semibold">
              Teinun<span className="text-clay">.</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-bark/55">
              Batik &amp; tenun Nusantara dari tangan pengrajin, siap
              menemani hari-harimu.
            </p>
            <p className="mt-4 text-sm text-bark/70">
              Workshop: Jl. Panggung No. 3, Jepara, Jawa Tengah
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bark/40">
                Jelajahi
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-bark/60">
                <li><a href="#koleksi" className="hover:text-bark">Koleksi</a></li>
                <li><a href="#tentang" className="hover:text-bark">Tentang</a></li>
                <li><a href="#cara-pesan" className="hover:text-bark">Cara Pesan</a></li>
                <li><a href="#testimoni" className="hover:text-bark">Testimoni</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bark/40">
                Hubungi
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-bark/60">
                <li>
                  <a href={WA_LINK} target="_blank" rel="noreferrer" className="hover:text-bark">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-1.5 hover:text-bark">
                    <Instagram className="h-3.5 w-3.5" /> @teinun.id
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-bark/10 pt-6 text-xs text-bark/40 sm:flex-row sm:items-center">
          <p>© 2026 Teinun. Seluruh merek dan konten bersifat fiktif.</p>
          <p className="flex items-center gap-1.5">
            Concept demo — dibuat oleh{" "}
            <a
              href="https://github.com/Atazyyy"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-bark/60 hover:text-bark"
            >
              <Github className="h-3.5 w-3.5" /> Agni Miftah Fauzi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
