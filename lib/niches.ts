export interface Niche {
  id: string
  name: string
  description: string
  tags: string[]
  audience: string
  contentIdeas: string[]
  image?: string
}

export const niches: Niche[] = [
  {
    id: "jiu-jitsu",
    name: "Jiu-Jitsu",
    description: "Martial arts content focused on Brazilian Jiu-Jitsu techniques, competitions, and lifestyle. Perfect for an AI influencer who embodies discipline and physical mastery.",
    tags: ["Sports", "Martial Arts", "Fitness"],
    audience: "BJJ practitioners, MMA fans, fitness enthusiasts",
    contentIdeas: [
      "Technique breakdowns and tutorials",
      "Competition highlights and analysis",
      "Training lifestyle and motivation",
      "Gear reviews and recommendations"
    ]
  },
  {
    id: "paddle-ball",
    name: "Paddle Ball",
    description: "Emerging racquet sport content covering padel, pickleball, and beach tennis. A fast-growing niche with passionate communities worldwide.",
    tags: ["Sports", "Racquet Sports", "Outdoor"],
    audience: "Padel players, pickleball enthusiasts, recreational athletes",
    contentIdeas: [
      "Skill tutorials and drills",
      "Equipment comparisons",
      "Match highlights and strategies",
      "Community events and meetups"
    ]
  },
  {
    id: "peace-mindfulness",
    name: "Peace & Mindfulness",
    description: "Wellness content centered on meditation, inner peace, and mindful living. Ideal for an AI persona that radiates calm and spiritual wisdom.",
    tags: ["Wellness", "Spirituality", "Mental Health"],
    audience: "Meditation practitioners, wellness seekers, stressed professionals",
    contentIdeas: [
      "Guided meditation sessions",
      "Daily affirmations and mantras",
      "Mindfulness tips for modern life",
      "Breathwork and relaxation techniques"
    ]
  },
  {
    id: "sustainable-fashion",
    name: "Sustainable Fashion",
    description: "Eco-conscious style content promoting ethical fashion choices, thrift finds, and sustainable brands. Appeals to environmentally aware fashionistas.",
    tags: ["Fashion", "Sustainability", "Lifestyle"],
    audience: "Eco-conscious consumers, fashion lovers, Gen Z",
    contentIdeas: [
      "Sustainable outfit inspiration",
      "Brand spotlights and reviews",
      "Thrift hauls and styling tips",
      "Fashion industry education"
    ]
  },
  {
    id: "retro-gaming",
    name: "Retro Gaming",
    description: "Nostalgic gaming content celebrating classic video games, consoles, and gaming culture from the 80s, 90s, and early 2000s.",
    tags: ["Gaming", "Nostalgia", "Entertainment"],
    audience: "Millennials, retro enthusiasts, gaming collectors",
    contentIdeas: [
      "Classic game reviews and playthroughs",
      "Console collection showcases",
      "Gaming history and trivia",
      "Retro vs modern comparisons"
    ]
  },
  {
    id: "urban-gardening",
    name: "Urban Gardening",
    description: "City-based plant content for apartment dwellers and urban farmers. From balcony gardens to indoor plant care and small-space growing.",
    tags: ["Lifestyle", "Plants", "Sustainability"],
    audience: "City dwellers, plant parents, apartment residents",
    contentIdeas: [
      "Small space gardening tips",
      "Indoor plant care guides",
      "Balcony garden transformations",
      "Seasonal planting calendars"
    ]
  },
  {
    id: "asmr-cooking",
    name: "ASMR Cooking",
    description: "Satisfying culinary content combining cooking tutorials with ASMR triggers. The sounds of sizzling, chopping, and plating create a sensory experience.",
    tags: ["Food", "ASMR", "Entertainment"],
    audience: "ASMR fans, home cooks, food content lovers",
    contentIdeas: [
      "No-talking recipe videos",
      "Ingredient prep sequences",
      "Kitchen sounds compilations",
      "Visual cooking techniques"
    ]
  },
  {
    id: "digital-nomad",
    name: "Digital Nomad Life",
    description: "Remote work and travel lifestyle content showcasing destinations, productivity tips, and the freedom of location-independent living.",
    tags: ["Travel", "Lifestyle", "Career"],
    audience: "Remote workers, travel enthusiasts, entrepreneurs",
    contentIdeas: [
      "Destination work guides",
      "Remote work setup tours",
      "Travel productivity hacks",
      "Cost of living comparisons"
    ]
  },
  {
    id: "coffee-culture",
    name: "Coffee Culture",
    description: "Artisanal coffee content exploring brewing methods, cafe reviews, and the global coffee scene. Perfect for a sophisticated AI persona with refined taste.",
    tags: ["Food & Drink", "Lifestyle", "Culture"],
    audience: "Coffee enthusiasts, cafe hoppers, home baristas",
    contentIdeas: [
      "Brewing method tutorials",
      "Coffee shop reviews and tours",
      "Bean origin stories and tasting notes",
      "Home espresso setup guides"
    ]
  },
  {
    id: "vintage-cars",
    name: "Vintage Cars",
    description: "Classic automobile content celebrating iconic vehicles, restoration projects, and automotive history. Appeals to car enthusiasts and collectors.",
    tags: ["Automotive", "Nostalgia", "Lifestyle"],
    audience: "Car enthusiasts, collectors, classic car owners",
    contentIdeas: [
      "Classic car spotlights and history",
      "Restoration project showcases",
      "Car show coverage and events",
      "Driving experience reviews"
    ]
  },
  {
    id: "cryptocurrency",
    name: "Cryptocurrency & Web3",
    description: "Digital finance content covering crypto markets, blockchain technology, NFTs, and decentralized applications. A high-engagement tech-forward niche.",
    tags: ["Finance", "Technology", "Investing"],
    audience: "Crypto investors, tech enthusiasts, DeFi users",
    contentIdeas: [
      "Market analysis and trends",
      "Project reviews and deep dives",
      "Beginner education content",
      "Web3 tool tutorials"
    ]
  },
  {
    id: "minimalism",
    name: "Minimalist Living",
    description: "Content about intentional living, decluttering, and finding joy in less. An AI persona that embodies simplicity and purposeful choices.",
    tags: ["Lifestyle", "Wellness", "Home"],
    audience: "Minimalists, declutterers, simple living advocates",
    contentIdeas: [
      "Decluttering challenges and tips",
      "Minimalist home tours",
      "Capsule wardrobe guides",
      "Intentional living philosophy"
    ]
  },
  {
    id: "outdoor-adventure",
    name: "Outdoor Adventure",
    description: "Wilderness and adventure content featuring hiking, camping, climbing, and exploring nature. Perfect for an adventurous AI persona.",
    tags: ["Travel", "Adventure", "Fitness"],
    audience: "Hikers, campers, outdoor enthusiasts, nature lovers",
    contentIdeas: [
      "Trail guides and hiking tips",
      "Camping gear reviews",
      "Adventure destination spotlights",
      "Outdoor survival skills"
    ]
  },
  {
    id: "book-reviews",
    name: "BookTok & Literature",
    description: "Literary content covering book reviews, reading recommendations, and bookish lifestyle. Tap into the massive BookTok community.",
    tags: ["Entertainment", "Education", "Lifestyle"],
    audience: "Avid readers, BookTok community, book club members",
    contentIdeas: [
      "Book reviews and recommendations",
      "Reading vlogs and challenges",
      "Author spotlights",
      "Bookshelf tours and organization"
    ]
  },
  {
    id: "skincare",
    name: "Skincare & Beauty Science",
    description: "Evidence-based skincare content focusing on ingredients, routines, and product analysis. An AI persona that combines beauty with scientific knowledge.",
    tags: ["Beauty", "Wellness", "Education"],
    audience: "Skincare enthusiasts, beauty lovers, ingredient-conscious consumers",
    contentIdeas: [
      "Ingredient breakdowns and education",
      "Product reviews and comparisons",
      "Routine building guides",
      "Skincare myth busting"
    ]
  },
  {
    id: "home-barista",
    name: "Home Mixology",
    description: "Cocktail and beverage content for home bartenders. From classic recipes to creative concoctions and bar setup guides.",
    tags: ["Food & Drink", "Lifestyle", "Entertainment"],
    audience: "Home bartenders, cocktail enthusiasts, party hosts",
    contentIdeas: [
      "Classic cocktail tutorials",
      "Creative drink recipes",
      "Home bar setup guides",
      "Spirits education and tasting"
    ]
  },
  {
    id: "productivity",
    name: "Productivity & Self-Improvement",
    description: "Personal development content covering productivity systems, habit building, and self-optimization. Appeals to ambitious professionals.",
    tags: ["Career", "Lifestyle", "Education"],
    audience: "Professionals, students, entrepreneurs, self-improvement seekers",
    contentIdeas: [
      "Productivity system tutorials",
      "Morning routine content",
      "Goal setting and tracking",
      "Time management strategies"
    ]
  },
  {
    id: "pet-lifestyle",
    name: "Pet Lifestyle",
    description: "Content for pet owners featuring care tips, product reviews, and adorable pet content. Dogs, cats, and exotic pets all welcome.",
    tags: ["Pets", "Lifestyle", "Entertainment"],
    audience: "Pet owners, animal lovers, new pet parents",
    contentIdeas: [
      "Pet care tips and advice",
      "Product reviews and recommendations",
      "Training tutorials",
      "Day-in-the-life content"
    ]
  }
]
