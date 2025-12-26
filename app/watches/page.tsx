'use client';

import Link from 'next/link';
import { watches } from '@/data/watches';

export default function WatchesPage() {
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
        <div className="py-12 sm:py-16 lg:py-20 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white text-center tracking-wider drop-shadow-2xl animate-fade-in mb-4 sm:mb-6">
              Our Collection
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/80 text-center font-medium max-w-3xl mx-auto px-4">
              Discover timepieces that define excellence
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {watches.map((watch, index) => (
              <div
                key={watch.id}
                className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/60 relative overflow-hidden hover:shadow-gray-900/50 transition-all duration-300 group hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 animate-gradient"></div>
                
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={watch.image}
                    alt={watch.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <span className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold shadow-lg">
                      {watch.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 lg:p-6">
                  <h3 className="text-lg sm:text-xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-2">
                    {watch.name}
                  </h3>
                  <p className="text-gray-600 font-medium text-xs mb-3 sm:mb-4 leading-relaxed line-clamp-2">
                    {watch.description}
                  </p>
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <span className="text-xl sm:text-2xl font-black text-gray-900">
                      {watch.priceFormatted}
                    </span>
                    <Link
                      href={`/watches/${watch.id}`}
                      className="w-full text-center block bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 hover:from-gray-900 hover:via-gray-800 hover:to-black text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 rounded-xl font-bold text-base sm:text-lg lg:text-xl shadow-lg transition-all transform hover:scale-105"
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
