"use client";

import { features, steps } from '@/utils';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import Link from 'next/link';
import React from 'react';

const Home = () => {

  const { getUser } = useKindeBrowserClient();
  const user = getUser();

  const getStartedUrl = user ? "/dashboard/bookings/new" : "/api/auth/login";
  const getStartedText = user ? "Book Container" : "Get Started →";

  return (
    <main className=' bg-brick-bg bg-brick-pattern bg-repeat'>
      {/* Hero Section (Gradient + Glass Morphism) */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 bg-gradient-to-br from-blue-600 to-cyan-500 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-20 w-40 h-40 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-10 right-20 w-60 h-60 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>

        <div className="relative max-w-4xl backdrop-blur-sm bg-white/10 p-12 rounded-3xl border border-white/20 shadow-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Smart, Secure, and <span className="text-amber-300">Seamless</span> Shipment Management
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8 text-blue-100">
            Track, manage, and optimize your container shipments with military-grade precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={getStartedUrl}>
              <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
                {getStartedText}
              </button>
            </Link>
            <a href="#features" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition">
              See Features
            </a>
          </div>
        </div>
      </section>

      {/* Features Section (Card Grid) */}
      <section id="features" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold tracking-widest">WHY CHOOSE US</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Logistics Reinvented
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.id}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 mb-6 rounded-lg bg-blue-100 flex items-center justify-center">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-cyan-600 text-white rounded-2xl">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
            <div className="text-blue-100 text-3xl font-bold">On-Time Delivery</div>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
            <div className="text-blue-100 text-3xl font-bold">Real-Time Tracking</div>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
            <div className="text-blue-100 text-3xl font-bold">Global <br /> Ports</div>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-bold mb-2">10k+</div>
            <div className="text-blue-100 text-3xl font-bold">Containers Moved</div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-emerald-600 font-bold tracking-widest">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-800">
            Ship in <span className="text-blue-600">4 Simple Steps</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline connector */}
          <div className="hidden md:block absolute top-16 left-1/2 h-2 bg-gradient-to-r from-blue-500 to-emerald-500 w-full -translate-x-1/2"></div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div
                key={s.step}
                className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 z-10"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {s.step}
                </div>
                <div className="text-xl font-bold mt-6 mb-3 text-gray-800">{s.label}</div>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-t-3xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Logistics?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Join thousands of businesses shipping smarter with our platform.
          </p>
          <Link href={getStartedUrl}>
            <button className="bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform">
              Start Shipping Today
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;