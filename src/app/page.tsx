import Image from "next/image";
import Header from "@/components/layout/Header";
import PixelArtDisplay from "@/components/ui/PixelArtDisplay";
import LivePriceTicker from "@/components/ui/LivePriceTicker";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-base flex flex-col relative overflow-hidden">
      <Header />

      {/* Hero Section — "THE SIGNAL" */}
      <section className="relative w-full min-h-screen pt-20 flex items-center">
        {/* Full Viewport CRT Overlay */}
        <div className="absolute inset-0 crt-overlay pointer-events-none z-10" />

        <div className="max-w-[1280px] mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-12 gap-6 relative z-20">

          {/* Left Column - 60% (7 cols) */}
          <div className="md:col-span-7 flex flex-col justify-center order-2 md:order-1 pt-12 md:pt-0">
            <div className="mb-4">
              <span className="font-mono text-brand-green text-xs tracking-[0.15em] uppercase border border-brand-green/30 px-2 py-1 bg-brand-green/5">
                [ WEARABLE HARDWARE // SERIES 001 ]
              </span>
            </div>

            <h1 className="font-plex-mono text-[48px] md:text-[72px] leading-[0.9] text-white font-bold mb-6 tracking-tight glitch-text relative">
              <span className="block">YOUR CONVICTION.</span>
              <span className="block text-brand-secondary/80">ON YOUR CHEST.</span>
            </h1>

            <p className="font-sans text-[#999999] text-[18px] max-w-[480px] leading-relaxed mb-10">
              Live Bitcoin price. Cellular data. No phone required. Real-time, always on.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <button className="bg-brand-orange text-black font-mono font-bold h-[52px] px-8 hover:bg-white transition-colors duration-300">
                [ ACQUIRE ]
              </button>
              <button className="border border-white/20 text-white font-mono h-[52px] px-8 hover:border-white hover:bg-white/5 transition-colors duration-300">
                [ HOW IT WORKS &rarr; ]
              </button>
            </div>

            <div className="border-t border-white/10 pt-6">
              <LivePriceTicker coin="bitcoin" />
            </div>
          </div>

          {/* Right Column - 40% (5 cols) - Boy walking video representation */}
          <div className="md:col-span-5 relative h-[500px] md:h-[700px] w-full order-1 md:order-2 self-center rounded-sm overflow-hidden group border border-white/5 shadow-2xl">
            {/* The underlying "video" poster image */}
            <Image
              src="/hero-video-poster.png"
              alt="Young boy wearing BTC hat walking in dark moody street"
              fill
              className="object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 grayscale brightness-75 contrast-125"
              priority
            />

            {/* Dark gradient to blend the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-base via-transparent to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-brand-base z-10"></div>

            {/* The flashing LED matrix on the shirt */}
            <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full flex justify-center perspective-[1000px]">
              <div className="transform rotate-x-6 rotate-y-[-10deg]">
                <PixelArtDisplay
                  text="$169,420"
                  animate={true}
                  color="#F7931A" // Use Bitcoin orange for the vibe
                  className="scale-75 md:scale-100 drop-shadow-[0_0_20px_rgba(247,147,26,0.5)]"
                />
              </div>
            </div>

            {/* Technical Annotations */}
            <div className="absolute top-[20%] right-[-10%] z-20 hidden md:block opacity-60 hover:opacity-100 transition-opacity">
              <div className="font-mono text-[10px] text-white bg-black/80 px-2 py-1 border border-white/20">GPIO 23 // DATA</div>
              <div className="h-px w-16 bg-white/20 absolute right-full top-1/2"></div>
            </div>

            <div className="absolute bottom-[20%] left-[-10%] z-20 hidden md:block opacity-60 hover:opacity-100 transition-opacity">
              <div className="font-mono text-[10px] text-brand-green bg-black/80 px-2 py-1 border border-brand-green/30">CAT-M1 // CELLULAR</div>
              <div className="h-px w-24 bg-brand-green/30 absolute left-full top-1/2"></div>
            </div>
          </div>

        </div>

        <div className="absolute bottom-8 left-0 right-0 text-center animate-bounce z-20">
          <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase">
            &#9660; Scroll
          </span>
        </div>
      </section>

      {/* Section 2 — "THE PROBLEM" */}
      <section className="py-32 border-t border-white/5 relative z-20 bg-brand-base">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <span className="font-mono text-xs tracking-[0.15em] text-[#666] mb-8 block">
            [ SIGNAL VS NOISE ]
          </span>
          <h2 className="font-plex-mono text-3xl md:text-5xl font-bold mb-12">
            Everyone talks about Bitcoin.<br />
            <span className="text-brand-orange">You wear the proof.</span>
          </h2>
          <div className="space-y-6 text-[#999] font-sans text-lg mb-20 leading-relaxed text-left max-w-[600px] mx-auto">
            <p>
              In a sea of noise, conviction is quiet but unmistakable. We built the Series 001 not as a t-shirt, but as a hardware broadcast node.
            </p>
            <p>
              Whether you're stacking sats or building the infrastructure of the future, the Signal Apparel Matrix is the ultimate proof of work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-white/5">
            <div className="flex flex-col items-center">
              <span className="font-jetbrains text-4xl font-bold text-white mb-2">256</span>
              <span className="font-mono text-xs text-[#666] uppercase tracking-widest">LED pixels</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-jetbrains text-4xl font-bold text-white mb-2">60s</span>
              <span className="font-mono text-xs text-[#666] uppercase tracking-widest">Update interval</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-jetbrains text-4xl font-bold text-white mb-2">6hr</span>
              <span className="font-mono text-xs text-[#666] uppercase tracking-widest">Battery life</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
