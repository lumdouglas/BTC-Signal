"use client";

import { useEffect, useState } from "react";

interface PixelArtDisplayProps {
    text?: string;
    animate?: boolean;
    color?: string;
    className?: string;
}

export default function PixelArtDisplay({
    text = "$169,420",
    animate = true,
    color = "#00FF41", // Matrix green by default
    className = "",
}: PixelArtDisplayProps) {
    const [flicker, setFlicker] = useState(false);

    useEffect(() => {
        if (!animate) return;
        const interval = setInterval(() => {
            // Random flickering effect
            if (Math.random() > 0.8) {
                setFlicker(true);
                setTimeout(() => setFlicker(false), 50 + Math.random() * 100);
            }
        }, 2000);
        return () => clearInterval(interval);
    }, [animate]);

    // A simple simulated LED look
    return (
        <div
            className={`relative inline-block bg-[#1a1a1a] p-2 rounded-sm border border-[#333] shadow-lg ${className}`}
            style={{
                boxShadow: `0 0 15px ${flicker ? 'rgba(0,0,0,0)' : 'rgba(0,255,65,0.2)'}`
            }}
        >
            <div
                className="font-jetbrains font-bold tracking-widest text-2xl crt-overlay relative z-10"
                style={{
                    color: color,
                    textShadow: flicker ? 'none' : `0 0 5px ${color}, 0 0 10px ${color}`,
                    opacity: flicker ? 0.7 : 1,
                }}
            >
                {text}
            </div>

            {/* Grid overlay to simulate LEDs */}
            <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.8) 1px, transparent 1px)',
                    backgroundSize: '4px 4px'
                }}
            ></div>
        </div>
    );
}
