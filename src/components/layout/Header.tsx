import Link from "next/link";
import LivePriceTicker from "@/components/ui/LivePriceTicker";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-brand-base/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">

                <div className="flex items-center space-x-8">
                    <Link href="/" className="flex items-center space-x-2 group">
                        {/* Logo Mark: Pixel Art Signal Waveform */}
                        <div className="flex items-end space-x-1 h-5">
                            <div className="w-1.5 h-2 bg-brand-orange group-hover:h-3 transition-all"></div>
                            <div className="w-1.5 h-3 bg-brand-orange group-hover:h-4 transition-all delay-75"></div>
                            <div className="w-1.5 h-5 bg-brand-orange group-hover:h-5 transition-all delay-150"></div>
                        </div>
                        <span className="font-mono font-bold tracking-widest text-sm">SIGNAL</span>
                    </Link>

                    <nav className="hidden md:flex items-center space-x-6">
                        <Link href="/shop" className="text-sm font-mono text-text-secondary hover:text-brand-green transition-colors">/SHOP</Link>
                        <Link href="/technology" className="text-sm font-mono text-text-secondary hover:text-brand-green transition-colors">/TECHNOLOGY</Link>
                        <Link href="/build" className="text-sm font-mono text-text-secondary hover:text-brand-green transition-colors">/BUILD</Link>
                        <Link href="/collective" className="text-sm font-mono text-text-secondary hover:text-danger mix-blend-screen transition-colors">/COLLECTIVE</Link>
                    </nav>
                </div>

                <div className="flex items-center space-x-6">
                    <div className="hidden lg:block text-xs">
                        <LivePriceTicker coin="bitcoin" />
                    </div>
                    <Link href="/account/dashboard" className="text-sm font-mono text-text-secondary hover:text-white transition-colors">
                        [ ACCOUNT ]
                    </Link>
                    <Link href="/checkout" className="text-sm font-mono text-text-secondary hover:text-white transition-colors">
                        [ CART: 0 ]
                    </Link>
                </div>

            </div>
        </header>
    );
}
