import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { type Product } from "@/lib/products";

export type CartItem = {
  product: Product;
  quantity: number;
};

type AppContextType = {
  cart: CartItem[];
  wishlist: string[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  clearCart: () => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  wishlistOpen: boolean;
  setWishlistOpen: (open: boolean) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount (safe for SSR)
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("rays_cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
      const storedWishlist = localStorage.getItem("rays_wishlist");
      if (storedWishlist) {
        setWishlist(JSON.parse(storedWishlist));
      }
    } catch (e) {
      console.error("Failed to load local storage store", e);
    }
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("rays_cart", JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to save cart to local storage", e);
    }
  }, [cart, isLoaded]);

  // Save wishlist to localStorage
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("rays_wishlist", JSON.stringify(wishlist));
    } catch (e) {
      console.error("Failed to save wishlist to local storage", e);
    }
  }, [wishlist, isLoaded]);

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { product, quantity }];
    });
    // Open cart automatically when item is added for a premium interactive feel
    setCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.includes(productId)) {
        return prevWishlist.filter((id) => id !== productId);
      }
      return [...prevWishlist, productId];
    });
  };

  const isWishlisted = (productId: string) => {
    return wishlist.includes(productId);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleWishlist,
        isWishlisted,
        clearCart,
        searchOpen,
        setSearchOpen,
        cartOpen,
        setCartOpen,
        wishlistOpen,
        setWishlistOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppStore() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppStore must be used within AppContextProvider");
  }
  return context;
}
