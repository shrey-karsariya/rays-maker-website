/* ==========================================================================
   KITCHSTAR COOKWARE - INTERACTIVE CLIENT LOGIC
   ========================================================================== */

// 1. PRODUCTS DATA ENGINE
const PRODUCTS_DATA = [
  {
    id: "trinity-cooker",
    name: "Trinity Pressure Cooker",
    category: "triply-cooker",
    material: "Triply Stainless Steel (Grade 304)",
    image: "assets/products/trinity_cooker.png",
    warranty: "5 Years Warranty",
    rating: 4.9,
    options: [
      { label: "1.25 Ltr.", mrp: 2249, price: 1999, free: "Safety Valve (₹50) + Gasket (₹80)" },
      { label: "1.75 Ltr.", mrp: 2499, price: 2199, free: "Safety Valve (₹50) + Gasket (₹80)" },
      { label: "2.5 Ltr.", mrp: 2749, price: 2399, free: "Safety Valve (₹50) + Gasket (₹90)" },
      { label: "3.0 Ltr.", mrp: 2999, price: 2599, free: "Safety Valve (₹50) + Gasket (₹90)" },
      { label: "3.5 Ltr.", mrp: 3129, price: 2749, free: "Safety Valve (₹50) + Gasket (₹90)" },
      { label: "4.0 Ltr.", mrp: 3499, price: 2999, free: "Safety Valve (₹50) + Gasket (₹100)" },
      { label: "5.0 Ltr.", mrp: 3749, price: 3249, free: "Safety Valve (₹50) + Gasket (₹100)" },
      { label: "5.5 Ltr.", mrp: 3939, price: 3399, free: "Safety Valve (₹50) + Gasket (₹100)" }
    ]
  },
  {
    id: "fusion-handi",
    name: "Fusion Handi Cooker",
    category: "triply-cooker",
    material: "Triply Stainless Steel (Grade 304)",
    image: "assets/products/fusion_handi.png",
    warranty: "5 Years Warranty",
    rating: 4.8,
    options: [
      { label: "2.0 Ltr.", mrp: 2855, price: 2499, free: "Safety Valve (₹50) + Gasket (₹80)" },
      { label: "3.0 Ltr.", mrp: 3212, price: 2799, free: "Safety Valve (₹50) + Gasket (₹90)" },
      { label: "5.0 Ltr.", mrp: 4046, price: 3499, free: "Safety Valve (₹50) + Gasket (₹100)" }
    ]
  },
  {
    id: "pan-cooker",
    name: "Triply Cooker (Pan Design)",
    category: "triply-cooker",
    material: "Triply Stainless Steel (Grade 304)",
    image: "assets/products/trinity_cooker.png", // reusing high-quality cooker image
    warranty: "5 Years Warranty",
    rating: 4.7,
    options: [
      { label: "2.0 Ltr.", mrp: 2649, price: 2299, free: "Safety Valve (₹50) + Gasket (₹90)" },
      { label: "3.0 Ltr.", mrp: 3249, price: 2799, free: "Safety Valve (₹50) + Gasket (₹100)" }
    ]
  },
  {
    id: "trinity-combo",
    name: "Trinity Cooker Combos",
    category: "triply-cooker",
    material: "Triply Stainless Steel (Grade 304)",
    image: "assets/products/fusion_handi.png",
    warranty: "5 Years Warranty",
    rating: 4.9,
    options: [
      { label: "2.0L + 3.0L (1 Lid)", mrp: 4749, price: 4199, free: "Safety Valve (₹50) + Gasket (₹90)" },
      { label: "2.0L + 3.5L (1 Lid)", mrp: 4749, price: 4199, free: "Safety Valve (₹50) + Gasket (₹90)" },
      { label: "2.0L + 3.0L + 5.0L Combo", mrp: 8749, price: 7699, free: "3x Valves (₹100) + 3x Gaskets (₹270)" },
      { label: "2.0L + 3.5L + 5.5L Combo", mrp: 8395, price: 7399, free: "2x Valves (₹100) + 2x Gaskets (₹190)" }
    ]
  },
  {
    id: "triply-tasra",
    name: "Triply Stainless Steel Tasra",
    category: "tasra-top",
    material: "Triply Bonded Steel (Nested set)",
    image: "assets/products/triply_tasra.png",
    warranty: "5 Years Warranty",
    rating: 4.8,
    options: [
      { label: "6 Piece Set", mrp: 7855, price: 6899, free: "Includes 6 Stackable Nested Bowls" }
    ]
  },
  {
    id: "triply-top",
    name: "Triply Stainless Steel Top Set",
    category: "tasra-top",
    material: "Triply Bonded Steel (Nested set)",
    image: "assets/products/triply_top.png",
    warranty: "5 Years Warranty",
    rating: 4.8,
    options: [
      { label: "6 Piece Set", mrp: 8570, price: 7499, free: "Includes 6 Stackable Nested Patila Pots" }
    ]
  },
  {
    id: "black-beauty",
    name: "Black Beauty Cooker",
    category: "hard-anodized",
    material: "Aditya Birla Hard Anodized Sheet",
    image: "assets/products/black_beauty.png",
    warranty: "5 Years Warranty",
    rating: 4.7,
    options: [
      { label: "1.5 Ltr.", mrp: 2299, price: 1999, free: "Hard Anodized Heavy Duty Lid" },
      { label: "2.5 Ltr.", mrp: 2499, price: 2199, free: "Hard Anodized Heavy Duty Lid" },
      { label: "3.5 Ltr.", mrp: 2699, price: 2399, free: "Hard Anodized Heavy Duty Lid" },
      { label: "5.5 Ltr.", mrp: 3299, price: 2899, free: "Hard Anodized Heavy Duty Lid" }
    ]
  },
  {
    id: "aura-cooker",
    name: "Aura Aluminium Cooker",
    category: "aluminium",
    material: "Aditya Birla Hindalco Aluminium",
    image: "assets/products/aura_cooker.png",
    warranty: "5 Years Warranty",
    rating: 4.6,
    options: [
      { label: "1.5 Ltr.", mrp: 1899, price: 1649, free: "Super Fast Heat Base" },
      { label: "2.5 Ltr.", mrp: 1999, price: 1749, free: "Super Fast Heat Base" },
      { label: "3.5 Ltr.", mrp: 2099, price: 1849, free: "Super Fast Heat Base" },
      { label: "5.5 Ltr.", mrp: 2599, price: 2249, free: "Super Fast Heat Base" }
    ]
  },
  {
    id: "pride-tawa",
    name: "Pride Concave Roti Tawa",
    category: "tawa",
    material: "Aditya Birla Food Grade Virgin Aluminum",
    image: "assets/products/pride_tawa.png",
    warranty: "2 Years Warranty",
    rating: 4.9,
    options: [
      { label: "225 MM - 3 MM", mrp: 999, price: 849, free: "Stainless Steel Riveting Support" },
      { label: "225 MM - 4 MM", mrp: 1099, price: 949, free: "Stainless Steel Riveting Support" },
      { label: "250 MM - 3 MM", mrp: 1090, price: 929, free: "Stainless Steel Riveting Support" },
      { label: "250 MM - 4 MM", mrp: 1199, price: 1029, free: "Stainless Steel Riveting Support" }
    ]
  }
];

// 2. CATALOG SPECIFIC IMAGES (16 PAGES)
const CATALOG_PAGES = [
  { file: "Screenshot 2026-07-19 112057.png", title: "Product Catalogue Cover 2026" },
  { file: "Screenshot 2026-07-19 112110.png", title: "About Us - KitchStar Makers Pvt. Ltd." },
  { file: "Screenshot 2026-07-19 112116.png", title: "Brand Philosophy & Quote" },
  { file: "Screenshot 2026-07-19 112124.png", title: "Our Metallurgy Types & Benefits" },
  { file: "Screenshot 2026-07-19 112132.png", title: "Catalogue Table of Contents" },
  { file: "Screenshot 2026-07-19 112139.png", title: "Triply Stainless Steel Construction" },
  { file: "Screenshot 2026-07-19 112148.png", title: "Trinity Cookers & Fusion Handi Sizes" },
  { file: "Screenshot 2026-07-19 112156.png", title: "Pan Cookers & Trinity Combo Sets" },
  { file: "Screenshot 2026-07-19 112204.png", title: "Triply Tasra & Patila Top Sets" },
  { file: "Screenshot 2026-07-19 112213.png", title: "Hard Anodized Range Features" },
  { file: "Screenshot 2026-07-19 112220.png", title: "Black Beauty Cooker Specifications" },
  { file: "Screenshot 2026-07-19 112229.png", title: "Aluminium Range Intro" },
  { file: "Screenshot 2026-07-19 112237.png", title: "Aura Aluminium Cooker Specifications" },
  { file: "Screenshot 2026-07-19 112244.png", title: "Pride Roti Tawa Introduction" },
  { file: "Screenshot 2026-07-19 112257.png", title: "Pride Concave Tawa Specifications" },
  { file: "Screenshot 2026-07-19 112306.png", title: "Back Cover - Quality & GIDC Address" }
];

// 3. TRIPLY METALLURGICAL DETAIL DATA
const TRIPLY_METALLURGY = {
  inner: {
    badge: "Inner Layer (SS 304)",
    title: "Stainless Steel 304 - Hygienic",
    desc: "Fitted as the interior food-contact surface. It is 100% lead-free, non-reactive with acidic foods, rust-proof, and chemical-safe. It preserves the natural flavors and nutrients of your dishes while providing a tough, scrub-friendly surface.",
    specs: [
      { key: "Material Grade", val: "Grade 18/8 Stainless Steel (Jindal Steel)" },
      { key: "Health Rating", val: "100% Non-Toxic, Chemical & Rust-Free" },
      { key: "Durability", val: "Highly scratch-resistant, scrub-safe" }
    ]
  },
  core: {
    badge: "Core Layer (Al 19000)",
    title: "Virgin Aluminium Al 19000",
    desc: "Fitted edge-to-edge as the middle layer. This highly conductive core ensures rapid, uniform heat distribution across the entire pan, eliminating hot spots that burn food. It helps cook meals up to 20% faster, saving gas/induction fuel.",
    specs: [
      { key: "Material Grade", val: "Aluminium Al 19000 (Aditya Birla Hindalco)" },
      { key: "Thermal Speed", val: "Rapid 3-ply conductivity, no hotspots" },
      { key: "Fuel Savings", val: "Saves up to 20% gas and induction energy" }
    ]
  },
  outer: {
    badge: "Outer Layer (SS 430)",
    title: "Stainless Steel 430 - Induction Ready",
    desc: "Fitted as the exterior protective shell. Made of magnetic grade 430 Stainless Steel, this heavy-duty layer ensures the cookware is fully induction-compatible and extremely stable on all heat sources, including gas, ceramic, halogen, and coil stoves.",
    specs: [
      { key: "Material Grade", val: "Grade 430 Magnetic Stainless Steel" },
      { key: "Compatibility", val: "Gas, Induction, Ceramic, Halogen, Electric" },
      { key: "Structural Strength", val: "Dent-resistant, prevents bottom bulging" }
    ]
  }
};

// 4. WEBSITE STATE MANAGEMENT
let selectedOptions = {}; // { product_id: option_index }
let cart = []; // [ { id, name, size, price, mrp, free, qty, image } ]
let currentLightboxIndex = 0;
const WHATSAPP_PHONE = "919876543210"; // Factory line

// Initialize State
function initState() {
  // Load Cart from LocalStorage
  const savedCart = localStorage.getItem("kitchstar_cart");
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
      updateCartUI();
    } catch (e) {
      cart = [];
    }
  }

  // Set default product options
  PRODUCTS_DATA.forEach(p => {
    selectedOptions[p.id] = 0; // Default first size option
  });
}

// 5. DOM SELECTORS & SCROLL HANDLERS
document.addEventListener("DOMContentLoaded", () => {
  initState();
  renderProducts();
  renderCatalogThumbnails();
  setupTriplyEvents();
  setupHeaderScroll();
  setupNavigationDrawer();
  setupCartDrawer();
  setupLightbox();
  setupInquiryForm();
  setupBackToTop();
});

// Scroll Event Handler for Header & Back-to-Top Button
function setupHeaderScroll() {
  const header = document.getElementById("header");
  const backToTop = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    if (window.scrollY > 500) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Mobile Hamburger Menu Navigation Drawer
function setupNavigationDrawer() {
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navbar.classList.toggle("active");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      // Set active indicator
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      // Close mobile drawer if open
      menuToggle.classList.remove("active");
      navbar.classList.remove("active");
    });
  });

  // Highlight links on scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY + 100;
    sections.forEach(section => {
      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        const id = section.getAttribute("id");
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
}

// 6. INTERACTIVE TRIPLY LAYER EXPLORER
function setupTriplyEvents() {
  const layerButtons = {
    inner: document.getElementById("layer-btn-inner"),
    core: document.getElementById("layer-btn-core"),
    outer: document.getElementById("layer-btn-outer")
  };

  const infoBadge = document.getElementById("info-layer-badge");
  const infoTitle = document.getElementById("info-layer-title");
  const infoDesc = document.getElementById("info-layer-desc");
  const infoSpecsList = document.getElementById("info-layer-specs");
  
  const diagramBars = document.querySelectorAll(".diagram-bar");
  const cardContainer = document.getElementById("triply-info-card");

  function selectLayer(layerId) {
    // 1. Toggle Active Graphics
    Object.keys(layerButtons).forEach(key => {
      layerButtons[key].classList.remove("active");
    });
    layerButtons[layerId].classList.add("active");

    // 2. Animate Dynamic Card Content
    cardContainer.style.opacity = "0";
    cardContainer.style.transform = "translateY(10px)";

    setTimeout(() => {
      const data = TRIPLY_METALLURGY[layerId];
      infoBadge.textContent = data.badge;
      infoTitle.textContent = data.title;
      infoDesc.textContent = data.desc;

      // Render Specs items
      infoSpecsList.innerHTML = "";
      data.specs.forEach(s => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${s.key}:</span> ${s.val}`;
        infoSpecsList.appendChild(li);
      });

      // Update active state in vertical diagram selection bars
      diagramBars.forEach(bar => {
        bar.classList.remove("active");
        if (bar.classList.contains(layerId)) {
          bar.classList.add("active");
        }
      });

      cardContainer.style.opacity = "1";
      cardContainer.style.transform = "translateY(0)";
    }, 200);
  }

  // Bind graphical layer triggers
  Object.keys(layerButtons).forEach(key => {
    layerButtons[key].addEventListener("click", () => selectLayer(key));
  });

  // Bind side-panel diagram triggers
  diagramBars.forEach(bar => {
    bar.addEventListener("click", () => {
      let selectedLayerKey = "inner";
      if (bar.classList.contains("core")) selectedLayerKey = "core";
      if (bar.classList.contains("outer")) selectedLayerKey = "outer";
      selectLayer(selectedLayerKey);
    });
  });
}

// 7. E-COMMERCE RENDERER & PRODUCT DATA MANAGER
function renderProducts() {
  const container = document.getElementById("products-grid-container");
  if (!container) return;

  container.innerHTML = "";

  PRODUCTS_DATA.forEach(product => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.setAttribute("data-category", product.category);

    const hasCombos = product.id.includes("combo");
    const firstOpt = product.options[0];
    const savings = firstOpt.mrp - firstOpt.price;
    const discountPercent = Math.round((savings / firstOpt.mrp) * 100);

    card.innerHTML = `
      <div class="product-badge-float">${discountPercent}% OFF</div>
      <div class="product-badge-float warranty-badge">${product.warranty}</div>
      <div class="product-img-wrapper">
        <img src="${product.image}" alt="${product.name}" id="product-img-${product.id}">
      </div>
      <div class="product-content">
        <div class="product-header-row">
          <h3 class="product-title">${product.name}</h3>
          <div class="product-rating">
            <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <span>${product.rating}</span>
          </div>
        </div>
        <span class="product-material-tag">${product.material}</span>

        <div class="product-config-row">
          <span class="config-label">${hasCombos ? "Select Combo Option" : "Select Capacity / Size"}</span>
          <div class="size-select-pills" id="size-container-${product.id}">
            ${product.options.map((opt, index) => `
              <button class="size-pill-btn ${index === 0 ? "selected" : ""}" data-product="${product.id}" data-index="${index}">
                ${opt.label}
              </button>
            `).join("")}
          </div>
        </div>

        <div class="product-freebie-banner" id="freebie-${product.id}">
          🎁 Gift: ${firstOpt.free}
        </div>

        <div class="product-price-row">
          <span class="price-current" id="price-cur-${product.id}">₹${firstOpt.price.toLocaleString("en-IN")}</span>
          <span class="price-mrp" id="price-mrp-${product.id}">MRP ₹${firstOpt.mrp.toLocaleString("en-IN")}</span>
          <span class="price-discount" id="price-sav-${product.id}">(Save ₹${savings})</span>
        </div>

        <div class="product-actions">
          <button class="btn btn-add-cart-outline" onclick="addToCartTrigger('${product.id}')">Add to Cart</button>
          <button class="btn btn-whatsapp-direct" onclick="checkoutDirectTrigger('${product.id}')">
            <svg viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.73.001-2.597-1.002-5.036-2.825-6.86C16.688 2.182 14.28 1.18 11.83 1.18c-5.442 0-9.87 4.372-9.872 9.735-.001 1.762.485 3.487 1.411 5.01L2.4 21.5l5.247-1.346z"/></svg>
            Order
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  // Add event listeners to size configuration pill buttons
  document.querySelectorAll(".size-pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const pId = btn.getAttribute("data-product");
      const optIdx = parseInt(btn.getAttribute("data-index"));

      // Set active selected option
      selectedOptions[pId] = optIdx;

      // Update selected class in DOM
      const siblings = document.querySelectorAll(`#size-container-${pId} .size-pill-btn`);
      siblings.forEach(s => s.classList.remove("selected"));
      btn.classList.add("selected");

      // Dynamic Price & Freebie DOM Updates
      const product = PRODUCTS_DATA.find(p => p.id === pId);
      const selectedOpt = product.options[optIdx];
      const savings = selectedOpt.mrp - selectedOpt.price;

      const priceCur = document.getElementById(`price-cur-${pId}`);
      const priceMrp = document.getElementById(`price-mrp-${pId}`);
      const priceSav = document.getElementById(`price-sav-${pId}`);
      const freebieBanner = document.getElementById(`freebie-${pId}`);

      // Apply transition animations
      priceCur.style.transform = "scale(1.15)";
      setTimeout(() => {
        priceCur.style.transform = "scale(1)";
      }, 150);

      priceCur.textContent = `₹${selectedOpt.price.toLocaleString("en-IN")}`;
      priceMrp.textContent = `MRP ₹${selectedOpt.mrp.toLocaleString("en-IN")}`;
      priceSav.textContent = `(Save ₹${savings})`;
      freebieBanner.innerHTML = `🎁 Gift: ${selectedOpt.free}`;
    });
  });

  // Setup Product Filtering Category click events
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterVal = btn.getAttribute("data-filter");
      const cards = container.querySelectorAll(".product-card");

      cards.forEach(card => {
        const cat = card.getAttribute("data-category");
        if (filterVal === "all" || cat === filterVal) {
          card.style.display = "flex";
          setTimeout(() => { card.style.opacity = "1"; card.style.transform = "scale(1)"; }, 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.95)";
          setTimeout(() => { card.style.display = "none"; }, 300);
        }
      });
    });
  });
}

// 8. CART DRAWER & SHOPPING BAG FLOW
function setupCartDrawer() {
  const cartToggle = document.getElementById("cart-toggle");
  const cartClose = document.getElementById("cart-close");
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-drawer-overlay");
  const shopNow = document.getElementById("cart-shop-now-btn");
  const checkoutBtn = document.getElementById("cart-checkout-btn");

  const openDrawer = () => {
    drawer.classList.add("active");
    overlay.classList.add("active");
  };

  const closeDrawer = () => {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
  };

  cartToggle.addEventListener("click", openDrawer);
  cartClose.addEventListener("click", closeDrawer);
  overlay.addEventListener("click", closeDrawer);
  
  if(shopNow) {
    shopNow.addEventListener("click", closeDrawer);
  }

  // Checkout Form WhatsApp Trigger
  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) return;
    
    // Build cart items summary string
    let messageText = `*KitchStar Cookware - Order Inquiry*\n`;
    messageText += `-------------------------------------------\n`;
    
    let subtotal = 0;
    let giftsVal = 0;

    cart.forEach((item, index) => {
      const itemCost = item.price * item.qty;
      subtotal += itemCost;

      // Extract gift MRP from text for descriptive order checkout
      let freeDetails = item.free;
      
      messageText += `${index + 1}. *${item.name}* - ${item.size}\n`;
      messageText += `   Qty: ${item.qty} | Price: ₹${item.price.toLocaleString("en-IN")} each\n`;
      messageText += `   [Gift: ${freeDetails}]\n`;
      messageText += `   Total: ₹${itemCost.toLocaleString("en-IN")}\n\n`;
    });

    const grandTotal = subtotal;

    messageText += `-------------------------------------------\n`;
    messageText += `*Grand Total:* ₹${grandTotal.toLocaleString("en-IN")}\n`;
    messageText += `-------------------------------------------\n\n`;
    messageText += `*Customer Details:*\n`;
    messageText += `Name: \n`;
    messageText += `Mobile: \n`;
    messageText += `Shipping Address: \n\n`;
    messageText += `_Please review and confirm my order. Thank you!_`;

    // Encode text and open link
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, "_blank");
  });
}

// Add Item to Shopping Cart
window.addToCartTrigger = function(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  const selectedOptIndex = selectedOptions[productId];
  const option = product.options[selectedOptIndex];

  // Check if item of same size already in cart
  const existingItem = cart.find(item => item.id === productId && item.size === option.label);

  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      size: option.label,
      price: option.price,
      mrp: option.mrp,
      free: option.free,
      image: product.image,
      qty: 1
    });
  }

  // Trigger Badge bounce pop
  const badge = document.getElementById("cart-badge-count");
  badge.classList.remove("pop");
  void badge.offsetWidth; // trigger reflow
  badge.classList.add("pop");

  saveCart();
  updateCartUI();
  
  // Slide out drawer to show user
  document.getElementById("cart-drawer").classList.add("active");
  document.getElementById("cart-drawer-overlay").classList.add("active");
};

// Checkout Direct (WhatsApp order button on product card)
window.checkoutDirectTrigger = function(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  const selectedOptIndex = selectedOptions[productId];
  const option = product.options[selectedOptIndex];

  let messageText = `*KitchStar Cookware - Quick Purchase Inquiry*\n`;
  messageText += `-------------------------------------------\n`;
  messageText += `Product: *${product.name}*\n`;
  messageText += `Option/Capacity: *${option.label}*\n`;
  messageText += `Price: ₹${option.price.toLocaleString("en-IN")} (MRP: ₹${option.mrp.toLocaleString("en-IN")})\n`;
  messageText += `Gift Included: *${option.free}*\n`;
  messageText += `-------------------------------------------\n\n`;
  messageText += `*My Delivery Info:*\n`;
  messageText += `Name: \n`;
  messageText += `Shipping Address: \n\n`;
  messageText += `_Please send details to confirm order via bank/UPI payment._`;

  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(messageText)}`;
  window.open(whatsappUrl, "_blank");
};

// Increment Quantity
window.incrementCartQty = function(index) {
  cart[index].qty += 1;
  saveCart();
  updateCartUI();
};

// Decrement Quantity
window.decrementCartQty = function(index) {
  if (cart[index].qty > 1) {
    cart[index].qty -= 1;
  } else {
    cart.splice(index, 1);
  }
  saveCart();
  updateCartUI();
};

// Remove Item Entirely
window.removeFromCart = function(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
};

function saveCart() {
  localStorage.setItem("kitchstar_cart", JSON.stringify(cart));
}

// Redraw Cart list DOM & update counters
function updateCartUI() {
  const badgeCount = document.getElementById("cart-badge-count");
  const cartList = document.getElementById("cart-items-list");
  const subtotalText = document.getElementById("cart-subtotal");
  const freeValueText = document.getElementById("cart-free-value");
  const totalText = document.getElementById("cart-total-price");
  const footerNode = document.getElementById("cart-summary-footer");

  let totalItemsCount = 0;
  let subtotal = 0;
  let totalFreebiesEst = 0; // Estimation of gift assets values

  if (cart.length === 0) {
    badgeCount.textContent = "0";
    cartList.innerHTML = `
      <div class="cart-empty-message">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <p>Your cart is empty. Add premium items from the store to start cooking!</p>
        <a href="#products" class="btn btn-secondary btn-sm" id="cart-shop-now-btn">Shop Now</a>
      </div>
    `;
    footerNode.style.display = "none";
    
    // Bind Shop Now link trigger to close drawer
    const shopNow = document.getElementById("cart-shop-now-btn");
    if(shopNow) {
      shopNow.addEventListener("click", () => {
        document.getElementById("cart-drawer").classList.remove("active");
        document.getElementById("cart-drawer-overlay").classList.remove("active");
      });
    }
    return;
  }

  footerNode.style.display = "flex";
  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    totalItemsCount += item.qty;
    const itemTotalCost = item.price * item.qty;
    subtotal += itemTotalCost;

    // Estimate freebie valuations based on free tag strings
    // (Valves = ₹50, Gasket values ₹80 to ₹100 or ₹270 combos)
    let itemGiftsEst = 0;
    if (item.free.includes("₹50")) itemGiftsEst += 50;
    if (item.free.includes("₹80")) itemGiftsEst += 80;
    if (item.free.includes("₹90")) itemGiftsEst += 90;
    if (item.free.includes("₹100")) itemGiftsEst += 100;
    if (item.free.includes("₹190")) itemGiftsEst += 190;
    if (item.free.includes("₹270")) itemGiftsEst += 270;
    // Fallback default set value estimate
    if (itemGiftsEst === 0 && item.free.includes("Nested")) itemGiftsEst += 1200; 

    totalFreebiesEst += itemGiftsEst * item.qty;

    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-details">
        <h4 class="cart-item-name">${item.name}</h4>
        <span class="cart-item-size">Size: ${item.size}</span>
        
        <div class="cart-item-price-qty">
          <div class="qty-control">
            <button class="qty-btn" onclick="decrementCartQty(${index})">-</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="incrementCartQty(${index})">+</button>
          </div>
          <span class="cart-item-total-price">₹${itemTotalCost.toLocaleString("en-IN")}</span>
        </div>
      </div>
      <button class="cart-item-delete" onclick="removeFromCart(${index})" aria-label="Remove item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      </button>
    `;
    cartList.appendChild(row);
  });

  // Update counts & text
  badgeCount.textContent = totalItemsCount;
  subtotalText.textContent = `₹${subtotal.toLocaleString("en-IN")}`;
  freeValueText.textContent = `₹${totalFreebiesEst.toLocaleString("en-IN")}`;
  totalText.textContent = `₹${subtotal.toLocaleString("en-IN")}`;
}

// 9. PORTFOLIO DIGITAL CATALOG VIEWER (LIGHTBOX SLIDER)
function renderCatalogThumbnails() {
  const grid = document.getElementById("catalog-pages-grid");
  if (!grid) return;

  grid.innerHTML = "";

  CATALOG_PAGES.forEach((page, index) => {
    const card = document.createElement("div");
    card.className = "catalog-card";
    card.innerHTML = `
      <div class="catalog-img-container">
        <img src="assets/screenshots/${page.file}" alt="${page.title}" loading="lazy">
        <div class="catalog-overlay-hover">
          <div class="catalog-overlay-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M15 3h6v6"></path>
              <path d="M9 21H3v-6"></path>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </div>
        </div>
      </div>
      <div class="catalog-card-title">${page.title}</div>
    `;

    card.addEventListener("click", () => {
      openLightbox(index);
    });

    grid.appendChild(card);
  });
}

function setupLightbox() {
  const lightbox = document.getElementById("catalog-lightbox");
  const lightboxImg = document.getElementById("lightbox-expanded-img");
  const caption = document.getElementById("lightbox-caption-text");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  const closeLightbox = () => {
    lightbox.classList.remove("active");
    document.body.style.overflow = ""; // restore scrolling
  };

  const showPage = (index) => {
    currentLightboxIndex = index;
    const page = CATALOG_PAGES[index];
    
    // Add page transition fade effect
    lightboxImg.classList.remove("fade-effect");
    void lightboxImg.offsetWidth; // trigger reflow
    lightboxImg.classList.add("fade-effect");

    lightboxImg.src = `assets/screenshots/${page.file}`;
    caption.textContent = `Page ${index + 1} of ${CATALOG_PAGES.length} - ${page.title}`;
  };

  window.openLightbox = function(index) {
    showPage(index);
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden"; // block body scroll
  };

  prevBtn.addEventListener("click", () => {
    let nextIdx = currentLightboxIndex - 1;
    if (nextIdx < 0) nextIdx = CATALOG_PAGES.length - 1;
    showPage(nextIdx);
  });

  nextBtn.addEventListener("click", () => {
    let nextIdx = currentLightboxIndex + 1;
    if (nextIdx >= CATALOG_PAGES.length) nextIdx = 0;
    showPage(nextIdx);
  });

  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.classList.contains("lightbox-content")) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "ArrowRight") nextBtn.click();
  });
}

// 10. INQUIRY FORM WHATSAPP HANDLER
function setupInquiryForm() {
  const form = document.getElementById("inquiry-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("form-name").value.trim();
    const phone = document.getElementById("form-phone").value.trim();
    const subject = document.getElementById("form-subject").value;
    const message = document.getElementById("form-message").value.trim();

    // Check variables
    if (!name || !phone || !message) return;

    let textMsg = `*KitchStar Cookware - Website Inquiry*\n`;
    textMsg += `-------------------------------------------\n`;
    textMsg += `*Sender Name:* ${name}\n`;
    textMsg += `*WhatsApp Number:* ${phone}\n`;
    textMsg += `*Interest Category:* ${subject}\n`;
    textMsg += `*Message Details:*\n${message}\n`;
    textMsg += `-------------------------------------------\n`;
    textMsg += `_Sent from KitchStar website portal inquiry form._`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(textMsg)}`;
    window.open(whatsappUrl, "_blank");

    form.reset();
  });
}

// 11. FLOATING ACTION CONTROLS
function setupBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
