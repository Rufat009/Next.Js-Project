'use client';

import Link from 'next/link';
import { watches } from '@/data/watches';

export default function Home() {
  const featuredWatches = watches.slice(0, 3);

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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
            <div className="inline-block p-4 sm:p-6 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-full mb-6 sm:mb-8 shadow-2xl shadow-gray-900/50 animate-bounce-slow">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent mb-4 sm:mb-6 drop-shadow-2xl tracking-tight">
              VOLUMENZEIT
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-bold drop-shadow-lg mb-3 sm:mb-4">
              Volumetric Wrist Watches
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-white/80 font-semibold max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
              Where precision engineering meets timeless elegance. Discover our exclusive collection of luxury timepieces.
            </p>
            <Link
              href="/watches"
              className="group relative inline-block bg-white text-gray-900 hover:bg-gray-50 px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-2xl font-black text-base sm:text-lg lg:text-xl shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                Explore Collection
                <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20 lg:pb-28">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent mb-3 sm:mb-4 drop-shadow-lg">
              Featured Collection
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/80 font-semibold px-4">
              Handpicked timepieces from our premium selection
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {featuredWatches.map((watch, index) => (
              <div
                key={watch.id}
                className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/60 relative overflow-hidden hover:shadow-gray-900/50 transition-all duration-300 group hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 animate-gradient"></div>
                
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={watch.image}
                    alt={watch.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <span className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-black shadow-lg">
                      NEW
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <h3 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-2 sm:mb-3">
                    {watch.name}
                  </h3>
                  <p className="text-gray-600 font-medium text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                    {watch.description}
                  </p>
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <span className="text-xl sm:text-2xl font-black text-gray-900">
                      {watch.priceFormatted}
                    </span>
                    <Link
                      href={`/watches/${watch.id}`}
                      className="w-full text-center bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 hover:from-gray-900 hover:via-gray-800 hover:to-black text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg transition-all transform group-hover:scale-105"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-8 pb-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/15 transition-all animate-fade-in">
              <div className="text-5xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                15+
              </div>
              <div className="text-white/70 font-medium text-sm uppercase tracking-wider">
                Years Experience
              </div>
            </div>
            
            <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/15 transition-all animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-white/70 font-medium text-sm uppercase tracking-wider">
                Watch Models
              </div>
            </div>
            
            <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/15 transition-all animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <div className="text-white/70 font-medium text-sm uppercase tracking-wider">
                Happy Customers
              </div>
            </div>
            
            <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/15 transition-all animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-white/70 font-medium text-sm uppercase tracking-wider">
                Swiss Made
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-8 pb-28 mt-80">
          <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl p-20 border border-white/60 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 animate-gradient"></div>
            <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-gray-800/10 to-gray-900/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-4 left-4 w-40 h-40 bg-gradient-to-tr from-gray-800/10 to-gray-900/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-full mx-auto">
              <h2 className="text-5xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-16 mt-8 text-center">
                The VOLUMENZEIT Philosophy
              </h2>
              
              <div className="grid md:grid-cols-3 gap-12 mb-16">
                <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Precision</h3>
                  <p className="text-gray-600 font-medium text-sm">
                    Every timepiece is crafted with meticulous attention to detail and accuracy.
                  </p>
                </div>

                <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Elegance</h3>
                  <p className="text-gray-600 font-medium text-sm">
                    Timeless designs that complement any style and occasion perfectly.
                  </p>
                </div>

                <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Value</h3>
                  <p className="text-gray-600 font-medium text-sm">
                    Premium quality at competitive prices, ensuring lasting value.
                  </p>
                </div>
              </div>

              <div className="text-center space-y-8">
                <p className="text-lg text-gray-700 font-normal leading-relaxed">
                  Founded on the principle that time is the most valuable commodity, <span className="font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">VOLUMENZEIT</span> represents more than just watches—we represent a commitment to excellence. Each timepiece in our collection embodies the perfect fusion of Swiss engineering precision and contemporary design aesthetics.
                </p>
                <p className="text-lg text-gray-700 font-normal leading-relaxed">
                  Our volumetric approach to watchmaking ensures that every dimension, every curve, and every function serves a purpose. From the sapphire crystal face to the intricate mechanical movements within, we leave nothing to chance. When you wear a VOLUMENZEIT watch, you're not just telling time—you're making a statement about who you are and what you value.
                </p>
                <Link
                  href="/brand"
                  className="inline-block bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 hover:from-gray-900 hover:via-gray-800 hover:to-black text-white px-10 py-4 rounded-xl font-black text-lg shadow-2xl transition-all transform hover:-translate-y-1 mt-6"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-black py-32 mt-40">
          <div className="container mx-auto px-8 text-center">
            <div className="inline-block p-6 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-full mb-8 shadow-2xl animate-bounce-slow">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-4xl font-black text-white mb-4">
              Time Never Stops
            </h3>
            <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
              Neither should your style. Discover timepieces that define excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
