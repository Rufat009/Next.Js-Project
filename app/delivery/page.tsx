'use client';

import Link from 'next/link';

export default function DeliveryPage() {
  const shippingOptions = [
    {
      title: "Standard Delivery",
      time: "5-7 Business Days",
      price: "Free",
      description: "Free shipping on all orders over $1,000. Perfect for non-urgent orders.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      )
    },
    {
      title: "Express Delivery",
      time: "2-3 Business Days",
      price: "$49",
      description: "Fast and reliable express shipping for your luxury timepieces.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Next Day Delivery",
      time: "1 Business Day",
      price: "$99",
      description: "Premium overnight shipping for urgent orders placed before 2 PM.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const internationalRegions = [
    { region: "Europe", time: "5-10 days", price: "$99" },
    { region: "Asia Pacific", time: "7-14 days", price: "$129" },
    { region: "Middle East", time: "6-12 days", price: "$119" },
    { region: "Latin America", time: "10-15 days", price: "$149" },
    { region: "Africa", time: "10-18 days", price: "$159" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-90"></div>
      
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(at 40% 20%, rgba(31, 41, 55, 0.3) 0px, transparent 50%),
                         radial-gradient(at 80% 0%, rgba(17, 24, 39, 0.3) 0px, transparent 50%),
                         radial-gradient(at 0% 50%, rgba(55, 65, 81, 0.3) 0px, transparent 50%),
                         radial-gradient(at 80% 50%, rgba(31, 41, 55, 0.3) 0px, transparent 50%)`
      }}></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
      </div>

      <div className="relative z-10">
        <div className="py-20 overflow-hidden">
          <div className="container mx-auto px-8">
            <h1 className="text-7xl font-black text-white text-center tracking-wider drop-shadow-2xl animate-fade-in mb-6">
              Shipping & Delivery
            </h1>
            <p className="text-2xl text-white/80 text-center font-medium max-w-3xl mx-auto">
              Fast, secure, and insured delivery worldwide
            </p>
          </div>
        </div>

        <div className="container mx-auto px-8 pb-20">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {shippingOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/60 p-8 relative overflow-hidden hover:shadow-gray-900/50 transition-all duration-300 group hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 animate-gradient"></div>
                
                <div className="text-gray-700 mb-6 group-hover:scale-110 transition-transform">
                  {option.icon}
                </div>

                <h3 className="text-2xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-2">
                  {option.title}
                </h3>
                
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-black text-gray-900">{option.price}</span>
                  <span className="text-lg text-gray-600 font-bold">/ {option.time}</span>
                </div>

                <p className="text-gray-600 font-medium leading-relaxed">
                  {option.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/60 p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 animate-gradient"></div>
              
              <h2 className="text-4xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-8">
                Track Your Order
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-lg">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-gray-900 mb-2">Order Confirmation</h4>
                    <p className="text-gray-600 font-medium">Receive instant email confirmation with tracking details</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-lg">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-gray-900 mb-2">Processing</h4>
                    <p className="text-gray-600 font-medium">Your watch is carefully packaged with premium materials</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-lg">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-gray-900 mb-2">In Transit</h4>
                    <p className="text-gray-600 font-medium">Real-time tracking updates via SMS and email</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-lg">4</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-gray-900 mb-2">Delivered</h4>
                    <p className="text-gray-600 font-medium">Signature required for secure delivery</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/60 p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 animate-gradient"></div>
              
              <h2 className="text-4xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-8">
                Secure Packaging
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <svg className="w-8 h-8 text-gray-700 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="text-xl font-black text-gray-900 mb-2">Premium Watch Box</h4>
                    <p className="text-gray-600 font-medium">Luxury presentation box included with every purchase</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-8 h-8 text-gray-700 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="text-xl font-black text-gray-900 mb-2">Protective Padding</h4>
                    <p className="text-gray-600 font-medium">Multi-layer cushioning for maximum protection</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-8 h-8 text-gray-700 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="text-xl font-black text-gray-900 mb-2">Tamper-Proof Seals</h4>
                    <p className="text-gray-600 font-medium">Security seals ensure authenticity and safety</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-8 h-8 text-gray-700 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="text-xl font-black text-gray-900 mb-2">Full Insurance</h4>
                    <p className="text-gray-600 font-medium">Every shipment fully insured up to $50,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/60 p-10 relative overflow-hidden mb-16">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 animate-gradient"></div>
            
            <h2 className="text-4xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-8 text-center">
              International Shipping
            </h2>

            <p className="text-gray-600 font-medium text-center mb-10 max-w-3xl mx-auto text-lg">
              We ship to over 100 countries worldwide. All international orders include customs documentation and are fully insured.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internationalRegions.map((region, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border-2 border-gray-200 hover:border-gray-400 transition-all"
                >
                  <h4 className="text-2xl font-black text-gray-900 mb-3">{region.region}</h4>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 font-bold">Delivery Time:</span>
                    <span className="text-gray-900 font-black">{region.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-bold">Shipping Cost:</span>
                    <span className="text-gray-900 font-black text-xl">{region.price}</span>
                  </div>
                </div>
              ))}
              
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border-2 border-gray-700 flex flex-col justify-center items-center text-center">
                <h4 className="text-2xl font-black text-white mb-3">Other Regions</h4>
                <p className="text-gray-300 font-medium mb-4">Custom shipping quotes available</p>
                <Link
                  href="/profile"
                  className="bg-white text-gray-900 px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/60 p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 animate-gradient"></div>
            
            <h2 className="text-4xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-8 text-center">
              Delivery Policy
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Returns & Exchanges</h3>
                <ul className="space-y-3 text-gray-600 font-medium">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-800 font-black mt-1">•</span>
                    30-day return policy on all purchases
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-800 font-black mt-1">•</span>
                    Free return shipping for defective items
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-800 font-black mt-1">•</span>
                    Easy exchange process for size adjustments
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-800 font-black mt-1">•</span>
                    Full refund or store credit available
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Customs & Duties</h3>
                <ul className="space-y-3 text-gray-600 font-medium">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-800 font-black mt-1">•</span>
                    All taxes and duties calculated at checkout
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-800 font-black mt-1">•</span>
                    No hidden fees or surprise charges
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-800 font-black mt-1">•</span>
                    DDP (Delivered Duty Paid) available
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-800 font-black mt-1">•</span>
                    Expert customs clearance assistance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-black py-20">
          <div className="container mx-auto px-8 text-center">
            <h3 className="text-4xl font-black text-white mb-4">
              Questions About Shipping?
            </h3>
            <p className="text-lg text-gray-400 font-medium max-w-2xl mx-auto mb-8">
              Our customer service team is here to help with any delivery inquiries.
            </p>
            <Link
              href="/profile"
              className="inline-block bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 hover:from-gray-900 hover:via-gray-800 hover:to-black text-white px-10 py-4 rounded-xl font-bold text-base shadow-2xl transition-all transform hover:-translate-y-1"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
