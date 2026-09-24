'use client';
import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react';
import { Product, Service, SERVICES } from '@/lib/data';

export type CartItem = { product: Product; qty: number; size?: string };
type CartCtx = {
  items: CartItem[];
  add: (p: Product, qty?: number, size?: string) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  wishlist: string[];
  toggleWish: (id: string) => void;
  services: Service[];
  updatePrice: (id: string, price: number) => void;
  addService: (s: Service) => void;
  removeService: (id: string) => void;
  resetServices: () => void;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = 'presto-services-v1';

function load(): Service[] {
  if (typeof window === 'undefined') return SERVICES;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return SERVICES;
    const arr = JSON.parse(raw);
    return Array.isArray(arr) && arr.length ? arr : SERVICES;
  } catch { return SERVICES; }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>(['costume-presto']);
  const [services, setServices] = useState<Service[]>(SERVICES);

  useEffect(() => { setServices(load()); }, []);
  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(services)); } catch { /* noop */ }
  }, [services]);

  const add: CartCtx['add'] = (p, qty = 1, size = 'M') =>
    setItems((prev) => {
      const f = prev.find((i) => i.product.id === p.id);
      if (f) return prev.map((i) => (i.product.id === p.id ? { ...i, qty: i.qty + qty } : i));
      return [...prev, { product: p, qty, size }];
    });
  const remove = (id: string) => setItems((p) => p.filter((i) => i.product.id !== id));
  const setQty = (id: string, qty: number) =>
    setItems((p) => (qty <= 0 ? p.filter((i) => i.product.id !== id) : p.map((i) => (i.product.id === id ? { ...i, qty } : i))));
  const clear = () => setItems([]);
  const toggleWish = (id: string) => setWishlist((w) => (w.includes(id) ? w.filter((x) => x !== id) : [...w, id]));
  const updatePrice = (id: string, price: number) =>
    setServices((s) => s.map((x) => (x.id === id ? { ...x, price: Math.max(0, price) } : x)));
  const addService = (s: Service) => setServices((prev) => [...prev, s]);
  const removeService = (id: string) => setServices((s) => s.filter((x) => x.id !== id));
  const resetServices = () => setServices(SERVICES);

  const { count, subtotal } = useMemo(() => ({
    count: items.reduce((a, i) => a + i.qty, 0),
    subtotal: items.reduce((a, i) => a + i.qty * i.product.price, 0)
  }), [items]);

  return <Ctx.Provider value={{ items, add, remove, setQty, clear, count, subtotal, wishlist, toggleWish, services, updatePrice, addService, removeService, resetServices }}>{children}</Ctx.Provider>;
}

export const useCart = () => {
  const v = useContext(Ctx);
  if (!v) throw new Error('useCart outside provider');
  return v;
};
