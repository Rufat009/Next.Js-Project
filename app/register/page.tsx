'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

export default function RegisterPage() {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('register');
  const [subscribe, setSubscribe] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [month, setMonth] = useState('January');
  const [day, setDay] = useState('01');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { firstName, lastName, month, day, phone, email, password });
  };

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-slate-900">
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
      
      <div className="flex-1 flex items-center justify-center py-12 px-4 relative z-10">
        <div className="w-full max-w-4xl animate-fade-in">
          {}
          <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl p-16 border border-white/60 relative overflow-hidden">
            {}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gray-700 via-gray-700 via-gray-800 to-gray-800 animate-gradient"></div>
            
            {}
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-gray-700/10 to-gray-700/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-tr from-gray-800/10 to-gray-800/10 rounded-full blur-2xl"></div>
            
            {}
            <div className="text-center mb-10 relative">
              <div className="inline-block p-5 bg-gradient-to-br from-gray-700 via-gray-700 to-gray-800 rounded-3xl mb-6 shadow-2xl shadow-gray-700/50 animate-bounce-slow">
                <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h1 className="text-6xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4 tracking-tight">
                New to VOLUMENZEIT?
              </h1>
              <p className="text-gray-600 font-semibold text-lg">Create a new account</p>
            </div>

            {}
            <div className="flex gap-2 mb-10 bg-gradient-to-r from-gray-100 via-gray-100 to-gray-100 p-2 rounded-2xl shadow-inner">
              <Link 
                href="/login"
                className="flex-1 py-4 text-base font-bold rounded-xl transition-all duration-300 text-gray-600 hover:text-gray-900 hover:bg-white/70 text-center"
              >
                Login
              </Link>
              <button
                className="flex-1 py-4 text-base font-bold rounded-xl transition-all duration-300 relative overflow-hidden bg-gradient-to-r from-gray-700 via-gray-700 to-gray-800 text-white shadow-xl shadow-gray-700/50 transform scale-105"
              >
                <span className="relative z-10">Sign Up</span>
                <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
              </button>
            </div>

            {}
            <form onSubmit={handleSubmit} className="space-y-6">
              {}
              <div className="grid grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-base font-bold text-gray-700 mb-3">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-6 py-4 text-base bg-white/80 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-gray-700/30 focus:border-gray-700 transition-all placeholder:text-gray-400 font-medium shadow-sm hover:shadow-md"
                    required
                  />
                </div>
                <div className="group">
                  <label className="block text-base font-bold text-gray-700 mb-3">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-6 py-4 text-base bg-white/80 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-gray-700/30 focus:border-gray-700 transition-all placeholder:text-gray-400 font-medium shadow-sm hover:shadow-md"
                    required
                  />
                </div>
              </div>

              {}
              <div className="group">
                <label className="block text-base font-bold text-gray-700 mb-3">
                  Date of birth
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <select
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    className="w-full px-6 py-4 text-base bg-white/80 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-gray-700/30 focus:border-gray-700 transition-all font-medium shadow-sm hover:shadow-md appearance-none cursor-pointer"
                  >
                    {months.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                  <select
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    className="w-full px-6 py-4 text-base bg-white/80 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-gray-700/30 focus:border-gray-700 transition-all font-medium shadow-sm hover:shadow-md appearance-none cursor-pointer"
                  >
                    {days.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
              </div>

              {}
              <div className="group">
                <label className="block text-base font-bold text-gray-700 mb-3">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-6 py-4 text-base bg-white/80 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-gray-700/30 focus:border-gray-700 transition-all placeholder:text-gray-400 font-medium shadow-sm hover:shadow-md"
                  required
                />
              </div>

              {}
              <div className="grid grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-base font-bold text-gray-700 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 py-4 text-base bg-white/80 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-gray-700/30 focus:border-gray-700 transition-all placeholder:text-gray-400 font-medium shadow-sm hover:shadow-md"
                    required
                  />
                </div>
                <div className="group">
                  <label className="block text-base font-bold text-gray-700 mb-3">
                    Confirm Email
                  </label>
                  <input
                    type="email"
                    placeholder="confirm@email.com"
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
                    className="w-full px-6 py-4 text-base bg-white/80 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-gray-700/30 focus:border-gray-700 transition-all placeholder:text-gray-400 font-medium shadow-sm hover:shadow-md"
                    required
                  />
                </div>
              </div>

              {}
              <div className="grid grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-base font-bold text-gray-700 mb-3">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-6 pr-14 py-4 text-base bg-white/80 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-gray-700/30 focus:border-gray-700 transition-all placeholder:text-gray-400 font-medium shadow-sm hover:shadow-md"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-6 w-6" /> : <Eye className="h-6 w-6" />}
                    </button>
                  </div>
                </div>
                <div className="group">
                  <label className="block text-base font-bold text-gray-700 mb-3">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-6 pr-14 py-4 text-base bg-white/80 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-gray-700/30 focus:border-gray-700 transition-all placeholder:text-gray-400 font-medium shadow-sm hover:shadow-md"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="h-6 w-6" /> : <Eye className="h-6 w-6" />}
                    </button>
                  </div>
                </div>
              </div>

              {}
              <div className="flex items-center justify-center pt-2">
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={subscribe}
                    onChange={(e) => setSubscribe(e.target.checked)}
                    className="w-5 h-5 text-gray-700 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-gray-700 cursor-pointer transition-all"
                  />
                  <span className="text-base font-semibold text-gray-700 group-hover:text-gray-900">Sign-up to receive the latest updates and promotions</span>
                </label>
              </div>

              {}
              <button
                type="submit"
                className="group relative w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 hover:from-gray-900 hover:via-gray-800 hover:to-black text-white py-5 rounded-2xl font-black text-lg shadow-2xl shadow-gray-700/50 hover:shadow-gray-700/70 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Create Account
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </form>

            {}
            <div className="text-center mt-6">
              <p className="text-base text-gray-600">
                Already have an account?{' '}
                <Link href="/login" className="font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent hover:from-gray-900 hover:to-black transition-all">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
