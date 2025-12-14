'use client';

import Link from 'next/link';

export default function WatchesPage() {
  const watches = [
    {
      id: 1,
      name: "Chronos Elite",
      description: "Precision meets elegance in this masterpiece of horological engineering",
      price: "$2,499",
      category: "Luxury",
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&h=800&fit=crop"
    },
    {
      id: 2,
      name: "Stellar Titanium",
      description: "Lightweight titanium construction with advanced chronograph features",
      price: "$3,299",
      category: "Sport",
      image: "https://images.unsplash.com/photo-1526045431048-f857369baa09?w=800&h=800&fit=crop"
    },
    {
      id: 3,
      name: "Royal Sapphire",
      description: "Adorned with genuine sapphire crystal and Swiss automatic movement",
      price: "$4,799",
      category: "Luxury",
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&h=800&fit=crop"
    },
    {
      id: 4,
      name: "Carbon Fusion",
      description: "Sport-luxury hybrid with carbon fiber case and ceramic bezel",
      price: "$1,899",
      category: "Sport",
      image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&h=800&fit=crop"
    },
    {
      id: 5,
      name: "Ocean Diver Pro",
      description: "Professional diving watch with 300m water resistance",
      price: "$2,199",
      category: "Diving",
      image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&h=800&fit=crop"
    },
    {
      id: 6,
      name: "Moonphase Classic",
      description: "Elegant moonphase complication with leather strap",
      price: "$3,599",
      category: "Classic",
      image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&h=800&fit=crop"
    },
    {
      id: 7,
      name: "Aviator Chrono",
      description: "Pilot's chronograph with dual time zone functionality",
      price: "$2,899",
      category: "Sport",
      image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&h=800&fit=crop"
    },
    {
      id: 8,
      name: "Heritage Gold",
      description: "18K gold case with vintage-inspired design",
      price: "$5,999",
      category: "Luxury",
      image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&h=800&fit=crop"
    },
    {
      id: 9,
      name: "Tactical Black",
      description: "Military-grade durability with stealth aesthetics",
      price: "$1,699",
      category: "Sport",
      image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&h=800&fit=crop"
    },
    {
      id: 10,
      name: "Skeleton Master",
      description: "Open-worked dial showcasing the mechanical movement",
      price: "$4,299",
      category: "Luxury",
      image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&h=800&fit=crop"
    },
    {
      id: 11,
      name: "Rose Gold Elegance",
      description: "Rose gold finish with diamond hour markers",
      price: "$6,499",
      category: "Luxury",
      image: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=800&h=800&fit=crop"
    },
    {
      id: 12,
      name: "Smart Hybrid",
      description: "Traditional watch design with smart connectivity features",
      price: "$2,299",
      category: "Smart",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=800&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-90"></div>
      
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(at 40% 20%, rgba(31, 41, 55, 0.3) 0px, transparent 50%),
                         radial-gradient(at 80% 0%, rgba(17, 24, 39, 0.3) 0px, transparent 50%),
                         radial-gradient(at 0% 50%, rgba(55, 65, 81, 0.3) 0px, transparent 50%),
                         radial-gradient(at 80% 50%, rgba(31, 41, 55, 0.3) 0px, transparent 50%),
                         radial-gradient(at 0% 100%, rgba(17, 24, 39, 0.3) 0px, transparent 50%),
                         radial-gradient(at 80% 100%, rgba(31, 41, 55, 0.3) 0px, transparent 50%)`
      }}></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-gray-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '4s', animationDuration: '6s' }}></div>
      </div>

      <div className="relative z-10">
        <div className="py-20 overflow-hidden">
          <div className="container mx-auto px-8">
            <h1 className="text-7xl font-black text-white text-center tracking-wider drop-shadow-2xl animate-fade-in mb-6">
              Our Collection
            </h1>
            <p className="text-2xl text-white/80 text-center font-medium max-w-3xl mx-auto">
              Discover timepieces that define excellence
            </p>
          </div>
        </div>

        <div className="container mx-auto px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {watches.map((watch, index) => (
              <div
                key={watch.id}
                className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/60 relative overflow-hidden hover:shadow-gray-900/50 transition-all duration-300 group hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 animate-gradient"></div>
                
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={watch.image}
                    alt={watch.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {watch.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-2">
                    {watch.name}
                  </h3>
                  <p className="text-gray-600 font-medium text-xs mb-4 leading-relaxed line-clamp-2">
                    {watch.description}
                  </p>
                  <div className="flex flex-col gap-3">
                    <span className="text-2xl font-black text-gray-900">
                      {watch.price}
                    </span>
                    <Link
                      href={`/watches/${watch.id}`}
                      className="w-full text-center block bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 hover:from-gray-900 hover:via-gray-800 hover:to-black text-white px-8 py-5 rounded-xl font-bold text-2xl shadow-lg transition-all transform hover:scale-105"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full bg-black py-20">
          <div className="container mx-auto px-8 text-center">
            <h3 className="text-3xl font-black text-white mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-lg text-gray-400 font-medium max-w-2xl mx-auto mb-8">
              Contact our specialists for personalized recommendations or custom orders.
            </p>
            <Link
              href="/profile"
              className="inline-block bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 hover:from-gray-900 hover:via-gray-800 hover:to-black text-white px-10 py-4 rounded-xl font-bold text-base shadow-2xl transition-all transform hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
