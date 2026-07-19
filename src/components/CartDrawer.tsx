import { useAppStore } from "@/context/AppContext";
import { formatINR } from "@/lib/products";
import { X, Minus, Plus, Trash2, ShoppingBag, MessageSquareCode } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";

export function CartDrawer() {
  const { cart, cartOpen, setCartOpen, updateQuantity, removeFromCart } = useAppStore();

  // Prevent background scrolling when cart drawer is open
  useEffect(() => {
    if (cartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [cartOpen]);

  const handleClose = () => setCartOpen(false);

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Generate WhatsApp order message
  const generateWhatsAppLink = () => {
    let message = `Hello Rays Maker! I would like to place an order for the following cookware:\n\n`;
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}* (${item.product.size})\n   Qty: ${item.quantity} x ${formatINR(item.product.price)} = ${formatINR(item.product.price * item.quantity)}\n`;
    });
    message += `\n*Subtotal: ${formatINR(subtotal)}*\n\nPlease guide me on the next steps for payment and shipping. Thank you!`;
    
    return `https://wa.me/919999999999?text=${encodeURIComponent(message)}`;
  };

  return (
    <AnimatePresence>
      {cartOpen && (
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
                <ShoppingBag className="w-5 h-5 text-primary" />
                <h3 className="font-display font-extrabold text-foreground text-lg">
                  Shopping Cart ({totalItems})
                </h3>
              </div>
              <button
                onClick={handleClose}
                className="p-1 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 border-b border-border pb-6 last:border-b-0 last:pb-0"
                  >
                    {/* Item Image */}
                    <div className="w-20 h-20 bg-white rounded-2xl overflow-hidden flex-shrink-0 border border-border">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: "center 22%" }}
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <h4 className="font-display font-extrabold text-foreground text-sm leading-snug truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {item.product.material} · {item.product.size}
                        </p>
                      </div>

                      {/* Quantity Controls & Action */}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-border rounded-xl bg-muted p-1">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 rounded-lg hover:bg-background text-muted-foreground hover:text-foreground transition"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-8 text-center text-sm font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 rounded-lg hover:bg-background text-muted-foreground hover:text-foreground transition"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-2 text-muted-foreground hover:text-accent rounded-xl hover:bg-muted transition"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Item Price */}
                    <div className="text-right flex flex-col justify-between">
                      <span className="font-display font-extrabold text-foreground text-sm">
                        {formatINR(item.product.price * item.quantity)}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        {formatINR(item.product.price)} each
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-muted grid place-items-center mb-4">
                    <ShoppingBag className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h4 className="font-display font-extrabold text-foreground text-base">
                    Your cart is empty
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1 max-w-xs">
                    Browse our premium cookware collection and add items to your cart.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-6 rounded-2xl bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition shadow-soft"
                  >
                    Start Shopping
                  </button>
                </div>
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-border bg-muted/30">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">Subtotal</span>
                  <span className="font-display font-extrabold text-foreground text-xl">
                    {formatINR(subtotal)}
                  </span>
                </div>
                <p className="text-[10px] text-muted-foreground leading-normal mb-6">
                  Shipping, taxes, and discounts calculated at checkout. Order directly via WhatsApp for personalized customer support.
                </p>

                <div className="space-y-3">
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full rounded-2xl bg-[#25D366] text-white py-4 text-sm font-bold shadow-soft hover:bg-[#20ba5a] transition-all"
                  >
                    <MessageSquareCode className="w-4.5 h-4.5" />
                    Order via WhatsApp
                  </a>
                  <button
                    onClick={() => {
                      alert("Checkout simulation successful! Total order amount: " + formatINR(subtotal));
                      clearCart();
                      handleClose();
                    }}
                    className="w-full rounded-2xl bg-primary text-primary-foreground py-4 text-sm font-medium hover:opacity-95 transition-all"
                  >
                    Simulate Payment
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
