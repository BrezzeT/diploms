"use client";

import { IProduct } from "@/lib/types/types";
import { ShoppingCart, Image as ImageIcon, Pencil, Trash } from "lucide-react";
import { deleteProduct } from "@/lib/actions/product";
import { useTransition } from "react";

export default function ProductCard({
  product,
  isAdmin,
}: {
  product: IProduct;
  isAdmin?: boolean;
}) {
  const [isPending, startTransition] = useTransition();
  const handleDelete = () => {
    if (confirm("Ви впевнені що хочете видалити цей товар?")) {
      startTransition(async () => {
        await deleteProduct(product._id);
      });
    }
  };
  return (
    <div className="group bg-white border border-emerald-100 rounded-3xl overflow-hidden hover:shadow-xl hover:border-emerald-200 transition-all duration-200 flex flex-col h-full">
      <div className="relative aspect-square bg-emerald-50/50 flex items-center justify-center overflow-hidden text-emerald-500">
        <ImageIcon size={48} strokeWidth={1} />
        {isAdmin && (
          <span
            className={`absolute top-2 right-2 px-2 py-1 rounded-full text-[10px] font-black ${
              (product.stock || 0) > 10 ? "bg-emerald-500" : "bg-rose-500"
            } text-white shadow-sm transition-all`}
          >
            {product.stock || 0} шт.
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1 gap-2 border-t border-emerald-50">
        <div className="flex items-center justify-between w-full gap-2">
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest leading-none">
              {product.brand}
            </span>
            <h3 className="text-base font-extrabold text-slate-800 uppercase line-clamp-1 mt-1 group-hover:text-emerald-700 transition-colors">
              {product.title}
            </h3>
          </div>
          <span className="px-2 py-0.5 bg-slate-50 border border-slate-100 rounded-lg text-[9px] font-black text-slate-400 uppercase tracking-tighter shrink-0">
            {product.category}
          </span>
        </div>
        <div className="mt-auto flex justify-between items-end pt-3 border-t border-slate-50">
          <div className="flex flex-col">
            <span className="text-[9px] font-bold text-slate-300 uppercase tracking-wide">
              Ціна
            </span>
            <span className="text-xl font-black text-slate-900 tracking-tighter leading-none mt-1">
              {product.price}{" "}
              <span className="text-xs text-emerald-600 font-bold">UAH</span>
            </span>
          </div>
          <div className="flex items-center">
            {isAdmin ? (
              <div className="flex gap-2">
                <button
                  aria-label="Редагувати"
                  className="group flex items-center justify-center w-11 h-11 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-600 hover:text-white active:scale-90 transition-all duration-300"
                >
                  <Pencil
                    size={22}
                    strokeWidth={2.5}
                    className="transition-colors"
                  />
                </button>
                <button
                  disabled={isPending}
                  onClick={handleDelete}
                  aria-label="Видалити"
                  className="group disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center w-11 h-11 bg-rose-50 text-rose-600 rounded-xl hover:bg-rose-600 hover:text-white active:scale-90 transition-all duration-300"
                >
                  <Trash
                    size={22}
                    strokeWidth={2.5}
                    className={isPending ? "animate-pulse" : ""}
                  />
                </button>
              </div>
            ) : (
              <button
                aria-label="Додати в кошик"
                className="group flex items-center justify-center w-11 h-11 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-600 hover:text-white active:scale-90 transition-all duration-300"
              >
                <ShoppingCart
                  size={22}
                  strokeWidth={2.5}
                  className="transition-colors"
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
