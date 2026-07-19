import { useAppStore } from "@/context/AppContext";
import { PRODUCTS, formatINR } from "@/lib/products";
import { X, Heart, ShoppingBag, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";

export function WishlistDrawer() {
  const {
    wishlist,
    wishlistOpen,
    setWishlistOpen,
    toggleWishlist,
    addToCart,
    setCartOpen,
  } = useAppStore();

  // Prevent background scrolling when wishlist is open
  useEffect(() => {
    if (wishlistOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [wishlistOpen]);

  const handleClose = () => setWishlistOpen(false);

  // Retrieve products in wishlist
  const wishlistedProducts = PRODUCTS.filter((product) => wishlist.includes(product.id));

  return (
    <AnimatePresence>
      {wishlistOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[110] flex justify-end bg-primary/30 backdrop-blur-sm"
          onClick={handleClose}
        >
          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="w-full max-w-md h-full bg-background flex flex-col shadow-2xl border-l border-border"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking panel
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-accent fill-accent" />
                <h3 className="font-display font-extrabold text-foreground text-lg">
                  My Wishlist ({wishlistedProducts.length})
                </h3>
              </div>
              <button
                onClick={handleClose}
                className="p-1 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition"
                aria-label="Close wishlist"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Wishlist Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {wishlistedProducts.length > 0 ? (
                wishlistedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex gap-4 border-b border-border pb-6 last:border-b-0 last:pb-0"
                  >
                    {/* Item Image */}
                    <div className="w-20 h-20 bg-white rounded-2xl overflow-hidden flex-shrink-0 border border-border">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: "center 22%" }}
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <h4 className="font-display font-extrabold text-foreground text-sm leading-snug truncate">
                          {product.name}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {product.material} · {product.size}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => {
                            addToCart(product);
                            handleClose(); // Close wishlist
                            setCartOpen(true); // Open cart drawer
                          }}
                          className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-primary text-primary-foreground text-[11px] font-semibold hover:opacity-90 transition shadow-soft"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Add to Cart
                        </button>
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="p-2 text-muted-foreground hover:text-accent rounded-xl hover:bg-muted transition"
                          aria-label="Remove from wishlist"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Item Price */}
                    <div className="text-right flex-shrink-0 flex flex-col justify-start">
                      <span className="font-display font-extrabold text-foreground text-sm">
                        {formatINR(product.price)}
                      </span>
                      {product.bestSeller && (
                        <span className="text-[9px] font-extrabold text-accent uppercase tracking-wider mt-1">
                          Best Seller
                        </span>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-muted grid place-items-center mb-4">
                    <Heart className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h4 className="font-display font-extrabold text-foreground text-base">
                    Wishlist is empty
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1 max-w-xs">
                    Tap the heart icon on any cookware product to save it here for later.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-6 rounded-2xl bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition shadow-soft"
                  >
                    Explore Products
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
