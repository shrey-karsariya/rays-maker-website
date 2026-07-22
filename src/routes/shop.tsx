import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Search, SlidersHorizontal } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS, type Product } from "@/lib/products";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — KitchStar Maker Premium Cookware" },
      { name: "description", content: "Browse pressure cookers, kadais, fry pans, sauce pans, tawas and cookware sets from KitchStar Maker." },
      { property: "og:title", content: "Shop KitchStar Maker Cookware" },
      { property: "og:description", content: "Premium Indian cookware — engineered, tested, guaranteed." },
    ],
  }),
  component: Shop,
});

const CATEGORY_OPTIONS = [
  "All",
  "Pressure Cooker",
  "Kadai",
  "Fry Pan",
  "Sauce Pan",
  "Tawa",
  "Cookware Set",
  "Accessories",
] as const;

const MATERIALS = ["All", "Stainless Steel", "Aluminium", "Hard Anodized", "Cast Iron"] as const;
const SORTS = ["Featured", "Price: Low → High", "Price: High → Low"] as const;

function Shop() {
  const [category, setCategory] = useState<(typeof CATEGORY_OPTIONS)[number]>("All");
  const [material, setMaterial] = useState<(typeof MATERIALS)[number]>("All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<(typeof SORTS)[number]>("Featured");

  const filtered = useMemo(() => {
    let list: Product[] = PRODUCTS.slice();
    if (category !== "All") list = list.filter((p) => p.category === category);
    if (material !== "All") list = list.filter((p) => p.material === material);
    if (q.trim()) {
      const s = q.toLowerCase();
      list = list.filter(
        (p) => p.name.toLowerCase().includes(s) || p.tagline.toLowerCase().includes(s),
      );
    }
    if (sort === "Price: Low → High") list.sort((a, b) => a.price - b.price);
    if (sort === "Price: High → Low") list.sort((a, b) => b.price - a.price);
    return list;
  }, [category, material, q, sort]);

  return (
    <div className="pt-28 md:pt-36 pb-16 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="max-w-3xl mb-8">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.25em] text-accent font-medium mb-3">
              The Full Range
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display font-extrabold text-primary text-[clamp(2rem,5vw,4.5rem)] leading-[1] tracking-tight text-balance">
              Shop the collection.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted-foreground text-base max-w-2xl leading-relaxed">
              Every piece designed, tested and built in India for the way we actually cook.
            </p>
          </Reveal>
        </div>

        {/* Category Filter — horizontal scroll on mobile */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          {CATEGORY_OPTIONS.map((c) => {
            const active = c === category;
            return (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition ${
                  active
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-white text-foreground border-border hover:border-primary/40"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Search + Sort row */}
        <div className="mt-3 flex items-center gap-2 flex-wrap">
          <div className="relative flex-1 min-w-0 max-w-xs">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search..."
              className="pl-9 pr-3 py-2 rounded-full bg-surface border border-border text-sm w-full focus:outline-none focus:border-primary/40 transition"
            />
          </div>
          <select
            value={material}
            onChange={(e) => setMaterial(e.target.value as (typeof MATERIALS)[number])}
            className="rounded-full bg-white border border-border px-3 py-2 text-xs focus:outline-none focus:border-primary/40"
          >
            {MATERIALS.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as (typeof SORTS)[number])}
            className="rounded-full bg-white border border-border px-3 py-2 text-xs focus:outline-none focus:border-primary/40"
          >
            {SORTS.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <span className="text-xs text-muted-foreground ml-auto flex-shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5 inline mr-1" />
            {filtered.length} items
          </span>
        </div>

        {/* Product Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 text-center py-16 rounded-3xl bg-surface"
          >
            <p className="font-display font-extrabold text-primary text-xl">No matches found.</p>
            <p className="mt-2 text-muted-foreground text-sm">Try a different category or search term.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
