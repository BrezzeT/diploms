"use client";

import { useFilter } from "@/lib/store/general-store";
import { IProduct } from "@/lib/types/types";
import ProductCard from "./ProductCard";

export default function ProductList({
  products,
  isAdmin = false,
}: {
  products: IProduct[];
  isAdmin?: boolean;
}) {
  const { selectedBrand } = useFilter();
  const filterProduct = products.filter((product) => {
    if (selectedBrand.length === 0) return true;
    if (!product.brand) return false;
    return selectedBrand.includes(product.brand);
  });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {filterProduct.map((product) => (
        <ProductCard key={product._id} product={product} isAdmin={isAdmin} />
      ))}
    </div>
  );
}
