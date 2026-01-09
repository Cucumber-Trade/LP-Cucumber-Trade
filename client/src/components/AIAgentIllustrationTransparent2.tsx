export default function AIAgentIllustrationTransparent2() {
  return (
    <div className="relative w-full h-48 flex items-center justify-center group">
      <svg
        viewBox="0 0 300 180"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Cyan/Teal gradients */}
          <linearGradient id="transparent2-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#67e8f9', stopOpacity: 0.5 }} />
            <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 0.25 }} />
          </linearGradient>
          
          <linearGradient id="transparent2-2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#22d3ee', stopOpacity: 0.7 }} />
            <stop offset="100%" style={{ stopColor: '#0891b2', stopOpacity: 0.4 }} />
          </linearGradient>
          
          <filter id="glow-transparent2">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="glow-transparent2-strong">
            <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background circles */}
        <circle cx="150" cy="90" r="75" fill="none" stroke="rgba(34, 211, 238, 0.12)" strokeWidth="1" className="transition-all duration-500 group-hover:stroke-[rgba(34,211,238,0.3)]">
          <animate attributeName="r" values="75;80;75" dur="3.5s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="150" cy="90" r="55" fill="none" stroke="rgba(34, 211, 238, 0.18)" strokeWidth="1" className="transition-all duration-500 group-hover:stroke-[rgba(34,211,238,0.38)]">
          <animate attributeName="r" values="55;60;55" dur="2.8s" repeatCount="indefinite" />
        </circle>
        
        {/* Blockchain chain - horizontal */}
        <g className="transition-all duration-500 group-hover:translate-y-[-3px]">
          {/* Block 1 */}
          <rect 
            x="65" 
            y="80" 
            width="30" 
            height="30" 
            rx="3"
            fill="url(#transparent2-1)" 
            stroke="rgba(103, 232, 249, 0.7)" 
            strokeWidth="2"
            filter="url(#glow-transparent2)"
            className="transition-all duration-500 group-hover:fill-[url(#transparent2-2)]"
          >
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
          </rect>
          
          {/* Block 1 inner detail */}
          <rect 
            x="70" 
            y="85" 
            width="20" 
            height="20" 
            rx="2"
            fill="none" 
            stroke="rgba(255, 255, 255, 0.3)" 
            strokeWidth="1"
          />
          
          {/* Block 1 checkmark */}
          <path d="M 73,93 L 76,97 L 83,88" fill="none" stroke="rgba(34, 211, 238, 0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow-transparent2)"/>
          
          {/* Connection line 1-2 */}
          <line x1="95" y1="95" x2="105" y2="95" stroke="rgba(103, 232, 249, 0.6)" strokeWidth="2.5" className="transition-all duration-500 group-hover:stroke-[rgba(103,232,249,0.9)]">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" />
          </line>
          <circle cx="100" cy="95" r="3" fill="rgba(34, 211, 238, 0.8)">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
          </circle>
          
          {/* Block 2 */}
          <rect 
            x="105" 
            y="80" 
            width="30" 
            height="30" 
            rx="3"
            fill="url(#transparent2-1)" 
            stroke="rgba(103, 232, 249, 0.7)" 
            strokeWidth="2"
            filter="url(#glow-transparent2)"
            className="transition-all duration-500 group-hover:fill-[url(#transparent2-2)]"
          >
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin="0.3s" />
          </rect>
          
          <rect 
            x="110" 
            y="85" 
            width="20" 
            height="20" 
            rx="2"
            fill="none" 
            stroke="rgba(255, 255, 255, 0.3)" 
            strokeWidth="1"
          />
          
          <path d="M 113,93 L 116,97 L 123,88" fill="none" stroke="rgba(34, 211, 238, 0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow-transparent2)"/>
          
          {/* Connection line 2-3 */}
          <line x1="135" y1="95" x2="145" y2="95" stroke="rgba(103, 232, 249, 0.6)" strokeWidth="2.5" className="transition-all duration-500 group-hover:stroke-[rgba(103,232,249,0.9)]">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" begin="0.2s" />
          </line>
          <circle cx="140" cy="95" r="3" fill="rgba(34, 211, 238, 0.8)">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" begin="0.2s" />
          </circle>
          
          {/* Block 3 - highlighted */}
          <rect 
            x="145" 
            y="80" 
            width="30" 
            height="30" 
            rx="3"
            fill="url(#transparent2-2)" 
            stroke="rgba(103, 232, 249, 0.9)" 
            strokeWidth="2.5"
            filter="url(#glow-transparent2-strong)"
            className="transition-all duration-500 group-hover:brightness-125"
          >
            <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite" begin="0.6s" />
          </rect>
          
          <rect 
            x="150" 
            y="85" 
            width="20" 
            height="20" 
            rx="2"
            fill="none" 
            stroke="rgba(255, 255, 255, 0.4)" 
            strokeWidth="1.5"
          />
          
          <path d="M 153,93 L 156,97 L 163,88" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow-transparent2-strong)">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
          </path>
          
          {/* Connection line 3-4 */}
          <line x1="175" y1="95" x2="185" y2="95" stroke="rgba(103, 232, 249, 0.6)" strokeWidth="2.5" className="transition-all duration-500 group-hover:stroke-[rgba(103,232,249,0.9)]">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" begin="0.4s" />
          </line>
          <circle cx="180" cy="95" r="3" fill="rgba(34, 211, 238, 0.8)">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" begin="0.4s" />
          </circle>
          
          {/* Block 4 */}
          <rect 
            x="185" 
            y="80" 
            width="30" 
            height="30" 
            rx="3"
            fill="url(#transparent2-1)" 
            stroke="rgba(103, 232, 249, 0.7)" 
            strokeWidth="2"
            filter="url(#glow-transparent2)"
            className="transition-all duration-500 group-hover:fill-[url(#transparent2-2)]"
          >
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin="0.9s" />
          </rect>
          
          <rect 
            x="190" 
            y="85" 
            width="20" 
            height="20" 
            rx="2"
            fill="none" 
            stroke="rgba(255, 255, 255, 0.3)" 
            strokeWidth="1"
          />
          
          <path d="M 193,93 L 196,97 L 203,88" fill="none" stroke="rgba(34, 211, 238, 0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow-transparent2)"/>
          
          {/* Arrow continuing forward */}
          <line x1="215" y1="95" x2="230" y2="95" stroke="rgba(103, 232, 249, 0.5)" strokeWidth="2" strokeDasharray="4,4" className="transition-all duration-500 group-hover:stroke-[rgba(103,232,249,0.8)]">
            <animate attributeName="stroke-dashoffset" from="0" to="8" dur="0.8s" repeatCount="indefinite" />
          </line>
          <polygon points="230,95 225,92 225,98" fill="rgba(103, 232, 249, 0.7)" className="transition-all duration-500 group-hover:fill-[rgba(103,232,249,1)]">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" />
          </polygon>
        </g>
        
        {/* Labels above blocks */}
        <g opacity="0.7" className="transition-opacity duration-500 group-hover:opacity-100">
          <text x="80" y="72" fontSize="8" fill="rgba(103, 232, 249, 0.9)" textAnchor="middle" fontWeight="600">RUN</text>
          <text x="120" y="72" fontSize="8" fill="rgba(103, 232, 249, 0.9)" textAnchor="middle" fontWeight="600">CALC</text>
          <text x="160" y="72" fontSize="8" fill="rgba(103, 232, 249, 0.9)" textAnchor="middle" fontWeight="600">TRADE</text>
          <text x="200" y="72" fontSize="8" fill="rgba(103, 232, 249, 0.9)" textAnchor="middle" fontWeight="600">RANK</text>
        </g>
        
        {/* Shield icon for security/transparency */}
        <g className="transition-all duration-500 group-hover:scale-110" transform-origin="150 135">
          <path 
            d="M 150,125 L 140,128 L 140,140 Q 140,148 150,152 Q 160,148 160,140 L 160,128 Z" 
            fill="url(#transparent2-1)" 
            stroke="rgba(103, 232, 249, 0.8)" 
            strokeWidth="2"
            filter="url(#glow-transparent2)"
          >
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
          </path>
          
          <path d="M 145,136 L 148,140 L 155,132" fill="none" stroke="rgba(255, 255, 255, 0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow-transparent2)"/>
        </g>
        
        {/* Data flow indicators */}
        <g opacity="0.6" className="transition-opacity duration-500 group-hover:opacity-90">
          {/* Top left data point */}
          <circle cx="80" cy="55" r="6" fill="rgba(34, 211, 238, 0.4)" stroke="rgba(103, 232, 249, 0.7)" strokeWidth="1.5" filter="url(#glow-transparent2)">
            <animate attributeName="cy" values="55;50;55" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="80" cy="55" r="2" fill="rgba(255, 255, 255, 0.9)">
            <animate attributeName="cy" values="55;50;55" dur="3s" repeatCount="indefinite" />
          </circle>
          <line x1="80" y1="61" x2="80" y2="75" stroke="rgba(103, 232, 249, 0.4)" strokeWidth="1.5" strokeDasharray="2,2">
            <animate attributeName="stroke-dashoffset" from="0" to="4" dur="0.8s" repeatCount="indefinite" />
          </line>
          
          {/* Top right data point */}
          <circle cx="200" cy="50" r="6" fill="rgba(34, 211, 238, 0.4)" stroke="rgba(103, 232, 249, 0.7)" strokeWidth="1.5" filter="url(#glow-transparent2)">
            <animate attributeName="cy" values="50;45;50" dur="3.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="50" r="2" fill="rgba(255, 255, 255, 0.9)">
            <animate attributeName="cy" values="50;45;50" dur="3.2s" repeatCount="indefinite" />
          </circle>
          <line x1="200" y1="56" x2="200" y2="75" stroke="rgba(103, 232, 249, 0.4)" strokeWidth="1.5" strokeDasharray="2,2">
            <animate attributeName="stroke-dashoffset" from="0" to="4" dur="0.8s" repeatCount="indefinite" />
          </line>
        </g>
        
        {/* Floating hash/code symbols */}
        <text x="60" y="100" fontSize="10" fill="rgba(103, 232, 249, 0.4)" fontFamily="monospace" className="transition-all duration-500 group-hover:fill-[rgba(103,232,249,0.7)]">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" />
          #
        </text>
        
        <text x="225" y="110" fontSize="10" fill="rgba(103, 232, 249, 0.4)" fontFamily="monospace" className="transition-all duration-500 group-hover:fill-[rgba(103,232,249,0.7)]">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.7s" repeatCount="indefinite" />
          0x
        </text>
        
        {/* Corner accent dots */}
        <circle cx="60" cy="50" r="2.5" fill="rgba(103, 232, 249, 0.4)" className="transition-all duration-500 group-hover:r-[4px] group-hover:fill-[rgba(103,232,249,0.7)]">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="240" cy="50" r="2.5" fill="rgba(103, 232, 249, 0.4)" className="transition-all duration-500 group-hover:r-[4px] group-hover:fill-[rgba(103,232,249,0.7)]">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.2s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="60" cy="130" r="2.5" fill="rgba(103, 232, 249, 0.4)" className="transition-all duration-500 group-hover:r-[4px] group-hover:fill-[rgba(103,232,249,0.7)]">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.4s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="240" cy="130" r="2.5" fill="rgba(103, 232, 249, 0.4)" className="transition-all duration-500 group-hover:r-[4px] group-hover:fill-[rgba(103,232,249,0.7)]">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.6s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
