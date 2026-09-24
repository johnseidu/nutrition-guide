// Centralized business information.
// Update details here and they will flow through the entire site.

export const business = {
  brandName: "nutritionguide",
  brandTagline: "by MisScilla Thecoach",
  brandSuffix: "(Herbalife Independent Distributor)",
  legalDescription: "Independent Herbalife Distributor",
  ownerName: "MisScilla",
  ownerHandle: "Small Madam", // how customers already know and greet her

  location: {
    name: "TeamSupport NutriHub",
    line1: "Santasi Roundabout",
    line2: "Adjacent to Fidelity Bank",
    city: "Kumasi, Ghana",
  },

  // Physical base is Kumasi, but delivery and service area is nationwide.
  serviceArea: "Serving customers across Ghana",

  phoneDisplay: "053 837 3518",
  phoneIntl: "+233538373518", // used for tel: and wa.me links
  email: "Priscilladapaah5@gmail.com",

  hours: {
    calls: "8:00 AM – 8:00 PM, daily",
    whatsapp: "Messages welcome anytime",
  },

  delivery: {
    headline: "Doorstep Delivery Across Ghana",
    body: "Orders are delivered through Herbalife in partnership with FedEx Ghana, straight to your door — wherever you are in the country.",
  },

  social: {
    tiktok: {
      label: "Small Madam – Herbalife",
      handle: "@smallmadam.herbalife",
      url: "https://www.tiktok.com/@coachmiscilla3?_r=1&_t=ZS-99zOxKeA9dk",
    },
    facebook: {
      label: "MisScilla Thecoach",
    },
  },

  whatsappMessage:
    "Hello Small Madam, I found your website and would like to learn more about your nutrition and wellness products.",

  whatsappCommunityLink:
    "https://chat.whatsapp.com/HiHsI2xTRpCI3iptSNbhQF?mode=gi_t",
} as const;

export const services = [
  {
    id: "coaching",
    title: "Online Coaching",
    description:
      "One-on-one guidance to help you set realistic wellness goals and stay consistent, wherever you are.",
  },
  {
    id: "meal-plans",
    title: "Personalized Meal Plans",
    description:
      "Nutrition support built around your routine, your goals, and the products that fit your lifestyle.",
  },
  {
    id: "workout-plans",
    title: "Workout Plans",
    description:
      "Simple, sustainable movement plans to complement your nutrition and support an active lifestyle.",
  },
  {
    id: "community",
    title: "Online Support Community",
    description:
      "Stay motivated alongside other members who are on the same journey toward better habits.",
  },
  {
    id: "consultancy",
    title: "Wellness Consultancy",
    description:
      "A listening ear and honest guidance to help you choose the right next step for your goals.",
  },
  {
    id: "products",
    title: "Nutrition Products",
    description:
      "Access to genuine Herbalife nutrition, wellness, and personal care products, delivered to your door.",
  },
] as const;

// Goal-based product categories customers ask about most.
// Each may include real product images and a short, honest description
// based only on what's shown/printed on the product itself — no invented
// claims. Clicking a tile opens a detail view with a goal-specific
// WhatsApp message pre-filled.
export const productGoals = [
  {
    id: "weight-loss",
    title: "Weight Loss",
    images: ["/images/products/weight-loss.jpg"],
    description:
      "Herbalife's Weight Loss & Belly Fat range — including starter, body, and belly-focused packs — to support your weight loss goals as part of a healthy, balanced lifestyle.",
  },
  {
    id: "flat-tummy",
    title: "Flat Tummy",
    images: ["/images/products/weight-loss.jpg"],
    description:
      "Belly-focused packs such as Belly Blaster and Belly & Detox, designed to support flat-tummy goals alongside a healthy diet and regular activity.",
  },
  {
    id: "weight-gain-muscle-building",
    title: "Weight Gain & Muscle Building",
    images: ["/images/products/weight-gain.jpg"],
    description:
      "Herbalife's Build & Grow range — shake-based packs to support healthy weight gain and muscle development alongside regular training.",
  },
  {
    id: "healthy-breakfast",
    title: "Healthy Breakfast",
    images: ["/images/products/healthy-breakfast.jpg"],
    description:
      "Formula 1 Healthy Meal — a balanced meal replacement shake mix for busy mornings, available in a range of flavours.",
  },
  {
    id: "hair-skin-care",
    title: "Hair & Skin Care",
    images: ["/images/products/skin-care.jpg"],
    description:
      "Hair and skin care products to support healthy hair and skin as part of your daily routine. Ask us for current availability.",
  },
  {
    id: "healthy-aging",
    title: "Healthy Aging",
    images: ["/images/products/healthy-aging.jpg"],
    description:
      "Herbalife's Healthy Aging range — Xtra-Cal, Herbalifeline Max (Omega-3), Collagen Skin Booster, and Niteworks — supporting bone, heart, skin, and vascular health as you age.",
  },
  {
    id: "nutritional-goals",
    title: "Personal Nutritional Goals",
    images: [
      "/images/products/nutritional-goals-1.jpg",
      "/images/products/nutritional-goals-2.jpg",
    ],
    description:
      "Protein Drink Mix and Formula 3 Personalised Protein Powder — simple ways to boost your daily protein intake as part of a plan built around your own goals.",
  },
  {
    id: "digestive-health",
    title: "Digestive Health",
    images: ["/images/products/digestive-health.jpg"],
    description:
      "Herbal Aloe Concentrate, Oat Apple Fibre, and AloeMax — Herbalife's Digestive Health range, supporting everyday digestive wellness.",
  },
  {
    id: "energy-fitness",
    title: "Energy & Fitness",
    images: ["/images/products/energy-fitness.jpg"],
    description:
      "Instant Herbal Tea, LiftOff, and Phyto Complete — Herbalife's Energy & Fitness range to support energy throughout an active day.",
  },
  {
    id: "heart-health",
    title: "Heart Health",
    images: ["/images/products/heart-health.jpg"],
    description:
      "Herbalifeline Max — an Omega-3 food supplement (EPA and DHA) formulated to support normal heart function as part of a balanced diet.",
  },
  {
    id: "business-opportunity",
    title: "Fantastic Business Opportunity",
    images: [
      "/images/products/business-opportunity-1.jpg",
      "/images/products/business-opportunity-2.jpg",
    ],
    description:
      "Anyone can become a Herbalife Independent Distributor — students, working parents, and retirees alike. Training and support are provided; building a business still takes hard work and dedication.",
  },
] as const;

export type ProductGoal = (typeof productGoals)[number];

export const steps = [
  {
    number: "01",
    title: "Order",
    description:
      "Place your order easily and securely through our system.",
  },
  {
    number: "02",
    title: "Pay",
    description:
      "Make your payment through our convenient and trusted payment options.",
  },
  {
    number: "03",
    title: "Receive",
    description:
      "Your order is carefully packed and prepared for delivery.",
  },
  {
    number: "04",
    title: "Delivered",
    description:
      "We deliver your package safely and on time to your doorstep.",
  },
] as const;

// Testimonial photos, grouped as agreed with the client.
// "owner" = Small Madam's own personal transformation.
// "customer" = results from customers, shared with permission.
export const ownerTestimonials = [
  { id: "owner-1", src: "/images/testimonials/owner-1.jpg", alt: "Small Madam's personal wellness transformation, photo 1" },
  { id: "owner-2", src: "/images/testimonials/owner-2.jpg", alt: "Small Madam's personal wellness transformation, photo 2" },
  { id: "owner-3", src: "/images/testimonials/owner-3.jpg", alt: "Small Madam's personal wellness transformation, before and after" },
] as const;

export const customerTestimonials = [
  { id: "customer-1", src: "/images/testimonials/customer-1.jpg", alt: "Customer transformation result, before and after" },
  { id: "customer-2", src: "/images/testimonials/customer-2.jpg", alt: "Customer transformation result, before and after" },
  { id: "customer-3", src: "/images/testimonials/customer-3.jpg", alt: "Customer weight loss transformation over 8 months" },
  { id: "customer-4", src: "/images/testimonials/customer-4.jpg", alt: "Customer fitness transformation result" },
  { id: "customer-5", src: "/images/testimonials/customer-5.jpg", alt: "Customer wellness transformation, before and after" },
  { id: "customer-6", src: "/images/testimonials/customer-6.jpg", alt: "Customer wellness transformation, before and after" },
  { id: "customer-7", src: "/images/testimonials/customer-7.jpg", alt: "Customer wellness transformation, before and after" },
] as const;

export const testimonialDisclaimer =
  "People who replace two meals a day with Herbalife Nutrition Formula 1 as part of a healthy lifestyle (such as lowering caloric intake, eating a healthy, balanced diet, or engaging in regular physical activity) can generally expect to lose around half a pound to 1 pound per week. Individual results will vary.";
