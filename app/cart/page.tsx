'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const handleQuantityUpdate = (id: number, change: number) => {
    const item = cartItems.find(i => i.id === id);
    if (item) {
      updateQuantity(id, item.quantity + change);
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const calculateShipping = () => {
    return calculateSubtotal() > 5000 ? 0 : 49;
  };

  const calculateTax = () => {
    return Math.round(calculateSubtotal() * 0.1);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping() + calculateTax();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order placed successfully! Thank you for your purchase.');
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
        <div className="py-12 sm:py-16 lg:py-20 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white text-center tracking-wider drop-shadow-2xl animate-fade-in mb-4 sm:mb-6">
              Shopping Cart
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/80 text-center font-medium max-w-3xl mx-auto px-4">
              Complete your purchase
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
          {cartItems.length === 0 ? (
            <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/60 p-8 sm:p-12 lg:p-20 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4 sm:mb-6">Your Cart is Empty</h2>
              <p className="text-gray-600 font-medium text-base sm:text-lg mb-6 sm:mb-8">Add some watches to get started!</p>
              <Link
                href="/watches"
                className="inline-block bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 hover:from-gray-900 hover:via-gray-800 hover:to-black text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-2xl transition-all transform hover:scale-105"
              >
                Browse Collection
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/60 p-4 sm:p-6 lg:p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 animate-gradient"></div>
                  
                  <h2 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4 sm:mb-6">
                    Cart Items ({cartItems.length})
                  </h2>

                  <div className="space-y-3 sm:space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-3 sm:p-4 bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-gray-400 transition-all">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full sm:w-20 lg:w-24 h-48 sm:h-20 lg:h-24 object-cover rounded-xl"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="text-lg sm:text-xl font-black text-gray-900">{item.name}</h3>
                              <span className="text-xs sm:text-sm text-gray-600 font-bold">{item.category}</span>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-600 hover:text-red-800 transition-colors p-2 hover:bg-red-50 rounded-lg"
                            >
                              <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2 sm:gap-3 bg-white rounded-lg border-2 border-gray-300">
                              <button
                                onClick={() => handleQuantityUpdate(item.id, -1)}
                                className="p-1.5 sm:p-2 hover:bg-gray-100 transition-colors rounded-l-lg"
                              >
                                <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                              </button>
                              <span className="font-bold text-gray-900 min-w-[1.5rem] sm:min-w-[2rem] text-center text-sm sm:text-base">{item.quantity}</span>
                              <button
                                onClick={() => handleQuantityUpdate(item.id, 1)}
                                className="p-1.5 sm:p-2 hover:bg-gray-100 transition-colors rounded-r-lg"
                              >
                                <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                              </button>
                            </div>
                            <span className="text-xl sm:text-2xl font-black text-gray-900">
                              ${(item.price * item.quantity).toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/60 p-4 sm:p-6 lg:p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 animate-gradient"></div>
                  
                  <h2 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4 sm:mb-6">
                    Payment Information
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-gray-700 font-bold mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-gray-900 focus:outline-none font-medium"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-bold mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-gray-900 focus:outline-none font-medium"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-bold mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-gray-900 focus:outline-none font-medium"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-bold mb-2">Shipping Address *</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-gray-900 focus:outline-none font-medium"
                        placeholder="123 Main Street, Apt 4B"
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-gray-700 font-bold mb-2">City *</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-gray-900 focus:outline-none font-medium"
                          placeholder="New York"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-bold mb-2">ZIP Code *</label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-gray-900 focus:outline-none font-medium"
                          placeholder="10001"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-bold mb-2">Country *</label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-gray-900 focus:outline-none font-medium"
                          placeholder="USA"
                        />
                      </div>
                    </div>

                    <div className="border-t-2 border-gray-200 pt-6 mt-6">
                      <h3 className="text-2xl font-black text-gray-900 mb-6">Card Details</h3>
                      
                      <div className="space-y-6">
                        <div>
                          <label className="block text-gray-700 font-bold mb-2">Card Number *</label>
                          <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            required
                            maxLength={19}
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-gray-900 focus:outline-none font-medium"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>

                        <div>
                          <label className="block text-gray-700 font-bold mb-2">Cardholder Name *</label>
                          <input
                            type="text"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-gray-900 focus:outline-none font-medium"
                            placeholder="John Doe"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <label className="block text-gray-700 font-bold mb-2">Expiry Date *</label>
                            <input
                              type="text"
                              name="expiryDate"
                              value={formData.expiryDate}
                              onChange={handleInputChange}
                              required
                              maxLength={5}
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-gray-900 focus:outline-none font-medium"
                              placeholder="MM/YY"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 font-bold mb-2">CVV *</label>
                            <input
                              type="text"
                              name="cvv"
                              value={formData.cvv}
                              onChange={handleInputChange}
                              required
                              maxLength={4}
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-gray-900 focus:outline-none font-medium"
                              placeholder="123"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/60 p-8 relative overflow-hidden sticky top-8">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 animate-gradient"></div>
                  
                  <h2 className="text-3xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-bold">Subtotal:</span>
                      <span className="text-gray-900 font-black text-lg">${calculateSubtotal().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-bold">Shipping:</span>
                      <span className="text-gray-900 font-black text-lg">
                        {calculateShipping() === 0 ? 'Free' : `$${calculateShipping()}`}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-bold">Tax (10%):</span>
                      <span className="text-gray-900 font-black text-lg">${calculateTax().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl px-4">
                      <span className="text-white font-bold text-xl">Total:</span>
                      <span className="text-white font-black text-3xl">${calculateTotal().toLocaleString()}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 hover:from-gray-900 hover:via-gray-800 hover:to-black text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl transition-all transform hover:scale-105 mb-4"
                  >
                    Place Order
                  </button>

                  <Link
                    href="/watches"
                    className="block text-center text-gray-600 hover:text-gray-900 font-bold transition-colors"
                  >
                    Continue Shopping
                  </Link>

                  <div className="mt-8 pt-8 border-t-2 border-gray-200">
                    <h3 className="text-lg font-black text-gray-900 mb-4">We Accept</h3>
                    <div className="flex gap-3 flex-wrap">
                      <div className="bg-gray-100 px-4 py-2 rounded-lg font-bold text-sm text-gray-900 border-2 border-gray-300">
                        VISA
                      </div>
                      <div className="bg-gray-100 px-4 py-2 rounded-lg font-bold text-sm text-gray-900 border-2 border-gray-300">
                        Mastercard
                      </div>
                      <div className="bg-gray-100 px-4 py-2 rounded-lg font-bold text-sm text-gray-900 border-2 border-gray-300">
                        AMEX
                      </div>
                      <div className="bg-gray-100 px-4 py-2 rounded-lg font-bold text-sm text-gray-900 border-2 border-gray-300">
                        PayPal
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-gray-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h4 className="text-sm font-black text-gray-900 mb-1">Secure Payment</h4>
                        <p className="text-xs text-gray-600 font-medium">Your payment information is encrypted and secure</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
