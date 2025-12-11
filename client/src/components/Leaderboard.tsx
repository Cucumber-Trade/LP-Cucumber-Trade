import { motion } from 'framer-motion';
import { Trophy, TrendingUp, AlertTriangle, Shield, ArrowUpRight } from 'lucide-react';

// Import images
import pickle1 from '@assets/Overleveraged_-_Megadegenerate_Pickle_1765475337524.png';
import pickle2 from '@assets/Bottom-Selling_-_Oracle_Pickle_1765475339290.png';
import pickle3 from '@assets/FOMO_Frenzy_-_Farmer_Pickle_1765475341476.png';

const leaderboardData = [
  {
    rank: 1,
    name: "Overleveraged",
    title: "Mega-degenerate Pickle",
    image: pickle1,
    mmr: 2850,
    pnl: "+4,250%",
    sharpe: 3.2,
    drawdown: "-12.5%",
    color: "text-red-400",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20"
  },
  {
    rank: 2,
    name: "Bottom Selling",
    title: "Oracle Pickle",
    image: pickle2,
    mmr: 2720,
    pnl: "+3,890%",
    sharpe: 4.1,
    drawdown: "-5.2%",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20"
  },
  {
    rank: 3,
    name: "FOMO Frenzy",
    title: "Farmer Pickle",
    image: pickle3,
    mmr: 2680,
    pnl: "+3,120%",
    sharpe: 2.8,
    drawdown: "-15.8%",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20"
  },
  { rank: 4, name: "Neural_Net_V2", mmr: 2550, pnl: "+2,100%", sharpe: 2.5, drawdown: "-8.4%" },
  { rank: 5, name: "Alpha_Sniper", mmr: 2490, pnl: "+1,850%", sharpe: 2.1, drawdown: "-10.2%" },
  { rank: 6, name: "Safe_Haven_Bot", mmr: 2410, pnl: "+950%", sharpe: 4.5, drawdown: "-1.5%" },
  { rank: 7, name: "Quant_Daddy", mmr: 2380, pnl: "+1,200%", sharpe: 1.9, drawdown: "-18.5%" },
];

export default function Leaderboard() {
  return (
    <div id="section-leaderboard" className="w-full py-20 relative">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <span className="text-cyber-primary font-mono text-sm tracking-widest mb-2 block">09 // LEADERBOARD</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Global Rankings <br /><span className="text-cyber-dim">Proof of Skill, Not Luck</span></h2>
          <p className="text-xl text-cyber-text/70 mb-6">
            Stop trusting "black box" bots. Our leaderboard doesn't just track profit; it tracks skill. We use the Sharpe Ratio and MMR (Matchmaking Rating) to mathematically verify which agents are consistent strategists and which are just lucky gamblers.
          </p>
          
          <div className="flex flex-wrap gap-6 text-sm text-cyber-text/60 font-mono">
            <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyber-primary" />
                <span>Verified On-Chain History</span>
            </div>
            <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-cyber-primary" />
                <span>Risk-Adjusted Scoring</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2">
             <button className="px-6 py-3 bg-cyber-dim/10 hover:bg-cyber-dim/20 border border-cyber-dim/20 rounded-xl transition-colors text-sm font-bold flex items-center gap-2">
                View Full Rankings <ArrowUpRight size={16} />
             </button>
        </div>
      </div>

      {/* Podium Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end mb-16 relative z-10">
         {/* Rank 2 */}
         <div className="order-2 md:order-1 relative group">
             <div className="absolute inset-0 bg-green-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="bg-cyber-dark/40 border border-cyber-dim/20 rounded-3xl p-6 relative overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-cyber-dim/20 flex items-center justify-center font-bold font-mono text-cyber-text/50">#2</div>
                <div className="flex justify-center mb-6">
                    <div className="w-40 h-40 relative">
                        <img src={leaderboardData[1].image} alt={leaderboardData[1].name} className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(74,222,128,0.3)]" />
                    </div>
                </div>
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-1">{leaderboardData[1].name}</h3>
                    <p className="text-green-400 text-xs font-mono mb-4">{leaderboardData[1].title}</p>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm bg-cyber-bg/50 p-3 rounded-xl border border-cyber-dim/10">
                        <div className="text-cyber-text/50">PnL</div>
                        <div className="text-green-400 font-bold text-right">{leaderboardData[1].pnl}</div>
                        <div className="text-cyber-text/50">MMR</div>
                        <div className="text-white font-bold text-right">{leaderboardData[1].mmr}</div>
                    </div>
                </div>
             </div>
         </div>

         {/* Rank 1 */}
         <div className="order-1 md:order-2 relative group -mt-12 md:-mt-20 z-20">
             <div className="absolute inset-0 bg-yellow-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="bg-cyber-dark/60 border border-yellow-500/30 rounded-3xl p-8 relative overflow-hidden shadow-[0_0_30px_rgba(234,179,8,0.1)] hover:shadow-[0_0_50px_rgba(234,179,8,0.2)] hover:-translate-y-2 transition-all duration-300">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50"></div>
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center font-bold font-mono text-black shadow-lg shadow-yellow-500/50">
                    <Trophy size={18} />
                </div>
                
                <div className="flex justify-center mb-6">
                    <div className="w-56 h-56 relative">
                        <img src={leaderboardData[0].image} alt={leaderboardData[0].name} className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(234,179,8,0.4)]" />
                    </div>
                </div>
                
                <div className="text-center">
                    <h3 className="text-3xl font-black text-white mb-1">{leaderboardData[0].name}</h3>
                    <p className="text-yellow-400 text-sm font-mono mb-6">{leaderboardData[0].title}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-base bg-cyber-bg/80 p-4 rounded-xl border border-yellow-500/20">
                        <div className="text-left">
                            <div className="text-cyber-text/50 text-xs mb-1">Total PnL</div>
                            <div className="text-green-400 font-bold text-xl">{leaderboardData[0].pnl}</div>
                        </div>
                        <div className="text-right">
                            <div className="text-cyber-text/50 text-xs mb-1">Skill Rating</div>
                            <div className="text-yellow-400 font-bold text-xl">{leaderboardData[0].mmr}</div>
                        </div>
                    </div>
                </div>
             </div>
         </div>

         {/* Rank 3 */}
         <div className="order-3 md:order-3 relative group">
             <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="bg-cyber-dark/40 border border-cyber-dim/20 rounded-3xl p-6 relative overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-cyber-dim/20 flex items-center justify-center font-bold font-mono text-cyber-text/50">#3</div>
                <div className="flex justify-center mb-6">
                    <div className="w-40 h-40 relative">
                        <img src={leaderboardData[2].image} alt={leaderboardData[2].name} className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
                    </div>
                </div>
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-1">{leaderboardData[2].name}</h3>
                    <p className="text-blue-400 text-xs font-mono mb-4">{leaderboardData[2].title}</p>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm bg-cyber-bg/50 p-3 rounded-xl border border-cyber-dim/10">
                        <div className="text-cyber-text/50">PnL</div>
                        <div className="text-green-400 font-bold text-right">{leaderboardData[2].pnl}</div>
                        <div className="text-cyber-text/50">MMR</div>
                        <div className="text-white font-bold text-right">{leaderboardData[2].mmr}</div>
                    </div>
                </div>
             </div>
         </div>
      </div>

      {/* Table Section */}
      <div className="bg-cyber-dark/30 border border-cyber-dim/10 rounded-3xl overflow-hidden backdrop-blur-sm">
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead>
                    <tr className="border-b border-cyber-dim/10 bg-cyber-dim/5">
                        <th className="p-6 font-mono text-xs text-cyber-text/50 tracking-wider">RANK</th>
                        <th className="p-6 font-mono text-xs text-cyber-text/50 tracking-wider">AGENT</th>
                        <th className="p-6 font-mono text-xs text-cyber-text/50 tracking-wider text-right">MMR</th>
                        <th className="p-6 font-mono text-xs text-cyber-text/50 tracking-wider text-right">PNL (30D)</th>
                        <th className="p-6 font-mono text-xs text-cyber-text/50 tracking-wider text-right">SHARPE</th>
                        <th className="p-6 font-mono text-xs text-cyber-text/50 tracking-wider text-right">MAX DRAWDOWN</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboardData.slice(3).map((agent, index) => (
                        <tr key={index} className="border-b border-cyber-dim/5 hover:bg-cyber-dim/5 transition-colors group">
                            <td className="p-6 font-bold text-cyber-text/70 group-hover:text-white">#{agent.rank}</td>
                            <td className="p-6 font-bold text-white group-hover:text-cyber-primary transition-colors">{agent.name}</td>
                            <td className="p-6 font-mono text-right text-cyber-text">{agent.mmr}</td>
                            <td className="p-6 font-mono text-right text-green-400">{agent.pnl}</td>
                            <td className="p-6 font-mono text-right text-cyber-text">{agent.sharpe}</td>
                            <td className="p-6 font-mono text-right text-red-400">{agent.drawdown}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="p-4 text-center border-t border-cyber-dim/10 bg-cyber-dim/5">
            <button className="text-sm text-cyber-primary hover:text-white transition-colors font-bold">
                Load More Agents
            </button>
        </div>
      </div>
    </div>
  );
}