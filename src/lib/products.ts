import cooker from "@/assets/product-pressure-cooker.jpg";
import kadai from "@/assets/product-kadai.jpg";
import frypan from "@/assets/product-frypan.jpg";
import saucepan from "@/assets/product-saucepan.jpg";
import tawa from "@/assets/product-tawa.jpg";

// Real Screenshot Imports
import ss132252 from "@/assets/products/Screenshot 2026-07-19 132252.png";
import ss132317 from "@/assets/products/Screenshot 2026-07-19 132317.png";
import ss132323 from "@/assets/products/Screenshot 2026-07-19 132323.png";
import ss132329 from "@/assets/products/Screenshot 2026-07-19 132329.png";
import ss132336 from "@/assets/products/Screenshot 2026-07-19 132336.png";
import ss132341 from "@/assets/products/Screenshot 2026-07-19 132341.png";
import ss132347 from "@/assets/products/Screenshot 2026-07-19 132347.png";
import ss132352 from "@/assets/products/Screenshot 2026-07-19 132352.png";
import ss132401 from "@/assets/products/Screenshot 2026-07-19 132401.png";
import ss132407 from "@/assets/products/Screenshot 2026-07-19 132407.png";
import ss132414 from "@/assets/products/Screenshot 2026-07-19 132414.png";
import ss132423 from "@/assets/products/Screenshot 2026-07-19 132423.png";
import ss132430 from "@/assets/products/Screenshot 2026-07-19 132430.png";
import ss132458 from "@/assets/products/Screenshot 2026-07-19 132458.png";
import ss132505 from "@/assets/products/Screenshot 2026-07-19 132505.png";
import ss132520 from "@/assets/products/Screenshot 2026-07-19 132520.png";
import ss132525 from "@/assets/products/Screenshot 2026-07-19 132525.png";
import fyfHa1 from "@/assets/products/fyf (1).png";
import fyfHa5 from "@/assets/products/fyf (5).png";
import fyfAlu2 from "@/assets/products/fyf (2).png";
import fyfAlu3 from "@/assets/products/fyf (3).png";
import fyfAlu4 from "@/assets/products/fyf (4).png";
import ss132611 from "@/assets/products/Screenshot 2026-07-19 132611.png";
import ss132619 from "@/assets/products/Screenshot 2026-07-19 132619.png";
import ss132625 from "@/assets/products/Screenshot 2026-07-19 132625.png";
import ss132636 from "@/assets/products/Screenshot 2026-07-19 132636.png";
import ss132647 from "@/assets/products/Screenshot 2026-07-19 132647.png";

export type Product = {
  id: string;
  name: string;
  category:
    | "Pressure Cooker"
    | "Kadai"
    | "Fry Pan"
    | "Sauce Pan"
    | "Tawa"
    | "Cookware Set"
    | "Accessories";
  material: "Stainless Steel" | "Aluminium" | "Hard Anodized" | "Cast Iron";
  size: string;
  price: number;
  compatibility: ("Gas" | "Induction")[];
  image: string;
  tagline: string;
  bestSeller?: boolean;
  description: string;
  features: string[];
  specs: Record<string, string>;
};

export const PRODUCTS: Product[] = [
  // 1. Triply Stainless Steel Outer Lid Cookers (Straight)
  {
    id: "rm-triply-straight-125",
    name: "Triply Stainless Steel Pressure Cooker",
    category: "Pressure Cooker",
    material: "Stainless Steel",
    size: "1.25 Ltr.",
    price: 2249,
    compatibility: ["Gas", "Induction"],
    image: ss132252,
    tagline: "Triply Outer Lid Cooker - 1.25L",
    description: "Compact tri-ply pressure cooker featuring dual safety valves and an encapsulated sandwich base. Comes with Free Safety Valve and Gasket.",
    features: ["Triply 304 food-grade stainless steel", "Double safety valves", "Free Safety Valve (MRP 50) + Gasket (MRP 80)", "Induction & gas compatible"],
    specs: { Capacity: "1.25 Litres", Material: "SS 304 Tri-ply", Base: "Encapsulated Tri-ply", Warranty: "10 Years" },
  },
  {
    id: "rm-triply-straight-175",
    name: "Triply Stainless Steel Pressure Cooker",
    category: "Pressure Cooker",
    material: "Stainless Steel",
    size: "1.75 Ltr.",
    price: 2499,
    compatibility: ["Gas", "Induction"],
    image: ss132317,
    tagline: "Triply Outer Lid Cooker - 1.75L",
    description: "Premium tri-ply pressure cooker built for standard daily meals. Includes free replacement safety valve and durable gasket pack.",
    features: ["Triply stainless construction", "Even heat base", "Free Safety Valve (MRP 50) + Gasket (MRP 80)", "ISI Certified safety standards"],
    specs: { Capacity: "1.75 Litres", Material: "SS 304 Tri-ply", Base: "Encapsulated Tri-ply", Warranty: "10 Years" },
  },
  {
    id: "rm-triply-straight-20",
    name: "Triply Stainless Steel Pressure Cooker",
    category: "Pressure Cooker",
    material: "Stainless Steel",
    size: "2.0 Ltr.",
    price: 2649,
    compatibility: ["Gas", "Induction"],
    image: ss132423,
    tagline: "Triply Outer Lid Cooker - 2.0L",
    description: "Sturdy straight-shaped tri-ply pressure cooker with optimal height-to-width ratio. Includes free replacements.",
    features: ["Optimal heat conduction", "Anti-bulge base", "Free Safety Valve (MRP 50) + Gasket (MRP 90)", "Stainless steel safety lock"],
    specs: { Capacity: "2.0 Litres", Material: "SS 304 Tri-ply", Base: "Encapsulated Tri-ply", Warranty: "10 Years" },
  },
  {
    id: "rm-triply-straight-25",
    name: "Triply Stainless Steel Pressure Cooker",
    category: "Pressure Cooker",
    material: "Stainless Steel",
    size: "2.5 Ltr.",
    price: 2749,
    compatibility: ["Gas", "Induction"],
    image: ss132323,
    tagline: "Triply Outer Lid Cooker - 2.5L",
    description: "Mirror-polished tri-ply pressure cooker for small to medium families. Heavy duty performance.",
    features: ["Encapsulated tri-ply sandwich base", "High-safety vent weight", "Free Safety Valve (MRP 50) + Gasket (MRP 90)", "Cool-touch handles"],
    specs: { Capacity: "2.5 Litres", Material: "SS 304 Tri-ply", Base: "Encapsulated Tri-ply", Warranty: "10 Years" },
  },
  {
    id: "rm-triply-straight-30",
    name: "Triply Stainless Steel Pressure Cooker",
    category: "Pressure Cooker",
    material: "Stainless Steel",
    size: "3.0 Ltr.",
    price: 2999,
    compatibility: ["Gas", "Induction"],
    image: ss132329,
    tagline: "Triply Outer Lid Cooker - 3.0L",
    bestSeller: true,
    description: "Our signature 3.0L cooker built for Indian daily staples. Exceptional safety design and build.",
    features: ["Food-grade SS 304 interior", "Stay-cool bakelite handles", "Free Safety Valve (MRP 50) + Gasket (MRP 90)", "Corrosion resistant body"],
    specs: { Capacity: "3.0 Litres", Material: "SS 304 Tri-ply", Base: "Encapsulated Tri-ply", Warranty: "10 Years" },
  },
  {
    id: "rm-triply-straight-35",
    name: "Triply Stainless Steel Pressure Cooker",
    category: "Pressure Cooker",
    material: "Stainless Steel",
    size: "3.5 Ltr.",
    price: 3129,
    compatibility: ["Gas", "Induction"],
    image: ss132336,
    tagline: "Triply Outer Lid Cooker - 3.5L",
    description: "Versatile 3.5L tri-ply cooker. Offers fast and uniform heat transfer, saving fuel and time.",
    features: ["Sandwich base design", "Triple safety lock handle", "Free Safety Valve (MRP 50) + Gasket (MRP 90)", "Heavy-gauge body"],
    specs: { Capacity: "3.5 Litres", Material: "SS 304 Tri-ply", Base: "Encapsulated Tri-ply", Warranty: "10 Years" },
  },
  {
    id: "rm-triply-straight-40",
    name: "Triply Stainless Steel Pressure Cooker",
    category: "Pressure Cooker",
    material: "Stainless Steel",
    size: "4.0 Ltr.",
    price: 3499,
    compatibility: ["Gas", "Induction"],
    image: ss132341,
    tagline: "Triply Outer Lid Cooker - 4.0L",
    description: "Perfect cooker for medium-to-large households. Deep-drawn straight body reduces boil-overs.",
    features: ["Triple-safety valve design", "High quality mirror finish", "Free Safety Valve (MRP 50) + Gasket (MRP 100)", "PFOA-free manufacturing"],
    specs: { Capacity: "4.0 Litres", Material: "SS 304 Tri-ply", Base: "Encapsulated Tri-ply", Warranty: "10 Years" },
  },
  {
    id: "rm-triply-straight-50",
    name: "Triply Stainless Steel Pressure Cooker",
    category: "Pressure Cooker",
    material: "Stainless Steel",
    size: "5.0 Ltr.",
    price: 3749,
    compatibility: ["Gas", "Induction"],
    image: ss132347,
    tagline: "Triply Outer Lid Cooker - 5.0L",
    bestSeller: true,
    description: "Spacious 5.0L tri-ply cooker. Handles heavy pressure tasks easily while maintaining heat balance.",
    features: ["Heaviest tri-ply gauge steel", "Sturdy cool-touch handles", "Free Safety Valve (MRP 50) + Gasket (MRP 100)", "Induction and gas ready"],
    specs: { Capacity: "5.0 Litres", Material: "SS 304 Tri-ply", Base: "Encapsulated Tri-ply", Warranty: "10 Years" },
  },
  {
    id: "rm-triply-straight-55",
    name: "Triply Stainless Steel Pressure Cooker",
    category: "Pressure Cooker",
    material: "Stainless Steel",
    size: "5.5 Ltr.",
    price: 3939,
    compatibility: ["Gas", "Induction"],
    image: ss132352,
    tagline: "Triply Outer Lid Cooker - 5.5L",
    description: "Max-size straight pressure cooker in our tri-ply range. Ideal for large meals, guests, and heavy tadkas.",
    features: ["Large cooking capacity", "Reinforced safety lid rim", "Free Safety Valve (MRP 50) + Gasket (MRP 100)", "Robust stainless handles"],
    specs: { Capacity: "5.5 Litres", Material: "SS 304 Tri-ply", Base: "Encapsulated Tri-ply", Warranty: "10 Years" },
  },

  // 2. Triply Stainless Steel Handi Pressure Cookers
  {
    id: "rm-triply-handi-20",
    name: "Triply Stainless Steel Handi Cooker",
    category: "Pressure Cooker",
    material: "Stainless Steel",
    size: "2.0 Ltr.",
    price: 2855,
    compatibility: ["Gas", "Induction"],
    image: ss132401,
    tagline: "Triply Curved Handi - 2.0L",
    description: "Curved handi-shaped cooker that makes stirring dal or rice exceptionally easy. Features full tri-ply properties.",
    features: ["Curved body for easy stirring", "Mirror finish styling", "Free Safety Valve (MRP 50) + Gasket (MRP 80)", "Premium look"],
    specs: { Capacity: "2.0 Litres", Material: "SS 304 Tri-ply", Shape: "Handi Curved", Warranty: "10 Years" },
  },
  {
    id: "rm-triply-handi-30",
    name: "Triply Stainless Steel Handi Cooker",
    category: "Pressure Cooker",
    material: "Stainless Steel",
    size: "3.0 Ltr.",
    price: 3212,
    compatibility: ["Gas", "Induction"],
    image: ss132407,
    tagline: "Triply Curved Handi - 3.0L",
    bestSeller: true,
    description: "Our best-selling handi pressure cooker. Curved bottom ensures uniform browning and faster heat transfers.",
    features: ["Optimized handi curve profile", "PFOA & Lead-free cook base", "Free Safety Valve (MRP 50) + Gasket (MRP 90)", "Tough handles"],
    specs: { Capacity: "3.0 Litres", Material: "SS 304 Tri-ply", Shape: "Handi Curved", Warranty: "10 Years" },
  },
  {
    id: "rm-triply-handi-50",
    name: "Triply Stainless Steel Handi Cooker",
    category: "Pressure Cooker",
    material: "Stainless Steel",
    size: "5.0 Ltr.",
    price: 4046,
    compatibility: ["Gas", "Induction"],
    image: ss132414,
    tagline: "Triply Curved Handi - 5.0L",
    description: "Spacious 5.0L handi cooker. Perfect for cooking whole biryanis, slow stews, and traditional curries.",
    features: ["Ideal for slow cooking and curries", "Heavy encapsulated base", "Free Safety Valve (MRP 50) + Gasket (MRP 100)", "Long-lasting design"],
    specs: { Capacity: "5.0 Litres", Material: "SS 304 Tri-ply", Shape: "Handi Curved", Warranty: "10 Years" },
  },

  // 3. Triply Stainless Steel Pressure Pan
  {
    id: "rm-triply-pan-30",
    name: "Triply Stainless Steel Pressure Pan",
    category: "Pressure Cooker",
    material: "Stainless Steel",
    size: "3.0 Ltr.",
    price: 3249,
    compatibility: ["Gas", "Induction"],
    image: ss132430,
    tagline: "Triply Pressure Pan - 3.0L",
    description: "Shallow, wide pressure pan design. Perfect for sautéing ingredients before locking the pressure lid.",
    features: ["Shallow wide-rim profile", "Heavy flat tri-ply base", "Free Safety Valve (MRP 50) + Gasket (MRP 100)", "Drip-free rim styling"],
    specs: { Capacity: "3.0 Litres", Material: "SS 304 Tri-ply", Base: "Wide Encapsulated", Warranty: "10 Years" },
  },

  // 4. Hard Anodized Pressure Cookers
  {
    id: "rm-ha-cooker-15",
    name: "Hard Anodized Pressure Cooker",
    category: "Pressure Cooker",
    material: "Hard Anodized",
    size: "1.5 Ltr.",
    price: 2299,
    compatibility: ["Gas", "Induction"],
    image: ss132520,
    tagline: "Premium Anodized Cooker - 1.5L",
    description: "Scratch-resistant hard anodized cooker that stays looking brand new for years. Non-reactive cooking surface.",
    features: ["Tough scratch-proof anodized body", "Induction compatible plate base", "Modern black finish", "Non-reactive surface"],
    specs: { Capacity: "1.5 Litres", Material: "Hard Anodized Aluminium", Warranty: "5 Years" },
  },
  {
    id: "rm-ha-cooker-25",
    name: "Hard Anodized Pressure Cooker",
    category: "Pressure Cooker",
    material: "Hard Anodized",
    size: "2.5 Ltr.",
    price: 2499,
    compatibility: ["Gas", "Induction"],
    image: ss132525,
    tagline: "Premium Anodized Cooker - 2.5L",
    description: "Highly durable anodized pressure cooker with safety relief valve. Retains heat efficiently.",
    features: ["Heavy gauge body shell", "Safe, non-toxic anodized finish", "Cool-touch handles", "Heat retaining core"],
    specs: { Capacity: "2.5 Litres", Material: "Hard Anodized Aluminium", Warranty: "5 Years" },
  },
  {
    id: "rm-ha-cooker-35",
    name: "Hard Anodized Pressure Cooker",
    category: "Pressure Cooker",
    material: "Hard Anodized",
    size: "3.5 Ltr.",
    price: 2699,
    compatibility: ["Gas", "Induction"],
    image: fyfHa1,
    tagline: "Premium Anodized Cooker - 3.5L",
    bestSeller: true,
    description: "Versatile hard anodized cooker. Ideal for high heat searing before building pressure.",
    features: ["High heat tolerance body", "Rust-free components", "Induction & gas ready", "Balanced handle grip"],
    specs: { Capacity: "3.5 Litres", Material: "Hard Anodized Aluminium", Warranty: "5 Years" },
  },
  {
    id: "rm-ha-cooker-55",
    name: "Hard Anodized Pressure Cooker",
    category: "Pressure Cooker",
    material: "Hard Anodized",
    size: "5.5 Ltr.",
    price: 3299,
    compatibility: ["Gas", "Induction"],
    image: fyfHa5,
    tagline: "Premium Anodized Cooker - 5.5L",
    description: "Maximum size hard anodized cooker. Perfect for deep stews, dal makhani, and slow cooked meats.",
    features: ["Thick warp-proof body walls", "Non-reactive under acidic curries", "Double safety locking system", "Premium aesthetic"],
    specs: { Capacity: "5.5 Litres", Material: "Hard Anodized Aluminium", Warranty: "5 Years" },
  },

  // 5. Aluminum Pressure Cookers
  {
    id: "rm-alu-cooker-15",
    name: "Aluminum Pressure Cooker",
    category: "Pressure Cooker",
    material: "Aluminium",
    size: "1.5 Ltr.",
    price: 1899,
    compatibility: ["Gas"],
    image: fyfAlu2,
    tagline: "Virgin Aluminum Cooker - 1.5L",
    description: "Trusted everyday aluminum pressure cooker. Heats quickly and evenly for immediate cooking.",
    features: ["Virgin grade aluminum alloy", "ISI Certified safety standards", "High safety relief valve", "Fuel efficient design"],
    specs: { Capacity: "1.5 Litres", Material: "Virgin Aluminium", Warranty: "5 Years" },
  },
  {
    id: "rm-alu-cooker-25",
    name: "Aluminum Pressure Cooker",
    category: "Pressure Cooker",
    material: "Aluminium",
    size: "2.5 Ltr.",
    price: 1999,
    compatibility: ["Gas"],
    image: fyfAlu3,
    tagline: "Virgin Aluminum Cooker - 2.5L",
    description: "Fast-cooking aluminum cooker built for small families. Super lightweight and reliable.",
    features: ["Lightweight build frame", "High durability rubber gasket", "Tough bakelite handles", "Even heat spread"],
    specs: { Capacity: "2.5 Litres", Material: "Virgin Aluminium", Warranty: "5 Years" },
  },
  {
    id: "rm-alu-cooker-35",
    name: "Aluminum Pressure Cooker",
    category: "Pressure Cooker",
    material: "Aluminium",
    size: "3.5 Ltr.",
    price: 2099,
    compatibility: ["Gas"],
    image: fyfAlu4,
    tagline: "Virgin Aluminum Cooker - 3.5L",
    bestSeller: true,
    description: "Standard 3.5L aluminum cooker. Classic Indian kitchen essential built to handle daily tasks.",
    features: ["Thick bottom anti-bulge plate", "High security vent valve", "Easy clean surface", "Sturdy handles"],
    specs: { Capacity: "3.5 Litres", Material: "Virgin Aluminium", Warranty: "5 Years" },
  },
  {
    id: "rm-alu-cooker-55",
    name: "Aluminum Pressure Cooker",
    category: "Pressure Cooker",
    material: "Aluminium",
    size: "5.5 Ltr.",
    price: 2599,
    compatibility: ["Gas"],
    image: ss132611,
    tagline: "Virgin Aluminum Cooker - 5.5L",
    description: "Traditional large-sized aluminum cooker. Heats instantly, perfect for family dinners and daily rice cooking.",
    features: ["High capacity cooker", "Double safety pressure release", "Robust rivet strength", "ISI Certified safety standards"],
    specs: { Capacity: "5.5 Litres", Material: "Virgin Aluminium", Warranty: "5 Years" },
  },

  // 6. Rays Concave Tawa
  {
    id: "rm-tawa-225-3",
    name: "Rays Concave Tawa",
    category: "Tawa",
    material: "Hard Anodized",
    size: "225 mm (3 mm)",
    price: 999,
    compatibility: ["Gas", "Induction"],
    image: ss132619,
    tagline: "Premium Concave Tawa - 225mm (3mm)",
    description: "Standard thickness concave tawa. Perfect for frying, making parathas, rotis, and omelettes with low oil.",
    features: ["Scratch-resistant anodized surface", "3mm thickness core plate", "Riveted cool-touch handle", "Concave shape for heat retention"],
    specs: { Diameter: "225 mm", Thickness: "3 mm", Material: "Hard Anodized", Warranty: "2 Years" },
  },
  {
    id: "rm-tawa-225-4",
    name: "Rays Concave Tawa",
    category: "Tawa",
    material: "Hard Anodized",
    size: "225 mm (4 mm)",
    price: 1099,
    compatibility: ["Gas", "Induction"],
    image: ss132625,
    tagline: "Heavy Duty Concave Tawa - 225mm (4mm)",
    bestSeller: true,
    description: "Heavy duty 4mm tawa that spreads heat perfectly without warping. Built for regular high-heat use.",
    features: ["Thick 4mm warp-proof body", "Non-toxic & metal-spoon friendly", "Double-riveted sturdy handle", "Optimized base design"],
    specs: { Diameter: "225 mm", Thickness: "4 mm", Material: "Hard Anodized", Warranty: "2 Years" },
  },
  {
    id: "rm-tawa-250-3",
    name: "Rays Concave Tawa",
    category: "Tawa",
    material: "Hard Anodized",
    size: "250 mm (3 mm)",
    price: 1090,
    compatibility: ["Gas", "Induction"],
    image: ss132636,
    tagline: "Wide Concave Tawa - 250mm (3mm)",
    description: "Wider surface area tawa. Perfect for making larger rotis, wraps, pancakes, and dosas with ease.",
    features: ["Larger 250mm diameter", "PFOA & Lead-free anodized layer", "Uniform heat dispersion", "Durable stay-cool handles"],
    specs: { Diameter: "250 mm", Thickness: "3 mm", Material: "Hard Anodized", Warranty: "2 Years" },
  },
  {
    id: "rm-tawa-250-4",
    name: "Rays Concave Tawa",
    category: "Tawa",
    material: "Hard Anodized",
    size: "250 mm (4 mm)",
    price: 1199,
    compatibility: ["Gas", "Induction"],
    image: ss132647,
    tagline: "Professional Concave Tawa - 250mm (4mm)",
    bestSeller: true,
    description: "Our top-tier concave tawa. Combines the wider surface area of 250mm with the commercial durability of 4mm thickness.",
    features: ["Premium 4mm thick gauge metal", "Max heat retention", "Ergonomic insulated grip", "Industrial rivet construction"],
    specs: { Diameter: "250 mm", Thickness: "4 mm", Material: "Hard Anodized", Warranty: "2 Years" },
  },

  // 7. Rays Cookware Sets
  {
    id: "rm-set-tasra-6pc",
    name: "Rays Triply Tasra Set",
    category: "Cookware Set",
    material: "Stainless Steel",
    size: "6 Pieces",
    price: 7855,
    compatibility: ["Gas", "Induction"],
    image: ss132458,
    tagline: "Nesting Tasra Bowls Set (6 Piece)",
    bestSeller: true,
    description: "Premium triply stainless steel nesting Tasra set. Perfect for serving, mixing, and cooking. Offers full sandwich base heat distribution.",
    features: ["6 nesting piece sizes", "Full triply stainless structure", "Saves storage space", "Perfect for serving & cooking"],
    specs: { Pieces: "6 Piece Set", Material: "SS 304 Tri-ply", Warranty: "10 Years" },
  },
  {
    id: "rm-set-tope-6pc",
    name: "Rays Triply Tope Set",
    category: "Cookware Set",
    material: "Stainless Steel",
    size: "6 Pieces",
    price: 8570,
    compatibility: ["Gas", "Induction"],
    image: ss132505,
    tagline: "Nesting Tope Pots Set (6 Piece)",
    description: "Beautifully polished nesting Tope set. Thick tri-ply base prevents burning and makes milk/stew boiling completely hassle-free.",
    features: ["6 premium nesting topes", "Flat triply induction bottom", "Reinforced handles and rims", "Ideal for daily stove tasks"],
    specs: { Pieces: "6 Piece Set", Material: "SS 304 Tri-ply", Warranty: "10 Years" },
  },

  // 8. Original Mock elements to maintain other category structures
  {
    id: "rm-ha-kadai-28",
    name: "Hard Anodized Kadai",
    category: "Kadai",
    material: "Hard Anodized",
    size: "28 cm",
    price: 1990,
    compatibility: ["Gas", "Induction"],
    image: kadai,
    tagline: "Restaurant-grade sear, everyday ease.",
    description: "Deep, heavy hard anodized kadai with a scratch-resistant surface built for high-heat Indian cooking — tadkas, sabzis, biryanis and more.",
    features: ["Non-reactive hard anodized coating", "5 mm thick base", "Riveted stainless steel handles", "Induction friendly"],
    specs: { Capacity: "3.5 Litres", Diameter: "28 cm", Material: "Hard Anodized Aluminium", Warranty: "3 Years" },
  },
  {
    id: "rm-nonstick-frypan-24",
    name: "Everyday Nonstick Fry Pan",
    category: "Fry Pan",
    material: "Hard Anodized",
    size: "24 cm",
    price: 1490,
    compatibility: ["Gas", "Induction"],
    image: frypan,
    tagline: "Effortless release, honest craftsmanship.",
    description: "A beautifully balanced fry pan with a 5-layer nonstick surface and a warm wooden-finish handle designed to feel just right in your hand.",
    features: ["5-layer German nonstick coating", "PFOA free", "Soft-touch handle", "Induction compatible"],
    specs: { Diameter: "24 cm", Depth: "5 cm", Material: "Hard Anodized", Warranty: "2 Years" },
  },
  {
    id: "rm-ss-saucepan-18",
    name: "Triply Sauce Pan",
    category: "Sauce Pan",
    material: "Stainless Steel",
    size: "18 cm",
    price: 1790,
    compatibility: ["Gas", "Induction"],
    image: saucepan,
    tagline: "Milk, sauces, tea — perfectly.",
    description: "Compact triply sauce pan with a mirror-polished exterior and a matte satin interior. Ideal for milk, dals, sauces and daily brewing.",
    features: ["Triply stainless construction", "Drip-free rim", "Stay-cool handle"],
    specs: { Capacity: "1.5 Litres", Diameter: "18 cm", Material: "Triply Stainless Steel", Warranty: "10 Years" },
  },
];

export const CATEGORIES = [
  { name: "Pressure Cooker", image: ss132347 },
  { name: "Kadai", image: kadai },
  { name: "Fry Pan", image: frypan },
  { name: "Sauce Pan", image: saucepan },
  { name: "Tawa", image: ss132647 },
  { name: "Cookware Set", image: ss132458 },
] as const;

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function formatINR(n: number): string {
  return "₹" + n.toLocaleString("en-IN");
}
