import hyperliquidLogo from '@assets/hyperliquid-dark.png';
import injectiveLogo from '@assets/Injectivelabs_logo.png';
import agglayerLogo from '@assets/agglayer-logo (1).png';
import forknetLogo from '@assets/forknetlogo-removebg-preview (1).png';
import polygonLogo from '@assets/Polygon_blockchain_logo.png';

const protocols = [
    { name: 'Hyperliquid', logo: hyperliquidLogo, height: 'h-8' },
    { name: 'Injective', logo: injectiveLogo, height: 'h-12' },
    { name: 'Agglayer', logo: agglayerLogo, height: 'h-8' },
    { name: 'Forknet', logo: forknetLogo, height: 'h-8' },
    { name: 'Polygon', logo: polygonLogo, height: 'h-12' },
];

export default function ProtocolMarquee() {
    return (
        <div className="relative w-full overflow-hidden bg-white/[0.02] border-y border-white/5 py-6">
            <div className="flex items-center gap-4 px-6">
                <span className="text-sm font-medium text-white/60 whitespace-nowrap">Built on:</span>
                <div className="relative flex-1 overflow-hidden">
                    <div className="flex animate-scroll">
                        {/* First set of logos */}
                        {protocols.map((protocol, idx) => (
                            <div
                                key={`first-${idx}`}
                                className="flex items-center justify-center px-8 flex-shrink-0"
                                style={{ minWidth: '200px' }}
                            >
                                <img
                                    src={protocol.logo}
                                    alt={protocol.name}
                                    className={`${protocol.height} object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity`}
                                />
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {protocols.map((protocol, idx) => (
                            <div
                                key={`second-${idx}`}
                                className="flex items-center justify-center px-8 flex-shrink-0"
                                style={{ minWidth: '200px' }}
                            >
                                <img
                                    src={protocol.logo}
                                    alt={protocol.name}
                                    className={`${protocol.height} object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity`}
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
                    animation: scroll 20s linear infinite;
                }

                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}
