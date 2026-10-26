import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, Trash2, X, MessageCircle } from "lucide-react";
import { PRODUCTS, WA_NUMBER, rupiah } from "../data/products";

export default function CartDrawer({ open, onClose, cart }) {
  const lines = Object.entries(cart.cart)
    .map(([id, qty]) => {
      const product = PRODUCTS.find((p) => p.id === id);
      return product ? { ...product, qty } : null;
    })
    .filter(Boolean);

  const total = lines.reduce((sum, l) => sum + l.price * l.qty, 0);

  const waMessage = () => {
    const rows = lines
      .map((l) => `- ${l.qty}x ${l.name} (${rupiah(l.price * l.qty)})`)
      .join("\n");
    const text = encodeURIComponent(
      `Halo Teinun! Saya mau pesan:\n${rows}\n\nTotal: ${rupiah(total)}\n\nNama:\nAlamat pengiriman:`
    );
    return `https://wa.me/${WA_NUMBER}?text=${text}`;
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-bark/50"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-ivory shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-bark/10 px-6 py-5">
              <h2 className="font-display text-xl font-semibold">
                Keranjang{" "}
                <span className="text-clay">({lines.length})</span>
              </h2>
              <button
                onClick={onClose}
                aria-label="Tutup keranjang"
                className="rounded-full p-2 hover:bg-bark/5"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {lines.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <p className="font-display text-xl">Keranjang masih kosong</p>
                  <p className="mt-2 max-w-[220px] text-sm text-bark/55">
                    Yuk intip koleksi batik dan tenunnya dulu.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 rounded-full bg-bark px-6 py-3 text-sm font-semibold text-ivory"
                  >
                    Lihat Koleksi
                  </button>
                </div>
              ) : (
                <ul className="space-y-4">
                  {lines.map((l) => (
                    <li
                      key={l.id}
                      className="flex gap-4 rounded-2xl border border-bark/10 bg-white p-3"
                    >
                      <img
                        src={l.img}
                        alt={l.name}
                        className="h-20 w-16 shrink-0 rounded-xl object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold">
                          {l.name}
                        </p>
                        <p className="mt-0.5 text-sm text-clay">
                          {rupiah(l.price)}
                        </p>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center gap-3 rounded-full border border-bark/15 px-2 py-1">
                            <button
                              onClick={() => cart.remove(l.id)}
                              aria-label="Kurangi jumlah"
                              className="text-bark/60 hover:text-bark"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-5 text-center text-sm font-semibold">
                              {l.qty}
                            </span>
                            <button
                              onClick={() => cart.add(l.id)}
                              aria-label="Tambah jumlah"
                              className="text-bark/60 hover:text-bark"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <button
                            onClick={() => cart.deleteLine(l.id)}
                            aria-label="Hapus dari keranjang"
                            className="text-bark/40 hover:text-clay"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {lines.length > 0 && (
              <div className="border-t border-bark/10 px-6 py-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-bark/60">Subtotal</span>
                  <span className="font-display text-2xl font-semibold">
                    {rupiah(total)}
                  </span>
                </div>
                <p className="mt-1 text-xs text-bark/45">
                  Ongkir dan finalisasi pesanan disepakati via WhatsApp.
                </p>
                <a
                  href={waMessage()}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-6 py-3.5 text-sm font-bold text-white transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Checkout via WhatsApp
                </a>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
