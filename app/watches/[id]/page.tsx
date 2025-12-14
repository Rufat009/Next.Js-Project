'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function WatchDetailPage() {
  const params = useParams();
  const id = params.id;

  const watches = [
    {
      id: 1,
      name: "Chronos Elite",
      description: "Precision meets elegance in this masterpiece of horological engineering",
      fullDescription: "The Chronos Elite represents the pinnacle of watchmaking excellence. Each component is meticulously crafted to deliver unparalleled precision and timeless elegance. This masterpiece features a Swiss automatic movement with a 72-hour power reserve, ensuring accuracy and reliability for generations to come.",
      price: "$2,499",
      category: "Luxury",
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200&h=1200&fit=crop",
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
      price: "$3,299",
      category: "Sport",
      image: "https://images.unsplash.com/photo-1526045431048-f857369baa09?w=1200&h=1200&fit=crop",
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
      price: "$4,799",
      category: "Luxury",
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1200&h=1200&fit=crop",
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
      price: "$1,899",
      category: "Sport",
      image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=1200&h=1200&fit=crop",
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
      price: "$2,199",
      category: "Diving",
      image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=1200&h=1200&fit=crop",
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
      price: "$3,599",
      category: "Classic",
      image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=1200&h=1200&fit=crop",
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
      price: "$2,899",
      category: "Sport",
      image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=1200&h=1200&fit=crop",
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
      price: "$5,999",
      category: "Luxury",
      image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=1200&h=1200&fit=crop",
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
      price: "$1,699",
      category: "Sport",
      image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=1200&h=1200&fit=crop",
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
      price: "$4,299",
      category: "Luxury",
      image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=1200&h=1200&fit=crop",
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
      price: "$6,499",
      category: "Luxury",
      image: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=1200&h=1200&fit=crop",
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
      price: "$2,299",
      category: "Smart",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=1200&h=1200&fit=crop",
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

  const watch = watches.find(w => w.id === parseInt(id as string));

  if (!watch) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white mb-4">Watch Not Found</h1>
          <Link href="/watches" className="text-gray-400 hover:text-white">
            Return to Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-90"></div>
      
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(at 40% 20%, rgba(31, 41, 55, 0.3) 0px, transparent 50%),
                         radial-gradient(at 80% 0%, rgba(17, 24, 39, 0.3) 0px, transparent 50%),
                         radial-gradient(at 0% 50%, rgba(55, 65, 81, 0.3) 0px, transparent 50%)`
      }}></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-8 py-12">
          <div className="mb-8">
            <Link href="/watches" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Collection
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/60 overflow-hidden sticky top-8">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 animate-gradient"></div>
              <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 right-6">
                  <span className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {watch.category}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h1 className="text-6xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4">
                  {watch.name}
                </h1>
                <p className="text-5xl font-black text-white mb-6">
                  {watch.price}
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  {watch.fullDescription}
                </p>
                <div className="flex gap-4 mb-4">
                  <Link
                    href="/cart"
                    className="flex-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 hover:from-gray-900 hover:via-gray-800 hover:to-black text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl transition-all transform hover:scale-105 text-center flex items-center justify-center"
                  >
                    Add to Cart
                  </Link>
                  <Link
                    href="/delivery"
                    className="flex-1 bg-white hover:bg-gray-100 text-gray-900 border-2 border-gray-800 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl transition-all transform hover:scale-105 text-center flex items-center justify-center"
                  >
                    Delivery Info
                  </Link>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/60 p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 animate-gradient"></div>
                <h2 className="text-3xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-6">
                  Technical Specifications
                </h2>
                <div className="space-y-4">
                  {Object.entries(watch.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center border-b border-gray-200 pb-3">
                      <span className="text-gray-600 font-semibold capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-gray-900 font-bold">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/60 p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 animate-gradient"></div>
                <h2 className="text-3xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-6">
                  What's Included
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Premium watch box with certificate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">International warranty card</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">User manual and care instructions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Complimentary adjustment and servicing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
