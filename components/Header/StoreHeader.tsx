"use client";
import Link from "next/link";
import { User2, ShoppingCart } from "lucide-react";

export default function StoreHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-emerald-950/5">
      <div className="container mx-auto h-16 flex items-center justify-between px-6">
        <Link
          href="/"
          className="group flex items-center gap-1 transition-all active:scale-95"
        >
          <span className="text-2xl font-black tracking-tighter text-emerald-950">
            E-commerce
            <span className="text-emerald-500 group-hover:px-1 transition-all">
              .
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/admin"
            className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-all duration-300 active:scale-90 border border-emerald-100"
            title="Admin Dashboard"
          >
            <User2 size={20} strokeWidth={2.5} />
          </Link>

          <Link
            href="/cart"
            className="p-2.5 rounded-xl bg-emerald-900 text-white hover:bg-emerald-800 transition-all duration-300 active:scale-90"
            title="Shopping Cart"
          >
            <ShoppingCart size={20} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </header>
  );
}
