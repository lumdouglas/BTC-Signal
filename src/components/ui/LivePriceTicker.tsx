"use client";

import { useEffect, useState } from "react";

export default function LivePriceTicker({ coin = "bitcoin" }: { coin?: string }) {
    const [price, setPrice] = useState<number | null>(null);
    const [change, setChange] = useState<number | null>(null);
    const [flashing, setFlashing] = useState(false);

    useEffect(() => {
        const fetchPrice = async () => {
            try {
                const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd&include_24hr_change=true`);
                const data = await res.json();

                if (data[coin]) {
                    const newPrice = data[coin].usd;
                    setPrice(prev => {
                        if (prev !== null && prev !== newPrice) {
                            setFlashing(true);
                            setTimeout(() => setFlashing(false), 500);
                        }
                        return newPrice;
                    });
                    setChange(data[coin].usd_24h_change);
                }
            } catch (err) {
                console.error("Failed to fetch live price", err);
            }
        };

        fetchPrice();
        const interval = setInterval(fetchPrice, 60000);
        return () => clearInterval(interval);
    }, [coin]);

    if (price === null) {
        return <span className="font-jetbrains text-brand-green animate-pulse">CONNECTING...</span>;
    }

    const isUp = change ? change >= 0 : true;

    return (
        <div className={`flex items-center space-x-2 font-jetbrains transition-colors duration-200 ${flashing ? 'text-white' : 'text-brand-green'}`}>
            <span>{coin === 'bitcoin' ? 'BTC' : 'ETH'}</span>
            <span>${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            <span className={isUp ? 'text-success' : 'text-danger'}>
                {isUp ? '▲' : '▼'} {Math.abs(change || 0).toFixed(2)}%
            </span>
            <span className="w-2 h-4 bg-brand-green animate-pulse inline-block ml-1"></span>
        </div>
    );
}
