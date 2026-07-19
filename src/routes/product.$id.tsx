import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, Check, Heart, ShoppingBag, Truck, ShieldCheck, RefreshCw } from "lucide-react";
import { formatINR, getProduct, PRODUCTS, type Product } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { useAppStore } from "@/context/AppContext";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Rays Maker` },
          { name: "description", content: loaderData.product.description },
          { property: "og:title", content: loaderData.product.name },
          { property: "og:description", content: loaderData.product.tagline },
          { property: "og:image", content: loaderData.product.image },
        ]
      : [{ title: "Product — Rays Maker" }],
  }),
  component: ProductPage,
  notFoundComponent: () => (
    <div className="pt-40 text-center pb-24">
      <h1 className="font-display font-extrabold text-primary text-4xl">Product not found</h1>
      <Link to="/shop" className="mt-6 inline-block text-accent">
        Back to shop →
      </Link>
    </div>
  ),
});

function ProductPage() {
  const { product } = Route.useLoaderData() as { product: Product };
  const [qty, setQty] = useState(1);
  const { toggleWishlist, isWishlisted, addToCart } = useAppStore();
  const wishlisted = isWishlisted(product.id);
  
  const related = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);
  const finalRelated = related.length ? related : PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="pt-32 md:pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Breadcrumbs */}
        <div className="text-sm text-muted-foreground flex items-center gap-2 mb-10">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary">Shop</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-28 self-start"
          >
            <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-white shadow-soft">
              <motion.img
                key={product.image}
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 22%" }}
              />
              <div className="absolute bottom-4 left-4 rounded-full glass px-3 py-1.5 text-[10px] uppercase tracking-widest text-primary">
                360° viewer coming soon
              </div>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden bg-white border border-border">
                  <img src={product.image} alt="" className="w-full h-full object-cover opacity-80" style={{ objectPosition: "center 22%" }} loading="lazy" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-accent font-medium">
              {product.category}
            </p>
            <h1 className="mt-3 font-display font-extrabold text-primary text-4xl md:text-5xl leading-[1.05] tracking-tight text-balance">
              {product.name}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{product.tagline}</p>

            <div className="mt-8 flex items-baseline gap-3">
              <span className="font-display font-extrabold text-primary text-3xl">
                {formatINR(product.price)}
              </span>
              <span className="text-sm text-muted-foreground">Inclusive of all taxes</span>
            </div>

            <p className="mt-8 leading-relaxed text-foreground/80">{product.description}</p>

            {/* Quick specs */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <SpecPill label="Material" value={product.material} />
              <SpecPill label="Size" value={product.size} />
              <SpecPill label="Warranty" value={product.specs.Warranty ?? "1 Year"} />
            </div>

            {/* Qty + CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center rounded-2xl border border-border bg-white overflow-hidden">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-12 h-12 grid place-items-center hover:bg-muted"
                >
                  −
                </button>
                <span className="w-12 text-center font-medium">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="w-12 h-12 grid place-items-center hover:bg-muted"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => addToCart(product, qty)}
                className="group inline-flex items-center gap-2 rounded-2xl navy-bg text-primary-foreground px-7 py-4 text-sm font-medium shadow-luxe hover:shadow-soft transition"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to cart
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => toggleWishlist(product.id)}
                className="w-12 h-12 grid place-items-center rounded-2xl border border-border bg-white hover:border-primary/40 transition"
                aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart
                  className={`w-4 h-4 transition-all duration-300 ${
                    wishlisted ? "fill-accent text-accent scale-110" : "text-muted-foreground hover:text-foreground"
                  }`}
                  strokeWidth={wishlisted ? 2.5 : 1.75}
                />
              </button>
            </div>
            <button className="mt-3 inline-flex items-center gap-2 text-sm text-accent font-medium">
              Request bulk quote →
            </button>

            {/* Trust */}
            <div className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-border">
              {[
                [Truck, "Free shipping", "on orders ₹999+"],
                [ShieldCheck, "Warranty", "up to 10 years"],
                [RefreshCw, "Easy returns", "7-day window"],
              ].map(([Icon, t, s], i) => {
                const I = Icon as typeof Truck;
                return (
                  <div key={i} className="flex flex-col items-start gap-2">
                    <I className="w-5 h-5 text-primary" strokeWidth={1.75} />
                    <div>
                      <div className="text-sm font-medium text-primary">{t as string}</div>
                      <div className="text-xs text-muted-foreground">{s as string}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Features */}
            <div className="mt-12">
              <h3 className="font-display font-extrabold text-primary text-xl mb-4">Features</h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-foreground/80">
                    <span className="mt-1 w-5 h-5 rounded-full bg-primary/10 grid place-items-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" strokeWidth={2.5} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs */}
            <div className="mt-12">
              <h3 className="font-display font-extrabold text-primary text-xl mb-4">Specifications</h3>
              <dl className="divide-y divide-border border-y border-border">
                {Object.entries(product.specs).map(([k, v]) => (
                  <div key={k} className="flex justify-between py-4">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="font-medium text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>

        {/* Related */}
        <div className="mt-32">
          <h2 className="font-display font-extrabold text-primary text-3xl md:text-4xl mb-10">
            You might also like
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {finalRelated.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-white px-4 py-3">
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="text-sm font-medium text-primary mt-0.5">{value}</div>
    </div>
  );
}
