export default function AIAgentIllustrationCompete2() {
  return (
    <div className="relative w-full h-48 flex items-center justify-center group">
      <svg
        viewBox="0 0 300 180"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Blue gradients */}
          <linearGradient id="compete2-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#93c5fd', stopOpacity: 0.5 }} />
            <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.25 }} />
          </linearGradient>
          
          <linearGradient id="compete2-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 0.7 }} />
            <stop offset="50%" style={{ stopColor: '#93c5fd', stopOpacity: 0.9 }} />
            <stop offset="100%" style={{ stopColor: '#60a5fa', stopOpacity: 0.7 }} />
          </linearGradient>
          
          <filter id="glow-compete2">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="glow-compete2-strong">
            <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background circles */}
        <circle cx="150" cy="90" r="75" fill="none" stroke="rgba(96, 165, 250, 0.12)" strokeWidth="1" className="transition-all duration-500 group-hover:stroke-[rgba(96,165,250,0.3)]">
          <animate attributeName="r" values="75;80;75" dur="3.5s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="150" cy="90" r="55" fill="none" stroke="rgba(96, 165, 250, 0.18)" strokeWidth="1" className="transition-all duration-500 group-hover:stroke-[rgba(96,165,250,0.38)]">
          <animate attributeName="r" values="55;60;55" dur="2.8s" repeatCount="indefinite" />
        </circle>
        
        {/* Trophy/Crown structure */}
        <g className="transition-all duration-500 group-hover:translate-y-[-3px]">
          {/* Trophy base */}
          <rect 
            x="130" 
            y="130" 
            width="40" 
            height="6" 
            fill="rgba(96, 165, 250, 0.8)" 
            stroke="rgba(147, 197, 253, 0.9)" 
            strokeWidth="1.5"
            rx="2"
            className="transition-all duration-500 group-hover:fill-[rgba(96,165,250,1)]"
          />
          
          {/* Trophy stem */}
          <rect 
            x="145" 
            y="115" 
            width="10" 
            height="15" 
            fill="rgba(59, 130, 246, 0.7)" 
            stroke="rgba(147, 197, 253, 0.8)" 
            strokeWidth="1.2"
            rx="2"
          />
          
          {/* Trophy cup body */}
          <path 
            d="M 135,115 L 130,80 Q 130,70 140,68 L 160,68 Q 170,70 170,80 L 165,115 Z" 
            fill="url(#compete2-1)" 
            stroke="rgba(147, 197, 253, 0.7)" 
            strokeWidth="2"
            filter="url(#glow-compete2)"
            className="transition-all duration-500 group-hover:fill-[url(#compete2-2)]"
          >
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
          </path>
          
          {/* Trophy cup highlight */}
          <path 
            d="M 138,110 L 134,82 Q 135,73 143,72" 
            fill="none" 
            stroke="rgba(255, 255, 255, 0.5)" 
            strokeWidth="2"
            strokeLinecap="round"
            className="transition-opacity duration-500 group-hover:opacity-80"
          >
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
          </path>
          
          {/* Trophy handles */}
          <path 
            d="M 130,85 Q 115,85 115,95 Q 115,100 120,100" 
            fill="none" 
            stroke="rgba(147, 197, 253, 0.7)" 
            strokeWidth="2"
            filter="url(#glow-compete2)"
            className="transition-all duration-500 group-hover:stroke-[rgba(147,197,253,0.9)]"
          />
          
          <path 
            d="M 170,85 Q 185,85 185,95 Q 185,100 180,100" 
            fill="none" 
            stroke="rgba(147, 197, 253, 0.7)" 
            strokeWidth="2"
            filter="url(#glow-compete2)"
            className="transition-all duration-500 group-hover:stroke-[rgba(147,197,253,0.9)]"
          />
          
          {/* Crown points on top */}
          <polygon 
            points="140,68 145,58 150,65 155,58 160,68" 
            fill="url(#compete2-1)" 
            stroke="rgba(147, 197, 253, 0.8)" 
            strokeWidth="1.5"
            filter="url(#glow-compete2)"
            className="transition-all duration-500 group-hover:fill-[url(#compete2-2)]"
          />
          
          {/* Star accent on trophy */}
          <circle 
            cx="150" 
            cy="90" 
            r="6" 
            fill="rgba(96, 165, 250, 0.9)" 
            stroke="rgba(147, 197, 253, 1)" 
            strokeWidth="1.5"
            filter="url(#glow-compete2-strong)"
          >
            <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite" />
          </circle>
          
          <polygon 
            points="150,85 151,88 154,88 152,90 153,93 150,91 147,93 148,90 146,88 149,88" 
            fill="rgba(255, 255, 255, 0.9)" 
            className="transition-all duration-500 group-hover:fill-[rgba(255,255,255,1)]"
          >
            <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
          </polygon>
        </g>
        
        {/* Radiating lines from trophy */}
        <g opacity="0.4" className="transition-opacity duration-500 group-hover:opacity-70">
          <line x1="150" y1="68" x2="150" y2="40" stroke="rgba(147, 197, 253, 0.5)" strokeWidth="2" strokeDasharray="4,4">
            <animate attributeName="stroke-dashoffset" from="0" to="8" dur="0.8s" repeatCount="indefinite" />
          </line>
          
          <line x1="135" y1="70" x2="115" y2="50" stroke="rgba(147, 197, 253, 0.4)" strokeWidth="1.5" strokeDasharray="3,3">
            <animate attributeName="stroke-dashoffset" from="0" to="6" dur="0.9s" repeatCount="indefinite" />
          </line>
          
          <line x1="165" y1="70" x2="185" y2="50" stroke="rgba(147, 197, 253, 0.4)" strokeWidth="1.5" strokeDasharray="3,3">
            <animate attributeName="stroke-dashoffset" from="0" to="6" dur="0.9s" repeatCount="indefinite" />
          </line>
          
          <line x1="125" y1="75" x2="100" y2="60" stroke="rgba(147, 197, 253, 0.3)" strokeWidth="1.5" strokeDasharray="3,3">
            <animate attributeName="stroke-dashoffset" from="0" to="6" dur="1s" repeatCount="indefinite" />
          </line>
          
          <line x1="175" y1="75" x2="200" y2="60" stroke="rgba(147, 197, 253, 0.3)" strokeWidth="1.5" strokeDasharray="3,3">
            <animate attributeName="stroke-dashoffset" from="0" to="6" dur="1s" repeatCount="indefinite" />
          </line>
        </g>
        
        {/* Sparkle particles */}
        <circle r="2.5" fill="rgba(191, 219, 254, 0.8)" filter="url(#glow-compete2)" className="transition-all duration-500 group-hover:r-[4px]">
          <animate attributeName="cx" values="140;135;140" dur="2s" repeatCount="indefinite" />
          <animate attributeName="cy" values="60;55;60" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </circle>
        
        <circle r="2.5" fill="rgba(191, 219, 254, 0.8)" filter="url(#glow-compete2)" className="transition-all duration-500 group-hover:r-[4px]">
          <animate attributeName="cx" values="160;165;160" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="cy" values="60;55;60" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite" />
        </circle>
        
        <circle r="2" fill="rgba(147, 197, 253, 0.7)" filter="url(#glow-compete2)" className="transition-all duration-500 group-hover:r-[3px]">
          <animate attributeName="cx" values="125;120;125" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="cy" values="80;75;80" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.5s" repeatCount="indefinite" />
        </circle>
        
        <circle r="2" fill="rgba(147, 197, 253, 0.7)" filter="url(#glow-compete2)" className="transition-all duration-500 group-hover:r-[3px]">
          <animate attributeName="cx" values="175;180;175" dur="2.7s" repeatCount="indefinite" />
          <animate attributeName="cy" values="80;75;80" dur="2.7s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.7s" repeatCount="indefinite" />
        </circle>
        
        {/* Podium steps beneath */}
        <g opacity="0.3" className="transition-opacity duration-500 group-hover:opacity-50">
          <rect x="135" y="136" width="30" height="8" fill="rgba(96, 165, 250, 0.4)" stroke="rgba(147, 197, 253, 0.5)" strokeWidth="1" rx="1"/>
          <rect x="120" y="144" width="60" height="8" fill="rgba(96, 165, 250, 0.3)" stroke="rgba(147, 197, 253, 0.4)" strokeWidth="1" rx="1"/>
          <rect x="105" y="152" width="90" height="8" fill="rgba(96, 165, 250, 0.2)" stroke="rgba(147, 197, 253, 0.3)" strokeWidth="1" rx="1"/>
        </g>
        
        {/* Corner accent dots */}
        <circle cx="60" cy="50" r="2.5" fill="rgba(147, 197, 253, 0.4)" className="transition-all duration-500 group-hover:r-[4px] group-hover:fill-[rgba(147,197,253,0.7)]">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="240" cy="50" r="2.5" fill="rgba(147, 197, 253, 0.4)" className="transition-all duration-500 group-hover:r-[4px] group-hover:fill-[rgba(147,197,253,0.7)]">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.2s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="80" cy="140" r="2.5" fill="rgba(147, 197, 253, 0.4)" className="transition-all duration-500 group-hover:r-[4px] group-hover:fill-[rgba(147,197,253,0.7)]">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.4s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="220" cy="140" r="2.5" fill="rgba(147, 197, 253, 0.4)" className="transition-all duration-500 group-hover:r-[4px] group-hover:fill-[rgba(147,197,253,0.7)]">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.6s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}