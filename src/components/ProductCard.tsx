import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Heart, ShoppingBag } from "lucide-react";
import { formatINR, type Product } from "@/lib/products";
import { useAppStore } from "@/context/AppContext";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { toggleWishlist, isWishlisted, addToCart } = useAppStore();
  const wishlisted = isWishlisted(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group hover-lift w-full min-w-0"
    >
      <Link
        to="/product/$id"
        params={{ id: product.id }}
        className="block rounded-2xl overflow-hidden bg-surface pb-4 w-full"
      >
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-white">
          {product.bestSeller && (
            <span className="absolute top-3 left-3 z-10 rounded-full bg-primary text-primary-foreground text-[9px] uppercase tracking-widest px-2.5 py-1 font-medium">
              Best Seller
            </span>
          )}
          <button
            className="absolute top-3 right-3 z-10 w-9 h-9 grid place-items-center rounded-full glass hover:bg-white transition"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
            aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart
              className={`w-4 h-4 transition-all duration-300 ${
                wishlisted ? "fill-accent text-accent scale-110" : "text-muted-foreground hover:text-foreground"
              }`}
              strokeWidth={wishlisted ? 2.5 : 1.75}
            />
          </button>
          <motion.img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 22%" }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        {/* Info */}
        <div className="px-3 sm:px-4 pt-4 pb-0 min-w-0">
          {/* Category + Price row */}
          <div className="flex items-start justify-between gap-2 min-w-0">
            <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground flex-shrink-0">
              {product.category}
            </p>
            <span className="font-display font-extrabold text-primary text-sm flex-shrink-0">
              {formatINR(product.price)}
            </span>
          </div>

          {/* Name */}
          <h3 className="mt-1 font-display font-extrabold text-primary text-sm sm:text-base leading-tight line-clamp-2 min-w-0">
            {product.name}
          </h3>

          <p className="mt-1 text-xs text-muted-foreground line-clamp-1">{product.tagline}</p>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product);
            }}
            className="mt-3 w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white hover:bg-primary hover:text-primary-foreground text-xs font-semibold text-primary border border-primary/10 hover:border-primary transition-all duration-300 shadow-soft"
          >
            <ShoppingBag className="w-3.5 h-3.5 flex-shrink-0" />
            Add to Cart
          </button>
        </div>
      </Link>
    </motion.div>
  );
}
