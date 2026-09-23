// Centralized business information.
// Update details here and they will flow through the entire site.

export const business = {
  brandName: "Nutrition Guide",
  brandTagline: "by Small Madam",
  legalDescription: "Independent Herbalife Distributor",
  ownerName: "Priscilla",
  ownerHandle: "Small Madam",

  location: {
    name: "TeamSupport NutriHub",
    line1: "Santasi Roundabout",
    line2: "Adjacent to Fidelity Bank",
    city: "Kumasi, Ghana",
  },

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
    },
    facebook: {
      label: "MisScilla Thecoach",
    },
  },

  whatsappMessage:
    "Hello Small Madam, I found your website and would like to learn more about your nutrition and wellness products.",
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

export const wellnessCategories = [
  {
    id: "nutrition",
    title: "Nutrition",
    description:
      "Everyday nutrition support to help you meet your goals, one habit at a time.",
  },
  {
    id: "wellness",
    title: "Wellness",
    description:
      "Products and guidance to support your energy, hydration, and overall balance.",
  },
  {
    id: "personal-care",
    title: "Personal Care",
    description: "Skin and body care formulated to fit into a healthy routine.",
  },
  {
    id: "lifestyle",
    title: "Lifestyle",
    description:
      "Small, sustainable changes that support a more active, consistent lifestyle.",
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "Share Your Goals",
    description:
      "Reach out on WhatsApp and tell Small Madam what you're hoping to work on.",
  },
  {
    number: "02",
    title: "Choose Your Products & Support",
    description:
      "Get guidance on the products and support options that fit your goals and budget.",
  },
  {
    number: "03",
    title: "Receive Your Order",
    description:
      "Your order is delivered to your doorstep, anywhere in Ghana.",
  },
  {
    number: "04",
    title: "Continue With Personalized Support",
    description:
      "Stay connected for coaching, meal plans, and ongoing encouragement.",
  },
] as const;
