// ============================================================
// Midwest Tint & Detail — site data (source of truth for copy)
// ============================================================

export const SITE_URL = "https://www.midwesttintdetail.com";

export const BRAND = {
  name: "Midwest Tint & Detail",
  wordmark: { strong: "MIDWEST", light: "Tint & Detail" },
  tagline: "Plymouth's Trusted Ceramic Tint & Detail Shop",
  taglineShort: "Cooler glass. Cleaner finish. Lifetime warranty.",
  phoneDisplay: "(313) 729-0005",
  phoneTel: "+13137290005",
  email: "MidwestTintandDetail@gmail.com",
  address: {
    street: "524 Farmer St",
    city: "Plymouth",
    state: "MI",
    zip: "48170",
    full: "524 Farmer St, Plymouth, MI 48170",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Midwest+Tint+%26+Detail+524+Farmer+St+Plymouth+MI+48170",
  },
  hours: "Mon to Sun: 9 AM to 5 PM",
  social: {
    instagram: "https://www.instagram.com/MidwestTintDetail",
    instagramHandle: "@MidwestTintDetail",
  },
  googleReviewUrl: "https://www.google.com/search?q=Midwest+Tint+%26+Detail+Plymouth+MI+reviews",
  serviceArea: [
    "Plymouth",
    "Northville",
    "Canton",
    "Troy",
    "Novi",
    "Livonia",
    "Westland",
  ],
} as const;

export const CTA = {
  primary: "Get My Free Quote",
  hero: "Get My Free Tint Quote",
  secondary: "Call (313) 729-0005",
} as const;

export const NAV_LINKS = [
  { href: "/window-tinting", label: "Window Tinting" },
  { href: "/paint-correction", label: "Paint Correction" },
  { href: "/ceramic-coating", label: "Ceramic Coating" },
  { href: "/detailing", label: "Detailing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
] as const;

// ---------------- HERO ----------------
export const HERO = {
  eyebrow: "120+ Five-Star Reviews · Plymouth, MI · Lifetime Tint Warranty",
  headlineLead: "Block the Heat.",
  headlineRestBefore: "Keep It ",
  headlineGlow: "Cool.",
  sub: "Premium ceramic window tint installed by Moe and team. Up to 99% UV protection and serious infrared heat rejection, backed by a lifetime warranty. Serving Plymouth, Northville, Canton, Troy, Novi, Livonia, and Westland.",
  badges: ["Lifetime Warranty", "120+ Five-Star Reviews", "Ceramic Heat Rejection"],
} as const;

// ---------------- STATS ----------------
export const STATS = [
  { value: "5.0", label: "Google rating" },
  { value: "120+", label: "Five-star reviews" },
  { value: "Lifetime", label: "Warranty on every tint install" },
  { value: "99%", label: "UV protection with ceramic film" },
] as const;

// ---------------- SERVICES (preview) ----------------
export interface Service {
  id: string;
  href: string;
  name: string;
  icon: string; // lucide-react icon name
  oneLine: string;
  features: string[];
  priceFraming: string;
  cta: string;
  image: string;
  featured?: boolean;
}

export const SERVICES: Service[] = [
  {
    id: "window-tint",
    href: "/window-tinting",
    name: "Ceramic Window Tinting",
    icon: "Sun",
    oneLine: "The cooler, cleaner upgrade your car was missing.",
    features: [
      "Up to 99% UV protection for you and your interior",
      "Serious infrared heat rejection so the cabin stays comfortable",
      "Color-stable ceramic that will not fade purple like cheap film",
      "Non-metallic, so no interference with GPS, cell, or Bluetooth",
      "Backed by a lifetime warranty",
    ],
    priceFraming: "Free exact quote in under a minute",
    cta: "Get My Tint Quote",
    image: "/services/window-tint.jpg",
    featured: true,
  },
  {
    id: "paint-correction",
    href: "/paint-correction",
    name: "Paint Correction",
    icon: "Sparkles",
    oneLine: "Erase swirls, scratches, and haze. Restore the depth.",
    features: [
      "Removes swirl marks, light scratches, and oxidation",
      "Brings back true gloss and mirror-like clarity",
      "Multi-stage process tailored to your paint",
      "The proper first step before any ceramic coating",
      "Finished by hand with care, not rushed",
    ],
    priceFraming: "Custom quote per vehicle",
    cta: "Request a Quote",
    image: "/services/paint-correction.jpg",
  },
  {
    id: "ceramic-coating",
    href: "/ceramic-coating",
    name: "Ceramic Coating",
    icon: "Shield",
    oneLine: "A durable, hydrophobic shield that keeps your finish protected.",
    features: [
      "Long-lasting protection against UV, contaminants, and grime",
      "Hydrophobic surface so water and dirt slide right off",
      "Deep, glossy finish that lasts for years",
      "Easier washing and less frequent maintenance",
      "Paired with paint correction for a flawless base",
    ],
    priceFraming: "Custom quote per package",
    cta: "Request a Quote",
    image: "/services/ceramic-coating.jpg",
  },
  {
    id: "detailing",
    href: "/detailing",
    name: "Detailing",
    icon: "Droplets",
    oneLine: "Inside and out, brought back to better than the dealership.",
    features: [
      "Deep interior cleaning, vacuum, and surface refresh",
      "Exterior wash, decontamination, and protective finish",
      "Stain, odor, and grime removal done properly",
      "Interior only, exterior only, or full detail options",    ],
    priceFraming: "Custom quote per package",
    cta: "Request a Quote",
    image: "/services/detailing.jpg",
  },
];

// Quote-form service options (labels match SERVICES order)
export const SERVICE_OPTIONS = [
  { id: "window-tint", label: "Ceramic Window Tinting" },
  { id: "paint-correction", label: "Paint Correction" },
  { id: "ceramic-coating", label: "Ceramic Coating" },
  { id: "detailing", label: "Detailing (Interior + Exterior)" },
] as const;

// ---------------- WHY US ----------------
export const WHY_US = {
  heading: "Why Plymouth Drivers Choose Midwest",
  reasons: [
    {
      icon: "UserCheck",
      title: "Owner installed by Moe",
      body: "You deal directly with the person doing the work. No handoffs, no shortcuts, full accountability on every job.",
    },
    {
      icon: "Gem",
      title: "Ceramic, not cheap dyed film",
      body: "We install premium nano-ceramic tint that blocks UV and infrared heat and holds its color for the life of the vehicle.",
    },
    {
      icon: "ShieldCheck",
      title: "Lifetime warranty on every tint install",
      body: "Bubbling, peeling, or discoloration are covered, so you only pay once.",
    },
    {
      icon: "Wind",
      title: "Clean, careful installs",
      body: "Dust-controlled work, sharp edges, no haze left behind, finished the way a new car deserves.",
    },
    {
      icon: "MapPin",
      title: "Local to Plymouth",
      body: "A real shop at 524 Farmer St serving Plymouth, Northville, Canton, Troy, Novi, Livonia, and Westland.",
    },
  ],
} as const;

// ---------------- PROCESS ----------------
export const PROCESS = {
  heading: "Simple From Quote to Finished",
  steps: [
    {
      title: "Build your quote",
      body: "Pick your year, make, and model, choose your services, and get a fast, free, no-pressure quote in under a minute. Prefer to talk? Call us directly.",
    },
    {
      title: "Lock in your spot",
      body: "We confirm your details and schedule a time that works for you at our Plymouth shop.",
    },
    {
      title: "We do the work right",
      body: "Premium ceramic film and a clean, careful install by Moe and team, with the specs and setup explained up front.",
    },
    {
      title: "Drive away cooler and protected",
      body: "Enjoy the comfort, the UV protection, and the lifetime warranty that backs it all.",
    },
  ],
} as const;

// ---------------- REVIEWS ----------------
export const REVIEWS = {
  heading: "Trusted by 120+ Five-Star Customers",
  intro: "Real reviews from real Metro Detroit drivers. 5.0 on Google and counting.",
  items: [
    {
      name: "Ruba Ali",
      vehicle: "Nissan Rogue",
      when: "1 week ago",
      quote:
        "Just got my Nissan Rogue tinted with them and the experience was great. Moe was able to answer all of my questions and made the whole process easy.",
    },
    {
      name: "Nick Sheild",
      vehicle: "Chevy Blazer",
      when: "4 months ago",
      quote:
        "Moe came out to my restaurant and did a fantastic job on my Chevy Blazer. Great customer service from start to finish.",
    },
    {
      name: "Sandra Killmar",
      vehicle: "",
      when: "4 months ago",
      quote:
        "He and another gentleman came out exactly at the time specified and did an amazing job. Could not be happier.",
    },
    {
      name: "Joe Teichman",
      vehicle: "",
      when: "4 months ago",
      quote:
        "Professional, courteous, and respectful. They got the car looking phenomenal.",
    },
    {
      name: "R F",
      vehicle: "",
      when: "5 months ago",
      quote:
        "Moe and the team did a phenomenal job. Professional, efficient, and great quality service.",
    },
  ],
} as const;

// ---------------- FAQ (home) ----------------
export const FAQ = [
  {
    q: "How dark can I tint my windows in Michigan?",
    a: "Michigan allows non-reflective tint on the top 4 inches of the windshield, and aftermarket film on the front side windows is limited to that same top strip. On the rear side windows and the rear window you can go as dark as you want, with no minimum darkness. If your rear glass is dark, your vehicle needs side mirrors on both sides. We help you choose the right shade for your vehicle and your goals, and handle the install start to finish.",
  },
  {
    q: "What is the difference between ceramic and cheap dyed tint?",
    a: "Dyed film is just a dye layer. It offers basic privacy, limited heat rejection, and tends to fade to purple or bronze over a few years. Ceramic uses nano-ceramic particles to block up to 99% of UV and a large share of the infrared heat you actually feel, it stays color-stable, and it lasts the life of the vehicle. Because it has no metal, it never interferes with your electronics. It is the choice for drivers who want it done once and done right.",
  },
  {
    q: "Will tint mess with my GPS, phone, or radio?",
    a: "No. Our ceramic film is non-metallic, so it will not interfere with GPS, cell signal, radio, or Bluetooth. That older fear came from metalized films we do not use.",
  },
  {
    q: "How long before I can roll my windows down?",
    a: "Give the film time to cure. In warm weather that is usually 2 to 4 days, and in cold or humid conditions it can take 5 to 7 days. You may notice slight haze or small water pockets while it cures, which is completely normal and clears as it dries. Just keep the windows up until curing is done.",
  },
  {
    q: "How much does window tint cost?",
    a: "Every vehicle is different, so we give you a fast, free, exact quote instead of a one-size price. Build your quote in under a minute or call us. What you get either way is premium ceramic, a clean install, and a lifetime warranty, done right the first time.",
  },
  {
    q: "What does the lifetime warranty cover?",
    a: "Our lifetime warranty covers the tint film against bubbling, peeling, cracking, and discoloration for as long as you own the vehicle. It is included on every tint install, with no upsell.",
  },
  {
    q: "How long does a tint install take?",
    a: "Most tint jobs are completed the same day. Timing depends on your vehicle and the number of windows, and we will give you a clear estimate when you book. Call to check today's availability.",
  },
  {
    q: "Do you do more than tint?",
    a: "Yes. We also offer paint correction, ceramic coating, and full interior and exterior detailing. Many customers pair tint with a detail or coating, and you can add any service to your quote.",
  },
  {
    q: "Why choose you over a cheaper shop?",
    a: "We are not the cheapest, and that is on purpose. You get owner-installed work by Moe, premium ceramic film, 120+ five-star reviews, and a lifetime warranty. It is the shop you only pay once.",
  },
] as const;

export const FINAL_CTA = {
  heading: "Ready for Cooler, Protected Glass?",
  sub: "Get your free, no-pressure quote in under a minute, or call us and talk it through. Lifetime warranty included on every tint install.",
} as const;

// ---------------- SERVICE DETAIL PAGES ----------------
export interface ServiceDetail {
  id: string;
  name: string;
  href: string;
  image: string;
  heroSubtitle: string;
  longDescription: string[];
  benefits: string[];
  process: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  whyUs: string[];
  tiers?: { name: string; body: string }[];
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "window-tint": {
    id: "window-tint",
    name: "Ceramic Window Tinting",
    href: "/window-tinting",
    image: "/services/window-tint.jpg",
    heroSubtitle:
      "Premium nano-ceramic window tint installed by Moe and team. Cooler cabin, blocked UV, and a lifetime warranty, for drivers who want it done right.",
    longDescription: [
      "Factory glass leaves a lot on the table. It lets in heat, lets through UV that fades your interior and ages your skin, and does little for privacy. Ceramic window tint changes all of that. Our nano-ceramic film blocks up to 99% of UV rays and rejects a large share of the infrared heat you actually feel, so your cabin stays comfortable on the hottest Michigan days and your interior stays protected for the long haul.",
      "This is not the cheap dyed film that fades purple and bubbles after a couple of summers. Ceramic is color-stable, built to last the life of the vehicle, and completely non-metallic, which means it never interferes with your GPS, cell signal, radio, or Bluetooth. Every install is handled in a clean, dust-controlled process with crisp edges and no haze left behind, the way a car you just paid for deserves to be treated.",
      "Moe and team install every job personally and back it with a lifetime warranty against bubbling, peeling, and discoloration. We will also walk you through Michigan's tint rules so you get the best setup for your vehicle and your goals. Build your free quote in under a minute or call to check today's availability.",
    ],
    benefits: [
      "Up to 99% UV protection for your skin and your interior",
      "Strong infrared heat rejection for a cooler, more comfortable cabin",
      "Color-stable ceramic that will not fade purple or bubble like cheap film",
      "Non-metallic film with zero interference to GPS, cell, radio, or Bluetooth",
      "Lifetime warranty on every install, with a clean, careful finish",
    ],
    process: [
      { title: "Free quote and consult", body: "Tell us your year, make, and model and your goals. We recommend the right film and the best setup for Michigan." },
      { title: "Prep and clean", body: "Each window is fully cleaned and prepped in a dust-controlled environment for a flawless bond." },
      { title: "Precision cut and fit", body: "Film is cut and shaped to your exact glass for tight, clean edges with no gaps or peeling." },
      { title: "Careful install", body: "Moe and team apply the film by hand, removing every bit of haze and ensuring a perfect, bubble-free finish." },
      { title: "Cure and care", body: "We explain cure time and aftercare so your tint sets perfectly, then back it with a lifetime warranty." },
    ],
    faqs: [
      { q: "How dark can I go in Michigan?", a: "Front side windows and the windshield take film on the top few inches, while the rear side windows and rear window can be any darkness. We build the best setup for your vehicle." },
      { q: "How long until I can roll the windows down?", a: "Usually 2 to 4 days in warm weather and 5 to 7 days in cold or humid conditions. Keep windows up while the film cures." },
      { q: "Will it affect my electronics?", a: "No. Our ceramic film is non-metallic, so GPS, cell, radio, and Bluetooth all work normally." },
      { q: "How long does the install take?", a: "Most vehicles are done the same day. We give you a clear estimate when you book." },
    ],
    whyUs: [
      "Owner installed by Moe, with full accountability on every job",
      "Premium nano-ceramic film, never cheap dyed film",
      "Lifetime warranty against bubbling, peeling, and discoloration",
      "Clean, dust-controlled installs with sharp, professional edges",
      "Honest guidance on Michigan tint law",
    ],
    tiers: [
      { name: "Front Two Windows", body: "Match your factory rear tint or add comfort and privacy up front." },
      { name: "Full Vehicle", body: "All windows tinted for complete comfort, privacy, and UV protection." },
      { name: "Full Vehicle + Windshield Strip", body: "Everything above plus a non-reflective top strip on the windshield to cut glare and sun." },
      { name: "Add-on: Clear Ceramic Windshield Film", body: "Maximum heat and UV rejection on the full windshield with a near-clear film. Ask if available for your vehicle." },
    ],
  },
  "paint-correction": {
    id: "paint-correction",
    name: "Paint Correction",
    href: "/paint-correction",
    image: "/services/paint-correction.jpg",
    heroSubtitle:
      "Remove the swirls, scratches, and haze hiding your paint's true depth. Restored by hand by Moe and team.",
    longDescription: [
      "Over time, automatic car washes, improper drying, and everyday wear leave your paint covered in fine swirl marks, scratches, and a dull haze. You usually only notice it in direct sunlight, when the finish looks cloudy instead of crisp. Paint correction fixes that at the source by carefully removing those imperfections rather than hiding them, bringing back the clarity, gloss, and depth your paint had when it was new.",
      "Our process is multi-stage and tailored to your specific paint and its condition. We assess the finish, then refine it through the right combination of cutting and polishing to safely remove defects while protecting the clear coat. This is meticulous work that takes patience, and we never rush it. The result is a true mirror finish with reflections that look sharp and deep instead of foggy.",
      "Paint correction is also the proper first step before any ceramic coating. Sealing a flawed finish only locks in the swirls, so we correct first and protect second. Whether you are prepping for a coating or just want your vehicle looking its absolute best, Moe and team handle it with care. Request your custom quote today.",
    ],
    benefits: [
      "Removes swirl marks, light scratches, oxidation, and haze",
      "Restores true gloss, clarity, and mirror-like reflections",
      "Multi-stage process tailored to your paint and its condition",
      "The proper foundation before any ceramic coating",
      "Done by hand with patience, never rushed",
    ],
    process: [
      { title: "Inspection", body: "We assess your paint under proper lighting to identify swirls, scratches, and oxidation." },
      { title: "Wash and decontaminate", body: "The surface is washed and clayed so we are working on truly clean paint." },
      { title: "Test and tailor", body: "We dial in the right cutting and polishing approach for your specific finish." },
      { title: "Multi-stage correction", body: "Defects are safely removed stage by stage to bring back gloss and depth." },
      { title: "Final refine and protect", body: "We finish polish for clarity and recommend protection to keep the results lasting." },
    ],
    faqs: [
      { q: "Will it remove every scratch?", a: "Most swirls and light scratches are fully removed. Deep scratches that have cut through the clear coat may be greatly improved rather than erased. We are honest about what your paint can achieve." },
      { q: "How long does it take?", a: "Paint correction is detailed work and often takes a full day or more depending on the vehicle and the condition. We give you a clear timeline up front." },
      { q: "Do I need a ceramic coating afterward?", a: "It is strongly recommended. Correction restores the finish, and a coating protects that work so it lasts." },
      { q: "Is it safe for my clear coat?", a: "Yes. We measure and test carefully and remove only what is needed to safely restore the finish." },
    ],
    whyUs: [
      "Careful, multi-stage correction tailored to your paint",
      "Honest assessment of what your finish can realistically achieve",
      "The right prep before any ceramic coating",
      "Owner-led work by Moe with patient, detailed standards",
      "Local Plymouth shop trusted by 120+ five-star customers",
    ],
  },
  "ceramic-coating": {
    id: "ceramic-coating",
    name: "Ceramic Coating",
    href: "/ceramic-coating",
    image: "/services/ceramic-coating.jpg",
    heroSubtitle:
      "A durable, hydrophobic shield that locks in your finish and makes maintenance easy. Years of protection in one application.",
    longDescription: [
      "A ceramic coating is the best long-term protection you can give your paint. It bonds to your clear coat and forms a hard, hydrophobic layer that shields your finish from UV rays, road grime, bird droppings, bug splatter, and the contaminants that dull and damage paint over time. Water and dirt bead up and slide right off, which means your vehicle stays cleaner longer and is far easier to wash.",
      "Beyond protection, a quality coating adds a deep, glossy, wet-looking finish that ordinary wax simply cannot match, and it lasts for years instead of weeks. For it to perform and look its best, the paint underneath needs to be flawless, which is why we pair coatings with paint correction. We correct first to remove swirls and defects, then seal that clean finish so the coating protects your paint at its absolute best.",
      "Moe and team apply every coating with care in a controlled environment, and we walk you through the maintenance that keeps it performing for the long haul. If you want lasting gloss, easier washes, and serious protection for a vehicle you plan to keep, this is the upgrade. Request your custom quote today.",
    ],
    benefits: [
      "Long-lasting protection against UV, grime, and contaminants",
      "Hydrophobic surface so water and dirt slide right off",
      "Deep, glossy, wet-look finish that outlasts traditional wax",
      "Easier washing and less frequent maintenance",
      "Best results when paired with full paint correction",
    ],
    process: [
      { title: "Consult and quote", body: "We discuss your goals, your vehicle, and the right coating package for how long you plan to keep it." },
      { title: "Paint correction", body: "We correct the finish first so the coating seals flawless paint, not flaws." },
      { title: "Surface prep", body: "The paint is decontaminated and wiped down so the coating bonds properly." },
      { title: "Coating application", body: "Moe and team apply the coating by hand in a controlled environment for even, complete coverage." },
      { title: "Cure and care", body: "The coating is given time to cure, and we explain the simple maintenance that keeps it performing for years." },
    ],
    faqs: [
      { q: "How long does a ceramic coating last?", a: "It depends on the package and your maintenance, but a quality coating is measured in years, not weeks. We will match the package to how long you plan to keep the vehicle." },
      { q: "Do I still need to wash my car?", a: "Yes, but far less effort. The hydrophobic surface keeps it cleaner and makes washing quick and easy." },
      { q: "Why is paint correction required first?", a: "Coating over swirls locks them in. We correct first so the coating protects a flawless finish." },
      { q: "Is a coating better than wax?", a: "By a wide margin. Wax lasts weeks and offers light protection. A ceramic coating lasts years with far stronger protection and gloss." },
    ],
    whyUs: [
      "Correction-first approach so your coating seals flawless paint",
      "Applied by hand by Moe and team in a controlled environment",
      "Clear guidance on the right package for your goals",
      "Honest maintenance advice so your coating lasts",
      "Trusted local Plymouth shop with a 5.0 Google rating",
    ],
    tiers: [
      { name: "Essential Coating", body: "Strong, multi-year protection with hydrophobic performance and added gloss. A great step up from wax." },
      { name: "Premium Coating", body: "Longer-lasting protection and deeper gloss for drivers who want maximum durability." },
      { name: "Coating + Correction Package", body: "Full paint correction followed by your chosen coating, the complete flawless-to-protected treatment." },
    ],
  },
  detailing: {
    id: "detailing",
    name: "Detailing",
    href: "/detailing",
    image: "/services/detailing.jpg",
    heroSubtitle:
      "Inside and out, brought back to better than the day you drove it home. Interior, exterior, or both.",
    longDescription: [
      "A real detail is more than a car wash. It is a top-to-bottom reset that removes the dirt, grime, stains, and odors that build up over months of daily driving, and restores that clean, fresh feeling you get from a brand new vehicle. Whether your interior needs deep cleaning or your exterior needs decontamination and protection, we handle it properly, by hand, with the right products for each surface.",
      "Our interior detailing covers a thorough vacuum, surface cleaning, and refresh of your seats, carpets, panels, and glass, with attention to the stains, dust, and odors that everyday life leaves behind. Our exterior detailing includes a careful hand wash, decontamination, and a protective finish that brings back shine and helps your paint resist the elements. Choose interior only, exterior only, or a full detail that covers everything.",
      "Moe and team treat every vehicle like it is their own, and the reviews say it best, customers tell us their cars look and smell brand new. Request your custom quote and tell us what your vehicle needs.",
    ],
    benefits: [
      "Deep interior cleaning, vacuum, and full surface refresh",
      "Exterior hand wash, decontamination, and protective finish",
      "Stain, odor, and grime removal done the right way",
      "Interior only, exterior only, or full detail options",    ],
    process: [
      { title: "Tell us what it needs", body: "Choose interior, exterior, or full, and let us know about any problem spots, stains, or odors." },
      { title: "Exterior wash and decontaminate", body: "A careful hand wash and decontamination to lift embedded grime safely." },
      { title: "Interior deep clean", body: "Vacuum, surface cleaning, and refresh of seats, carpets, panels, and glass." },
      { title: "Protect and finish", body: "A protective finish on the exterior and a clean, fresh feel inside." },
      { title: "Final walkthrough", body: "We make sure every detail meets the standard before you drive away." },
    ],
    faqs: [
      { q: "Can you remove stains and odors?", a: "In most cases, yes. We tackle stains, dust, and odors with the right approach for your surfaces and tell you honestly what to expect." },      { q: "How long does a detail take?", a: "It depends on the package and the condition of the vehicle. We give you a clear timeline when you book." },
      { q: "Can I add a detail to my tint appointment?", a: "Absolutely. Many customers pair a detail with their tint. Add it to your quote." },
    ],
    whyUs: [
      "Done by hand with the right products for each surface",
      "Interior, exterior, or full detail to fit your needs",      "Owner-led care from Moe and team",
      "Reviews that say it best: looks and smells brand new",
    ],
    tiers: [
      { name: "Interior Detail", body: "Deep vacuum, surface cleaning, and refresh of seats, carpets, panels, and glass." },
      { name: "Exterior Detail", body: "Hand wash, decontamination, and a protective finish that restores shine." },
      { name: "Full Detail (Interior + Exterior)", body: "The complete reset, inside and out." },
    ],
  },
};

export const SERVICE_ORDER = [
  "window-tint",
  "paint-correction",
  "ceramic-coating",
  "detailing",
] as const;

// ---------------- GALLERY ----------------
export const GALLERY = {
  heading: "The Work Speaks for Itself",
  intro:
    "Real vehicles, real results. Ceramic tint, paint correction, ceramic coating, and detailing done by Moe and team right here in Plymouth. Drag the slider to see the difference.",
  sub: "See something you like? Build your free quote in under a minute or call (313) 729-0005.",
  items: [
    { image: "/services/window-tint.jpg", title: "Ceramic tint, clean edges", caption: "Cooler cabin, blocked UV, and a clean, even shade across every window." },
    { image: "/services/paint-correction.jpg", title: "Swirls gone", caption: "Paint correction removes the haze and brings back a true mirror finish." },
    { image: "/services/ceramic-coating.jpg", title: "Wet-look gloss", caption: "A ceramic coating seals the paint with depth that ordinary wax cannot match." },
    { image: "/services/detailing.jpg", title: "Interior reset", caption: "From everyday wear to a fresh, deep-cleaned cabin that looks and smells brand new." },
  ],
} as const;

// ---------------- ABOUT ----------------
export const ABOUT = {
  heading: "Plymouth's Trusted Tint & Detail Shop",
  subheading: "Owner led by Moe. Built on doing it right.",
  body: [
    "Midwest Tint & Detail is a locally owned shop in the heart of Plymouth, Michigan, built on a simple idea: treat every vehicle like it is your own, and do the work right the first time. Owner and lead installer Moe is hands-on with every job, which is exactly why customers keep mentioning him by name. When you call, you talk to the person doing the work, and that accountability shows up in the finish.",
    "We focus on what we do best: premium ceramic window tinting, paint correction, ceramic coating, and interior and exterior detailing. We use quality ceramic film instead of cheap dyed film, we take the time to do clean, careful installs, and we back every tint install with a lifetime warranty. We would rather earn a customer for years than win one on price, and that approach has built a 5.0 Google rating and more than 120 five-star reviews from drivers across Metro Detroit.",
    "Reviews tell the story better than we can, customers say their cars look and smell brand new and that the service was professional, courteous, and on time, every time. Whether you just picked up a new car or want to protect one you love, we would be glad to help.",
  ],
  pillars: [
    { icon: "UserCheck", title: "Owner led", body: "Moe is on every job. Direct communication and real accountability." },
    { icon: "Gem", title: "Quality over price", body: "Premium ceramic and careful work, not the cheapest shortcut." },
    { icon: "ShieldCheck", title: "Backed for life", body: "Lifetime warranty on every tint install." },
    { icon: "MapPin", title: "Local and convenient", body: "Rooted in Plymouth, serving Northville, Canton, Troy, Novi, Livonia, and Westland." },
  ],
} as const;

// ---------------- CONTACT / QUOTE ----------------
export const QUOTE = {
  heading: "Get Your Free, No-Pressure Quote",
  intro:
    "Pick your vehicle, choose your services, and get a fast, exact quote in under a minute. Prefer to talk it through? Call us directly at (313) 729-0005.",
  reassurance:
    "Lifetime warranty on every tint install. Premium ceramic, clean work, no spam, and no pressure.",
  steps: {
    vehicle: { header: "Tell us about your vehicle", helper: "Select your year, make, and model so we can quote the exact fit. Every vehicle is different, and that is why your quote is exact." },
    services: { header: "What can we do for you?", helper: "Choose one or more. Most customers start with ceramic tint, and many add a detail or coating." },
    contact: { header: "Where should we send your quote?", helper: "Just your name and the best number to reach you. We will follow up fast with your exact quote. No spam, ever." },
    review: { header: "Review and send", helper: "Make sure everything looks right, then send. We will reach out shortly with your free, no-pressure quote." },
  },
  trustMicro: "5.0 stars · 120+ reviews · Lifetime warranty · No spam, no pressure",
  submit: "Send My Free Quote",
  success:
    "You are all set. Thanks for reaching out to Midwest Tint & Detail. Moe and the team will follow up shortly with your free, exact quote. Need it sooner? Call us at (313) 729-0005.",
  error:
    "Something did not go through. Please try again, or just call us at (313) 729-0005 and we will take care of you.",
} as const;

// ---------------- SEO ----------------
export const SEO: Record<string, { title: string; description: string }> = {
  home: {
    title: "Window Tinting in Plymouth, MI | Midwest Tint & Detail",
    description:
      "Premium ceramic window tinting in Plymouth, MI, by Moe and team. Up to 99% UV protection, serious heat rejection, and a lifetime warranty. 120+ five-star reviews. Free quote: (313) 729-0005.",
  },
  "window-tint": {
    title: "Ceramic Window Tinting Plymouth, Northville & Canton MI | Midwest Tint & Detail",
    description:
      "Premium ceramic window tint installed by Moe in Plymouth, MI. Up to 99% UV protection, infrared heat rejection, no signal interference, and a lifetime warranty. Get a free quote today.",
  },
  "paint-correction": {
    title: "Paint Correction in Plymouth & Novi, MI | Midwest Tint & Detail",
    description:
      "Remove swirls, scratches, and haze with expert paint correction in Plymouth, MI. Multi-stage, by-hand work that restores true gloss. The right prep before ceramic coating. Free quote.",
  },
  "ceramic-coating": {
    title: "Ceramic Coating Plymouth, Northville & Livonia MI | Midwest Tint & Detail",
    description:
      "Durable, hydrophobic ceramic coating in Plymouth, MI. Years of UV and contaminant protection, deep gloss, and easier washing. Paired with paint correction. Get a free quote.",
  },
  detailing: {
    title: "Car Detailing in Plymouth & Canton, MI | Midwest Tint & Detail",
    description:
      "Interior and exterior car detailing in Plymouth, MI, by Moe and team. Deep cleaning, stain and odor removal, and protective finishes. Free quote.",
  },
  gallery: {
    title: "Tint & Detail Gallery | Before & After | Midwest Tint & Detail Plymouth MI",
    description:
      "See real before-and-after results from Midwest Tint & Detail in Plymouth, MI. Ceramic tint, paint correction, ceramic coating, and detailing. Drag to compare, then get a free quote.",
  },
  about: {
    title: "About Midwest Tint & Detail | Owner Led by Moe | Plymouth, MI",
    description:
      "Midwest Tint & Detail is a locally owned Plymouth, MI, shop led by Moe. Premium ceramic tint, paint correction, coating, and detailing, backed by a lifetime warranty and 120+ five-star reviews.",
  },
  contact: {
    title: "Get a Free Quote | Window Tinting & Detailing Plymouth MI | Midwest Tint & Detail",
    description:
      "Get a fast, free, exact quote from Midwest Tint & Detail in Plymouth, MI. Pick your vehicle, choose your services, no pressure. Call us at (313) 729-0005 or build your quote online.",
  },
};

// ---------------- Web3Forms (client-side submit) ----------------
// Web3Forms access key for MidwestTintandDetail@gmail.com. It is intentionally
// public (it ships in the client bundle); lock it down via Allowed Origins in the
// Web3Forms dashboard (nradachy-web.github.io + midwesttintdetail.com). Submissions
// fire client-side and route to /thank-you (the Google Ads conversion trigger).
export const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "15b7e402-e68d-40cd-9507-b744e1540b8b";

// ---------------- CITY / LOCAL SEO PAGES ----------------
export interface City {
  slug: string;
  name: string;
  county: string;
  intro: string[]; // unique local copy for SEO
  nearby: string[]; // slugs of nearby cities for internal links
}

export const CITIES: City[] = [
  {
    slug: "plymouth",
    name: "Plymouth",
    county: "Wayne County",
    intro: [
      "Midwest Tint & Detail is based right here in Plymouth, at 524 Farmer St just off downtown near Kellogg Park. As your hometown shop, we know exactly what Plymouth drivers want: clean, careful ceramic window tint that beats the Michigan heat and keeps that new-car feeling, without the wait or the runaround.",
      "Whether you just picked up a new vehicle, want to cut the glare on your daily commute, or are protecting a car you love, Moe and the team handle every Plymouth tint job personally and back it with a lifetime warranty.",
    ],
    nearby: ["canton", "northville", "livonia"],
  },
  {
    slug: "northville",
    name: "Northville",
    county: "the Wayne and Oakland County line",
    intro: [
      "Just minutes north of our shop, Northville drivers count on Midwest Tint & Detail for premium ceramic window tinting that looks factory-clean and holds up for the life of the vehicle. From the historic downtown to the neighborhoods off Six Mile and Sheldon, we make it easy to get a flawless tint without leaving the area.",
      "We install premium nano-ceramic film that blocks up to 99% of UV and a serious share of infrared heat, so your Northville commute stays cooler and your interior stays protected. Every install is owner-handled and backed by a lifetime warranty.",
    ],
    nearby: ["plymouth", "novi", "livonia"],
  },
  {
    slug: "canton",
    name: "Canton",
    county: "Wayne County",
    intro: [
      "Canton is one of the busiest communities we serve, and a quick drive from our Plymouth shop. With so many new cars and daily commuters along Ford Road and Michigan Ave, Canton drivers come to Midwest Tint & Detail for ceramic window tint that cuts heat and glare and keeps their vehicle looking sharp.",
      "We use premium ceramic film, not the cheap dyed tint that fades purple, and we walk you through your options so your Canton tint is done right the first time. Owner installed by Moe and backed by a lifetime warranty.",
    ],
    nearby: ["plymouth", "westland", "livonia"],
  },
  {
    slug: "troy",
    name: "Troy",
    county: "Oakland County",
    intro: [
      "Troy drivers who want their tint done right make the trip to Midwest Tint & Detail, and tell us it is worth it. From Somerset to the Big Beaver business corridor, Troy is full of late-model vehicles that deserve premium ceramic window film, not a bargain rush job.",
      "Our nano-ceramic tint blocks up to 99% of UV and rejects serious infrared heat, with no signal interference and no purple fade. Every Troy job is owner-handled and covered by a lifetime warranty.",
    ],
    nearby: ["novi", "livonia", "northville"],
  },
  {
    slug: "novi",
    name: "Novi",
    county: "Oakland County",
    intro: [
      "Novi is one of the fastest-growing communities in Metro Detroit, and a short drive from our Plymouth shop. Whether you just picked up a new car near Twelve Oaks or you are protecting a daily driver, Novi customers trust Midwest Tint & Detail for clean, premium ceramic window tint.",
      "We install ceramic film that keeps your cabin cooler, blocks the UV that fades interiors, and looks crisp for the life of the vehicle. Owner installed by Moe and backed by a lifetime warranty.",
    ],
    nearby: ["northville", "troy", "livonia"],
  },
  {
    slug: "livonia",
    name: "Livonia",
    county: "Wayne County",
    intro: [
      "Sitting right between Plymouth and Detroit along I-96 and I-275, Livonia is one of the easiest cities for us to serve. Livonia drivers choose Midwest Tint & Detail for premium ceramic window tinting that beats the summer heat and keeps their vehicle comfortable and protected year round.",
      "We never install cheap dyed film. Our nano-ceramic tint is color-stable, blocks up to 99% of UV, and is backed by a lifetime warranty, installed personally by Moe and the team.",
    ],
    nearby: ["plymouth", "westland", "northville"],
  },
  {
    slug: "westland",
    name: "Westland",
    county: "Wayne County",
    intro: [
      "Just southeast of our Plymouth shop, Westland drivers count on Midwest Tint & Detail for ceramic window tint that cuts heat and glare without the dealership markup. It is a quick trip for a clean, professional install that holds up for years.",
      "Premium ceramic film, honest guidance on Michigan tint law, and a lifetime warranty on every install. That is how we earn Westland customers for the long haul.",
    ],
    nearby: ["canton", "livonia", "plymouth"],
  },
];

