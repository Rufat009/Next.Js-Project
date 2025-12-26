export interface Watch {
  id: number;
  name: string;
  description: string;
  fullDescription?: string;
  price: number;
  priceFormatted: string;
  category: string;
  image: string;
  specs?: {
    movement: string;
    caseMaterial: string;
    caseDiameter: string;
    waterResistance: string;
    crystalType: string;
    strapMaterial: string;
    powerReserve: string;
  };
}

export const watches: Watch[] = [
  {
    id: 1,
    name: "Chronos Elite",
    description: "Precision meets elegance in this masterpiece of horological engineering",
    fullDescription: "The Chronos Elite represents the pinnacle of watchmaking excellence. Each component is meticulously crafted to deliver unparalleled precision and timeless elegance. This masterpiece features a Swiss automatic movement with a 72-hour power reserve, ensuring accuracy and reliability for generations to come.",
    price: 2499,
    priceFormatted: "$2,499",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&h=800&fit=crop",
    specs: {
      movement: "Swiss Automatic",
      caseMaterial: "Stainless Steel",
      caseDiameter: "42mm",
      waterResistance: "100m",
      crystalType: "Sapphire Crystal",
      strapMaterial: "Leather",
      powerReserve: "72 hours"
    }
  },
  {
    id: 2,
    name: "Stellar Titanium",
    description: "Lightweight titanium construction with advanced chronograph features",
    fullDescription: "Experience the perfect fusion of strength and lightness with the Stellar Titanium. Crafted from aerospace-grade titanium, this chronograph combines exceptional durability with featherlight comfort. The advanced chronograph functions are powered by a precision Swiss movement.",
    price: 3299,
    priceFormatted: "$3,299",
    category: "Sport",
    image: "https://images.unsplash.com/photo-1526045431048-f857369baa09?w=800&h=800&fit=crop",
    specs: {
      movement: "Swiss Chronograph",
      caseMaterial: "Grade 5 Titanium",
      caseDiameter: "44mm",
      waterResistance: "200m",
      crystalType: "Anti-reflective Sapphire",
      strapMaterial: "Titanium Bracelet",
      powerReserve: "48 hours"
    }
  },
  {
    id: 3,
    name: "Royal Sapphire",
    description: "Adorned with genuine sapphire crystal and Swiss automatic movement",
    fullDescription: "The Royal Sapphire embodies luxury and sophistication. This exquisite timepiece features genuine sapphire hour markers and a flawless sapphire crystal. The intricate Swiss automatic movement is visible through the exhibition caseback, showcasing the art of fine watchmaking.",
    price: 4799,
    priceFormatted: "$4,799",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&h=800&fit=crop",
    specs: {
      movement: "Swiss Automatic with Exhibition Back",
      caseMaterial: "18K White Gold Plated",
      caseDiameter: "40mm",
      waterResistance: "50m",
      crystalType: "Domed Sapphire Crystal",
      strapMaterial: "Alligator Leather",
      powerReserve: "80 hours"
    }
  },
  {
    id: 4,
    name: "Carbon Fusion",
    description: "Sport-luxury hybrid with carbon fiber case and ceramic bezel",
    fullDescription: "The Carbon Fusion pushes the boundaries of modern watchmaking with its innovative use of materials. The carbon fiber case offers incredible strength while remaining remarkably light. The ceramic bezel is virtually scratch-proof, ensuring your watch looks pristine for years.",
    price: 1899,
    priceFormatted: "$1,899",
    category: "Sport",
    image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&h=800&fit=crop",
    specs: {
      movement: "Japanese Automatic",
      caseMaterial: "Carbon Fiber",
      caseDiameter: "45mm",
      waterResistance: "150m",
      crystalType: "Hardened Mineral Crystal",
      strapMaterial: "Rubber Strap",
      powerReserve: "40 hours"
    }
  },
  {
    id: 5,
    name: "Ocean Diver Pro",
    description: "Professional diving watch with 300m water resistance",
    fullDescription: "Built for the depths, the Ocean Diver Pro is a true professional diving instrument. With 300m water resistance and a unidirectional rotating bezel, this watch meets the stringent ISO 6425 diving standards. The luminous hands and markers ensure visibility in the darkest depths.",
    price: 2199,
    priceFormatted: "$2,199",
    category: "Diving",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&h=800&fit=crop",
    specs: {
      movement: "Swiss Automatic",
      caseMaterial: "Stainless Steel 316L",
      caseDiameter: "43mm",
      waterResistance: "300m / 1000ft",
      crystalType: "Sapphire Crystal",
      strapMaterial: "Stainless Steel Bracelet",
      powerReserve: "60 hours"
    }
  },
  {
    id: 6,
    name: "Moonphase Classic",
    description: "Elegant moonphase complication with leather strap",
    fullDescription: "The Moonphase Classic celebrates the romantic tradition of astronomical complications. The accurate moonphase display requires adjustment only once every 122 years. This elegant timepiece combines classical design with modern precision engineering.",
    price: 3599,
    priceFormatted: "$3,599",
    category: "Classic",
    image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&h=800&fit=crop",
    specs: {
      movement: "Swiss Automatic with Moonphase",
      caseMaterial: "Rose Gold Plated",
      caseDiameter: "40mm",
      waterResistance: "30m",
      crystalType: "Sapphire Crystal",
      strapMaterial: "Genuine Crocodile Leather",
      powerReserve: "72 hours"
    }
  },
  {
    id: 7,
    name: "Aviator Chrono",
    description: "Pilot's chronograph with dual time zone functionality",
    fullDescription: "Inspired by aviation instruments, the Aviator Chrono combines functionality with bold aesthetics. The dual time zone display allows pilots and travelers to track multiple time zones simultaneously. The chronograph function provides precise timing capabilities.",
    price: 2899,
    priceFormatted: "$2,899",
    category: "Sport",
    image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&h=800&fit=crop",
    specs: {
      movement: "Swiss Automatic Chronograph",
      caseMaterial: "Brushed Stainless Steel",
      caseDiameter: "46mm",
      waterResistance: "100m",
      crystalType: "Anti-reflective Sapphire",
      strapMaterial: "Leather with Contrast Stitching",
      powerReserve: "48 hours"
    }
  },
  {
    id: 8,
    name: "Heritage Gold",
    description: "18K gold case with vintage-inspired design",
    fullDescription: "The Heritage Gold pays homage to the golden age of watchmaking. Crafted from solid 18K gold, this timepiece exudes luxury and prestige. The vintage-inspired design features classic proportions and elegant details that never go out of style.",
    price: 5999,
    priceFormatted: "$5,999",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&h=800&fit=crop",
    specs: {
      movement: "Swiss Automatic",
      caseMaterial: "18K Yellow Gold",
      caseDiameter: "38mm",
      waterResistance: "30m",
      crystalType: "Domed Sapphire Crystal",
      strapMaterial: "18K Gold Bracelet",
      powerReserve: "65 hours"
    }
  },
  {
    id: 9,
    name: "Tactical Black",
    description: "Military-grade durability with stealth aesthetics",
    fullDescription: "The Tactical Black is engineered for extreme conditions. Its DLC-coated case provides superior scratch and corrosion resistance. The stealth black design eliminates reflections, making it ideal for tactical operations and outdoor adventures.",
    price: 1699,
    priceFormatted: "$1,699",
    category: "Sport",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&h=800&fit=crop",
    specs: {
      movement: "Japanese Quartz",
      caseMaterial: "DLC-Coated Stainless Steel",
      caseDiameter: "44mm",
      waterResistance: "200m",
      crystalType: "Hardened Mineral Crystal",
      strapMaterial: "NATO Nylon Strap",
      powerReserve: "Battery 3 years"
    }
  },
  {
    id: 10,
    name: "Skeleton Master",
    description: "Open-worked dial showcasing the mechanical movement",
    fullDescription: "The Skeleton Master is a transparent celebration of mechanical artistry. Every component of the movement is visible through the skeletonized dial and exhibition caseback. Each bridge and wheel is hand-finished to perfection, transforming the watch into a wearable work of art.",
    price: 4299,
    priceFormatted: "$4,299",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&h=800&fit=crop",
    specs: {
      movement: "Swiss Hand-Wound Skeleton",
      caseMaterial: "Stainless Steel with Exhibition Back",
      caseDiameter: "42mm",
      waterResistance: "50m",
      crystalType: "Double-Sided Sapphire Crystal",
      strapMaterial: "Alligator Leather",
      powerReserve: "72 hours"
    }
  },
  {
    id: 11,
    name: "Rose Gold Elegance",
    description: "Rose gold finish with diamond hour markers",
    fullDescription: "The Rose Gold Elegance represents the ultimate in refined luxury. The warm rose gold finish is complemented by genuine diamond hour markers that catch the light beautifully. This sophisticated timepiece is perfect for special occasions and formal events.",
    price: 6499,
    priceFormatted: "$6,499",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=800&h=800&fit=crop",
    specs: {
      movement: "Swiss Automatic",
      caseMaterial: "18K Rose Gold",
      caseDiameter: "36mm",
      waterResistance: "30m",
      crystalType: "Sapphire Crystal",
      strapMaterial: "Rose Gold Bracelet",
      powerReserve: "70 hours"
    }
  },
  {
    id: 12,
    name: "Smart Hybrid",
    description: "Traditional watch design with smart connectivity features",
    fullDescription: "The Smart Hybrid bridges the gap between traditional watchmaking and modern technology. Enjoy the classic appearance of an analog watch while benefiting from smart features like activity tracking, notifications, and automatic time synchronization.",
    price: 2299,
    priceFormatted: "$2,299",
    category: "Smart",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=800&fit=crop",
    specs: {
      movement: "Hybrid Quartz with Smart Module",
      caseMaterial: "Stainless Steel",
      caseDiameter: "42mm",
      waterResistance: "100m",
      crystalType: "Sapphire Crystal",
      strapMaterial: "Interchangeable Strap",
      powerReserve: "Battery 6 months + Rechargeable"
    }
  }
];
