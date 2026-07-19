import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, ArrowUpRight } from "lucide-react";
import raysLogo from "@/assets/rays-logo-transparent.png";

export function Footer() {
  return (
    <footer className="mt-32 navy-bg text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-10">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="inline-flex bg-white/95 px-4 py-2.5 rounded-2xl shadow-soft items-center justify-center mb-6 backdrop-blur transition-transform duration-300 hover:scale-102">
              <img
                src={raysLogo}
                alt="Rays Maker Logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-white/70 max-w-sm leading-relaxed">
              Premium cookware engineered in India for the way we actually cook — with care,
              character, and heat that never lies.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex items-center gap-2 rounded-2xl bg-white/10 p-1.5 backdrop-blur-md max-w-md"
            >
              <input
                type="email"
                required
                placeholder="Your email for new drops"
                className="flex-1 bg-transparent px-4 py-2.5 text-sm placeholder:text-white/50 focus:outline-none"
              />
              <button className="rounded-xl bg-accent px-4 py-2.5 text-sm font-medium hover:opacity-90 transition">
                Subscribe
              </button>
            </form>
          </div>

          <FooterCol
            title="Shop"
            links={[
              ["Pressure Cookers", "/shop"],
              ["Kadai", "/shop"],
              ["Fry Pan", "/shop"],
              ["Sauce Pan", "/shop"],
              ["Cookware Sets", "/shop"],
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              ["About", "/about"],
              ["Manufacturing", "/about"],
              ["Contact", "/contact"],
              ["Dealer Inquiry", "/contact"],
            ]}
          />
          <FooterCol
            title="Support"
            links={[
              ["Warranty", "/contact"],
              ["Care Guide", "/contact"],
              ["Shipping", "/contact"],
              ["Returns", "/contact"],
            ]}
          />
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Rays Maker. Crafted in India.
          </p>
          <div className="flex items-center gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 grid place-items-center rounded-full bg-white/10 hover:bg-accent transition"
              >
                <Icon className="w-4 h-4" strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="font-display font-extrabold text-sm uppercase tracking-widest text-white/90 mb-5">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link
              to={to}
              className="group inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition"
            >
              {label}
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
