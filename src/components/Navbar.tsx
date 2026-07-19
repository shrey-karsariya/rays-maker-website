import { Link, useRouterState } from "@tanstack/react-router";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { Menu, Search, ShoppingBag, Heart, X } from "lucide-react";
import raysLogo from "@/assets/rays-logo-transparent.png";
import { useAppStore } from "@/context/AppContext";
import { SearchModal } from "@/components/SearchModal";
import { WishlistDrawer } from "@/components/WishlistDrawer";
import { CartDrawer } from "@/components/CartDrawer";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { cart, wishlist, setSearchOpen, setCartOpen, setWishlistOpen } = useAppStore();

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistCount = wishlist.length;

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass shadow-soft" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img
              src={raysLogo}
              alt="Rays Maker Logo"
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => {
              const active =
                item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-accent rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-0.5 md:gap-1">
            <button
              onClick={() => setSearchOpen(true)}
              className="grid w-10 h-10 place-items-center rounded-full hover:bg-muted transition text-foreground"
              aria-label="Search cookware"
            >
              <Search className="w-4.5 h-4.5" strokeWidth={1.75} />
            </button>
            <button
              onClick={() => setWishlistOpen(true)}
              className="grid w-10 h-10 place-items-center rounded-full hover:bg-muted transition relative text-foreground"
              aria-label="Open wishlist"
            >
              <Heart
                className={`w-4.5 h-4.5 transition-colors ${
                  wishlistCount > 0 ? "fill-accent text-accent animate-pulse" : "text-foreground"
                }`}
                strokeWidth={1.75}
              />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[9px] font-extrabold text-white animate-scale-in">
                  {wishlistCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setCartOpen(true)}
              className="w-10 h-10 grid place-items-center rounded-full hover:bg-muted transition relative text-foreground"
              aria-label="Open shopping cart"
            >
              <ShoppingBag className="w-4.5 h-4.5" strokeWidth={1.75} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[9px] font-extrabold text-white animate-scale-in">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden w-10 h-10 grid place-items-center rounded-full hover:bg-muted"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile sheet */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] md:hidden"
        >
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-md" onClick={() => setOpen(false)} />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", damping: 26, stiffness: 260 }}
            className="absolute right-0 top-0 bottom-0 w-[82%] max-w-sm bg-background p-8 flex flex-col"
          >
            <div className="flex items-center justify-between mb-10">
              <span className="font-display font-extrabold text-primary">Menu</span>
              <button onClick={() => setOpen(false)} aria-label="Close">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-display font-extrabold tracking-tight text-primary py-3 border-b border-border"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        </motion.div>
      )}

      {/* Search, Wishlist, and Cart Modals */}
      <SearchModal />
      <WishlistDrawer />
      <CartDrawer />
    </>
  );
}
