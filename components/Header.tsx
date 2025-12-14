'use client';

import Link from 'next/link';
import { ShoppingCart, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-lg border-b-2 border-gray-300 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex flex-col group">
            <h1 className="text-5xl font-black tracking-wider bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              VOLUMENZEIT
            </h1>
            <p className="text-sm tracking-widest text-gray-500 group-hover:text-gray-800 transition-colors font-semibold mt-1">VOLUMETRIC WRIST WATCHES</p>
          </Link>

          <nav className="hidden md:flex items-center divide-x-2 divide-gray-300">
            <Link href="/watches" className="relative text-xl text-gray-700 hover:text-gray-900 transition-all font-bold group px-8 py-2">
              Watches
              <span className="absolute -bottom-2 left-8 right-8 w-0 h-1 bg-gradient-to-r from-gray-800 to-gray-900 group-hover:w-[calc(100%-4rem)] transition-all duration-300 rounded-full"></span>
            </Link>
            <Link href="/accessories" className="relative text-xl text-gray-600 hover:text-gray-900 transition-all font-bold group px-8 py-2">
              Accessories
              <span className="absolute -bottom-2 left-8 right-8 w-0 h-1 bg-gradient-to-r from-gray-800 to-gray-900 group-hover:w-[calc(100%-4rem)] transition-all duration-300 rounded-full"></span>
            </Link>
            <Link href="/jewelry" className="relative text-xl text-gray-600 hover:text-gray-900 transition-all font-bold group px-8 py-2">
              Jewelry
              <span className="absolute -bottom-2 left-8 right-8 w-0 h-1 bg-gradient-to-r from-gray-800 to-gray-900 group-hover:w-[calc(100%-4rem)] transition-all duration-300 rounded-full"></span>
            </Link>
            <Link href="/brand" className="relative text-xl text-gray-600 hover:text-gray-900 transition-all font-bold group px-8 py-2">
              Brand
              <span className="absolute -bottom-2 left-8 right-8 w-0 h-1 bg-gradient-to-r from-gray-800 to-gray-900 group-hover:w-[calc(100%-4rem)] transition-all duration-300 rounded-full"></span>
            </Link>
          </nav>

          <div className="flex items-center space-x-5">
            <div className="relative group">
              <Link
                href="/design"
                className="block bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 hover:from-gray-900 hover:via-gray-800 hover:to-black text-white px-8 py-3.5 rounded-xl font-black text-base transition-all shadow-xl shadow-gray-900/40 hover:shadow-2xl hover:shadow-gray-900/50 transform hover:-translate-y-1 hover:scale-105"
              >
                Design your watch
              </Link>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                <Link
                  href="/login"
                  className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-bold transition-all"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-bold transition-all border-t border-gray-200"
                >
                  Sign Up
                </Link>
              </div>
            </div>
            <Link href="/profile" className="text-gray-700 hover:text-gray-900 transition-all transform hover:scale-125 p-3 hover:bg-gray-100 rounded-xl">
              <User className="w-8 h-8" />
            </Link>
            <Link href="/cart" className="relative text-gray-700 hover:text-gray-900 transition-all transform hover:scale-125 p-3 hover:bg-gray-100 rounded-xl">
              <ShoppingCart className="w-8 h-8" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-sm w-6 h-6 flex items-center justify-center rounded-full font-black shadow-xl animate-pulse">
                2
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
