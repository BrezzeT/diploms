import { Search } from "lucide-react";
import { getProducts } from "@/lib/actions/product";
import Filter, { FilterButton } from "@/components/Catalog/Filter";
import ProductList from "@/components/Product/ProductList";
export default async function CatalogPage() {
  const products = await getProducts();
  return (
    <div className="space-y-6">
      <section className="mt-2 md:mt-4 rounded-3xl overflow-hidden border border-emerald-100">
        <header className="flex flex-col md:flex-row justify-between items-center p-6 bg-emerald-500 text-white gap-4">
          <div className="flex flex-col gap-1 w-full md:w-auto md:text-left">
            <h3 className="text-2xl font-bold tracking-tight">Каталог</h3>
            <p className="text-sm text-emerald-50 font-medium">
              Вибирайте найкращі пристрої для себе!
            </p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 group">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-200 group-focus-within:text-emerald-500 transition-colors"
                size={18}
              />
              <input
                type="text"
                placeholder="Пошук..."
                className="w-full pl-10 pr-4 h-11 bg-white text-slate-800 rounded-xl outline-none focus:ring-2 focus:ring-emerald-300 transition-all placeholder:text-slate-300"
              />
            </div>
            <FilterButton />
          </div>
        </header>
        <Filter />
        <main>
          <ProductList products={products} isAdmin={false} />
        </main>
      </section>
    </div>
  );
}
