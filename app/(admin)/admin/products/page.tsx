import { getProducts } from "@/lib/actions/product";
import { Search } from "lucide-react";
import ProductList from "@/components/Product/ProductList";
import Filter, { FilterButton } from "@/components/Catalog/Filter";
import Link from "next/link";

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <div className="bg-white border border-emerald-200 rounded-3xl overflow-hidden">
      <header className="bg-emerald-600 px-6 py-6 text-white relative overflow-hidden">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wider leading-relaxed">
            All products
          </h1>
          <span className="text-sm font-medium px-2 py-1 bg-white mt-1 rounded-lg text-emerald-500">
            {products.length} products
          </span>
        </div>
      </header>
      <section className="bg-white border-b border-emerald-200">
        <div className="flex items-center justify-between p-4 gap-4">
          <div className="flex items-center gap-2 relative group flex-1 max-w-md">
            <Search
              className="absolute left-3 text-emerald-300 group-focus-within:text-emerald-500 transition-colors"
              size={18}
            />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border border-emerald-200 rounded-lg pl-10 pr-4 h-11 bg-emerald-50/10 outline-none focus:border-emerald-500 transition-all focus:bg-white focus:shadow-sm text-slate-800"
            />
          </div>
          <div className="flex items-center gap-2">
            <FilterButton />
          </div>
        </div>
        <Filter />
      </section>
      <ProductList products={products} isAdmin={true} />
    </div>
  );
}
