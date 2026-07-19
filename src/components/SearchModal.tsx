import { useState, useEffect, useRef } from "react";
import { useAppStore } from "@/context/AppContext";
import { PRODUCTS, formatINR } from "@/lib/products";
import { Link } from "@tanstack/react-router";
import { Search, X, Flame } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function SearchModal() {
  const { searchOpen, setSearchOpen } = useAppStore();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Autofocus input when modal opens
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery(""); // Reset query when opening
      document.body.style.overflow = "hidden"; // Prevent body scroll
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [searchOpen]);

  // Filter products based on search term
  const filteredProducts = query.trim()
    ? PRODUCTS.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase()) ||
          product.material.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleClose = () => setSearchOpen(false);

  // Quick search tags
  const popularTags = ["Cooker", "Kadai", "Fry Pan", "Stainless Steel", "Hard Anodized"];

  return (
    <AnimatePresence>
      {searchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-20 md:pt-32 px-4 bg-primary/40 backdrop-blur-md"
          onClick={handleClose}
        >
          <motion.div
            initial={{ y: -30, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -30, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="w-full max-w-2xl bg-background rounded-3xl shadow-luxe border border-border p-6 md:p-8 overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Stop closing when clicking inside
          >
            {/* Search Input Area */}
            <div className="flex items-center gap-4 border-b border-border pb-4 relative">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search premium cookware (e.g., steel cooker, kadai)..."
                className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground text-base md:text-lg focus:outline-none"
              />
              <button
                onClick={handleClose}
                className="p-1 rounded-full hover:bg-muted transition text-muted-foreground hover:text-foreground"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Popular Searches */}
            {!query.trim() && (
              <div className="mt-6 animate-fade-in">
                <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  <Flame className="w-3.5 h-3.5 text-accent" />
                  Popular Tags
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-4 py-2 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground text-sm transition-all duration-200"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Results Area */}
            {query.trim() && (
              <div className="mt-6 max-h-[360px] overflow-y-auto pr-2 space-y-3">
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                  Matching Products ({filteredProducts.length})
                </div>

                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      onClick={handleClose}
                      className="flex items-center gap-4 p-3 rounded-2xl border border-transparent hover:border-border hover:bg-muted/50 transition-all duration-300 group"
                    >
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display font-extrabold text-foreground text-sm md:text-base group-hover:text-primary truncate">
                          {product.name}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-0.5 truncate">
                          {product.material} · {product.size}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="font-display font-extrabold text-foreground text-sm">
                          {formatINR(product.price)}
                        </span>
                        {product.bestSeller && (
                          <div className="text-[10px] font-bold text-accent mt-0.5">
                            Bestseller
                          </div>
                        )}
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="py-12 text-center text-muted-foreground text-sm">
                    No cookware found matching "<span className="font-semibold">{query}</span>"
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
