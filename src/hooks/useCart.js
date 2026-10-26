import { useEffect, useState } from "react";

const KEY = "teinun-cart-v1";

export function useCart() {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY)) ?? {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(cart));
  }, [cart]);

  const add = (id) => setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
  const remove = (id) =>
    setCart((c) => {
      const next = { ...c };
      if (!next[id]) return next;
      next[id] -= 1;
      if (next[id] <= 0) delete next[id];
      return next;
    });
  const deleteLine = (id) =>
    setCart((c) => {
      const next = { ...c };
      delete next[id];
      return next;
    });
  const clear = () => setCart({});

  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  return { cart, add, remove, deleteLine, clear, count };
}
