import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import manufacturing from "@/assets/manufacturing.jpg";
import lifestyle from "@/assets/lifestyle-kitchen.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rays Maker" },
      {
        name: "description",
        content:
          "Rays Maker is a premium Indian cookware brand — designed, manufactured and quality-tested in India.",
      },
      { property: "og:title", content: "About Rays Maker" },
      { property: "og:description", content: "Made in India cookware, engineered for every kitchen." },
      { property: "og:image", content: lifestyle },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="pt-32 md:pt-40">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-4xl">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.25em] text-accent font-medium mb-4">
              About Rays Maker
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display font-extrabold text-primary text-[clamp(2.6rem,6vw,5.5rem)] leading-[0.98] tracking-tight text-balance">
              A quiet obsession with how a kitchen should feel.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              For over two decades we have worked with metal, heat and human hands to build cookware
              that earns its place on your stove. No shortcuts. No cosmetics over craft. Just tools
              that quietly do their job, year after year.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Editorial image */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2rem] overflow-hidden aspect-[16/9] shadow-luxe"
        >
          <img
            src={manufacturing}
            alt="Rays Maker manufacturing floor in India"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </section>

      {/* Pillars */}
      <section className="py-28 lg:py-36 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-3 gap-16">
          {[
            ["Vision", "To make Indian cookware synonymous with global craftsmanship."],
            ["Mission", "Design, test and manufacture cookware that lasts a lifetime of home cooking."],
            ["Made in India", "Every product designed, engineered and finished within our own facility."],
          ].map(([t, d], i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <div className="text-accent font-display font-extrabold text-6xl mb-6">
                0{i + 1}
              </div>
              <h3 className="font-display font-extrabold text-primary text-2xl mb-4">{t}</h3>
              <p className="text-muted-foreground leading-relaxed">{d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Split */}
      <section className="py-28 lg:py-36 px-6 lg:px-10 bg-surface">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-luxe order-2 lg:order-1">
            <img src={lifestyle} alt="Modern Indian kitchen" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-[11px] uppercase tracking-[0.25em] text-accent font-medium mb-4">
              Innovation with restraint
            </p>
            <h2 className="font-display font-extrabold text-primary text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.05] tracking-tight text-balance">
              We design what a kitchen actually needs.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl">
              We aren't chasing trends. We test every prototype in real Indian kitchens across
              cities, cuisines and climates before it earns the Rays Maker mark.
            </p>
            <Link
              to="/shop"
              className="mt-10 inline-flex items-center gap-2 rounded-2xl navy-bg text-primary-foreground px-7 py-4 text-sm font-medium shadow-luxe"
            >
              Shop the range <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
