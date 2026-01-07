import deepseekLogo from '@assets/DeepSeek_logo.svg.png';
import grokLogo from '@assets/grok.png';
import chatgptLogo from '@assets/chatgpt.png';
import claudeLogo from '@assets/Claude_AI_logo.svg.png';
import geminiLogo from '@assets/Google_Gemini_logo_2025.svg.png';
import pickleaiLogo from '@assets/pickleaipng-removebg-preview.png';
import elizaosLogo from '@assets/elisaos-removebg-preview.png';

const protocols = [
    { name: 'DeepSeek', logo: deepseekLogo, height: 'h-8' },
    { name: 'Grok', logo: grokLogo, height: 'h-8' },
    { name: 'ChatGPT', logo: chatgptLogo, height: 'h-16' },
    { name: 'Claude', logo: claudeLogo, height: 'h-8' },
    { name: 'Gemini', logo: geminiLogo, height: 'h-8' },
    { name: 'Pickle AI', logo: pickleaiLogo, height: 'h-8' },
    { name: 'Eliza OS', logo: elizaosLogo, height: 'h-8' },
];

export default function ProtocolMarquee() {
    return (
        <div className="relative w-full overflow-hidden bg-white/[0.02] border-y border-white/5 h-20">
            <div className="flex items-center gap-4 px-6 h-full">
                <span className="text-sm font-medium text-white/60 whitespace-nowrap">Powered by:</span>
                <div className="relative flex-1 overflow-hidden marquee-fade">
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

                @media (max-width: 768px) {
                    .animate-scroll {
                        animation: scroll 8s linear infinite;
                    }
                }

                .marquee-fade {
                    -webkit-mask-image: linear-gradient(to right, transparent, black 150px, black calc(100% - 150px), transparent);
                    mask-image: linear-gradient(to right, transparent, black 150px, black calc(100% - 150px), transparent);
                }
            `}</style>
        </div>
    );
}
