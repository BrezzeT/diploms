"use client";
import { Filter as FilterIcon } from "lucide-react";
import { useFilter } from "@/lib/store/general-store";
import { BRAND } from "@/lib/constants/geneal";

export default function Filter() {
  const { isOpen, selectedBrand, toggleBrand } = useFilter();
  if (!isOpen) return null;
  return (
    <div
      className={`grid transition-all duration-300 ease-in-out bg-white 
        ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
    >
      <div className="overflow-hidden border-b border-emerald-200">
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="brand"
              className="text-xs uppercase font-bold text-slate-500"
            >
              Бренд
            </label>
            <div className="mt-3 grid grid-cols-2 sm:flex sm:flex-wrap gap-3">
              {BRAND.map((brand) => {
                const isSelected = selectedBrand.includes(brand);
                return (
                  <button
                    key={brand}
                    onClick={() => toggleBrand(brand)}
                    className={`w-full sm:w-32 h-11 flex items-center justify-center text-sm font-bold border border-emerald-100 rounded-xl hover:bg-emerald-600 hover:text-white transition-all active:scale-95 ${
                      isSelected
                        ? "bg-emerald-600 text-white"
                        : "bg-emerald-50 text-emerald-700"
                    }`}
                  >
                    {brand}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export const FilterButton = () => {
  const { toggle } = useFilter();
  return (
    <button
      onClick={toggle}
      className="flex items-center gap-2 px-5 h-11 bg-white text-emerald-600 rounded-xl hover:bg-emerald-50 active:scale-95 transition-all font-bold shadow-sm whitespace-nowrap"
    >
      <FilterIcon size={18} />
      <span>Фільтр</span>
    </button>
  );
};
