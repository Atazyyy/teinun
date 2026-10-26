import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag, Menu as MenuIcon, X } from "lucide-react";

const LINKS = [
  { href: "#koleksi", label: "Koleksi" },
  { href: "#tentang", label: "Tentang" },
  { href: "#cara-pesan", label: "Cara Pesan" },
  { href: "#testimoni", label: "Testimoni" },
];

export default function Navbar({ cartCount, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-bark/10 bg-ivory/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#" className="font-display text-2xl font-semibold">
          Teinun<span className="text-clay">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-bark/70 transition-colors hover:text-bark"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 rounded-full bg-bark px-5 py-2.5 text-sm font-semibold text-ivory transition-transform hover:scale-105"
          >
            <ShoppingBag className="h-4 w-4" />
            Keranjang
            {cartCount > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-clay text-xs font-bold text-ivory">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onOpenCart}
            className="relative rounded-full bg-bark p-2.5 text-ivory"
            aria-label="Buka keranjang"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-clay text-xs font-bold text-ivory">
                {cartCount}
              </span>
            )}
          </button>
          <button
            className="text-bark md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Buka menu navigasi"
          >
            {open ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-5">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm text-bark/80 hover:bg-bark/5"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
