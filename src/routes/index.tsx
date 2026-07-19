import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Award, Flame, Leaf, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import { useCountUp } from "@/hooks/useCountUp";
import manufacturing from "@/assets/manufacturing.jpg";
import lifestyle from "@/assets/lifestyle-kitchen.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rays Maker — Premium Cookware, Crafted in India" },
      {
        name: "description",
        content:
          "Signature stainless steel, aluminium and hard anodized cookware built for the Indian kitchen.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const best = PRODUCTS.filter((p) => p.bestSeller);
  return (
    <>
      <HeroSection />
      <StatsBanner />
      <Categories />
      <BestSellers products={best} />
      <WhyUs />
      <ManufacturingTimeline />
      <FeatureBanner />
      <Testimonials />
      <FAQ />
      <DealerCTA />
    </>
  );
}

function StatCard({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const { ref, count } = useCountUp(value, 1800);
  const display =
    value >= 1000000
      ? `${Math.round(count / 100000) / 10}M`
      : count;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay }}
      className="flex flex-col items-center justify-center text-center p-6 rounded-3xl bg-surface border border-border"
    >
      <span className="font-display font-extrabold text-primary text-3xl md:text-4xl">
        {display}{suffix}
      </span>
      <span className="text-xs text-muted-foreground mt-2 uppercase tracking-widest">{label}</span>
    </motion.div>
  );
}

function StatsBanner() {
  return (
    <section className="py-14 px-5 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard value={25}      suffix="+" label="Years of Crafting"  delay={0}    />
        <StatCard value={300}     suffix="+" label="Retail Partners"    delay={0.08} />
        <StatCard value={50}      suffix="+" label="Product Variants"   delay={0.16} />
        <StatCard value={1000000} suffix="+" label="Happy Kitchens"     delay={0.24} />
      </div>
    </section>
  );
}


function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-3xl text-center md:text-left mx-auto md:mx-0 flex flex-col items-center md:items-start">
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.25em] text-accent font-medium mb-4">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display font-extrabold text-primary text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.02] tracking-tight text-balance">
          {title}
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed text-center md:text-left">{desc}</p>
        </Reveal>
      )}
    </div>
  );
}

function Categories() {
  return (
    <section className="py-14 lg:py-20 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-8 mb-14">
          <SectionHeader
            eyebrow="Collections"
            title="Cookware, considered."
            desc="Every piece begins with the same question — how will this feel in a real Indian kitchen, every day, for years?"
          />
          <Link
            to="/shop"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {CATEGORIES.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <Link
                to="/shop"
                className="block relative overflow-hidden rounded-3xl aspect-[4/5] bg-surface hover-lift"
              >
                <motion.img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between text-white">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/70 mb-1">
                      Shop
                    </p>
                    <h3 className="font-display font-extrabold text-2xl">{c.name}</h3>
                  </div>
                  <div className="w-10 h-10 grid place-items-center rounded-full glass text-primary opacity-0 group-hover:opacity-100 transition">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BestSellers({ products }: { products: typeof PRODUCTS }) {
  return (
    <section className="py-14 lg:py-20 px-4 sm:px-6 lg:px-10 bg-surface">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <SectionHeader
            eyebrow="Best Sellers"
            title="What Indian kitchens keep coming back for."
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: ShieldCheck, title: "Food-grade materials", body: "SS 304 & PFOA-free coatings, tested to serve you every day." },
    { icon: Wrench, title: "Heavy gauge build", body: "Warp-resistant bodies with encapsulated tri-ply bases." },
    { icon: Flame, title: "Induction ready", body: "Engineered for modern cooktops without losing gas-flame soul." },
    { icon: Sparkles, title: "Modern design", body: "Balanced weight, honest lines, finishes that stay beautiful." },
    { icon: Leaf, title: "Made for Indian food", body: "Built for tadkas, rotis, biryanis and everything in between." },
    { icon: Award, title: "10-year assurance", body: "Backed by a decade-long warranty across our signature range." },
  ];
  return (
    <section className="py-14 lg:py-20 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <SectionHeader
            eyebrow="Why Rays Maker"
            title="Six reasons we're on this stove."
            desc="Because a kitchen tool should earn its place — not fill a cupboard."
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="group p-8 rounded-3xl border border-border bg-white hover-lift"
            >
              <div className="w-12 h-12 rounded-2xl navy-bg grid place-items-center text-white mb-6 group-hover:scale-105 transition">
                <it.icon className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <h3 className="font-display font-extrabold text-primary text-xl mb-2">{it.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{it.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ManufacturingTimeline() {
  const steps = [
    ["01", "Raw Material", "Certified 304 steel, virgin aluminium sourced with traceability."],
    ["02", "Precision Manufacturing", "CNC forming, deep-drawn bodies, encapsulated bases."],
    ["03", "Quality Testing", "Pressure, thermal & finish testing on every batch."],
    ["04", "Finishing", "Hand-polished mirror surfaces, anodized coating cures."],
    ["05", "Packaging", "Protective, recyclable, gift-ready packaging."],
    ["06", "Delivery", "Pan-India shipping to dealers and doorsteps."],
  ] as const;
  return (
    <section className="relative py-14 lg:py-20 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{ backgroundImage: `url(${manufacturing})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-primary/85" aria-hidden />
      <div className="relative mx-auto max-w-7xl text-white">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.25em] text-accent font-medium mb-4">
            Manufacturing Excellence
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-extrabold text-white text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.02] tracking-tight max-w-3xl">
            From raw metal to a cooker worth keeping.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(([n, t, d], i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="p-8 rounded-3xl glass-dark backdrop-blur-md"
            >
              <div className="font-display font-extrabold text-white/40 text-4xl mb-6">{n}</div>
              <h3 className="font-display font-extrabold text-white text-xl mb-2">{t}</h3>
              <p className="text-white/70 leading-relaxed">{d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureBanner() {
  return (
    <section className="py-14 lg:py-20 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-[2rem] overflow-hidden aspect-video md:aspect-[4/5] shadow-luxe">
          <img
            src={lifestyle}
            alt="Warm Indian kitchen with Rays Maker cookware"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div>
          <SectionHeader
            eyebrow="The Signature Series"
            title="The one set that quietly changes the way you cook."
            desc="Triply construction. Balanced weight. Handles that feel considered. A five-piece collection designed to become the backbone of your kitchen."
          />
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-2xl navy-bg text-primary-foreground px-7 py-4 text-sm font-medium shadow-luxe"
              >
                Shop the set <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-2xl border border-primary/15 px-7 py-4 text-sm font-medium text-primary hover:border-primary/40 transition"
              >
                Our story
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      q: "The tawa alone changed my morning rotis. Even heat, forever finish.",
      n: "Anjali M.",
      c: "Pune",
    },
    {
      q: "You can feel the weight and the balance. This is what cookware should feel like.",
      n: "Rohit S.",
      c: "Bengaluru",
    },
    {
      q: "Bought the signature set as a wedding gift — still looks brand new after 3 years.",
      n: "Priya & Karan",
      c: "Delhi",
    },
  ];
  return (
    <section className="py-14 lg:py-20 px-4 sm:px-6 lg:px-10 bg-surface">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <SectionHeader eyebrow="Reviews" title="A kitchen full of quiet believers." />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.figure
              key={t.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="p-8 rounded-3xl bg-white border border-border hover-lift"
            >
              <div className="text-accent font-display font-extrabold text-4xl leading-none mb-4">
                &ldquo;
              </div>
              <blockquote className="text-primary text-lg leading-relaxed font-display font-semibold">
                {t.q}
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{t.n}</span> · {t.c}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    ["Is Rays Maker cookware induction compatible?", "Our stainless steel and hard anodized ranges are compatible with both gas and induction. Product pages list compatibility per SKU."],
    ["What warranty do you offer?", "Our Signature Stainless range carries a 10-year warranty. Hard anodized and aluminium ranges carry 2–5 years."],
    ["Do you ship pan-India?", "Yes. We ship across India with 3–7 day delivery to most PIN codes."],
    ["How do I become a dealer?", "Submit a dealer inquiry on our Contact page — our team will reach out within 48 hours."],
  ];
  return (
    <section className="py-14 lg:py-20 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <SectionHeader eyebrow="FAQ" title="Answers, without the small print." />
        </div>
        <div className="divide-y divide-border border-y border-border">
          {items.map(([q, a], i) => (
            <motion.details
              key={q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group py-6"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-6 list-none">
                <span className="font-display font-extrabold text-primary text-lg">{q}</span>
                <span className="w-9 h-9 rounded-full border border-border grid place-items-center group-open:rotate-45 transition">
                  <span className="block w-3 h-[1.5px] bg-primary" />
                  <span className="block w-[1.5px] h-3 bg-primary -mt-3" />
                </span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">{a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}

function DealerCTA() {
  return (
    <section className="px-6 lg:px-10 py-16">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] navy-bg text-white p-10 md:p-16 shadow-luxe">
        <div className="absolute -top-24 -right-16 w-96 h-96 rounded-full bg-accent/40 blur-3xl" aria-hidden />
        <div className="relative grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/60 mb-4">
              Dealer & Distributor
            </p>
            <h2 className="font-display font-extrabold text-white text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.05] tracking-tight text-balance mx-auto md:mx-0">
              Stock India's next premium cookware brand.
            </h2>
          </div>
          <div className="justify-self-center md:justify-self-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-white text-primary px-8 py-4 text-sm font-medium hover:bg-white/90 transition"
            >
              Start a dealer inquiry <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
