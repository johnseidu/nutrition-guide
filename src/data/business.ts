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
export const productGoals = [
  { id: "weight-loss", title: "Weight Loss" },
  { id: "flat-tummy", title: "Flat Tummy" },
  { id: "weight-gain", title: "Weight Gain" },
  { id: "muscle-building", title: "Muscle Building" },
  { id: "healthy-breakfast", title: "Healthy Breakfast" },
  { id: "skin-care", title: "Skin Care" },
  { id: "hair-care", title: "Hair Care" },
  { id: "stretch-marks", title: "Stretch Marks" },
  { id: "nutritional-goals", title: "Personal Nutritional Goals" },
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
