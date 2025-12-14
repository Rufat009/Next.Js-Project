'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DesignPage() {
  const [selectedCase, setSelectedCase] = useState('stainless-steel');
  const [selectedDial, setSelectedDial] = useState('black');
  const [selectedStrap, setSelectedStrap] = useState('leather-black');
  const [selectedSize, setSelectedSize] = useState('42mm');
  const [selectedMovement, setSelectedMovement] = useState('automatic');

  const caseOptions = [
    { id: 'stainless-steel', name: 'Stainless Steel', price: 0, color: '#C0C0C0' },
    { id: 'rose-gold', name: 'Rose Gold', price: 500, color: '#B76E79' },
    { id: 'yellow-gold', name: 'Yellow Gold', price: 800, color: '#FFD700' },
    { id: 'titanium', name: 'Titanium', price: 300, color: '#878681' },
    { id: 'black-pvd', name: 'Black PVD', price: 200, color: '#1a1a1a' },
  ];

  const dialOptions = [
    { id: 'black', name: 'Black', color: '#000000' },
    { id: 'white', name: 'White', color: '#FFFFFF' },
    { id: 'blue', name: 'Blue', color: '#1E3A8A' },
    { id: 'green', name: 'Green', color: '#065F46' },
    { id: 'silver', name: 'Silver', color: '#D1D5DB' },
    { id: 'burgundy', name: 'Burgundy', color: '#7C2D12' },
  ];

  const strapOptions = [
    { id: 'leather-black', name: 'Black Leather', price: 0, color: '#1a1a1a' },
    { id: 'leather-brown', name: 'Brown Leather', price: 0, color: '#8B4513' },
    { id: 'metal-silver', name: 'Silver Bracelet', price: 200, color: '#C0C0C0' },
    { id: 'metal-gold', name: 'Gold Bracelet', price: 400, color: '#FFD700' },
    { id: 'rubber-black', name: 'Black Rubber', price: 50, color: '#000000' },
    { id: 'nato-blue', name: 'Blue NATO', price: 30, color: '#1E40AF' },
  ];

  const sizeOptions = [
    { id: '38mm', name: '38mm', price: -200 },
    { id: '40mm', name: '40mm', price: -100 },
    { id: '42mm', name: '42mm', price: 0 },
    { id: '44mm', name: '44mm', price: 100 },
    { id: '46mm', name: '46mm', price: 200 },
  ];

  const movementOptions = [
    { id: 'quartz', name: 'Quartz', price: -500, description: 'Battery-powered, accurate and low maintenance' },
    { id: 'automatic', name: 'Swiss Automatic', price: 0, description: 'Self-winding mechanical movement' },
    { id: 'manual', name: 'Manual Wind', price: 300, description: 'Traditional hand-wound mechanical' },
    { id: 'chronograph', name: 'Chronograph', price: 800, description: 'Stopwatch functionality' },
  ];

  const basePrice = 2499;
  const calculateTotal = () => {
    let total = basePrice;
    const selectedCaseOption = caseOptions.find(c => c.id === selectedCase);
    const selectedStrapOption = strapOptions.find(s => s.id === selectedStrap);
    const selectedSizeOption = sizeOptions.find(s => s.id === selectedSize);
    const selectedMovementOption = movementOptions.find(m => m.id === selectedMovement);
    
    if (selectedCaseOption) total += selectedCaseOption.price;
    if (selectedStrapOption) total += selectedStrapOption.price;
    if (selectedSizeOption) total += selectedSizeOption.price;
    if (selectedMovementOption) total += selectedMovementOption.price;
    
    return total;
  };

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
        <div className="py-20 overflow-hidden">
          <div className="container mx-auto px-8">
            <h1 className="text-7xl font-black text-white text-center tracking-wider drop-shadow-2xl animate-fade-in mb-6">
              Build Your Watch
            </h1>
            <p className="text-2xl text-white/80 text-center font-medium max-w-3xl mx-auto">
              Create your perfect timepiece with our customization tool
            </p>
          </div>
        </div>

        <div className="container mx-auto px-8 pb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/60 p-12 relative overflow-hidden sticky top-8">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 animate-gradient"></div>
              
              <h2 className="text-3xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-8 text-center">
                Your Custom Watch
              </h2>

              <div className="h-48 w-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center mb-8 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-32 h-32 rounded-full border-[8px] shadow-2xl"
                    style={{ 
                      borderColor: caseOptions.find(c => c.id === selectedCase)?.color,
                      backgroundColor: dialOptions.find(d => d.id === selectedDial)?.color
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center relative">
                      <div className="absolute top-1/2 left-1/2 w-2 h-24 bg-gray-900 origin-bottom -translate-x-1/2 -translate-y-full" style={{ transform: 'translate(-50%, -100%) rotate(45deg)' }}></div>
                      <div className="absolute top-1/2 left-1/2 w-2 h-32 bg-gray-900 origin-bottom -translate-x-1/2 -translate-y-full" style={{ transform: 'translate(-50%, -100%) rotate(180deg)' }}></div>
                      <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gray-900 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  </div>
                </div>
                <div 
                  className="absolute bottom-8 w-64 h-8 rounded-full"
                  style={{ backgroundColor: strapOptions.find(s => s.id === selectedStrap)?.color }}
                ></div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-black text-gray-900 mb-4">Configuration Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-bold">Case Material:</span>
                    <span className="text-gray-900 font-black">{caseOptions.find(c => c.id === selectedCase)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-bold">Dial Color:</span>
                    <span className="text-gray-900 font-black">{dialOptions.find(d => d.id === selectedDial)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-bold">Strap:</span>
                    <span className="text-gray-900 font-black">{strapOptions.find(s => s.id === selectedStrap)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-bold">Size:</span>
                    <span className="text-gray-900 font-black">{selectedSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-bold">Movement:</span>
                    <span className="text-gray-900 font-black">{movementOptions.find(m => m.id === selectedMovement)?.name}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold text-xl">Total Price:</span>
                  <span className="text-white font-black text-4xl">${calculateTotal().toLocaleString()}</span>
                </div>
              </div>

              <Link
                href="/cart"
                className="block w-full text-center bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 hover:from-gray-900 hover:via-gray-800 hover:to-black text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl transition-all transform hover:scale-105"
              >
                Add to Cart
              </Link>
            </div>

            <div className="space-y-8">
              <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/60 p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 animate-gradient"></div>
                
                <h3 className="text-2xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-6">
                  Case Material
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {caseOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedCase(option.id)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedCase === option.id
                          ? 'border-gray-900 bg-gray-100'
                          : 'border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      <div 
                        className="w-12 h-12 rounded-full mx-auto mb-3 shadow-lg"
                        style={{ backgroundColor: option.color }}
                      ></div>
                      <div className="text-sm font-bold text-gray-900">{option.name}</div>
                      <div className="text-xs text-gray-600 font-semibold">
                        {option.price > 0 ? `+$${option.price}` : 'Included'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/60 p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 animate-gradient"></div>
                
                <h3 className="text-2xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-6">
                  Dial Color
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {dialOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedDial(option.id)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedDial === option.id
                          ? 'border-gray-900 bg-gray-100'
                          : 'border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      <div 
                        className="w-12 h-12 rounded-full mx-auto mb-3 shadow-lg border border-gray-300"
                        style={{ backgroundColor: option.color }}
                      ></div>
                      <div className="text-sm font-bold text-gray-900">{option.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/60 p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 animate-gradient"></div>
                
                <h3 className="text-2xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-6">
                  Strap / Bracelet
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {strapOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedStrap(option.id)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedStrap === option.id
                          ? 'border-gray-900 bg-gray-100'
                          : 'border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      <div 
                        className="w-full h-8 rounded-lg mx-auto mb-3 shadow-lg"
                        style={{ backgroundColor: option.color }}
                      ></div>
                      <div className="text-sm font-bold text-gray-900">{option.name}</div>
                      <div className="text-xs text-gray-600 font-semibold">
                        {option.price > 0 ? `+$${option.price}` : 'Included'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/60 p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 animate-gradient"></div>
                
                <h3 className="text-2xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-6">
                  Case Size
                </h3>
                <div className="grid grid-cols-5 gap-3">
                  {sizeOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedSize(option.id)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedSize === option.id
                          ? 'border-gray-900 bg-gray-100'
                          : 'border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      <div className="text-lg font-black text-gray-900">{option.name}</div>
                      <div className="text-xs text-gray-600 font-semibold">
                        {option.price > 0 ? `+$${option.price}` : option.price < 0 ? `$${option.price}` : ''}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/60 p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 animate-gradient"></div>
                
                <h3 className="text-2xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-6">
                  Movement Type
                </h3>
                <div className="space-y-3">
                  {movementOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedMovement(option.id)}
                      className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                        selectedMovement === option.id
                          ? 'border-gray-900 bg-gray-100'
                          : 'border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="text-lg font-black text-gray-900">{option.name}</div>
                        <div className="text-sm text-gray-600 font-bold">
                          {option.price > 0 ? `+$${option.price}` : option.price < 0 ? `$${option.price}` : 'Included'}
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 font-medium">{option.description}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/60 p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 animate-gradient"></div>
            
            <h2 className="text-4xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-8 text-center">
              About Custom Watch Building
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Craftsmanship Excellence</h3>
                <p className="text-gray-600 font-medium leading-relaxed mb-4">
                  Each custom watch is meticulously handcrafted by our master watchmakers in Switzerland. Your unique configuration is assembled with the same precision and attention to detail as our finest luxury timepieces.
                </p>
                <p className="text-gray-600 font-medium leading-relaxed">
                  We use only premium materials sourced from certified suppliers. Every component undergoes rigorous quality control to ensure your custom watch meets the highest standards of excellence.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Production Timeline</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gray-700 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="text-gray-900 font-bold">Week 1-2:</span>
                      <span className="text-gray-600 font-medium"> Component sourcing and preparation</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gray-700 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="text-gray-900 font-bold">Week 3-4:</span>
                      <span className="text-gray-600 font-medium"> Assembly and movement installation</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gray-700 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="text-gray-900 font-bold">Week 5-6:</span>
                      <span className="text-gray-600 font-medium"> Quality testing and certification</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gray-700 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="text-gray-900 font-bold">Week 7-8:</span>
                      <span className="text-gray-600 font-medium"> Final packaging and delivery</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-black text-gray-900 mb-4">Warranty & Service</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-black text-gray-900 mb-2">5 Years</div>
                  <div className="text-gray-600 font-bold">International Warranty</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-gray-900 mb-2">Lifetime</div>
                  <div className="text-gray-600 font-bold">Free Service & Adjustments</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-gray-900 mb-2">30 Days</div>
                  <div className="text-gray-600 font-bold">Return Policy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-black py-20">
          <div className="container mx-auto px-8 text-center">
            <h3 className="text-4xl font-black text-white mb-4">
              Need Help with Your Design?
            </h3>
            <p className="text-lg text-gray-400 font-medium max-w-2xl mx-auto mb-8">
              Our watch specialists are available to guide you through the customization process.
            </p>
            <Link
              href="/profile"
              className="inline-block bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 hover:from-gray-900 hover:via-gray-800 hover:to-black text-white px-10 py-4 rounded-xl font-bold text-base shadow-2xl transition-all transform hover:-translate-y-1"
            >
              Contact a Specialist
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
