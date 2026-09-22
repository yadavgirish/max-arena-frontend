const memberships = [
  {
    id: "essential",
    name: "Essential",
    price: 1499,
    period: "MONTH",
    description:
      "Everything you need to build a consistent training routine and get started with confidence.",
    featured: false,

    features: [
      "Full gym access",
      "Access to all training zones",
      "Locker facility",
      "Basic fitness assessment",
      "Access to group classes",
    ],
  },

  {
    id: "performance",
    name: "Performance",
    price: 2499,
    period: "MONTH",
    description:
      "A complete training experience built for members who want structure, progression and measurable results.",
    featured: true,

    features: [
      "Everything in Essential",
      "Unlimited gym access",
      "Performance assessment",
      "Personalized training guidance",
      "Priority class booking",
      "Monthly progress tracking",
    ],
  },

  {
    id: "elite",
    name: "Elite",
    price: 3999,
    period: "MONTH",
    description:
      "Our most personalized experience with dedicated coaching and a training system built around your goals.",
    featured: false,

    features: [
      "Everything in Performance",
      "1-to-1 coaching sessions",
      "Personalized training program",
      "Nutrition guidance",
      "Weekly progress review",
      "Priority trainer access",
    ],
  },
];

export default memberships;