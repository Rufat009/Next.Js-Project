'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { email, password, rememberMe });
  };

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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h1 className="text-6xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4 tracking-tight">
                Welcome Back
              </h1>
              <p className="text-gray-600 font-semibold text-lg">Sign in to unlock your journey</p>
            </div>

            {}
            <div className="flex gap-2 mb-10 bg-gradient-to-r from-gray-100 via-gray-100 to-gray-100 p-2 rounded-2xl shadow-inner">
              <button
                onClick={() => setActiveTab('login')}
                className={cn(
                  'flex-1 py-4 text-base font-bold rounded-xl transition-all duration-300 relative overflow-hidden',
                  activeTab === 'login'
                    ? 'bg-gradient-to-r from-gray-700 via-gray-700 to-gray-800 text-white shadow-xl shadow-gray-700/50 transform scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/70'
                )}
              >
                <span className="relative z-10">Login</span>
                {activeTab === 'login' && (
                  <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                )}
              </button>
              <Link
                href="/register"
                className="flex-1 py-4 text-base font-bold rounded-xl transition-all duration-300 text-gray-600 hover:text-gray-900 hover:bg-white/70 flex items-center justify-center"
              >
                Sign Up
              </Link>
            </div>

            {}
            <form onSubmit={handleSubmit} className="space-y-7">
              {}
              <div className="group">
                <label className="block text-base font-bold text-gray-700 mb-3 group-focus-within:text-gray-700 transition-colors">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 py-4 text-base bg-white/80 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-gray-700/30 focus:border-gray-700 transition-all placeholder:text-gray-400 font-medium shadow-sm hover:shadow-md"
                    required
                  />
                </div>
              </div>

              {}
              <div className="group">
                <label className="block text-base font-bold text-gray-700 mb-3 group-focus-within:text-gray-700 transition-colors">
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

              {}
              <div className="flex items-center justify-between pt-2">
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-5 h-5 text-gray-700 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-gray-700 cursor-pointer transition-all"
                  />
                  <span className="text-base font-semibold text-gray-700 group-hover:text-gray-900">Remember me</span>
                </label>
                <a href="#" className="text-base font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent hover:from-gray-900 hover:to-black transition-all">
                  Forgot password?
                </a>
              </div>

              {}
              <button
                type="submit"
                className="group relative w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 hover:from-gray-900 hover:via-gray-800 hover:to-black text-white py-5 rounded-2xl font-black text-lg shadow-2xl shadow-gray-700/50 hover:shadow-gray-700/70 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Sign In Now
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </form>

            {}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              </div>
              <div className="relative flex justify-center text-base">
                <span className="px-4 bg-white/95 text-gray-600 font-bold">Or continue with</span>
              </div>
            </div>

            {}
            <div className="grid grid-cols-2 gap-4">
              <button className="group flex items-center justify-center space-x-2 px-4 py-5 bg-white border-2 border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1">
                <svg className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-base font-bold text-gray-700 group-hover:text-gray-900">Google</span>
              </button>
              <button className="group flex items-center justify-center space-x-2 px-4 py-5 bg-[#1877F2] rounded-2xl hover:bg-[#166FE5] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <svg className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-base font-black text-white drop-shadow-md">Facebook</span>
              </button>
            </div>
          </div>

          {}
          <div className="text-center mt-8">
            <p className="text-xl text-gray-700 font-semibold">
              Don't have an account?{' '}
              <Link href="/register" className="font-black text-2xl bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent hover:from-gray-900 hover:to-black transition-all hover:scale-105 inline-block">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
