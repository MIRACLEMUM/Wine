// src/components/ProductsGrid.tsx
import { useState, useEffect, useRef, useMemo } from "react";
import { products } from "../data/products";
import { ProductCard } from "./ProductCard";

const categories = ["All", "Wine", "Champagne", "Gin", "Whisky"];

interface ProductsGridProps {
  searchQuery?: string;
}

export const ProductsGrid = ({ searchQuery = "" }: ProductsGridProps) => {
  const [filter, setFilter] = useState("All");

  const productRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Memoized filtered products
  const filteredProducts = useMemo(() => {
    let list =
      filter === "All"
        ? products
        : products.filter((p) => p.category === filter);

    if (searchQuery.trim() !== "") {
      list = list.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return list;
  }, [filter, searchQuery]);

  // 🔥 Effect ONLY handles scrolling + highlight (no setState here)
  useEffect(() => {
    if (searchQuery.trim() === "" || filteredProducts.length === 0) return;

    const index = products.findIndex((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const ref = productRefs.current[index];
    if (!ref) return;

    ref.scrollIntoView({ behavior: "smooth", block: "center" });
    ref.classList.add("ring-2", "ring-amber-400");

    const timeout = setTimeout(() => {
      ref.classList.remove("ring-2", "ring-amber-400");
    }, 1500);

    return () => clearTimeout(timeout);
  }, [filteredProducts, searchQuery]);

  return (
    <section id="products" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-white mb-4">Our Collection</h2>
          <p className="text-gray-400 text-lg mb-8">
            Handpicked selections from around the world
          </p>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  filter === cat
                    ? "bg-amber-500 text-black"
                    : "bg-zinc-900 text-gray-300 hover:bg-zinc-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              ref={(el) => {
                productRefs.current[product.id] = el;
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
