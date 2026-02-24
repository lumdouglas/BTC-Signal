"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  // Detect when user scrolls down to reveal the payment button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-[150vh] bg-black relative cursor-default overflow-x-hidden">
      {/* 
        Fixed Background Video
      */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <div className="absolute inset-0 z-10 crt-overlay pointer-events-none" />

        {/* Deep vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-x from-black/60 via-transparent to-black/60 z-10" />

        <div className="relative w-full h-full bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-all duration-700 ease-in-out ${scrolled ? "grayscale" : "grayscale-0"
              }`}
          >
            <source src="/hero-video-website.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Hero Content (Fades out immediately on scroll) */}
      <div
        className={`fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-end pb-12 z-20 pointer-events-none transition-opacity duration-300 ease-out ${scrolled ? "opacity-0" : "opacity-100"
          }`}
      >
        <div className="animate-bounce flex flex-col items-center space-y-3 opacity-60">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>

      {/* Scrollable Content Area: Purely the checkout button */}
      <div className="relative z-30 pt-[75vh] pb-32 w-full flex flex-col items-center justify-center px-6 pointer-events-none">
        <div className={`transition-all duration-700 pointer-events-auto transform ${scrolled ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <a
            href="https://commerce.coinbase.com/checkout"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-black hover:bg-[#111] text-white border border-white/20 font-mono text-sm tracking-widest h-16 px-12 transition-all duration-300 hover:border-brand-orange hover:shadow-[0_0_20px_rgba(247,147,26,0.2)]"
          >
            <span className="flex items-center space-x-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="white" />
                <path d="M12 4.54541C16.1158 4.54541 19.4546 7.88414 19.4546 12C19.4546 16.1158 16.1158 19.4546 12 19.4546C7.88414 19.4546 4.54541 16.1158 4.54541 12C4.54541 7.88414 7.88414 4.54541 12 4.54541Z" fill="black" />
                <rect x="10.5" y="7" width="3" height="10" rx="1" fill="white" />
              </svg>
              <span>PAY WITH CRYPTO</span>
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
