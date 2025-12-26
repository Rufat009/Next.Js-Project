'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-slate-900 flex items-center justify-center z-50">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-90"></div>
      
      <div className="absolute inset-0 w-full h-full" style={{
        backgroundImage: `radial-gradient(at 40% 20%, rgba(31, 41, 55, 0.3) 0px, transparent 50%),
                         radial-gradient(at 80% 0%, rgba(17, 24, 39, 0.3) 0px, transparent 50%),
                         radial-gradient(at 0% 50%, rgba(55, 65, 81, 0.3) 0px, transparent 50%)`
      }}></div>
      
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
      </div>

      <div className="relative z-10 w-full px-8 py-20 overflow-y-auto max-h-screen">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          <div className="inline-block p-8 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-full mb-8 shadow-2xl shadow-gray-900/50 animate-bounce-slow">
            <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h1 className="text-5xl font-black bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent mb-6 drop-shadow-2xl tracking-tight">
            404
          </h1>
          
          <h2 className="text-3xl font-black text-white mb-6 drop-shadow-lg">
            Time Stopped Here
          </h2>
          
          <p className="text-xl text-white/80 font-semibold mb-4 max-w-2xl mx-auto">
            Oops! This page seems to have fallen out of time.
          </p>
          
          <p className="text-lg text-white/70 font-medium mb-12 max-w-2xl mx-auto">
            The page you're looking for doesn't exist or has been moved to another dimension of luxury.
          </p>

          <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/60 p-12 mb-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 animate-gradient"></div>
            
            <h3 className="text-xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-8">
              But Don't Worry, Time Waits for No One
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/"
                className="group p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-gray-200 hover:border-gray-400 transition-all hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h4 className="text-lg font-black text-gray-900 mb-2">Go Home</h4>
                <p className="text-sm text-gray-600 font-medium">Return to our homepage</p>
              </Link>

              <Link
                href="/watches"
                className="group p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-gray-200 hover:border-gray-400 transition-all hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-black text-gray-900 mb-2">Browse Watches</h4>
                <p className="text-sm text-gray-600 font-medium">Explore our collection</p>
              </Link>

              <Link
                href="/brand"
                className="group p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-gray-200 hover:border-gray-400 transition-all hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-black text-gray-900 mb-2">About Us</h4>
                <p className="text-sm text-gray-600 font-medium">Learn about VOLUMENZEIT</p>
              </Link>

              <Link
                href="/profile"
                className="group p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-gray-200 hover:border-gray-400 transition-all hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-black text-gray-900 mb-2">Contact Us</h4>
                <p className="text-sm text-gray-600 font-medium">Get in touch with us</p>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <Link
              href="/"
              className="group relative inline-block bg-white text-gray-900 hover:bg-gray-50 px-12 py-6 rounded-2xl font-black text-lg shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-3">
                <svg className="w-6 h-6 group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Homepage
              </span>
            </Link>

            <p className="text-white/60 font-medium text-base">
              Error Code: 404 | Page Not Found
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
