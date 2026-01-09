export default function AIAgentIllustrationEarn1() {
  return (
    <div className="relative w-full h-48 flex items-center justify-center group">
      <svg
        viewBox="0 0 300 180"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Purple/Violet gradients */}
          <linearGradient id="earn1-1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#c4b5fd', stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.3 }} />
          </linearGradient>
          
          <linearGradient id="earn1-2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#a78bfa', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#7c3aed', stopOpacity: 0.4 }} />
          </linearGradient>
          
          <linearGradient id="earn1-gold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#f59e0b', stopOpacity: 0.5 }} />
          </linearGradient>
          
          <filter id="glow-earn1">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="glow-earn1-strong">
            <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background circles */}
        <circle cx="150" cy="90" r="70" fill="none" stroke="rgba(167, 139, 250, 0.15)" strokeWidth="1" className="transition-all duration-500 group-hover:stroke-[rgba(167,139,250,0.35)]">
          <animate attributeName="r" values="70;75;70" dur="3s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="150" cy="90" r="50" fill="none" stroke="rgba(167, 139, 250, 0.2)" strokeWidth="1" className="transition-all duration-500 group-hover:stroke-[rgba(167,139,250,0.4)]">
          <animate attributeName="r" values="50;55;50" dur="2.5s" repeatCount="indefinite" />
        </circle>
        
        {/* Stack of coins */}
        <g className="transition-all duration-500 group-hover:translate-y-[-3px]">
          {/* Bottom coin */}
          <ellipse 
            cx="150" 
            cy="125" 
            rx="25" 
            ry="8" 
            fill="url(#earn1-1)" 
            stroke="rgba(196, 181, 253, 0.7)" 
            strokeWidth="1.5"
            filter="url(#glow-earn1)"
            className="transition-all duration-500 group-hover:fill-[url(#earn1-2)]"
          >
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
          </ellipse>
          
          {/* Bottom coin side */}
          <rect 
            x="125" 
            y="115" 
            width="50" 
            height="10" 
            fill="url(#earn1-1)" 
            stroke="rgba(196, 181, 253, 0.6)" 
            strokeWidth="1.2"
            className="transition-all duration-500 group-hover:fill-[url(#earn1-2)]"
          />
          
          {/* Bottom coin top */}
          <ellipse 
            cx="150" 
            cy="115" 
            rx="25" 
            ry="8" 
            fill="url(#earn1-2)" 
            stroke="rgba(196, 181, 253, 0.8)" 
            strokeWidth="1.5"
            filter="url(#glow-earn1)"
          />
          
          {/* Dollar sign on bottom coin */}
          <text 
            x="150" 
            y="120" 
            fontSize="12" 
            fontWeight="bold" 
            fill="rgba(255, 255, 255, 0.9)" 
            textAnchor="middle"
          >
            $
          </text>
          
          {/* Middle coin */}
          <ellipse 
            cx="150" 
            cy="108" 
            rx="25" 
            ry="8" 
            fill="url(#earn1-1)" 
            stroke="rgba(196, 181, 253, 0.7)" 
            strokeWidth="1.5"
            filter="url(#glow-earn1)"
            className="transition-all duration-500 group-hover:fill-[url(#earn1-2)]"
          >
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin="0.3s" />
          </ellipse>
          
          <rect 
            x="125" 
            y="98" 
            width="50" 
            height="10" 
            fill="url(#earn1-1)" 
            stroke="rgba(196, 181, 253, 0.6)" 
            strokeWidth="1.2"
            className="transition-all duration-500 group-hover:fill-[url(#earn1-2)]"
          />
          
          <ellipse 
            cx="150" 
            cy="98" 
            rx="25" 
            ry="8" 
            fill="url(#earn1-2)" 
            stroke="rgba(196, 181, 253, 0.8)" 
            strokeWidth="1.5"
            filter="url(#glow-earn1)"
          />
          
          <text 
            x="150" 
            y="103" 
            fontSize="12" 
            fontWeight="bold" 
            fill="rgba(255, 255, 255, 0.9)" 
            textAnchor="middle"
          >
            $
          </text>
          
          {/* Top coin */}
          <ellipse 
            cx="150" 
            cy="91" 
            rx="25" 
            ry="8" 
            fill="url(#earn1-1)" 
            stroke="rgba(196, 181, 253, 0.7)" 
            strokeWidth="1.5"
            filter="url(#glow-earn1)"
            className="transition-all duration-500 group-hover:fill-[url(#earn1-2)]"
          >
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin="0.6s" />
          </ellipse>
          
          <rect 
            x="125" 
            y="81" 
            width="50" 
            height="10" 
            fill="url(#earn1-1)" 
            stroke="rgba(196, 181, 253, 0.6)" 
            strokeWidth="1.2"
            className="transition-all duration-500 group-hover:fill-[url(#earn1-2)]"
          />
          
          <ellipse 
            cx="150" 
            cy="81" 
            rx="25" 
            ry="8" 
            fill="url(#earn1-2)" 
            stroke="rgba(196, 181, 253, 0.8)" 
            strokeWidth="1.5"
            filter="url(#glow-earn1)"
          />
          
          <text 
            x="150" 
            y="86" 
            fontSize="12" 
            fontWeight="bold" 
            fill="rgba(255, 255, 255, 0.9)" 
            textAnchor="middle"
          >
            $
          </text>
        </g>
        
        {/* Upward arrow */}
        <g className="transition-all duration-500 group-hover:translate-y-[-5px]" opacity="0.9">
          {/* Arrow shaft */}
          <rect 
            x="147" 
            y="45" 
            width="6" 
            height="35" 
            fill="url(#earn1-gold)" 
            stroke="rgba(251, 191, 36, 0.8)" 
            strokeWidth="1.5"
            rx="2"
            filter="url(#glow-earn1)"
          >
            <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite" />
          </rect>
          
          {/* Arrow head */}
          <polygon 
            points="150,35 165,50 135,50" 
            fill="url(#earn1-gold)" 
            stroke="rgba(251, 191, 36, 0.9)" 
            strokeWidth="1.5"
            filter="url(#glow-earn1-strong)"
            className="transition-all duration-500 group-hover:brightness-125"
          >
            <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
          </polygon>
        </g>
        
        {/* Percentage symbol */}
        <g className="transition-all duration-500 group-hover:scale-110" transform-origin="150 90">
          <circle 
            cx="190" 
            cy="70" 
            r="8" 
            fill="rgba(167, 139, 250, 0.3)" 
            stroke="rgba(196, 181, 253, 0.7)" 
            strokeWidth="2"
            filter="url(#glow-earn1)"
            className="transition-all duration-500 group-hover:fill-[rgba(167,139,250,0.5)]"
          />
          <text 
            x="190" 
            y="75" 
            fontSize="14" 
            fontWeight="bold" 
            fill="rgba(255, 255, 255, 0.9)" 
            textAnchor="middle"
          >
            %
          </text>
        </g>
        
        {/* Floating coins */}
        <g opacity="0.6" className="transition-opacity duration-500 group-hover:opacity-90">
          <ellipse cx="100" cy="60" rx="12" ry="4" fill="url(#earn1-1)" stroke="rgba(196, 181, 253, 0.6)" strokeWidth="1" filter="url(#glow-earn1)">
            <animate attributeName="cy" values="60;55;60" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite" />
          </ellipse>
          <rect x="88" y="55" width="24" height="5" fill="url(#earn1-1)" stroke="rgba(196, 181, 253, 0.5)" strokeWidth="0.8">
            <animate attributeName="y" values="55;50;55" dur="3s" repeatCount="indefinite" />
          </rect>
          <ellipse cx="100" cy="55" rx="12" ry="4" fill="url(#earn1-2)" stroke="rgba(196, 181, 253, 0.7)" strokeWidth="1">
            <animate attributeName="cy" values="55;50;55" dur="3s" repeatCount="indefinite" />
          </ellipse>
          <text x="100" y="58" fontSize="8" fontWeight="bold" fill="rgba(255, 255, 255, 0.8)" textAnchor="middle">
            <animate attributeName="y" values="58;53;58" dur="3s" repeatCount="indefinite" />
            $
          </text>
          
          <ellipse cx="200" cy="100" rx="12" ry="4" fill="url(#earn1-1)" stroke="rgba(196, 181, 253, 0.6)" strokeWidth="1" filter="url(#glow-earn1)">
            <animate attributeName="cy" values="100;95;100" dur="3.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3.2s" repeatCount="indefinite" />
          </ellipse>
          <rect x="188" y="95" width="24" height="5" fill="url(#earn1-1)" stroke="rgba(196, 181, 253, 0.5)" strokeWidth="0.8">
            <animate attributeName="y" values="95;90;95" dur="3.2s" repeatCount="indefinite" />
          </rect>
          <ellipse cx="200" cy="95" rx="12" ry="4" fill="url(#earn1-2)" stroke="rgba(196, 181, 253, 0.7)" strokeWidth="1">
            <animate attributeName="cy" values="95;90;95" dur="3.2s" repeatCount="indefinite" />
          </ellipse>
          <text x="200" y="98" fontSize="8" fontWeight="bold" fill="rgba(255, 255, 255, 0.8)" textAnchor="middle">
            <animate attributeName="y" values="98;93;98" dur="3.2s" repeatCount="indefinite" />
            $
          </text>
        </g>
        
        {/* Sparkles */}
        <circle r="2" fill="rgba(251, 191, 36, 0.8)" filter="url(#glow-earn1)" className="transition-all duration-500 group-hover:r-[3px]">
          <animate attributeName="cx" values="135;130;135" dur="2s" repeatCount="indefinite" />
          <animate attributeName="cy" values="70;65;70" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </circle>
        
        <circle r="2" fill="rgba(251, 191, 36, 0.8)" filter="url(#glow-earn1)" className="transition-all duration-500 group-hover:r-[3px]">
          <animate attributeName="cx" values="165;170;165" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="cy" values="70;65;70" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite" />
        </circle>
        
        {/* Corner accent dots */}
        <circle cx="70" cy="50" r="2.5" fill="rgba(196, 181, 253, 0.4)" className="transition-all duration-500 group-hover:r-[4px] group-hover:fill-[rgba(196,181,253,0.7)]">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="230" cy="50" r="2.5" fill="rgba(196, 181, 253, 0.4)" className="transition-all duration-500 group-hover:r-[4px] group-hover:fill-[rgba(196,181,253,0.7)]">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.2s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="70" cy="130" r="2.5" fill="rgba(196, 181, 253, 0.4)" className="transition-all duration-500 group-hover:r-[4px] group-hover:fill-[rgba(196,181,253,0.7)]">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.4s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="230" cy="130" r="2.5" fill="rgba(196, 181, 253, 0.4)" className="transition-all duration-500 group-hover:r-[4px] group-hover:fill-[rgba(196,181,253,0.7)]">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.6s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
