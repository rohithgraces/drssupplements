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
    id: "atom-whey-enzyme-1kg",
    name: "Atom Whey Enzyme",
    category: "Whey 1kg",
    brand: "Atom",
    variantGroup: "atom-whey-enzyme",
    price: 1999,
    originalPrice: 2400,
    size: "1 kg",
    label: "27g Protein + BCAA + EAA",
    stock: "In stock",
    imageLabel: "ATOM",
    image: "assets/products/atom-whey-enzyme-front.jpeg",
    images: [
      "assets/products/atom-whey-enzyme-front.jpeg",
      "assets/products/atom-whey-enzyme-back.jpeg",
    ],
    flavours: ["Double Rich Chocolate", "Vanilla", "Cookies & Cream", "Mango Fusion", "Cafe Latte", "Mocha Cappuccino"],
    description: "Atom whey enzyme protein 1 kg pack with protein, BCAA and EAA support for training recovery.",
    details: ["27g protein", "BCAA + EAA + L-Glutamine", "Digestive enzyme support"],
    specs: [
      "Category: Whey 1kg",
      "Goal: Recovery",
      "Pack size: 1 kg",
      "Protein: 27g",
      "Formula: BCAA + EAA + L-Glutamine",
      "Flavours: Double Rich Chocolate, Vanilla, Cookies & Cream, Mango Fusion, Cafe Latte, Mocha Cappuccino",
      "Brand: Atom",
    ],
  },
  {
    id: "atom-whey-enzyme-44lb",
    name: "Atom Whey Enzyme",
    category: "Whey Protein",
    brand: "Atom",
    variantGroup: "atom-whey-enzyme",
    price: 3599,
    originalPrice: 4300,
    size: "4.4 lb / 2 kg",
    label: "27g Protein + BCAA + EAA",
    stock: "In stock",
    imageLabel: "ATOM",
    image: "assets/products/atom-whey-enzyme-front.jpeg",
    images: [
      "assets/products/atom-whey-enzyme-front.jpeg",
      "assets/products/atom-whey-enzyme-back.jpeg",
    ],
    flavours: ["Double Rich Chocolate", "Vanilla", "Cookies & Cream", "Mango Fusion", "Cafe Latte", "Mocha Cappuccino"],
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
    variantGroup: "atom-whey-enzyme",
    price: 6700,
    originalPrice: 8400,
    size: "8.8 lb / 4 kg",
    label: "27g Protein + BCAA + EAA",
    stock: "In stock",
    imageLabel: "ATOM",
    image: "assets/products/atom-whey-enzyme-front.jpeg",
    images: [
      "assets/products/atom-whey-enzyme-front.jpeg",
      "assets/products/atom-whey-enzyme-back.jpeg",
    ],
    flavours: ["Double Rich Chocolate", "Vanilla", "Cookies & Cream", "Mango Fusion", "Cafe Latte", "Mocha Cappuccino"],
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
    stock: "In stock",
    imageLabel: "GAINER",
    description: "Americanz Muscle Anabolic Gainer for serious bulking and calorie surplus goals.",
    details: ["60g protein", "5.5g BCAA", "Bulking support"],
    specs: ["Category: Mass Gainer 5kg", "Goal: Weight gain", "Pack size: 5 kg", "Brand: Americanz Muscle"],
  },
  {
    id: "muscletech-creatine-300g",
    name: "MuscleTech Creatine",
    category: "Creatine 300g",
    brand: "MuscleTech",
    price: 950,
    originalPrice: 1400,
    size: "300 g",
    label: "Creatine Monohydrate",
    stock: "In stock",
    imageLabel: "CREATINE",
    description: "MuscleTech creatine 300 g for strength, power output and daily gym performance support.",
    details: ["300g creatine", "Strength support", "Daily performance"],
    specs: ["Category: Creatine 300g", "Pack size: 300 g", "Brand: MuscleTech"],
  },
  {
    id: "william-bonac-creatine-300g",
    name: "William Bonac Creatine",
    category: "Creatine 300g",
    brand: "William Bonac",
    price: 900,
    originalPrice: 1200,
    size: "300 g",
    label: "Creatine Monohydrate",
    stock: "In stock",
    imageLabel: "CREATINE",
    description: "William Bonac creatine 300 g for strength training and workout performance.",
    details: ["300g creatine", "Power support", "Workout strength"],
    specs: ["Category: Creatine 300g", "Pack size: 300 g", "Brand: William Bonac"],
  },
  {
    id: "on-creatine-300g",
    name: "ON Creatine",
    category: "Creatine 300g",
    brand: "Optimum Nutrition",
    price: 850,
    originalPrice: 1200,
    size: "300 g",
    label: "Creatine Monohydrate",
    stock: "In stock",
    imageLabel: "ON",
    description: "Optimum Nutrition creatine 300 g for gym strength and muscle performance support.",
    details: ["300g creatine", "Strength support", "Performance formula"],
    specs: ["Category: Creatine 300g", "Pack size: 300 g", "Brand: Optimum Nutrition"],
  },
  {
    id: "mt-mass-gainer-3kg",
    name: "MT Mass Gainer",
    category: "Mass 3kg",
    brand: "MuscleTech",
    price: 2900,
    originalPrice: 3200,
    size: "3 kg",
    label: "Mass Gainer",
    stock: "In stock",
    imageLabel: "MASS",
    description: "MT mass gainer 3 kg for calorie surplus, weight gain and bulking nutrition support.",
    details: ["3kg mass gainer", "Weight gain support", "Bulking nutrition"],
    specs: ["Category: Mass 3kg", "Pack size: 3 kg", "Brand: MuscleTech"],
  },
  {
    id: "americanz-muscle-mass-gainer-3kg",
    name: "Americanz Muscle Mass Gainer",
    category: "Mass 3kg",
    brand: "Americanz Muscle",
    price: 2400,
    originalPrice: 2800,
    size: "3 kg",
    label: "Mass Gainer",
    stock: "In stock",
    imageLabel: "MASS",
    description: "Americanz Muscle mass gainer 3 kg for healthy weight gain and gym bulking goals.",
    details: ["3kg mass gainer", "Calorie support", "Bulking goals"],
    specs: ["Category: Mass 3kg", "Pack size: 3 kg", "Brand: Americanz Muscle"],
  },
  {
    id: "healthfarm-hydragain-mass-gainer-3kg",
    name: "Healthfarm HydraGain Mass Gainer",
    category: "Mass 3kg",
    brand: "Healthfarm",
    price: 2400,
    originalPrice: 2900,
    size: "3 kg",
    label: "Mass Gainer",
    stock: "In stock",
    imageLabel: "MASS",
    description: "Healthfarm HydraGain mass gainer 3 kg for mass gain and calorie-dense nutrition.",
    details: ["3kg mass gainer", "Mass gain support", "High-calorie nutrition"],
    specs: ["Category: Mass 3kg", "Pack size: 3 kg", "Brand: Healthfarm"],
  },
  {
    id: "qnt-creatine-100g",
    name: "QNT Creatine",
    category: "Creatine 100g",
    brand: "QNT",
    price: 400,
    originalPrice: 600,
    size: "100 g",
    label: "Creatine Monohydrate",
    stock: "In stock",
    imageLabel: "QNT",
    description: "QNT creatine 100 g compact pack for strength and workout performance.",
    details: ["100g creatine", "Strength support", "Compact pack"],
    specs: ["Category: Creatine 100g", "Pack size: 100 g", "Brand: QNT"],
  },
  {
    id: "wellcore-creatine-100g",
    name: "Wellcore Creatine",
    category: "Creatine 100g",
    brand: "Wellcore",
    price: 350,
    originalPrice: 700,
    size: "100 g",
    label: "Creatine Monohydrate",
    stock: "In stock",
    imageLabel: "CREATINE",
    description: "Wellcore creatine 100 g for strength support and daily workout performance.",
    details: ["100g creatine", "Strength support", "Daily use"],
    specs: ["Category: Creatine 100g", "Pack size: 100 g", "Brand: Wellcore"],
  },
  {
    id: "americanz-muscle-creatine-100g",
    name: "Americanz Muscle Creatine",
    category: "Creatine 100g",
    brand: "Americanz Muscle",
    price: 450,
    originalPrice: 700,
    size: "100 g",
    label: "Creatine Monohydrate",
    stock: "In stock",
    imageLabel: "AM",
    description: "Americanz Muscle creatine 100 g for compact strength and power support.",
    details: ["100g creatine", "Power support", "Workout performance"],
    specs: ["Category: Creatine 100g", "Pack size: 100 g", "Brand: Americanz Muscle"],
  },
  {
    id: "exalt-iso-priority-whey-protein",
    name: "Exalt ISO Priority Whey Protein",
    category: "Whey Isolate",
    brand: "Exalt",
    price: 5800,
    originalPrice: 7000,
    size: "2 kg",
    label: "25g Protein, 5.5g BCAA",
    stock: "In stock",
    imageLabel: "ISO",
    description: "Exalt ISO Priority whey protein for lean muscle recovery and high-protein support.",
    details: ["25g protein", "5.5g BCAA", "Whey isolate support"],
    specs: ["Category: Whey Isolate", "Pack size: 2 kg", "Brand: Exalt"],
  },
  {
    id: "qnt-prime-triple-whey-protein",
    name: "QNT Prime Triple Whey Protein",
    category: "Whey Protein",
    brand: "QNT",
    price: 4300,
    originalPrice: 4999,
    size: "2 kg",
    label: "25g Protein, 9.4g BCAA",
    stock: "In stock",
    imageLabel: "QNT",
    description: "QNT Prime Triple whey protein for protein intake, BCAA support and recovery.",
    details: ["25g protein", "9.4g BCAA", "Recovery support"],
    specs: ["Category: Whey Protein", "Pack size: 2 kg", "Brand: QNT"],
  },
  {
    id: "exalt-priority-whey-protein-2kg",
    name: "Exalt The Priority Whey Protein",
    category: "Whey Protein",
    brand: "Exalt",
    variantGroup: "exalt-priority-whey-protein",
    price: 4899,
    originalPrice: 5999,
    size: "2 kg",
    label: "24g Protein, 5.5g BCAA",
    stock: "In stock",
    imageLabel: "EXALT",
    description: "Exalt The Priority whey protein 2 kg for protein support, BCAA and fitness recovery.",
    details: ["24g protein", "5.5g BCAA", "Fitness recovery"],
    specs: ["Category: Whey Protein", "Pack size: 2 kg", "Brand: Exalt"],
  },
  {
    id: "william-bonac-protein-4lb",
    name: "William Bonac Protein",
    category: "Whey Protein",
    brand: "William Bonac",
    price: 4699,
    originalPrice: 6799,
    size: "4 lb",
    label: "24g Protein, 11.7g EAA",
    stock: "In stock",
    imageLabel: "WHEY",
    description: "William Bonac protein 4 lb for muscle recovery, EAA support and daily training.",
    details: ["24g protein", "11.7g EAA", "Training recovery"],
    specs: ["Category: Whey Protein", "Pack size: 4 lb", "Brand: William Bonac"],
  },
  {
    id: "one-science-nitra-whey-protein",
    name: "One Science Nitra Whey Protein",
    category: "Whey Protein",
    brand: "One Science",
    price: 5500,
    originalPrice: 5999,
    size: "2 kg",
    label: "27g Protein, 3g Creatine",
    stock: "In stock",
    imageLabel: "NITRA",
    description: "One Science Nitra Whey protein with protein and creatine support for workouts.",
    details: ["27g protein", "3g creatine", "Workout support"],
    specs: ["Category: Whey Protein", "Pack size: 2 kg", "Brand: One Science"],
  },
  {
    id: "muscletech-nitro-tech-ripped",
    name: "MuscleTech Nitro Tech Ripped",
    category: "Whey Protein",
    brand: "MuscleTech",
    price: 5499,
    originalPrice: 6499,
    size: "2 kg",
    label: "30g Protein, Lean Muscle Build",
    stock: "In stock",
    imageLabel: "NITRO",
    description: "MuscleTech Nitro Tech Ripped protein for lean muscle build and training recovery.",
    details: ["30g protein", "Lean muscle build", "Recovery support"],
    specs: ["Category: Whey Protein", "Pack size: 2 kg", "Brand: MuscleTech"],
  },
  {
    id: "muscletech-nitro-tech-whey",
    name: "MuscleTech Nitro-Tech Whey",
    category: "Whey Protein",
    brand: "MuscleTech",
    price: 5199,
    originalPrice: 6299,
    size: "2 kg",
    label: "30g Protein",
    stock: "In stock",
    imageLabel: "NITRO",
    description: "MuscleTech Nitro-Tech whey protein for protein intake and muscle recovery support.",
    details: ["30g protein", "Muscle recovery", "Training support"],
    specs: ["Category: Whey Protein", "Pack size: 2 kg", "Brand: MuscleTech"],
  },
];

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const UPI_ID = "drssupplements@upi";
const UPI_QR_IMAGE = "assets/checkout/upi-qr.svg";
const ADMIN_PRODUCTS_KEY = "drsAdminProducts";
const DELETED_PRODUCTS_KEY = "drsDeletedProducts";
const ORDERS_KEY = "drsOrders";
const HOME_SETTINGS_KEY = "drsHomeSettings";
const SUPABASE_PRODUCTS_TABLE = "products";
const SUPABASE_ORDERS_TABLE = "orders";
const SUPABASE_SETTINGS_TABLE = "settings";
const SUPABASE_DELETED_PRODUCTS_ID = "deletedProducts";
const SUPABASE_HOME_SETTINGS_ID = "homeSettings";

const DEFAULT_HOME_SETTINGS = {
  featuredProductIds: [
    "americanz-muscle-whey-protein-2kg",
    "atom-whey-enzyme-44lb",
    "labrada-super-mass-gainer-5kg",
  ],
  homeCategories: [
    { name: "Protein", description: "Whey and plant-based proteins for muscle building and recovery." },
    { name: "Mass Gainer", description: "Premium gainers to help support healthy weight gain and bulking." },
    { name: "Pre-workout", description: "Energy formulas to support focus, pumps and workout performance." },
    { name: "Creatine", description: "Pure creatine supplements for strength, power and muscle volume." },
    { name: "BCAA", description: "Amino acid support for muscle preservation and enhanced recovery." },
    { name: "Multivitamins", description: "Essential vitamins and minerals for everyday health and wellness." },
  ],
  shopFilters: ["All", "Whey Protein", "Whey 1kg", "Whey Isolate", "Whey 4kg", "Mass Gainer"],
};

let supabaseClient = null;

function isSupabaseConfigured() {
  const config = window.DRS_SUPABASE_CONFIG;
  return Boolean(
    window.supabase &&
    config &&
    config.url &&
    config.anonKey &&
    !String(config.anonKey).startsWith("PASTE_")
  );
}

function setupSupabase() {
  if (!isSupabaseConfigured()) return null;
  if (supabaseClient) return supabaseClient;

  try {
    supabaseClient = window.supabase.createClient(
      window.DRS_SUPABASE_CONFIG.url,
      window.DRS_SUPABASE_CONFIG.anonKey
    );
    return supabaseClient;
  } catch (error) {
    console.warn("Supabase setup failed. Using localStorage fallback.", error);
    return null;
  }
}

async function syncTableToSupabase(tableName, records, previousRecords = []) {
  const client = setupSupabase();
  if (!client) return;

  try {
    const nextIds = new Set(records.map((record) => record.id).filter(Boolean));
    const removedIds = previousRecords.map((record) => record.id).filter((id) => id && !nextIds.has(id));

    if (removedIds.length) {
      const { error: deleteError } = await client.from(tableName).delete().in("id", removedIds);
      if (deleteError) throw deleteError;
    }

    if (records.length) {
      const rows = records
        .filter((record) => record.id)
        .map((record) => ({
          id: record.id,
          data: record,
          updated_at: new Date().toISOString(),
        }));
      const { error: upsertError } = await client.from(tableName).upsert(rows, { onConflict: "id" });
      if (upsertError) throw upsertError;
    }
  } catch (error) {
    console.warn(`Supabase ${tableName} sync failed. Local copy is saved.`, error);
  }
}

async function fetchSupabaseTable(tableName) {
  const client = setupSupabase();
  if (!client) return [];

  try {
    const { data, error } = await client.from(tableName).select("id,data");
    if (error) throw error;
    return (data || []).map((row) => ({ id: row.id, ...(row.data || {}) }));
  } catch (error) {
    console.warn(`Supabase ${tableName} fetch failed. Using localStorage fallback.`, error);
    return [];
  }
}

async function syncDeletedProductsToSupabase(ids) {
  const client = setupSupabase();
  if (!client) return;

  try {
    const { error } = await client.from(SUPABASE_SETTINGS_TABLE).upsert({
      id: SUPABASE_DELETED_PRODUCTS_ID,
      data: { ids: Array.from(new Set(ids)) },
      updated_at: new Date().toISOString(),
    }, { onConflict: "id" });
    if (error) throw error;
  } catch (error) {
    console.warn("Supabase deleted product sync failed. Local copy is saved.", error);
  }
}

async function syncSettingToSupabase(id, data) {
  const client = setupSupabase();
  if (!client) return;

  try {
    const { error } = await client.from(SUPABASE_SETTINGS_TABLE).upsert({
      id,
      data,
      updated_at: new Date().toISOString(),
    }, { onConflict: "id" });
    if (error) throw error;
  } catch (error) {
    console.warn(`Supabase setting ${id} sync failed. Local copy is saved.`, error);
  }
}

async function fetchSettingFromSupabase(id) {
  const client = setupSupabase();
  if (!client) return null;

  try {
    const { data, error } = await client
      .from(SUPABASE_SETTINGS_TABLE)
      .select("data")
      .eq("id", id)
      .maybeSingle();
    if (error) throw error;
    return data?.data || null;
  } catch (error) {
    console.warn(`Supabase setting ${id} fetch failed. Using localStorage fallback.`, error);
    return null;
  }
}

async function fetchDeletedProductsFromSupabase() {
  const client = setupSupabase();
  if (!client) return [];

  try {
    const { data, error } = await client
      .from(SUPABASE_SETTINGS_TABLE)
      .select("data")
      .eq("id", SUPABASE_DELETED_PRODUCTS_ID)
      .maybeSingle();
    if (error) throw error;
    return data?.data?.ids || [];
  } catch (error) {
    console.warn("Supabase deleted product fetch failed. Using localStorage fallback.", error);
    return [];
  }
}

async function hydrateSupabaseData() {
  const client = setupSupabase();
  if (!client) return false;

  try {
    const [products, orders, deletedIds, homeSettings] = await Promise.all([
      fetchSupabaseTable(SUPABASE_PRODUCTS_TABLE),
      fetchSupabaseTable(SUPABASE_ORDERS_TABLE),
      fetchDeletedProductsFromSupabase(),
      fetchSettingFromSupabase(SUPABASE_HOME_SETTINGS_ID),
    ]);

    const localProducts = getAdminProducts();
    const localOrders = getOrders();
    const localDeletedIds = getDeletedProductIds();

    if (products.length || !localProducts.length) {
      localStorage.setItem(ADMIN_PRODUCTS_KEY, JSON.stringify(products));
    } else {
      syncTableToSupabase(SUPABASE_PRODUCTS_TABLE, localProducts, []);
    }

    if (orders.length || !localOrders.length) {
      localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
    } else {
      syncTableToSupabase(SUPABASE_ORDERS_TABLE, localOrders, []);
    }

    if (deletedIds.length || !localDeletedIds.length) {
      localStorage.setItem(DELETED_PRODUCTS_KEY, JSON.stringify(deletedIds));
    } else {
      syncDeletedProductsToSupabase(localDeletedIds);
    }

    const localHomeSettings = getHomeSettings(false);
    if (homeSettings) {
      localStorage.setItem(HOME_SETTINGS_KEY, JSON.stringify(normalizeHomeSettings(homeSettings)));
    } else if (localStorage.getItem(HOME_SETTINGS_KEY)) {
      syncSettingToSupabase(SUPABASE_HOME_SETTINGS_ID, localHomeSettings);
    }
    return true;
  } catch (error) {
    console.warn("Supabase hydration failed. Using localStorage fallback.", error);
    return false;
  }
}
function getAdminProducts() {
  try {
    return JSON.parse(localStorage.getItem(ADMIN_PRODUCTS_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveAdminProducts(products) {
  const previousProducts = getAdminProducts();
  localStorage.setItem(ADMIN_PRODUCTS_KEY, JSON.stringify(products));
  syncTableToSupabase(SUPABASE_PRODUCTS_TABLE, products, previousProducts);
}

function getDeletedProductIds() {
  try {
    return JSON.parse(localStorage.getItem(DELETED_PRODUCTS_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveDeletedProductIds(ids) {
  const deletedIds = Array.from(new Set(ids));
  localStorage.setItem(DELETED_PRODUCTS_KEY, JSON.stringify(deletedIds));
  syncDeletedProductsToSupabase(deletedIds);
}

function getProducts() {
  const adminProducts = getAdminProducts();
  const productMap = new Map(PRODUCTS.map((product) => [product.id, product]));
  adminProducts.forEach((product) => {
    productMap.set(product.id, product);
  });
  const deletedIds = new Set(getDeletedProductIds());
  return Array.from(productMap.values()).filter((product) => !deletedIds.has(product.id));
}

function getOrders() {
  try {
    return JSON.parse(localStorage.getItem(ORDERS_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveOrders(orders) {
  const previousOrders = getOrders();
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  syncTableToSupabase(SUPABASE_ORDERS_TABLE, orders, previousOrders);
}

function normalizeHomeSettings(settings = {}) {
  return {
    featuredProductIds: Array.isArray(settings.featuredProductIds)
      ? settings.featuredProductIds.filter(Boolean)
      : DEFAULT_HOME_SETTINGS.featuredProductIds,
    homeCategories: Array.isArray(settings.homeCategories) && settings.homeCategories.length
      ? settings.homeCategories
          .map((category) => ({
            name: String(category.name || "").trim(),
            description: String(category.description || "").trim(),
          }))
          .filter((category) => category.name)
      : DEFAULT_HOME_SETTINGS.homeCategories,
    shopFilters: Array.isArray(settings.shopFilters) && settings.shopFilters.length
      ? Array.from(new Set(settings.shopFilters.map((filter) => String(filter).trim()).filter(Boolean)))
      : DEFAULT_HOME_SETTINGS.shopFilters,
  };
}

function getHomeSettings(useFallback = true) {
  try {
    const stored = JSON.parse(localStorage.getItem(HOME_SETTINGS_KEY) || "null");
    return normalizeHomeSettings(stored || (useFallback ? DEFAULT_HOME_SETTINGS : {}));
  } catch {
    return normalizeHomeSettings(DEFAULT_HOME_SETTINGS);
  }
}

function saveHomeSettings(settings) {
  const normalized = normalizeHomeSettings(settings);
  localStorage.setItem(HOME_SETTINGS_KEY, JSON.stringify(normalized));
  syncSettingToSupabase(SUPABASE_HOME_SETTINGS_ID, normalized);
  return normalized;
}

function createOrderId() {
  const datePart = new Date().toISOString().slice(2, 10).replace(/-/g, "");
  const randomPart = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `DRS-${datePart}-${randomPart}`;
}

function slugify(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function calculateOffer(price, originalPrice) {
  const savings = Number(originalPrice) - Number(price);
  return savings > 0 ? `Save ${currency.format(savings)}` : "";
}

function orderStatusMeta(status) {
  const statusMap = {
    "Order Placed": {
      shippingStatus: "Preparing order",
      location: "DRS Supplements",
      trackingNote: "Your order has been received by DRS Supplements.",
    },
    Confirmed: {
      shippingStatus: "Confirmed",
      location: "DRS Supplements",
      trackingNote: "Your order has been confirmed and will be packed shortly.",
    },
    Packed: {
      shippingStatus: "Packed",
      location: "DRS Supplements",
      trackingNote: "Your order is packed and ready for dispatch.",
    },
    Shipped: {
      shippingStatus: "Shipped",
      location: "In transit",
      trackingNote: "Your order has been shipped.",
    },
    "Out for Delivery": {
      shippingStatus: "Out for Delivery",
      location: "Near delivery area",
      trackingNote: "Your order is out for delivery.",
    },
    Delivered: {
      shippingStatus: "Delivered",
      location: "Delivered to customer",
      trackingNote: "Your order has been delivered.",
    },
    Cancelled: {
      shippingStatus: "Cancelled",
      location: "Order cancelled",
      trackingNote: "This order has been cancelled.",
    },
  };
  return statusMap[status] || statusMap["Order Placed"];
}

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
  const product = getProducts().find((item) => item.id === productId);
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
  const flavourText = product.flavours?.length ? product.flavours.slice(0, 3).join(", ") : "";
  const offerText = calculateOffer(product.price, product.originalPrice) || product.offer || "";
  const productImage = product.image
    ? `<img src="${product.image}" alt="${product.name}">`
    : `
        <span class="pack-brand">${product.brand}</span>
        <strong>${product.imageLabel}</strong>
        <small>${product.size}</small>
      `;

  return `
    <article class="card product-card pro-product-card" data-category="${product.category}" data-name="${product.name.toLowerCase()} ${product.brand.toLowerCase()} ${product.size.toLowerCase()} ${flavourText.toLowerCase()}">
      <a class="product-img product-pack ${product.image ? "has-product-image" : ""}" href="product-detail.html?id=${product.id}" aria-label="View ${product.name}">
        ${offerText ? `<span class="offer-badge">${offerText}</span>` : ""}
        ${productImage}
      </a>
      <div class="product-body">
        <div class="product-meta">
          <span class="tag">${product.category}</span>
        </div>
        <h3><a href="product-detail.html?id=${product.id}">${product.name}</a></h3>
        <p class="muted">${product.brand} - ${product.size} - ${product.label}</p>
        ${flavourText ? `<p class="product-flavours">Flavours: ${flavourText}</p>` : ""}
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
  const allProducts = getProducts();
  let products = allProducts;

  if (document.body.dataset.page === "home") {
    const featuredIds = getHomeSettings().featuredProductIds;
    const productMap = new Map(allProducts.map((product) => [product.id, product]));
    products = featuredIds.map((id) => productMap.get(id)).filter(Boolean);
    if (!products.length) {
      products = allProducts.slice(0, 3);
    }
  } else if (typeof limit === "number") {
    products = allProducts.slice(0, limit);
  }

  target.innerHTML = products.map(productCard).join("");
}

function renderHomeCategories() {
  const target = document.querySelector("[data-home-categories]");
  if (!target) return;

  target.innerHTML = getHomeSettings().homeCategories.map((category) => `
    <article class="card category">
      <h3>${category.name}</h3>
      <p>${category.description}</p>
    </article>
  `).join("");
}

function renderFilterButtons() {
  const target = document.querySelector("[data-filter-bar]");
  if (!target) return;

  const filters = getHomeSettings().shopFilters;
  target.innerHTML = filters.map((filter, index) => `
    <button class="filter-btn ${index === 0 ? "active" : ""}" type="button" data-filter="${filter}">${filter}</button>
  `).join("");
}

function setupFilters() {
  renderFilterButtons();
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
  const products = getProducts();
  const items = cart
    .map((entry) => {
      const product = products.find((item) => item.id === entry.id);
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
                <p>${item.brand} � Qty ${item.qty}</p>
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

      const orderContext = getOrderContext();
      const orderId = createOrderId();
      const order = {
        id: orderId,
        createdAt: new Date().toISOString(),
        customer: {
          fullName,
          phoneNumber,
          address,
          pincode,
        },
        paymentMethod,
        paymentStatus: paymentMethod === "COD" ? "Pending COD" : "Paid",
        orderStatus: "Order Placed",
        shippingStatus: "Preparing order",
        trackingNote: "Your order has been received by DRS Supplements.",
        location: "DRS Supplements",
        items: orderContext.items.map((item) => ({
          id: item.id,
          name: item.name,
          brand: item.brand,
          size: item.size,
          qty: item.qty,
          price: item.price,
          lineTotal: item.lineTotal,
        })),
        subtotal: orderContext.subtotal,
        shipping: orderContext.shipping,
        total: orderContext.total,
      };
      saveOrders([order, ...getOrders().filter((item) => item.id !== order.id)]);

      const receiptOrderId = document.querySelector("[data-receipt-order-id]");
      const receiptName = document.querySelector("[data-receipt-name]");
      const receiptPhone = document.querySelector("[data-receipt-phone]");
      const receiptAddress = document.querySelector("[data-receipt-address]");
      const receiptPincode = document.querySelector("[data-receipt-pincode]");
      const receiptPayment = document.querySelector("[data-receipt-payment]");
      const receiptTotal = document.querySelector("[data-receipt-total]");
      const receiptTotalBottom = document.querySelector("[data-receipt-total-bottom]");
      if (receiptOrderId) receiptOrderId.textContent = orderId;
      if (receiptName) receiptName.textContent = fullName;
      if (receiptPhone) receiptPhone.textContent = phoneNumber;
      if (receiptAddress) receiptAddress.textContent = address;
      if (receiptPincode) receiptPincode.textContent = pincode;
      if (receiptPayment) receiptPayment.textContent = paymentMethod;
      if (receiptTotal) receiptTotal.textContent = currency.format(orderContext.total);
      if (receiptTotalBottom) receiptTotalBottom.textContent = currency.format(orderContext.total);

      setInlineMessage(`Order placed. Order ID: ${orderId}. Customer can track it from Track Order page.`, "success");
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

  if (!links.querySelector("[data-menu-close]")) {
    const menuTop = document.createElement("div");
    menuTop.className = "side-menu-top";
    menuTop.innerHTML = `
      <span class="side-menu-brand">DRS Supplements</span>
      <button class="side-menu-close" type="button" aria-label="Close menu" data-menu-close>&times;</button>
    `;
    links.prepend(menuTop);
  }

  let overlay = document.querySelector("[data-menu-overlay]");
  if (!overlay) {
    overlay = document.createElement("button");
    overlay.type = "button";
    overlay.className = "menu-overlay";
    overlay.dataset.menuOverlay = "";
    overlay.setAttribute("aria-label", "Close menu");
    document.body.appendChild(overlay);
  }

  const closeMenu = () => {
    nav.classList.remove("menu-open");
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  const openMenu = () => {
    nav.classList.add("menu-open");
    document.body.classList.add("menu-open");
    toggle.setAttribute("aria-expanded", "true");
  };

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    if (expanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  links.querySelector("[data-menu-close]")?.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

function renderProductDetail() {
  const target = document.querySelector("[data-product-detail]");
  if (!target) return;

  const params = new URLSearchParams(window.location.search);
  const products = getProducts();
  const product = products.find((item) => item.id === params.get("id")) || products[0];
  const offerText = calculateOffer(product.price, product.originalPrice) || product.offer || "";
  const variants = product.variantGroup
    ? products.filter((item) => item.variantGroup === product.variantGroup)
    : [];
  const variantMarkup = variants.length > 1
    ? `
        <div class="variant-panel">
          <span class="variant-label">Weight</span>
          <div class="variant-options">
            ${variants.map((variant) => `
              <a class="variant-chip ${variant.id === product.id ? "active" : ""}" href="product-detail.html?id=${variant.id}">
                ${variant.size}
                <small>${currency.format(variant.price)}</small>
              </a>
            `).join("")}
          </div>
        </div>
      `
    : "";
  const flavourMarkup = product.flavours?.length
    ? `
        <div class="variant-panel">
          <span class="variant-label">Flavours</span>
          <div class="flavour-options">
            ${product.flavours.map((flavour) => `<button class="flavour-chip" type="button">${flavour}</button>`).join("")}
          </div>
        </div>
      `
    : "";
  document.title = `${product.name} | DRS Supplements`;
  const galleryImages = product.images || (product.image ? [product.image] : []);
  const galleryMarkup = galleryImages.length
    ? `
        <div class="detail-image-main">
          <img src="${galleryImages[0]}" alt="${product.name}" data-gallery-main>
        </div>
        <div class="detail-thumbs">
          ${galleryImages.map((image, index) => `<button class="detail-thumb ${index === 0 ? "active" : ""}" type="button" data-gallery-thumb="${image}" aria-label="${product.name} view ${index + 1}"><img src="${image}" alt="${product.name} view ${index + 1}"></button>`).join("")}
        </div>
      `
    : `
        <div class="product-pack detail-pack">
          ${offerText ? `<span class="offer-badge">${offerText}</span>` : ""}
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
        ${variantMarkup}
        ${flavourMarkup}
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
  setupDetailGallery();
}

function setupDetailGallery() {
  const mainImage = document.querySelector("[data-gallery-main]");
  const thumbs = Array.from(document.querySelectorAll("[data-gallery-thumb]"));
  if (!mainImage || !thumbs.length) return;

  let activeIndex = 0;
  const setImage = (index) => {
    activeIndex = index;
    mainImage.src = thumbs[activeIndex].dataset.galleryThumb;
    thumbs.forEach((thumb, thumbIndex) => {
      thumb.classList.toggle("active", thumbIndex === activeIndex);
    });
  };

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener("click", () => setImage(index));
  });

  if (thumbs.length > 1) {
    setInterval(() => {
      setImage((activeIndex + 1) % thumbs.length);
    }, 2600);
  }
}

function cartItemMarkup(item) {
  const product = getProducts().find((entry) => entry.id === item.id);
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
  const products = getProducts();
  itemsTarget.innerHTML = cart.map((item) => {
    const product = products.find((entry) => entry.id === item.id);
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

function textToList(value) {
  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function csvToList(value) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function isCloudinaryConfigured() {
  const config = window.DRS_CLOUDINARY_CONFIG;
  return Boolean(
    config &&
    config.cloudName &&
    config.uploadPreset &&
    !String(config.cloudName).startsWith("PASTE_") &&
    !String(config.uploadPreset).startsWith("PASTE_")
  );
}

async function uploadImageToCloudinary(file) {
  if (!file) return "";
  const config = window.DRS_CLOUDINARY_CONFIG;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", config.uploadPreset);
  if (config.folder) {
    formData.append("folder", config.folder);
  }

  const response = await fetch(`https://api.cloudinary.com/v1_1/${config.cloudName}/image/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Cloudinary upload failed");
  }

  const data = await response.json();
  return data.secure_url || "";
}

function renderAdminProductList() {
  const list = document.querySelector("[data-admin-products]");
  if (!list) return;

  list.innerHTML = getProducts().map((product) => `
    <button class="admin-product-row" type="button" data-admin-edit="${product.id}">
      <span>${product.name}</span>
      <small>${product.size} - ${currency.format(product.price)}</small>
    </button>
  `).join("");

  list.querySelectorAll("[data-admin-edit]").forEach((button) => {
    button.addEventListener("click", () => loadAdminProduct(button.dataset.adminEdit));
  });
}

function updateAdminHomeToggle(productId = "") {
  const button = document.querySelector("[data-admin-home-toggle]");
  if (!button) return;

  const isEditing = Boolean(productId);
  const isFeatured = isEditing && getHomeSettings().featuredProductIds.includes(productId);
  button.disabled = !isEditing;
  button.textContent = isFeatured ? "Remove from Home" : "Add to Home";
  button.classList.toggle("is-featured", isFeatured);
}

function toggleSelectedProductHome() {
  const form = document.querySelector("[data-admin-form]");
  const productId = form?.elements.id.value.trim();
  if (!productId) {
    document.querySelector("[data-admin-message]").textContent = "Select or save a product before adding it to Home.";
    return;
  }

  const settings = getHomeSettings();
  const featuredIds = new Set(settings.featuredProductIds);
  if (featuredIds.has(productId)) {
    featuredIds.delete(productId);
  } else {
    featuredIds.add(productId);
  }
  saveHomeSettings({ ...settings, featuredProductIds: Array.from(featuredIds) });
  updateAdminHomeToggle(productId);
  renderProducts();
  const productName = form.elements.name.value.trim() || "Product";
  document.querySelector("[data-admin-message]").textContent = `${productName} home section updated.`;
}
function loadAdminProduct(productId) {
  const form = document.querySelector("[data-admin-form]");
  if (!form) return;

  const product = getProducts().find((item) => item.id === productId);
  if (!product) return;

  form.elements.id.value = product.id;
  form.elements.name.value = product.name || "";
  form.elements.category.value = product.category || "";
  form.elements.brand.value = product.brand || "";
  form.elements.variantGroup.value = product.variantGroup || "";
  form.elements.size.value = product.size || "";
  form.elements.price.value = product.price || "";
  form.elements.originalPrice.value = product.originalPrice || "";
  form.elements.label.value = product.label || "";
  form.elements.stock.value = product.stock || "";
  form.elements.image.value = product.image || "";
  form.elements.images.value = (product.images || []).join("\n");
  form.elements.flavours.value = (product.flavours || []).join(", ");
  form.elements.description.value = product.description || "";
  form.elements.details.value = (product.details || []).join("\n");
  form.elements.specs.value = (product.specs || []).join("\n");
  document.querySelector("[data-admin-message]").textContent = `Editing ${product.name}`;
  setUploadStatus("[data-main-upload-status]", "Choose image to upload immediately.", "");
  setUploadStatus("[data-more-upload-status]", "Choose multiple images to upload immediately.", "");
  updateAdminHomeToggle(product.id);
}

function clearAdminForm() {
  const form = document.querySelector("[data-admin-form]");
  if (!form) return;
  form.reset();
  form.elements.id.value = "";
  document.querySelector("[data-admin-message]").textContent = "Ready to add a new product.";
  setUploadStatus("[data-main-upload-status]", "Choose image to upload immediately.", "");
  setUploadStatus("[data-more-upload-status]", "Choose multiple images to upload immediately.", "");
  updateAdminHomeToggle("");
}

function setUploadStatus(selector, message, state = "") {
  const node = document.querySelector(selector);
  if (!node) return;
  node.textContent = message;
  if (state) {
    node.dataset.uploadState = state;
  } else {
    delete node.dataset.uploadState;
  }
}

function appendUniqueLines(field, urls) {
  const existing = textToList(field.value || "");
  const merged = Array.from(new Set([...existing, ...urls.filter(Boolean)]));
  field.value = merged.join("\n");
}

function setupInstantAdminUploads(form) {
  const mainInput = form.elements.imageFile;
  const moreInput = form.elements.imageFiles;

  mainInput?.addEventListener("change", async () => {
    const file = mainInput.files?.[0];
    if (!file) return;

    setUploadStatus("[data-main-upload-status]", "Uploading main image...", "uploading");
    try {
      const url = await uploadImageToCloudinary(file);
      form.elements.image.value = url;
      setUploadStatus("[data-main-upload-status]", "Uploaded. Main image URL added.", "success");
    } catch (error) {
      console.warn("Main image upload failed.", error);
      setUploadStatus("[data-main-upload-status]", "Upload failed. Check Cloudinary preset.", "error");
    } finally {
      mainInput.value = "";
    }
  });

  moreInput?.addEventListener("change", async () => {
    const files = Array.from(moreInput.files || []);
    if (!files.length) return;

    setUploadStatus("[data-more-upload-status]", `Uploading ${files.length} image(s)...`, "uploading");
    try {
      const urls = await Promise.all(files.map(uploadImageToCloudinary));
      appendUniqueLines(form.elements.images, urls);
      setUploadStatus("[data-more-upload-status]", `${urls.filter(Boolean).length} image(s) uploaded. URLs added.`, "success");
    } catch (error) {
      console.warn("More image upload failed.", error);
      setUploadStatus("[data-more-upload-status]", "Upload failed. Check Cloudinary preset.", "error");
    } finally {
      moreInput.value = "";
    }
  });
}

function homeCategoriesToText(categories) {
  return categories.map((category) => `${category.name} | ${category.description}`).join("\n");
}

function textToHomeCategories(value) {
  return String(value || "")
    .split("\n")
    .map((line) => {
      const [name, ...descriptionParts] = line.split("|");
      return {
        name: String(name || "").trim(),
        description: descriptionParts.join("|").trim(),
      };
    })
    .filter((category) => category.name);
}

function setupHomeSettingsAdmin() {
  const categoriesInput = document.querySelector("[data-home-categories-input]");
  const filtersInput = document.querySelector("[data-shop-filters-input]");
  const saveButton = document.querySelector("[data-save-home-settings]");
  const message = document.querySelector("[data-home-settings-message]");
  if (!categoriesInput || !filtersInput || !saveButton) return;

  const settings = getHomeSettings();
  categoriesInput.value = homeCategoriesToText(settings.homeCategories);
  filtersInput.value = settings.shopFilters.join("\n");

  saveButton.addEventListener("click", () => {
    const nextSettings = saveHomeSettings({
      ...getHomeSettings(),
      homeCategories: textToHomeCategories(categoriesInput.value),
      shopFilters: textToList(filtersInput.value),
    });
    categoriesInput.value = homeCategoriesToText(nextSettings.homeCategories);
    filtersInput.value = nextSettings.shopFilters.join("\n");
    renderHomeCategories();
    renderFilterButtons();
    renderAdminProductList();
    if (message) {
      message.textContent = "Site settings saved. Home and product filters updated.";
    }
  });
}
function setupAdminPage() {
  const form = document.querySelector("[data-admin-form]");
  if (!form) return;

  renderAdminProductList();
  renderAdminOrders();
  setupInstantAdminUploads(form);
  setupHomeSettingsAdmin();
  updateAdminHomeToggle(form.elements.id.value.trim());

  document.querySelector("[data-admin-new]")?.addEventListener("click", clearAdminForm);
  document.querySelector("[data-admin-home-toggle]")?.addEventListener("click", toggleSelectedProductHome);
  document.querySelector("[data-admin-delete]")?.addEventListener("click", () => {
    const productId = form.elements.id.value.trim();
    if (!productId) {
      document.querySelector("[data-admin-message]").textContent = "Select a product before deleting.";
      return;
    }

    saveAdminProducts(getAdminProducts().filter((item) => item.id !== productId));
    saveDeletedProductIds([...getDeletedProductIds(), productId]);
    saveCart(getCart().filter((item) => item.id !== productId));
    clearAdminForm();
    renderAdminProductList();
    document.querySelector("[data-admin-message]").textContent = "Product deleted from product pages.";
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const size = String(formData.get("size") || "").trim();
    const id = slugify(formData.get("id")) || slugify(`${name} ${size}`);

    if (!id || !name) {
      document.querySelector("[data-admin-message]").textContent = "Product name is required.";
      return;
    }

    const imagePaths = textToList(String(formData.get("images") || ""));
    const typedMainImage = String(formData.get("image") || "").trim();
    const image = typedMainImage || imagePaths[0] || "";
    const images = Array.from(new Set([
      image,
      ...imagePaths,
    ].filter(Boolean)));
    const product = {
      id,
      name,
      category: String(formData.get("category") || "").trim(),
      brand: String(formData.get("brand") || "").trim(),
      variantGroup: String(formData.get("variantGroup") || "").trim(),
      price: Number(formData.get("price")) || 0,
      originalPrice: Number(formData.get("originalPrice")) || 0,
      size,
      label: String(formData.get("label") || "").trim(),
      offer: calculateOffer(Number(formData.get("price")) || 0, Number(formData.get("originalPrice")) || 0),
      stock: String(formData.get("stock") || "In stock").trim(),
      imageLabel: String(formData.get("brand") || "DRS").trim().slice(0, 10).toUpperCase(),
      image,
      images: images.length ? images : image ? [image] : [],
      flavours: csvToList(String(formData.get("flavours") || "")),
      description: String(formData.get("description") || "").trim(),
      details: textToList(String(formData.get("details") || "")),
      specs: textToList(String(formData.get("specs") || "")),
    };

    const adminProducts = getAdminProducts().filter((item) => item.id !== id);
    adminProducts.push(product);
    saveAdminProducts(adminProducts);
    saveDeletedProductIds(getDeletedProductIds().filter((deletedId) => deletedId !== id));
    renderAdminProductList();
    loadAdminProduct(id);
    updateAdminHomeToggle(id);
    document.querySelector("[data-admin-message]").textContent = `${product.name} saved. Product pages now use this data.`;
  });

  setupAdminOrderForm();
}

function renderAdminOrders() {
  const list = document.querySelector("[data-admin-orders]");
  if (!list) return;

  const orders = getOrders();
  if (!orders.length) {
    list.innerHTML = `<div class="empty-state">No customer orders yet.</div>`;
    return;
  }

  list.innerHTML = `
    <div class="admin-orders-table">
      <div class="admin-orders-head">
        <span>Order ID</span>
        <span>Customer</span>
        <span>Phone</span>
        <span>Total</span>
        <span>Payment</span>
        <span>Status</span>
        <span>Date</span>
        <span>Actions</span>
      </div>
      ${orders.map((order) => `
        <div class="admin-orders-row">
          <strong>${order.id}</strong>
          <span>${order.customer.fullName}</span>
          <span>${order.customer.phoneNumber}</span>
          <strong>${currency.format(order.total)}</strong>
          <span>${order.paymentMethod}</span>
          <select data-admin-order-status="${order.id}">
            ${["Order Placed", "Confirmed", "Packed", "Shipped", "Out for Delivery", "Delivered", "Cancelled"].map((status) => `
              <option value="${status}" ${status === order.orderStatus ? "selected" : ""}>${status}</option>
            `).join("")}
          </select>
          <span>${new Date(order.createdAt).toLocaleDateString("en-IN")}</span>
          <div class="admin-table-actions">
            <button class="btn btn-outline btn-sm" type="button" data-admin-order-view="${order.id}">View</button>
            <button class="btn btn-outline btn-sm danger-action" type="button" data-admin-order-delete="${order.id}">Delete</button>
          </div>
        </div>
      `).join("")}
    </div>
  `;

  list.querySelectorAll("[data-admin-order-status]").forEach((select) => {
    select.addEventListener("change", () => updateOrderStatus(select.dataset.adminOrderStatus, select.value));
  });

  list.querySelectorAll("[data-admin-order-view]").forEach((button) => {
    button.addEventListener("click", () => loadAdminOrder(button.dataset.adminOrderView));
  });

  list.querySelectorAll("[data-admin-order-delete]").forEach((button) => {
    button.addEventListener("click", () => deleteOrder(button.dataset.adminOrderDelete));
  });
}

function loadAdminOrder(orderId) {
  const preview = document.querySelector("[data-admin-order-preview]");
  const message = document.querySelector("[data-admin-order-message]");
  if (!preview) return;

  const order = getOrders().find((item) => item.id === orderId);
  if (!order) return;

  preview.innerHTML = `
    <div class="tracking-head">
      <div>
        <p class="eyebrow">Order Details</p>
        <h3>${order.id}</h3>
      </div>
      <span class="offer-chip">${order.orderStatus}</span>
    </div>
    <div class="tracking-grid">
      <div><span>Customer</span><strong>${order.customer.fullName}</strong></div>
      <div><span>Phone</span><strong>${order.customer.phoneNumber}</strong></div>
      <div><span>Address</span><strong>${order.customer.address}, ${order.customer.pincode}</strong></div>
      <div><span>Payment</span><strong>${order.paymentStatus}</strong></div>
      <div><span>Shipping</span><strong>${order.shippingStatus}</strong></div>
      <div><span>Location</span><strong>${order.location}</strong></div>
    </div>
    <strong>Order Items</strong>
    ${order.items.map((item) => `<p>${item.name} - ${item.size || ""} - Qty ${item.qty} - ${currency.format(item.lineTotal)}</p>`).join("")}
    <strong>Total: ${currency.format(order.total)}</strong>
    <p>${order.trackingNote}</p>
  `;
  if (message) {
    message.textContent = `Viewing order ${order.id}`;
  }
}

function updateOrderStatus(orderId, status) {
  const meta = orderStatusMeta(status);
  const orders = getOrders().map((order) => {
    if (order.id !== orderId) return order;
    return {
      ...order,
      orderStatus: status,
      shippingStatus: meta.shippingStatus,
      location: meta.location,
      trackingNote: meta.trackingNote,
      updatedAt: new Date().toISOString(),
    };
  });
  saveOrders(orders);
  renderAdminOrders();
  loadAdminOrder(orderId);
  document.querySelector("[data-admin-order-message]").textContent = `Order ${orderId} updated to ${status}.`;
}

function deleteOrder(orderId) {
  saveOrders(getOrders().filter((order) => order.id !== orderId));
  const preview = document.querySelector("[data-admin-order-preview]");
  if (preview) preview.innerHTML = "";
  document.querySelector("[data-admin-order-message]").textContent = "Order deleted.";
  renderAdminOrders();
}

function setupAdminOrderForm() {
  renderAdminOrders();
}

function setupTrackPage() {
  const form = document.querySelector("[data-track-form]");
  const result = document.querySelector("[data-track-result]");
  if (!form || !result) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const orderId = String(new FormData(form).get("orderId") || "").trim().toUpperCase();
    const order = getOrders().find((item) => item.id.toUpperCase() === orderId);
    if (!order) {
      result.innerHTML = `<div class="empty-state">Order not found. Check the order ID and try again.</div>`;
      return;
    }

    result.innerHTML = `
      <article class="tracking-card">
        <div class="tracking-head">
          <div>
            <p class="eyebrow">Order ID</p>
            <h2>${order.id}</h2>
          </div>
          <span class="offer-chip">${order.orderStatus}</span>
        </div>
        <div class="tracking-grid">
          <div><span>Customer</span><strong>${order.customer.fullName}</strong></div>
          <div><span>Payment</span><strong>${order.paymentStatus}</strong></div>
          <div><span>Shipping</span><strong>${order.shippingStatus}</strong></div>
          <div><span>Location</span><strong>${order.location}</strong></div>
          <div><span>Total</span><strong>${currency.format(order.total)}</strong></div>
        </div>
        <p>${order.trackingNote}</p>
      </article>
    `;
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const productLimit = document.body.dataset.page === "home" ? 3 : undefined;

  updateCartCount();
  setupMobileMenu();
  renderProducts(productLimit);
  renderHomeCategories();
  setupFilters();
  setupProductSearch();
  renderProductDetail();
  setupCheckoutPage();
  renderCart();
  setupAdminPage();
  setupTrackPage();

  const hydrated = await hydrateSupabaseData();
  if (hydrated) {
    updateCartCount();
    renderProducts(productLimit);
    renderHomeCategories();
    setupFilters();
    renderProductDetail();
    renderCart();
    renderAdminProductList();
    renderAdminOrders();
    const form = document.querySelector("[data-admin-form]");
    updateAdminHomeToggle(form?.elements.id.value.trim() || "");
  }
});

