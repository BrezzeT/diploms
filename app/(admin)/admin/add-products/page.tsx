"use client";

import { createProduct } from "@/lib/actions/product";
import { CATEGORY, BRAND, COLOR } from "@/lib/constants/geneal";

const COLOR_MAP: Record<string, string> = {
  Black: "bg-black",
  White: "bg-white border-gray-300",
  Red: "bg-red-500",
  Blue: "bg-blue-500",
  Green: "bg-green-500",
  Yellow: "bg-yellow-400",
};

export default function AddProductsPage() {
  return (
    <div className="container mx-auto">
      <div className="bg-white border border-emerald-200 rounded-3xl overflow-hidden">
        <header className="bg-emerald-600 px-6 py-6 text-white relative overflow-hidden">
          <div className="relative z-10 flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-wider leading-relaxed">
              Add new product
            </h1>
          </div>
        </header>

        <form action={createProduct} className="p-4 md:p-6 flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
                  Назва вашого пристрою
                </label>
                <input
                  name="title"
                  required
                  placeholder="Напр: iPhone 15 Pro Titanium"
                  className="p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-emerald-500 focus:bg-white outline-none font-bold text-lg text-slate-800 transition-all placeholder:text-slate-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
                  Фінанси та Склад
                </label>
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-black text-emerald-600">
                      $
                    </span>
                    <input
                      name="price"
                      type="number"
                      required
                      placeholder="0.00"
                      className="w-full p-4 pl-8 bg-slate-50 border border-slate-100 rounded-2xl focus:border-emerald-500 focus:bg-white outline-none font-black text-xl text-slate-800 transition-all"
                    />
                  </div>
                  <input
                    name="stock"
                    type="number"
                    required
                    placeholder="К-сть"
                    className="w-32 p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-emerald-500 focus:bg-white outline-none font-black text-xl text-slate-800 text-center transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
                  Бренд виробника
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {BRAND.map((b) => (
                    <label key={b} className="cursor-pointer">
                      <input
                        type="radio"
                        name="brand"
                        value={b}
                        className="peer hidden"
                        required
                      />
                      <div className="px-5 py-2.5 bg-slate-100/50 border border-transparent rounded-xl peer-checked:bg-emerald-700 peer-checked:text-white peer-checked:shadow-lg peer-checked:shadow-emerald-200 transition-all font-black text-[10px] uppercase tracking-wider text-slate-500 hover:bg-slate-200/50">
                        {b}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
                  Тип пристрою (Категорія)
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {CATEGORY.map((c) => (
                    <label key={c} className="cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={c}
                        className="peer hidden"
                        required
                      />
                      <div className="px-5 py-2.5 bg-slate-100/50 border border-transparent rounded-xl peer-checked:bg-emerald-700 peer-checked:text-white peer-checked:shadow-lg peer-checked:shadow-emerald-200 transition-all font-black text-[10px] uppercase tracking-wider text-slate-500 hover:bg-slate-200/50">
                        {c}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
                Доступна колірна гама
              </label>
              <div className="flex flex-wrap gap-4">
                {COLOR.map((c) => (
                  <label key={c} className="cursor-pointer">
                    <input
                      type="radio"
                      name="color"
                      value={c}
                      className="peer hidden"
                      required
                    />
                    <div className="px-6 py-3 bg-white border border-slate-100 rounded-2xl flex items-center gap-3 peer-checked:bg-emerald-700 peer-checked:text-white peer-checked:border-emerald-700 peer-checked:shadow-xl transition-all shadow-sm">
                      <div
                        className={`w-4 h-4 rounded-full border border-black/10 shadow-inner ${COLOR_MAP[c]}`}
                      />
                      <span className="font-black text-xs uppercase tracking-tight">
                        {c}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-start gap-6 text-sm">
            <button
              type="submit"
              className="w-full md:w-64 bg-emerald-600 text-white py-4 rounded-lg font-black text-lg uppercase tracking-widest hover:bg-emerald-700 transition-all active:scale-[0.98]"
            >
              Створити товар
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
