'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { watches } from '@/data/watches';

export default function WatchDetailPage() {
  const params = useParams();
  const id = params.id;
  const { addToCart } = useCart();
  const [showNotification, setShowNotification] = useState(false);

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

  const handleAddToCart = () => {
    addToCart({
      id: watch.id,
      name: watch.name,
      price: watch.price,
      image: watch.image,
      category: watch.category
    });
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-900">
      {showNotification && (
        <div className="fixed top-20 sm:top-24 right-4 sm:right-8 z-50 bg-green-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-2xl animate-fade-in">
          <p className="font-bold text-sm sm:text-base">Added to cart!</p>
        </div>
      )}

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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
          <div className="mb-6 sm:mb-8">
            <Link href="/watches" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 text-sm sm:text-base">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Collection
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/60 overflow-hidden md:sticky md:top-8">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 animate-gradient"></div>
              <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                  <span className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                    {watch.category}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-3 sm:mb-4">
                  {watch.name}
                </h1>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
                  {watch.priceFormatted}
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
                  {watch.fullDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 hover:from-gray-900 hover:via-gray-800 hover:to-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-2xl transition-all transform hover:scale-105 text-center flex items-center justify-center"
                  >
                    Add to Cart
                  </button>
                  <Link
                    href="/delivery"
                    className="flex-1 bg-white hover:bg-gray-100 text-gray-900 border-2 border-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-2xl transition-all transform hover:scale-105 text-center flex items-center justify-center"
                  >
                    Delivery Info
                  </Link>
                </div>
              </div>

              {watch.specs && (
                <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/60 p-4 sm:p-6 lg:p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 animate-gradient"></div>
                  <h2 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4 sm:mb-6">
                    Technical Specifications
                  </h2>
                  <div className="space-y-3 sm:space-y-4">
                    {Object.entries(watch.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center border-b border-gray-200 pb-2 sm:pb-3 gap-4">
                        <span className="text-gray-600 font-semibold capitalize text-sm sm:text-base">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="text-gray-900 font-bold text-sm sm:text-base text-right">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/60 p-4 sm:p-6 lg:p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 animate-gradient"></div>
                <h2 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4 sm:mb-6">
                  What's Included
                </h2>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm sm:text-base">Premium watch box with certificate</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm sm:text-base">International warranty card</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm sm:text-base">User manual and care instructions</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm sm:text-base">Complimentary adjustment and servicing</span>
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
