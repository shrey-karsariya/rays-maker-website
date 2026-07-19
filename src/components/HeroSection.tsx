import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "@tanstack/react-router";

import signatureCooker from "@/assets/product-pressure-cooker.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden hero-bg pt-24 md:pt-28">
      {/* Background cooking video loop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-25"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-vegetables-sauteing-in-a-pan-41603-large.mp4"
          type="video/mp4"
        />
      </video>
      {/* Light blur/glass overlay on top of video to keep text readable */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] z-0" />

      {/* Light rays & particles — clipped to section */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/4 w-[60vw] h-[120vh] bg-gradient-to-b from-white/70 to-transparent blur-3xl rotate-12 animate-ray" />
        <div
          className="absolute -bottom-40 right-0 w-[40vw] h-[100vh] bg-gradient-to-t from-accent/10 to-transparent blur-3xl -rotate-12 animate-ray"
          style={{ animationDelay: "-6s" }}
        />
        {/* Floating particles */}
        {[...Array(14)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/20"
            style={{
              left: `${(i * 73) % 100}%`,
              top: `${(i * 41) % 100}%`,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{
              duration: 6 + (i % 5),
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-8 items-center pb-16 z-10">
        {/* Copy */}
        <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left pt-8 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wide text-primary mb-6 md:mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            New Signature Series · Made in India
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-extrabold text-primary text-[clamp(2.1rem,6vw,5.25rem)] leading-[0.98] tracking-tight text-balance"
          >
            Crafted for every
            <br />
            <span className="italic font-normal font-[var(--font-sans)] text-primary/70">
              Indian
            </span>{" "}
            kitchen.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-5 max-w-lg text-sm md:text-lg text-muted-foreground leading-relaxed mx-auto lg:mx-0"
          >
            Premium cookware engineered for performance, safety, and the everyday
            heat of home cooking. Because the best never lies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full"
          >
            <Link
              to="/shop"
              className="group inline-flex items-center gap-2 rounded-2xl navy-bg text-primary-foreground px-6 py-3.5 text-sm font-medium shadow-luxe hover:shadow-soft transition-all"
            >
              Explore Collection
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-2xl border border-primary/15 bg-white px-6 py-3.5 text-sm font-medium text-primary hover:border-primary/40 transition-all"
            >
              <Download className="w-4 h-4" />
              Request Catalogue
            </Link>
          </motion.div>
        </div>

        {/* Premium Cooker Showcase Card */}
        <div className="relative flex items-center justify-center h-[38svh] sm:h-[46svh] lg:h-[68svh] lg:-mr-10 py-4 lg:py-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-luxe border border-white/50 animate-float-slow hover-lift group cursor-pointer"
          >
            <img
              src={signatureCooker}
              alt="Signature Rays Maker Cooker"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay dark gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 text-white z-10">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-accent text-[9px] font-extrabold tracking-widest uppercase mb-2 shadow-soft">
                Signature Product
              </span>
              <h3 className="font-display font-extrabold text-lg md:text-2xl leading-tight">
                Tri-Ply Encapsulated Cooker
              </h3>
              <p className="text-xs text-white/90 mt-1 font-medium leading-relaxed">
                Mirror-polished SS 304 food-grade steel with triple safety valve.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
