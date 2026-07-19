import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Dealer Inquiry — Rays Maker" },
      {
        name: "description",
        content:
          "Reach the Rays Maker team for support, dealer inquiries or catalogue requests.",
      },
      { property: "og:title", content: "Contact Rays Maker" },
      { property: "og:description", content: "Talk to us about products, dealership or press." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [tab, setTab] = useState<"general" | "dealer">("general");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-32 md:pt-40 pb-24">
      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.25em] text-accent font-medium mb-4">
              Get in touch
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display font-extrabold text-primary text-[clamp(2.4rem,5vw,4.5rem)] leading-[1] tracking-tight text-balance">
              We'd love to hear from you.
            </h1>
          </Reveal>
        </div>

        <div className="mt-16 grid lg:grid-cols-[1fr_1.3fr] gap-12">
          {/* Left — contact info */}
          <div className="space-y-6">
            <ContactCard
              icon={Phone}
              title="Call us"
              lines={["+91 98000 00000", "Mon – Sat · 10am – 7pm IST"]}
            />
            <ContactCard
              icon={Mail}
              title="Email"
              lines={["hello@raysmaker.in", "dealers@raysmaker.in"]}
            />
            <ContactCard
              icon={MapPin}
              title="Factory & Office"
              lines={["Industrial Estate, Ludhiana", "Punjab, India — 141001"]}
            />

            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-surface border border-border grid place-items-center text-muted-foreground text-sm">
              Google Maps embed placeholder
            </div>
          </div>

          {/* Right — form */}
          <div className="rounded-3xl border border-border bg-white p-8 md:p-10 shadow-soft">
            <div className="inline-flex rounded-full bg-surface p-1 mb-8">
              {(["general", "dealer"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    setTab(t);
                    setSubmitted(false);
                  }}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                    tab === t ? "bg-primary text-primary-foreground" : "text-foreground/70"
                  }`}
                >
                  {t === "general" ? "General inquiry" : "Dealer inquiry"}
                </button>
              ))}
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-16 text-center"
              >
                <div className="w-14 h-14 rounded-full navy-bg text-white grid place-items-center mx-auto mb-6">
                  <Send className="w-5 h-5" />
                </div>
                <h3 className="font-display font-extrabold text-primary text-2xl">
                  Message received.
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Our team will reach out within 48 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="grid gap-5"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Name" name="name" required />
                  <Field label={tab === "dealer" ? "Business name" : "Email"} name="secondary" required />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Phone" name="phone" type="tel" required />
                  <Field label="City" name="city" required />
                </div>
                {tab === "dealer" && (
                  <Field label="GST / Business ID (optional)" name="gst" />
                )}
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    {tab === "dealer" ? "Tell us about your business" : "Message"}
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm focus:outline-none focus:border-primary/40 transition"
                    placeholder={tab === "dealer" ? "Region, existing brands, retail footprint..." : "How can we help?"}
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl navy-bg text-primary-foreground px-7 py-4 text-sm font-medium shadow-luxe hover:shadow-soft transition"
                >
                  Send message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactCard({
  icon: Icon,
  title,
  lines,
}: {
  icon: typeof Phone;
  title: string;
  lines: string[];
}) {
  return (
    <div className="rounded-3xl border border-border bg-white p-6 flex items-start gap-4 hover-lift">
      <div className="w-11 h-11 rounded-2xl navy-bg text-white grid place-items-center flex-shrink-0">
        <Icon className="w-5 h-5" strokeWidth={1.75} />
      </div>
      <div>
        <h3 className="font-display font-extrabold text-primary text-lg">{title}</h3>
        {lines.map((l) => (
          <p key={l} className="text-muted-foreground text-sm mt-0.5">
            {l}
          </p>
        ))}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm text-muted-foreground mb-2 block">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm focus:outline-none focus:border-primary/40 transition"
      />
    </div>
  );
}
