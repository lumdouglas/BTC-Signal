import Link from "next/link";
import LivePriceTicker from "@/components/ui/LivePriceTicker";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-brand-base pt-16 pb-8">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-end space-x-1 h-6 mb-6">
                            <div className="w-2 h-3 bg-brand-orange"></div>
                            <div className="w-2 h-4 bg-brand-orange"></div>
                            <div className="w-2 h-6 bg-brand-orange"></div>
                        </div>
                        <p className="font-sans text-[#999] text-sm max-w-sm mb-6">
                            Hardware designed for those with conviction. Live crypto prices on your chest.
                        </p>
                        <div className="flex items-center space-x-4">
                            <span className="font-mono text-xs text-text-secondary bg-white/5 px-3 py-1 border border-white/10 flex items-center">
                                <span className="w-2 h-2 rounded-full bg-success animate-pulse mr-2"></span>
                                SIGNAL NETWORK // ONLINE
                            </span>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-mono text-white text-sm mb-6 uppercase tracking-widest">Hardware</h4>
                        <ul className="space-y-4 text-sm font-sans text-[#999]">
                            <li><Link href="/shop" className="hover:text-white transition-colors">Shop All</Link></li>
                            <li><Link href="/technology" className="hover:text-white transition-colors">Technology</Link></li>
                            <li><Link href="/build" className="hover:text-white transition-colors">Build Process</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-mono text-white text-sm mb-6 uppercase tracking-widest">Account</h4>
                        <ul className="space-y-4 text-sm font-sans text-[#999]">
                            <li><Link href="/account/dashboard" className="hover:text-white transition-colors">My Dashboard</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/collective" className="hover:text-brand-green mix-blend-screen transition-colors">The Collective</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between">
                    <p className="font-mono text-xs text-[#666] mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} SIGNAL APPAREL LLC // EST. 2025
                    </p>
                    <div className="flex items-center space-x-6">
                        <LivePriceTicker coin="bitcoin" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
