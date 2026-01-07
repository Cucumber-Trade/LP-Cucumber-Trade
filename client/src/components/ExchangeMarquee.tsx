import icon1 from '@assets/set1_icon_1.png';
import icon2 from '@assets/set1_icon_2.png';
import icon3 from '@assets/set1_icon_3.png';
import icon4 from '@assets/set1_icon_4.png';
import icon5 from '@assets/set1_icon_5.png';
import icon6 from '@assets/set1_icon_6.png';
import icon7 from '@assets/set2_icon_1.png';
import icon8 from '@assets/set2_icon_2.png';
import icon9 from '@assets/set2_icon_3.png';
import icon10 from '@assets/set2_icon_4.png';
import icon11 from '@assets/set2_icon_5.png';
import icon12 from '@assets/set2_icon_6.png';
import icon13 from '@assets/set2_icon_7.png';
import icon14 from '@assets/set2_icon_8.png';

const exchanges = [
    { name: 'AI Platform', logo: icon1, height: 'h-12' },
    { name: 'Exchange', logo: icon2, height: 'h-12' },
    { name: 'Platform', logo: icon3, height: 'h-12' },
    { name: 'Stellar', logo: icon4, height: 'h-12' },
    { name: 'Trading', logo: icon5, height: 'h-12' },
    { name: 'Grid', logo: icon6, height: 'h-12' },
    { name: 'Binance', logo: icon7, height: 'h-12' },
    { name: 'Kraken', logo: icon8, height: 'h-12' },
    { name: 'Protocol', logo: icon9, height: 'h-12' },
    { name: 'Bybit', logo: icon10, height: 'h-12' },
    { name: 'KuCoin', logo: icon11, height: 'h-12' },
    { name: 'Hyperliquid', logo: icon12, height: 'h-12' },
    { name: 'Crypto.com', logo: icon13, height: 'h-12' },
    { name: 'EdgeX', logo: icon14, height: 'h-12' },
];

export default function ExchangeMarquee() {
    return (
        <div className="relative w-full overflow-hidden bg-white/[0.02] border-y border-white/5 h-20">
            <div className="flex items-center gap-4 px-6 h-full">
                <span className="text-sm font-medium text-white/60 whitespace-nowrap">Compatible with:</span>
                <div className="relative flex-1 overflow-hidden">
                    {/* Left fade */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />
                    {/* Right fade */}
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none" />
                    <div className="flex animate-scroll">
                        {/* First set of logos */}
                        {exchanges.map((exchange, idx) => (
                            <div
                                key={`first-${idx}`}
                                className="flex items-center justify-center px-3 flex-shrink-0"
                                style={{ minWidth: '100px' }}
                            >
                                <img
                                    src={exchange.logo}
                                    alt={exchange.name}
                                    className={`${exchange.height} object-contain opacity-80 hover:opacity-100 transition-opacity exchange-icon`}
                                />
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {exchanges.map((exchange, idx) => (
                            <div
                                key={`second-${idx}`}
                                className="flex items-center justify-center px-3 flex-shrink-0"
                                style={{ minWidth: '100px' }}
                            >
                                <img
                                    src={exchange.logo}
                                    alt={exchange.name}
                                    className={`${exchange.height} object-contain opacity-80 hover:opacity-100 transition-opacity exchange-icon`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-scroll {
                    animation: scroll 25s linear infinite;
                }

                .animate-scroll:hover {
                    animation-play-state: paused;
                }

                .exchange-icon {
                    mix-blend-mode: lighten;
                    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
                }
            `}</style>
        </div>
    );
}
