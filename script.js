const PRODUCTS = [
  {
    id: "americanz-muscle-whey-protein-2kg",
    name: "Americanz Muscle Whey Protein",
    category: "Whey Protein",
    brand: "Americanz Muscle",
    price: 4799,
    originalPrice: 5000,
    size: "5 lb / 2.27 kg",
    label: "25g Protein + EAA + BCAA",
    offer: "Save ₹201",
    stock: "In stock",
    imageLabel: "WHEY",
    image: "assets/products/americanz-muscle-whey-protein-2kg-front.jpeg",
    images: [
      "assets/products/americanz-muscle-whey-protein-2kg-front.jpeg",
      "assets/products/americanz-muscle-whey-protein-2kg-back.jpeg",
    ],
    description: "Americanz Muscle Professional Protein drink powder with amino acids for lean muscle growth, digestive enzyme support and daily training recovery.",
    details: ["25g protein", "14.93g EAA", "5.29g BCAA", "4g glutamine"],
    specs: [
      "Category: Whey Proteins 2kg",
      "Goal: Lean muscle growth",
      "Pack size: 5 lb / 2.27 kg",
      "Servings: 71",
      "Flavour: Saffron Pista",
      "Added digestive enzymes",
      "Added multivitamin and immunity booster",
      "Zero added sugar and gluten free",
      "Brand: Americanz Muscle",
    ],
  },
  {
    id: "atom-whey-enzyme-44lb",
    name: "Atom Whey Enzyme",
    category: "Whey Protein",
    brand: "Atom",
    price: 3599,
    originalPrice: 4300,
    size: "4.4 lb",
    label: "27g Protein + BCAA + EAA",
    offer: "Save ₹701",
    stock: "In stock",
    imageLabel: "ATOM",
    image: "assets/products/atom-whey-enzyme-front.jpeg",
    images: [
      "assets/products/atom-whey-enzyme-front.jpeg",
      "assets/products/atom-whey-enzyme-back.jpeg",
    ],
    description: "Atom whey enzyme protein with protein, BCAA and EAA support for training recovery.",
    details: ["27g protein", "BCAA + EAA + L-Glutamine", "Digestive enzyme support"],
    specs: [
      "Category: Whey Proteins 2kg",
      "Goal: Recovery",
      "Pack size: 4.4 lb / 2 kg",
      "Protein: 27g",
      "Formula: BCAA + EAA + L-Glutamine",
      "Flavours: Double Rich Chocolate, Vanilla, Cookies & Cream, Mango Fusion, Cafe Latte, Mocha Cappuccino",
      "Brand: Atom",
    ],
  },
  {
    id: "labrada-100-whey-protein",
    name: "Labrada 100% Whey Protein",
    category: "Whey Protein",
    brand: "Labrada",
    price: 4499,
    originalPrice: 5500,
    size: "2 kg",
    label: "24g Protein + Amino Acids",
    offer: "Save ₹1,001",
    stock: "In stock",
    imageLabel: "100%",
    description: "Labrada 100% whey protein for protein intake and essential amino acid support.",
    details: ["24g protein", "Essential amino acids", "Workout recovery support"],
    specs: ["Category: Whey Proteins 2kg", "Goal: Muscle recovery", "Pack size: 2 kg", "Brand: Labrada"],
  },
  {
    id: "bolt-whey-protein-2lb",
    name: "Bolt Whey Protein",
    category: "Whey 1kg",
    brand: "Bolt",
    price: 1900,
    originalPrice: 2200,
    size: "2 lb / 0.9 kg",
    label: "25g Protein | 6g BCAA",
    offer: "Save ₹300",
    stock: "In stock",
    imageLabel: "BOLT",
    description: "Bolt whey protein in 2 lb pack for compact protein support and gym recovery.",
    details: ["25g protein", "6g BCAA", "Good entry pack size"],
    specs: ["Category: Whey 1kg", "Goal: Muscle recovery", "Pack size: 2 lb", "Brand: Bolt"],
  },
  {
    id: "exalt-priority-whey-protein",
    name: "Exalt The Priority Whey Protein",
    category: "Whey 1kg",
    brand: "Exalt",
    price: 2399,
    originalPrice: 2699,
    size: "1 kg",
    label: "24g Protein + 5.5g BCAA",
    offer: "Save ₹300",
    stock: "In stock",
    imageLabel: "EXALT",
    description: "Exalt Priority whey protein for protein intake, amino support and daily training.",
    details: ["24g protein", "5.5g BCAA", "Fitness protein support"],
    specs: ["Category: Whey 1kg", "Goal: Muscle gain", "Pack size: 1 kg", "Brand: Exalt"],
  },
  {
    id: "americanz-muscle-whey-protein-1kg",
    name: "Americanz Muscle Whey Protein",
    category: "Whey 1kg",
    brand: "Americanz Muscle",
    price: 2400,
    originalPrice: 2800,
    size: "1 kg",
    label: "25g Protein + EAA + BCAA",
    offer: "Save ₹400",
    stock: "In stock",
    imageLabel: "AM",
    description: "Americanz Muscle whey protein 1 kg pack for regular protein supplementation.",
    details: ["25g protein", "EAA + BCAA support", "Compact 1 kg pack"],
    specs: ["Category: Whey 1kg", "Goal: Muscle gain", "Pack size: 1 kg", "Brand: Americanz Muscle"],
  },
  {
    id: "bolt-whey-isolate-5lbs",
    name: "Bolt Whey Isolate",
    category: "Whey Isolate",
    brand: "Bolt",
    price: 4700,
    originalPrice: 5800,
    size: "5 lb",
    label: "28g Protein | 7g BCAA",
    offer: "Save ₹1,100",
    stock: "In stock",
    imageLabel: "ISO",
    description: "Bolt whey isolate 5 lb pack for high protein intake and lean muscle recovery.",
    details: ["28g protein", "7g BCAA", "Isolate protein formula"],
    specs: ["Category: Whey Iso 2kg", "Goal: Lean muscle", "Pack size: 5 lb", "Brand: Bolt"],
  },
  {
    id: "americanz-muscle-pro-isolate",
    name: "Americanz Muscle Pro Isolate",
    category: "Whey Isolate",
    brand: "Americanz Muscle",
    price: 5800,
    originalPrice: 6100,
    size: "2 kg",
    label: "27g Protein | 12g EAA",
    offer: "Save ₹300",
    stock: "In stock",
    imageLabel: "PRO ISO",
    description: "Americanz Muscle Pro Isolate for high-protein recovery and lean training goals.",
    details: ["27g protein", "12g EAA", "Isolate support"],
    specs: ["Category: Whey Iso 2kg", "Goal: Lean muscle", "Pack size: 2 kg", "Brand: Americanz Muscle"],
  },
  {
    id: "md-ripped-whey-protein",
    name: "MD Ripped Whey Protein",
    category: "Whey Isolate",
    brand: "MD",
    price: 3399,
    originalPrice: 4500,
    size: "2 kg",
    label: "28g Protein, Lean Muscle Build",
    offer: "Save ₹1,101",
    stock: "In stock",
    imageLabel: "RIPPED",
    description: "MD Ripped whey protein for protein support and lean muscle build goals.",
    details: ["28g protein", "Lean muscle build", "Training recovery support"],
    specs: ["Category: Whey Iso 2kg", "Goal: Lean muscle", "Pack size: 2 kg", "Brand: MD"],
  },
  {
    id: "md-whey-881lbs",
    name: "MD Whey",
    category: "Whey 4kg",
    brand: "MD",
    price: 5800,
    originalPrice: 7000,
    size: "8.81 lb / 4 kg",
    label: "24g Protein, 6.6g BCAA",
    offer: "Save ₹1,200",
    stock: "In stock",
    imageLabel: "MD",
    description: "MD whey 8.81 lb value pack for regular protein intake and training support.",
    details: ["24g protein", "6.6g BCAA", "Large value pack"],
    specs: ["Category: Whey 4kg", "Goal: Muscle gain", "Pack size: 8.81 lb", "Brand: MD"],
  },
  {
    id: "atom-whey-88lbs",
    name: "Atom Whey",
    category: "Whey 4kg",
    brand: "Atom",
    price: 6700,
    originalPrice: 8400,
    size: "8.8 lb / 4 kg",
    label: "27g Protein + BCAA + EAA",
    offer: "Save ₹1,700",
    stock: "In stock",
    imageLabel: "ATOM",
    description: "Atom whey 8.8 lb large pack with protein, BCAA and EAA support.",
    details: ["27g protein", "BCAA + EAA support", "Large 4 kg category pack"],
    specs: ["Category: Whey 4kg", "Goal: Muscle gain", "Pack size: 8.8 lb", "Brand: Atom"],
  },
  {
    id: "labrada-super-mass-gainer-5kg",
    name: "Labrada Super Mass Gainer",
    category: "Mass Gainer",
    brand: "Labrada",
    price: 3700,
    originalPrice: 4900,
    size: "5 kg",
    label: "1240 kcal, 40g Protein",
    offer: "Save ₹1,200",
    stock: "In stock",
    imageLabel: "GAINER",
    description: "Labrada Super Mass Gainer for weight gain, calorie surplus and bulking support.",
    details: ["1240 kcal", "40g protein", "Mass gain support"],
    specs: ["Category: Mass Gainer 5kg", "Goal: Weight gain", "Pack size: 5 kg", "Brand: Labrada"],
  },
  {
    id: "labrada-mass-gainer-11lb",
    name: "Labrada Mass Gainer",
    category: "Mass Gainer",
    brand: "Labrada",
    price: 4300,
    originalPrice: 4800,
    size: "11 lb",
    label: "52g Protein",
    offer: "Save ₹500",
    stock: "In stock",
    imageLabel: "DRS",
    description: "Labrada Mass Gainer 11 lb pack for bulking and high-calorie nutrition support.",
    details: ["52g protein", "Mass gain formula", "Large 11 lb pack"],
    specs: ["Category: Mass Gainer 5kg", "Goal: Weight gain", "Pack size: 11 lb", "Brand: Labrada"],
  },
  {
    id: "americanz-muscle-anabolic-gainer",
    name: "Americanz Muscle Anabolic Gainer",
    category: "Mass Gainer",
    brand: "Americanz Muscle",
    price: 4400,
    originalPrice: 5400,
    size: "5 kg",
    label: "60g Protein | 5.5g BCAA",
    offer: "Save ₹1,000",
    stock: "In stock",
    imageLabel: "GAINER",
    description: "Americanz Muscle Anabolic Gainer for serious bulking and calorie surplus goals.",
    details: ["60g protein", "5.5g BCAA", "Bulking support"],
    specs: ["Category: Mass Gainer 5kg", "Goal: Weight gain", "Pack size: 5 kg", "Brand: Americanz Muscle"],
  },
];

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const UPI_ID = "drssupplements@upi";
const UPI_QR_IMAGE = "assets/checkout/upi-qr.svg";

function getCart() {
  return JSON.parse(localStorage.getItem("drsCart") || "[]");
}

function saveCart(cart) {
  localStorage.setItem("drsCart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = getCart().reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll("[data-cart-count]").forEach((node) => {
    node.textContent = count;
  });
}

function addToCart(productId, button) {
  const product = PRODUCTS.find((item) => item.id === productId);
  if (!product) return;

  const cart = getCart();
  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }
  saveCart(cart);
  if (button) {
    const originalText = button.textContent;
    button.textContent = "Added";
    button.classList.add("is-added");
    button.disabled = true;
    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove("is-added");
      button.disabled = false;
    }, 1600);
  }
}

function productCard(product) {
  const productImage = product.image
    ? `<img src="${product.image}" alt="${product.name}">`
    : `
        <span class="pack-brand">${product.brand}</span>
        <strong>${product.imageLabel}</strong>
        <small>${product.size}</small>
      `;

  return `
    <article class="card product-card pro-product-card" data-category="${product.category}" data-name="${product.name.toLowerCase()} ${product.brand.toLowerCase()}">
      <a class="product-img product-pack ${product.image ? "has-product-image" : ""}" href="product-detail.html?id=${product.id}" aria-label="View ${product.name}">
        <span class="offer-badge">${product.offer}</span>
        ${productImage}
      </a>
      <div class="product-body">
        <div class="product-meta">
          <span class="tag">${product.category}</span>
        </div>
        <h3><a href="product-detail.html?id=${product.id}">${product.name}</a></h3>
        <p class="muted">${product.brand} · ${product.size} · ${product.label}</p>
        <div class="price-row">
          <div>
            <strong class="price">${currency.format(product.price)}</strong>
            <span class="mrp">${currency.format(product.originalPrice)}</span>
          </div>
          <span class="stock">${product.stock}</span>
        </div>
        <div class="product-actions">
          <a class="btn btn-outline btn-sm" href="product-detail.html?id=${product.id}">View Details</a>
          <button class="btn btn-primary btn-sm" type="button" onclick="addToCart('${product.id}', this)">Add to Cart</button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts(limit) {
  const target = document.querySelector("[data-products]");
  if (!target) return;
  const products = typeof limit === "number" ? PRODUCTS.slice(0, limit) : PRODUCTS;
  target.innerHTML = products.map(productCard).join("");
}

function setupFilters() {
  const buttons = document.querySelectorAll("[data-filter]");
  if (!buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;

      document.querySelectorAll("[data-category]").forEach((card) => {
        card.style.display = filter === "All" || card.dataset.category === filter ? "" : "none";
      });
    });
  });
}

function setupProductSearch() {
  const search = document.querySelector("[data-product-search]");
  if (!search) return;

  search.addEventListener("input", () => {
    const value = search.value.trim().toLowerCase();
    document.querySelectorAll("[data-name]").forEach((card) => {
      card.style.display = card.dataset.name.includes(value) ? "" : "none";
    });
  });
}

function getOrderContext() {
  const cart = getCart();
  const items = cart
    .map((entry) => {
      const product = PRODUCTS.find((item) => item.id === entry.id);
      if (!product) return null;
      return {
        ...product,
        qty: entry.qty,
        lineTotal: product.price * entry.qty,
      };
    })
    .filter(Boolean);

  const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
  const shipping = subtotal >= 3000 || subtotal === 0 ? 0 : 99;
  const total = subtotal + shipping;
  return { items, subtotal, shipping, total };
}

function renderCheckoutSummary() {
  const summaryTarget = document.querySelector("[data-checkout-summary]");
  const receiptTarget = document.querySelector("[data-print-receipt]");
  const totalTarget = document.querySelector("[data-checkout-total]");
  const payAmountTarget = document.querySelector("[data-pay-amount]");
  const receiptDate = document.querySelector("[data-receipt-date]");
  const receiptTotalBottom = document.querySelector("[data-receipt-total-bottom]");
  if (!summaryTarget) return;

  const context = getOrderContext();
  if (receiptDate) {
    receiptDate.textContent = new Date().toLocaleDateString("en-IN");
  }
  if (!context.items.length) {
    summaryTarget.innerHTML = `<div class="empty-state">Your cart is empty. Add products before checkout.</div>`;
    if (receiptTarget) {
      receiptTarget.innerHTML = "";
    }
    if (totalTarget) {
      totalTarget.textContent = currency.format(0);
    }
    if (payAmountTarget) {
      payAmountTarget.textContent = currency.format(0);
    }
    if (receiptTotalBottom) {
      receiptTotalBottom.textContent = currency.format(0);
    }
    return;
  }

  summaryTarget.innerHTML = `
    <div class="checkout-items">
      ${context.items
        .map(
          (item) => `
            <div class="checkout-item">
              <div>
                <strong>${item.name}</strong>
                <p>${item.brand} · Qty ${item.qty}</p>
              </div>
              <strong>${currency.format(item.lineTotal)}</strong>
            </div>
          `,
        )
        .join("")}
    </div>
    <div class="summary-row"><span>Subtotal</span><strong>${currency.format(context.subtotal)}</strong></div>
    <div class="summary-row"><span>Shipping</span><strong>${context.shipping === 0 ? "Free" : currency.format(context.shipping)}</strong></div>
    <div class="summary-row total"><span>Total</span><strong data-checkout-total>${currency.format(context.total)}</strong></div>
  `;

  if (totalTarget) {
    totalTarget.textContent = currency.format(context.total);
  }
  if (payAmountTarget) {
    payAmountTarget.textContent = currency.format(context.total);
  }
  if (receiptTotalBottom) {
    receiptTotalBottom.textContent = currency.format(context.total);
  }

  if (receiptTarget) {
    receiptTarget.innerHTML = context.items
      .map(
        (item) => `
          <tr>
            <td>${item.name}</td>
            <td>${item.qty}</td>
            <td>${currency.format(item.price)}</td>
            <td>${currency.format(item.lineTotal)}</td>
          </tr>
        `,
      )
      .join("");
  }
}

function setInlineMessage(message, type = "info") {
  const messageNode = document.querySelector("[data-checkout-message]");
  if (!messageNode) return;
  messageNode.textContent = message;
  messageNode.dataset.state = type;
}

function setupCheckoutPage() {
  const root = document.querySelector("[data-checkout-page]");
  if (!root) return;

  const paymentRadios = document.querySelectorAll("[name='paymentMethodRadio']");
  const upiPanel = document.querySelector("[data-upi-panel]");
  const razorpayPanel = document.querySelector("[data-razorpay-panel]");
  const codPanel = document.querySelector("[data-cod-panel]");
  const upiIdNode = document.querySelector("[data-upi-id]");
  const amountPaidButton = document.querySelector("[data-amount-paid]");
  const placeOrderButton = document.querySelector("[data-place-order]");
  const printButton = document.querySelector("[data-print-receipt-btn]");
  const copyButton = document.querySelector("[data-copy-upi]");
  const downloadButton = document.querySelector("[data-download-qr]");
  const payButton = document.querySelector("[data-upi-pay]");
  const razorpayButton = document.querySelector("[data-razorpay-pay]");
  const pincodeInput = document.querySelector("[data-pincode]");
  const pincodeHint = document.querySelector("[data-pincode-hint]");
  const checkoutForm = document.querySelector("[data-checkout-form]");
  const qrImage = document.querySelector("[data-qr-image]");
  const receiptPreview = document.querySelector("[data-print-receipt-root]");
  const paymentMethodField = document.querySelector("[data-payment-method]");
  const amountPaidField = document.querySelector("[data-amount-paid-state]");

  renderCheckoutSummary();

  if (upiIdNode) {
    upiIdNode.textContent = UPI_ID;
  }
  if (qrImage) {
    qrImage.src = UPI_QR_IMAGE;
  }

  const syncPaymentPanels = () => {
    const selected = document.querySelector("[name='paymentMethodRadio']:checked")?.value || "UPI";
    if (upiPanel) upiPanel.hidden = selected !== "UPI";
    if (razorpayPanel) razorpayPanel.hidden = selected !== "Razorpay";
    if (codPanel) codPanel.hidden = selected !== "COD";
    if (paymentMethodField) paymentMethodField.value = selected;
    setInlineMessage(`Payment mode set to ${selected}.`, "info");
  };

  paymentRadios.forEach((radio) => {
    radio.addEventListener("change", syncPaymentPanels);
  });

  if (pincodeInput && pincodeHint) {
    pincodeInput.addEventListener("input", () => {
      const valid = /^\d{6}$/.test(pincodeInput.value.trim());
      pincodeHint.textContent = valid ? "Pincode looks valid." : "Enter a 6-digit pincode.";
      pincodeHint.dataset.state = valid ? "success" : "error";
    });
  }

  if (copyButton) {
    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(UPI_ID);
        setInlineMessage("UPI ID copied to clipboard.", "success");
      } catch {
        setInlineMessage("Copy failed. Use the UPI ID shown on screen.", "error");
      }
    });
  }

  if (downloadButton) {
    downloadButton.addEventListener("click", () => {
      const link = document.createElement("a");
      link.href = UPI_QR_IMAGE;
      link.download = "drs-upi-qr.svg";
      link.click();
      setInlineMessage("QR download started.", "success");
    });
  }

  if (payButton) {
    payButton.addEventListener("click", () => {
      const total = getOrderContext().total;
      const upiUrl = `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=DRS%20Supplements&am=${total.toFixed(2)}&cu=INR`;
      window.location.href = upiUrl;
    });
  }

  if (razorpayButton) {
    razorpayButton.addEventListener("click", () => {
      setInlineMessage("Razorpay checkout placeholder. Connect your live Razorpay integration here.", "info");
    });
  }

  if (amountPaidButton) {
    amountPaidButton.addEventListener("click", () => {
      if (amountPaidField) {
        amountPaidField.value = "Paid";
      }
      setInlineMessage("Amount marked as paid. You can place the order.", "success");
    });
  }

  if (placeOrderButton) {
    placeOrderButton.addEventListener("click", () => {
      if (!checkoutForm) return;
      const formData = new FormData(checkoutForm);
      const fullName = String(formData.get("fullName") || "").trim();
      const phoneNumber = String(formData.get("phoneNumber") || "").trim();
      const address = String(formData.get("address") || "").trim();
      const pincode = String(formData.get("pincode") || "").trim();
      const paymentMethod = String(formData.get("paymentMethod") || "UPI");
      const amountStatus = String(formData.get("amountPaidState") || "").trim();

      if (!fullName || !phoneNumber || !address || !/^\d{6}$/.test(pincode)) {
        setInlineMessage("Fill customer details and a valid 6-digit pincode first.", "error");
        return;
      }

      if (!getOrderContext().items.length) {
        setInlineMessage("Your cart is empty.", "error");
        return;
      }

      if (paymentMethod !== "COD" && amountStatus !== "Paid") {
        setInlineMessage("Mark the amount as paid before placing the order.", "error");
        return;
      }

      const receiptName = document.querySelector("[data-receipt-name]");
      const receiptPhone = document.querySelector("[data-receipt-phone]");
      const receiptAddress = document.querySelector("[data-receipt-address]");
      const receiptPincode = document.querySelector("[data-receipt-pincode]");
      const receiptPayment = document.querySelector("[data-receipt-payment]");
      const receiptTotal = document.querySelector("[data-receipt-total]");
      const receiptTotalBottom = document.querySelector("[data-receipt-total-bottom]");
      if (receiptName) receiptName.textContent = fullName;
      if (receiptPhone) receiptPhone.textContent = phoneNumber;
      if (receiptAddress) receiptAddress.textContent = address;
      if (receiptPincode) receiptPincode.textContent = pincode;
      if (receiptPayment) receiptPayment.textContent = paymentMethod;
      if (receiptTotal) receiptTotal.textContent = currency.format(getOrderContext().total);
      if (receiptTotalBottom) receiptTotalBottom.textContent = currency.format(getOrderContext().total);

      setInlineMessage("Order ready. Print the receipt or save the details.", "success");
      if (receiptPreview) {
        receiptPreview.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  if (printButton) {
    printButton.addEventListener("click", () => {
      window.print();
    });
  }

  syncPaymentPanels();
}

function setupMobileMenu() {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector("[data-menu-toggle]");
  const links = document.querySelector(".nav-links");
  if (!nav || !toggle || !links) return;

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("menu-open");
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function renderProductDetail() {
  const target = document.querySelector("[data-product-detail]");
  if (!target) return;

  const params = new URLSearchParams(window.location.search);
  const product = PRODUCTS.find((item) => item.id === params.get("id")) || PRODUCTS[0];
  document.title = `${product.name} | DRS Supplements`;
  const galleryImages = product.images || (product.image ? [product.image] : []);
  const galleryMarkup = galleryImages.length
    ? `
        <div class="detail-image-main">
          <img src="${galleryImages[0]}" alt="${product.name}">
        </div>
        <div class="detail-thumbs">
          ${galleryImages.map((image, index) => `<img src="${image}" alt="${product.name} view ${index + 1}">`).join("")}
        </div>
      `
    : `
        <div class="product-pack detail-pack">
          <span class="offer-badge">${product.offer}</span>
          <span class="pack-brand">${product.brand}</span>
          <strong>${product.imageLabel}</strong>
          <small>${product.size}</small>
        </div>
        <p class="muted">Image placeholder: replace this area with the real product photo when final images are ready.</p>
      `;

  target.innerHTML = `
    <div class="product-detail-layout">
      <div class="detail-gallery">
        ${galleryMarkup}
      </div>
      <div class="detail-info">
        <span class="tag">${product.category}</span>
        <h1>${product.name}</h1>
        <p class="lead">${product.description}</p>
        <div class="detail-price-row">
          <strong class="price">${currency.format(product.price)}</strong>
          <span class="mrp">${currency.format(product.originalPrice)}</span>
          <span class="offer-chip">${product.offer}</span>
        </div>
        <p><span class="stock">${product.stock}</span></p>
        <div class="actions">
          <button class="btn btn-primary" type="button" onclick="addToCart('${product.id}', this)">Add to Cart</button>
          <a class="btn btn-outline" href="https://wa.me/917010349305?text=I%20want%20to%20order%20${encodeURIComponent(product.name)}" target="_blank" rel="noopener">WhatsApp Order</a>
        </div>
        <div class="detail-panel">
          <h3>Product Highlights</h3>
          <ul class="detail-list">
            ${product.details.map((detail) => `<li>${detail}</li>`).join("")}
          </ul>
        </div>
        <div class="detail-panel">
          <h3>Product Details</h3>
          <ul class="detail-list">
            ${product.specs.map((spec) => `<li>${spec}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>
  `;
}

function cartItemMarkup(item) {
  const product = PRODUCTS.find((entry) => entry.id === item.id);
  if (!product) return "";

  const thumbnail = product.image
    ? `<img class="cart-thumb" src="${product.image}" alt="${product.name}">`
    : `<div class="cart-thumb cart-thumb-fallback">${product.imageLabel}</div>`;

  return `
    <article class="cart-item">
      <div class="cart-item-media">
        ${thumbnail}
      </div>
      <div class="cart-item-body">
        <div class="cart-item-top">
          <div>
            <h3>${product.name}</h3>
            <p class="muted">${product.brand}</p>
          </div>
          <button class="filter-btn cart-remove" type="button" onclick="removeItem('${product.id}')">Remove</button>
        </div>
        <div class="cart-item-meta">
          <div>
            <span class="cart-label">Unit price</span>
            <strong>${currency.format(product.price)}</strong>
          </div>
          <div>
            <span class="cart-label">Subtotal</span>
            <strong>${currency.format(product.price * item.qty)}</strong>
          </div>
        </div>
        <div class="cart-item-footer">
          <div class="qty-stepper" aria-label="Quantity stepper">
            <button type="button" onclick="changeQty('${product.id}', -1)">-</button>
            <span>${item.qty}</span>
            <button type="button" onclick="changeQty('${product.id}', 1)">+</button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderCart() {
  const itemsTarget = document.querySelector("[data-cart-items]");
  const subtotalNode = document.querySelector("[data-subtotal]");
  const shippingNode = document.querySelector("[data-shipping]");
  const totalNode = document.querySelector("[data-total]");
  if (!itemsTarget) return;

  const cart = getCart();
  if (!cart.length) {
    itemsTarget.innerHTML = "";
    subtotalNode.textContent = currency.format(0);
    shippingNode.textContent = currency.format(0);
    totalNode.textContent = currency.format(0);
    return;
  }

  let subtotal = 0;
  itemsTarget.innerHTML = cart.map((item) => {
    const product = PRODUCTS.find((entry) => entry.id === item.id);
    if (!product) return "";
    const lineTotal = product.price * item.qty;
    subtotal += lineTotal;
    return cartItemMarkup(item);
  }).join("");

  const shipping = subtotal >= 3000 ? 0 : 99;
  subtotalNode.textContent = currency.format(subtotal);
  shippingNode.textContent = shipping === 0 ? "Free" : currency.format(shipping);
  totalNode.textContent = currency.format(subtotal + shipping);
}

function changeQty(productId, value) {
  const cart = getCart().map((item) => {
    if (item.id !== productId) return item;
    const nextQty = typeof value === "number" ? item.qty + value : Number(value);
    return { ...item, qty: Number(nextQty) || 0 };
  });
  const cleanedCart = cart.filter((item) => item.qty > 0);
  saveCart(cleanedCart);
  renderCart();
}

function removeItem(productId) {
  const cart = getCart().filter((item) => item.id !== productId);
  saveCart(cart);
  renderCart();
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  setupMobileMenu();
  renderProducts(document.body.dataset.page === "home" ? 3 : undefined);
  setupFilters();
  setupProductSearch();
  renderProductDetail();
  setupCheckoutPage();
  renderCart();
});
