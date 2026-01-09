export default function AIAgentIllustrationV7() {
  return (
    <div className="relative w-full h-48 flex items-center justify-center group">
      <svg
        viewBox="0 0 300 180"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Green gradients */}
          <linearGradient id="green7-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#6ee7b7', stopOpacity: 0.4 }} />
            <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 0.2 }} />
          </linearGradient>
          
          <filter id="glow7">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="glow7-strong">
            <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background grid lines */}
        <g opacity="0.1" className="transition-opacity duration-500 group-hover:opacity-25">
          {/* Vertical lines */}
          <line x1="90" y1="30" x2="90" y2="150" stroke="rgba(110, 231, 183, 0.3)" strokeWidth="0.5" strokeDasharray="4,4"/>
          <line x1="120" y1="30" x2="120" y2="150" stroke="rgba(110, 231, 183, 0.3)" strokeWidth="0.5" strokeDasharray="4,4"/>
          <line x1="150" y1="30" x2="150" y2="150" stroke="rgba(110, 231, 183, 0.3)" strokeWidth="0.5" strokeDasharray="4,4"/>
          <line x1="180" y1="30" x2="180" y2="150" stroke="rgba(110, 231, 183, 0.3)" strokeWidth="0.5" strokeDasharray="4,4"/>
          <line x1="210" y1="30" x2="210" y2="150" stroke="rgba(110, 231, 183, 0.3)" strokeWidth="0.5" strokeDasharray="4,4"/>
          
          {/* Horizontal lines */}
          <line x1="60" y1="50" x2="240" y2="50" stroke="rgba(110, 231, 183, 0.3)" strokeWidth="0.5" strokeDasharray="4,4"/>
          <line x1="60" y1="70" x2="240" y2="70" stroke="rgba(110, 231, 183, 0.3)" strokeWidth="0.5" strokeDasharray="4,4"/>
          <line x1="60" y1="90" x2="240" y2="90" stroke="rgba(110, 231, 183, 0.3)" strokeWidth="0.5" strokeDasharray="4,4"/>
          <line x1="60" y1="110" x2="240" y2="110" stroke="rgba(110, 231, 183, 0.3)" strokeWidth="0.5" strokeDasharray="4,4"/>
          <line x1="60" y1="130" x2="240" y2="130" stroke="rgba(110, 231, 183, 0.3)" strokeWidth="0.5" strokeDasharray="4,4"/>
        </g>
        
        {/* Grid of dots - minimal pattern */}
        <g opacity="0.3" className="transition-opacity duration-500 group-hover:opacity-60">
          {/* Row 1 */}
          <circle cx="90" cy="50" r="2" fill="rgba(110, 231, 183, 0.6)" />
          <circle cx="120" cy="50" r="2" fill="rgba(110, 231, 183, 0.6)" />
          <circle cx="150" cy="50" r="2" fill="rgba(110, 231, 183, 0.6)" />
          <circle cx="180" cy="50" r="2" fill="rgba(110, 231, 183, 0.6)" />
          <circle cx="210" cy="50" r="2" fill="rgba(110, 231, 183, 0.6)" />
          
          {/* Row 2 */}
          <circle cx="90" cy="70" r="2" fill="rgba(110, 231, 183, 0.6)" />
          <circle cx="120" cy="70" r="2" fill="rgba(110, 231, 183, 0.6)" />
          <circle cx="150" cy="70" r="2" fill="rgba(110, 231, 183, 0.6)" />
          <circle cx="180" cy="70" r="2" fill="rgba(110, 231, 183, 0.6)" />
          <circle cx="210" cy="70" r="2" fill="rgba(110, 231, 183, 0.6)" />
          
          {/* Row 3 */}
          <circle cx="90" cy="90" r="2" fill="rgba(110, 231, 183, 0.6)" />
          <circle cx="120" cy="90" r="2" fill="rgba(110, 231, 183, 0.6)" />
          <circle cx="150" cy="90" r="2" fill="rgba(110, 231, 183, 0.6)" />
          <circle cx="180" cy="90" r="2" fill="rgba(110, 231, 183, 0.6)" />
          <circle cx="210" cy="90" r="2" fill="rgba(110, 231, 183, 0.6)" />
          
          {/* Row 4 */}
          <circle cx="90" cy="110" r="2" fill="rgba(110, 231, 183, 0.6)" />
          <circle cx="120" cy="110" r="2" fill="rgba(110, 231, 183, 0.6)" />
          <circle cx="150" cy="110" r="2" fill="rgba(110, 231, 183, 0.6)" />
          <circle cx="180" cy="110" r="2" fill="rgba(110, 231, 183, 0.6)" />
          <circle cx="210" cy="110" r="2" fill="rgba(110, 231, 183, 0.6)" />
          
          {/* Row 5 */}
          <circle cx="90" cy="130" r="2" fill="rgba(110, 231, 183, 0.6)" />
          <circle cx="120" cy="130" r="2" fill="rgba(110, 231, 183, 0.6)" />
          <circle cx="150" cy="130" r="2" fill="rgba(110, 231, 183, 0.6)" />
          <circle cx="180" cy="130" r="2" fill="rgba(110, 231, 183, 0.6)" />
          <circle cx="210" cy="130" r="2" fill="rgba(110, 231, 183, 0.6)" />
        </g>
        
        {/* Connecting lines between grid dots */}
        <g opacity="0.15" className="transition-opacity duration-500 group-hover:opacity-35">
          {/* Horizontal connections */}
          <line x1="90" y1="70" x2="120" y2="70" stroke="rgba(110, 231, 183, 0.4)" strokeWidth="0.5"/>
          <line x1="180" y1="70" x2="210" y2="70" stroke="rgba(110, 231, 183, 0.4)" strokeWidth="0.5"/>
          <line x1="90" y1="110" x2="120" y2="110" stroke="rgba(110, 231, 183, 0.4)" strokeWidth="0.5"/>
          <line x1="180" y1="110" x2="210" y2="110" stroke="rgba(110, 231, 183, 0.4)" strokeWidth="0.5"/>
          
          {/* Vertical connections */}
          <line x1="120" y1="50" x2="120" y2="70" stroke="rgba(110, 231, 183, 0.4)" strokeWidth="0.5"/>
          <line x1="180" y1="50" x2="180" y2="70" stroke="rgba(110, 231, 183, 0.4)" strokeWidth="0.5"/>
          <line x1="120" y1="110" x2="120" y2="130" stroke="rgba(110, 231, 183, 0.4)" strokeWidth="0.5"/>
          <line x1="180" y1="110" x2="180" y2="130" stroke="rgba(110, 231, 183, 0.4)" strokeWidth="0.5"/>
        </g>
        
        {/* Central glowing square */}
        <rect 
          x="120" 
          y="65" 
          width="60" 
          height="50" 
          rx="8" 
          fill="url(#green7-1)" 
          stroke="rgba(52, 211, 153, 0.5)" 
          strokeWidth="2"
          filter="url(#glow7)"
          className="transition-all duration-500 group-hover:stroke-[rgba(52,211,153,0.8)] group-hover:brightness-125"
        >
          <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
        </rect>
        
        {/* Inner square */}
        <rect 
          x="135" 
          y="77" 
          width="30" 
          height="26" 
          rx="4" 
          fill="none" 
          stroke="rgba(255, 255, 255, 0.4)" 
          strokeWidth="1.5"
          className="transition-all duration-500 group-hover:stroke-[rgba(255,255,255,0.7)]"
        />
        
        {/* Data flow lines inside square */}
        <g opacity="0.5" className="transition-opacity duration-500 group-hover:opacity-90">
          <line x1="140" y1="85" x2="160" y2="85" stroke="rgba(110, 231, 183, 0.6)" strokeWidth="1.5" strokeDasharray="3,2">
            <animate attributeName="stroke-dashoffset" from="0" to="5" dur="1s" repeatCount="indefinite" />
          </line>
          <line x1="140" y1="90" x2="160" y2="90" stroke="rgba(110, 231, 183, 0.5)" strokeWidth="1.5" strokeDasharray="3,2">
            <animate attributeName="stroke-dashoffset" from="0" to="5" dur="1.2s" repeatCount="indefinite" />
          </line>
          <line x1="140" y1="95" x2="160" y2="95" stroke="rgba(110, 231, 183, 0.4)" strokeWidth="1.5" strokeDasharray="3,2">
            <animate attributeName="stroke-dashoffset" from="0" to="5" dur="1.4s" repeatCount="indefinite" />
          </line>
        </g>
        
        {/* Highlight dots within grid that connect to center */}
        <circle cx="120" cy="70" r="3" fill="rgba(52, 211, 153, 0.8)" className="transition-all duration-500 group-hover:r-[5px] group-hover:fill-[rgba(52,211,153,1)]">
          <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="180" cy="70" r="3" fill="rgba(52, 211, 153, 0.8)" className="transition-all duration-500 group-hover:r-[5px] group-hover:fill-[rgba(52,211,153,1)]">
          <animate attributeName="r" values="3;4;3" dur="2.2s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="120" cy="110" r="3" fill="rgba(52, 211, 153, 0.8)" className="transition-all duration-500 group-hover:r-[5px] group-hover:fill-[rgba(52,211,153,1)]">
          <animate attributeName="r" values="3;4;3" dur="2.4s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="180" cy="110" r="3" fill="rgba(52, 211, 153, 0.8)" className="transition-all duration-500 group-hover:r-[5px] group-hover:fill-[rgba(52,211,153,1)]">
          <animate attributeName="r" values="3;4;3" dur="2.6s" repeatCount="indefinite" />
        </circle>
        
        {/* Subtle pulse from center */}
        <rect 
          x="120" 
          y="65" 
          width="60" 
          height="50" 
          rx="8" 
          fill="none" 
          stroke="rgba(52, 211, 153, 0.3)" 
          strokeWidth="1"
          className="transition-opacity duration-500 group-hover:stroke-[rgba(52,211,153,0.6)]"
        >
          <animate attributeName="width" values="60;70;60" dur="3s" repeatCount="indefinite" />
          <animate attributeName="height" values="50;60;50" dur="3s" repeatCount="indefinite" />
          <animate attributeName="x" values="120;115;120" dur="3s" repeatCount="indefinite" />
          <animate attributeName="y" values="65;60;65" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
        </rect>
        
        {/* Data packets moving outward from center */}
        <circle r="2" fill="rgba(110, 231, 183, 0.9)" filter="url(#glow7)" className="transition-all duration-500 group-hover:r-[3px]">
          <animateMotion dur="2s" repeatCount="indefinite">
            <mpath href="#datapath1"/>
          </animateMotion>
          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
        </circle>
        
        <circle r="2" fill="rgba(110, 231, 183, 0.9)" filter="url(#glow7)" className="transition-all duration-500 group-hover:r-[3px]">
          <animateMotion dur="2s" repeatCount="indefinite" begin="0.5s">
            <mpath href="#datapath2"/>
          </animateMotion>
          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.5s"/>
        </circle>
        
        <circle r="2" fill="rgba(110, 231, 183, 0.9)" filter="url(#glow7)" className="transition-all duration-500 group-hover:r-[3px]">
          <animateMotion dur="2s" repeatCount="indefinite" begin="1s">
            <mpath href="#datapath3"/>
          </animateMotion>
          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1s"/>
        </circle>
        
        <circle r="2" fill="rgba(110, 231, 183, 0.9)" filter="url(#glow7)" className="transition-all duration-500 group-hover:r-[3px]">
          <animateMotion dur="2s" repeatCount="indefinite" begin="1.5s">
            <mpath href="#datapath4"/>
          </animateMotion>
          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1.5s"/>
        </circle>
        
        {/* Data packet paths (invisible) */}
        <path id="datapath1" d="M 150,90 L 120,70" fill="none"/>
        <path id="datapath2" d="M 150,90 L 180,70" fill="none"/>
        <path id="datapath3" d="M 150,90 L 120,110" fill="none"/>
        <path id="datapath4" d="M 150,90 L 180,110" fill="none"/>
        
        {/* Radiating dots outward from grid corners */}
        {/* Top row radiating dots */}
        <circle cx="70" cy="50" r="2" fill="rgba(110, 231, 183, 0.4)" className="transition-all duration-500 group-hover:r-[3.5px] group-hover:fill-[rgba(110,231,183,0.7)]">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="50" cy="50" r="1.5" fill="rgba(110, 231, 183, 0.3)" className="transition-all duration-500 group-hover:r-[2.5px] group-hover:fill-[rgba(110,231,183,0.6)]">
          <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2.8s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="230" cy="50" r="2" fill="rgba(110, 231, 183, 0.4)" className="transition-all duration-500 group-hover:r-[3.5px] group-hover:fill-[rgba(110,231,183,0.7)]">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.6s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="250" cy="50" r="1.5" fill="rgba(110, 231, 183, 0.3)" className="transition-all duration-500 group-hover:r-[2.5px] group-hover:fill-[rgba(110,231,183,0.6)]">
          <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2.9s" repeatCount="indefinite" />
        </circle>
        
        {/* Middle row radiating dots */}
        <circle cx="70" cy="90" r="2" fill="rgba(110, 231, 183, 0.4)" className="transition-all duration-500 group-hover:r-[3.5px] group-hover:fill-[rgba(110,231,183,0.7)]">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.7s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="50" cy="90" r="1.5" fill="rgba(110, 231, 183, 0.3)" className="transition-all duration-500 group-hover:r-[2.5px] group-hover:fill-[rgba(110,231,183,0.6)]">
          <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="230" cy="90" r="2" fill="rgba(110, 231, 183, 0.4)" className="transition-all duration-500 group-hover:r-[3.5px] group-hover:fill-[rgba(110,231,183,0.7)]">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.8s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="250" cy="90" r="1.5" fill="rgba(110, 231, 183, 0.3)" className="transition-all duration-500 group-hover:r-[2.5px] group-hover:fill-[rgba(110,231,183,0.6)]">
          <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3.1s" repeatCount="indefinite" />
        </circle>
        
        {/* Bottom row radiating dots */}
        <circle cx="70" cy="130" r="2" fill="rgba(110, 231, 183, 0.4)" className="transition-all duration-500 group-hover:r-[3.5px] group-hover:fill-[rgba(110,231,183,0.7)]">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.9s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="50" cy="130" r="1.5" fill="rgba(110, 231, 183, 0.3)" className="transition-all duration-500 group-hover:r-[2.5px] group-hover:fill-[rgba(110,231,183,0.6)]">
          <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3.2s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="230" cy="130" r="2" fill="rgba(110, 231, 183, 0.4)" className="transition-all duration-500 group-hover:r-[3.5px] group-hover:fill-[rgba(110,231,183,0.7)]">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="250" cy="130" r="1.5" fill="rgba(110, 231, 183, 0.3)" className="transition-all duration-500 group-hover:r-[2.5px] group-hover:fill-[rgba(110,231,183,0.6)]">
          <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3.3s" repeatCount="indefinite" />
        </circle>
        
        {/* Diagonal corners */}
        <circle cx="60" cy="40" r="1.5" fill="rgba(110, 231, 183, 0.3)" className="transition-all duration-500 group-hover:r-[2.5px] group-hover:fill-[rgba(110,231,183,0.6)]">
          <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3.1s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="240" cy="40" r="1.5" fill="rgba(110, 231, 183, 0.3)" className="transition-all duration-500 group-hover:r-[2.5px] group-hover:fill-[rgba(110,231,183,0.6)]">
          <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3.2s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="60" cy="140" r="1.5" fill="rgba(110, 231, 183, 0.3)" className="transition-all duration-500 group-hover:r-[2.5px] group-hover:fill-[rgba(110,231,183,0.6)]">
          <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3.3s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="240" cy="140" r="1.5" fill="rgba(110, 231, 183, 0.3)" className="transition-all duration-500 group-hover:r-[2.5px] group-hover:fill-[rgba(110,231,183,0.6)]">
          <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3.4s" repeatCount="indefinite" />
        </circle>
        
        {/* Far outer dots */}
        <circle cx="40" cy="30" r="1" fill="rgba(110, 231, 183, 0.2)" className="transition-all duration-500 group-hover:r-[2px] group-hover:fill-[rgba(110,231,183,0.5)]">
          <animate attributeName="opacity" values="0.05;0.3;0.05" dur="3.5s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="260" cy="30" r="1" fill="rgba(110, 231, 183, 0.2)" className="transition-all duration-500 group-hover:r-[2px] group-hover:fill-[rgba(110,231,183,0.5)]">
          <animate attributeName="opacity" values="0.05;0.3;0.05" dur="3.6s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="40" cy="150" r="1" fill="rgba(110, 231, 183, 0.2)" className="transition-all duration-500 group-hover:r-[2px] group-hover:fill-[rgba(110,231,183,0.5)]">
          <animate attributeName="opacity" values="0.05;0.3;0.05" dur="3.7s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="260" cy="150" r="1" fill="rgba(110, 231, 183, 0.2)" className="transition-all duration-500 group-hover:r-[2px] group-hover:fill-[rgba(110,231,183,0.5)]">
          <animate attributeName="opacity" values="0.05;0.3;0.05" dur="3.8s" repeatCount="indefinite" />
        </circle>
        
        {/* Corner accent glows */}
        <circle cx="30" cy="25" r="8" fill="rgba(110, 231, 183, 0.05)" filter="url(#glow7)" className="transition-all duration-500 group-hover:opacity-100 group-hover:r-[12px]">
          <animate attributeName="opacity" values="0.05;0.15;0.05" dur="4s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="270" cy="25" r="8" fill="rgba(110, 231, 183, 0.05)" filter="url(#glow7)" className="transition-all duration-500 group-hover:opacity-100 group-hover:r-[12px]">
          <animate attributeName="opacity" values="0.05;0.15;0.05" dur="4.2s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="30" cy="155" r="8" fill="rgba(110, 231, 183, 0.05)" filter="url(#glow7)" className="transition-all duration-500 group-hover:opacity-100 group-hover:r-[12px]">
          <animate attributeName="opacity" values="0.05;0.15;0.05" dur="4.4s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="270" cy="155" r="8" fill="rgba(110, 231, 183, 0.05)" filter="url(#glow7)" className="transition-all duration-500 group-hover:opacity-100 group-hover:r-[12px]">
          <animate attributeName="opacity" values="0.05;0.15;0.05" dur="4.6s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}