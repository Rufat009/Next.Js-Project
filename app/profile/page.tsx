'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'orders' | 'contact'>('dashboard');

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-900">
      {}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 opacity-90"></div>
      
      {}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(at 40% 20%, rgba(31, 41, 55, 0.3) 0px, transparent 50%),
                         radial-gradient(at 80% 0%, rgba(17, 24, 39, 0.3) 0px, transparent 50%),
                         radial-gradient(at 0% 50%, rgba(55, 65, 81, 0.3) 0px, transparent 50%),
                         radial-gradient(at 80% 50%, rgba(31, 41, 55, 0.3) 0px, transparent 50%),
                         radial-gradient(at 0% 100%, rgba(17, 24, 39, 0.3) 0px, transparent 50%),
                         radial-gradient(at 80% 100%, rgba(31, 41, 55, 0.3) 0px, transparent 50%)`
      }}></div>
      
      {}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-gray-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '4s', animationDuration: '6s' }}></div>
        <div className="absolute top-1/2 right-10 w-72 h-72 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s', animationDuration: '5s' }}></div>
      </div>

      <div className="relative z-10">
        {}
        <div className="py-16 overflow-hidden">
          <div className="container mx-auto px-8">
            <h1 className="text-7xl font-black text-white text-center tracking-wider drop-shadow-2xl animate-fade-in">
              VOLUMENZEIT ACCOUNT
            </h1>
          </div>
        </div>

        {}
        <div className="container mx-auto px-8 mb-12">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-4 border-2 border-white/30 shadow-2xl">
            <div className="flex items-center justify-center divide-x-2 divide-white/20">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`relative flex-1 max-w-md py-6 px-8 text-2xl font-black rounded-2xl transition-all duration-300 overflow-hidden ${
                  activeTab === 'dashboard'
                    ? 'bg-white text-gray-900 shadow-2xl transform scale-105'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="relative z-10">Dashboard</span>
                {activeTab === 'dashboard' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-700/20 via-gray-700/20 to-gray-800/20 animate-shimmer"></div>
                )}
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`relative flex-1 max-w-md py-6 px-8 text-2xl font-black rounded-2xl transition-all duration-300 overflow-hidden ${
                  activeTab === 'orders'
                    ? 'bg-white text-gray-900 shadow-2xl transform scale-105'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="relative z-10">Order History</span>
                {activeTab === 'orders' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-700/20 via-gray-700/20 to-gray-800/20 animate-shimmer"></div>
                )}
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`relative flex-1 max-w-md py-6 px-8 text-2xl font-black rounded-2xl transition-all duration-300 overflow-hidden ${
                  activeTab === 'contact'
                    ? 'bg-white text-gray-900 shadow-2xl transform scale-105'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="relative z-10">Contact Us</span>
                {activeTab === 'contact' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-700/20 via-gray-700/20 to-gray-800/20 animate-shimmer"></div>
                )}
              </button>
            </div>
          </div>
        </div>

        {}
        <div className="container mx-auto px-8 pb-16">
          {activeTab === 'dashboard' && (
            <div className="max-w-full mx-auto animate-fade-in">
              {}
              <div className="text-center mb-12">
                <h2 className="text-6xl font-black bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-4 drop-shadow-lg">
                  Hey, John Smith
                </h2>
                <p className="text-2xl text-white/90 font-bold drop-shadow-md">
                  Welcome to your dashboard, your one-stop-shop for all your recent Volumenzeit account activity.
                </p>
              </div>

              {}
              <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl p-12 mb-8 border border-white/60 relative overflow-hidden hover:shadow-gray-700/50 transition-all">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gray-700 via-gray-700 via-gray-800 to-gray-800 animate-gradient"></div>
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-gray-700/10 to-gray-700/10 rounded-full blur-2xl"></div>
                
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-4xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                    Recent Orders
                  </h3>
                  <Link
                    href="/orders"
                    className="text-xl font-black bg-gradient-to-r from-gray-800 to-gray-700 bg-clip-text text-transparent hover:from-gray-900 hover:to-gray-800 transition-all hover:scale-105 inline-block"
                  >
                    View All orders →
                  </Link>
                </div>
                <div className="py-16 text-center">
                  <div className="inline-block p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-6">
                    <svg className="w-16 h-16 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <p className="text-2xl text-gray-500 font-bold">
                    You haven't placed any order yet.
                  </p>
                </div>
              </div>

              {}
              <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl p-12 border border-white/60 relative overflow-hidden hover:shadow-gray-700/50 transition-all">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gray-700 via-gray-700 via-gray-800 to-gray-800 animate-gradient"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-tr from-gray-800/10 to-gray-800/10 rounded-full blur-2xl"></div>
                
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-4xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                    My Info
                  </h3>
                  <Link
                    href="/profile/edit"
                    className="text-xl font-black bg-gradient-to-r from-gray-800 to-gray-700 bg-clip-text text-transparent hover:from-gray-900 hover:to-gray-800 transition-all hover:scale-105 inline-block"
                  >
                    Manage Info →
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
                    <h4 className="text-2xl font-black text-gray-800 mb-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-700 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      Contact Information
                    </h4>
                    <div className="space-y-3">
                      <p className="text-lg text-gray-700"><span className="font-black">Email:</span> <span className="font-semibold">john.smith@email.com</span></p>
                      <p className="text-lg text-gray-700"><span className="font-black">Phone:</span> <span className="font-semibold">+1 (555) 123-4567</span></p>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
                    <h4 className="text-2xl font-black text-gray-800 mb-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-800 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      Shipping Address
                    </h4>
                    <p className="text-lg text-gray-700 font-semibold leading-relaxed">
                      123 Main Street<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="max-w-full mx-auto animate-fade-in">
              <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/60 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gray-700 via-gray-700 via-gray-800 to-gray-800 animate-gradient"></div>
                
                <div className="text-center py-24 px-12">
                  <div className="inline-block p-10 bg-gradient-to-br from-gray-700 via-gray-700 to-gray-800 rounded-full mb-8 shadow-2xl shadow-gray-700/50 animate-bounce-slow">
                    <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h3 className="text-6xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-6">
                    No Orders Yet
                  </h3>
                  <p className="text-2xl text-gray-600 mb-10 font-bold">
                    Start shopping to see your order history here
                  </p>
                  <Link
                    href="/watches"
                    className="group relative inline-block bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 hover:from-gray-900 hover:via-gray-800 hover:to-black text-white px-12 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-gray-700/50 transition-all transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Browse Watches
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="max-w-full mx-auto animate-fade-in">
              <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl p-16 border border-white/60 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gray-700 via-gray-700 via-gray-800 to-gray-800 animate-gradient"></div>
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-gray-700/10 to-gray-700/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-tr from-gray-800/10 to-gray-800/10 rounded-full blur-2xl"></div>
                
                <div className="text-center mb-12 relative">
                  <div className="inline-block p-5 bg-gradient-to-br from-gray-700 via-gray-700 to-gray-800 rounded-3xl mb-6 shadow-2xl shadow-gray-700/50 animate-bounce-slow">
                    <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-6xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4 tracking-tight">
                    Get In Touch
                  </h3>
                  <p className="text-gray-600 font-semibold text-lg">We'd love to hear from you</p>
                </div>

                <form className="space-y-7">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    <div className="group">
                      <label className="block text-base font-bold text-gray-700 mb-3 group-focus-within:text-gray-700 transition-colors">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-6 py-4 text-base bg-white/80 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-gray-700/30 focus:border-gray-700 transition-all placeholder:text-gray-400 font-medium shadow-sm hover:shadow-md"
                        placeholder="John"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-base font-bold text-gray-700 mb-3 group-focus-within:text-gray-700 transition-colors">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-6 py-4 text-base bg-white/80 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-gray-700/30 focus:border-gray-700 transition-all placeholder:text-gray-400 font-medium shadow-sm hover:shadow-md"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-base font-bold text-gray-700 mb-3 group-focus-within:text-gray-700 transition-colors">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-6 py-4 text-base bg-white/80 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-gray-700/30 focus:border-gray-700 transition-all placeholder:text-gray-400 font-medium shadow-sm hover:shadow-md"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-base font-bold text-gray-700 mb-3 group-focus-within:text-gray-700 transition-colors">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-6 py-4 text-base bg-white/80 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-gray-700/30 focus:border-gray-700 transition-all placeholder:text-gray-400 font-medium shadow-sm hover:shadow-md"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-base font-bold text-gray-700 mb-3 group-focus-within:text-gray-700 transition-colors">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-6 py-4 text-base bg-white/80 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-gray-700/30 focus:border-gray-700 transition-all placeholder:text-gray-400 font-medium shadow-sm hover:shadow-md resize-none"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="group relative w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 hover:from-gray-900 hover:via-gray-800 hover:to-black text-white py-5 rounded-2xl font-black text-lg shadow-2xl shadow-gray-700/50 hover:shadow-gray-700/70 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Send Message
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
