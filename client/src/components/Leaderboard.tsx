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
        borderColor: "border-red-500/20",
        bonus: "+5,000 CUC"
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
        borderColor: "border-green-500/20",
        bonus: "+2,500 CUC"
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
        borderColor: "border-yellow-500/20",
        bonus: "+1,000 CUC"
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
            <div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-8 md:gap-4 lg:gap-8 mb-24 relative z-10 px-4 mt-12 md:mt-0">

                {/* Rank 2 */}
                <div className="order-2 md:order-1 flex flex-col items-center w-full md:w-1/3 max-w-[280px] md:max-w-xs relative">
                    {/* Card */}
                    <div className="bg-cyber-dark/80 border border-cyber-dim/20 rounded-3xl p-5 w-full relative overflow-visible hover:-translate-y-2 transition-transform duration-300 z-10 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                        {/* Bonus Overlay */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="absolute -top-4 right-0 md:-top-6 md:-right-4 bg-cyber-dark border border-cyber-primary/30 shadow-[0_0_20px_rgba(154,205,50,0.15)] rounded-xl p-2 z-50 flex flex-col items-center min-w-[80px]"
                        >
                            <div className="flex items-center gap-1 text-xs font-bold text-cyber-text mb-1">
                                Bonus <span>🎉</span>
                            </div>
                            <div className="bg-cyber-primary/10 text-cyber-primary text-xs font-bold px-2 py-1 rounded-md w-full text-center border border-cyber-primary/20 shadow-[0_0_10px_rgba(154,205,50,0.1)]">
                                {leaderboardData[1].bonus}
                            </div>
                        </motion.div>

                        <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-cyber-dim/20 flex items-center justify-center font-bold font-mono text-cyber-text/50">#2</div>
                        <div className="flex justify-center mb-4 -mt-2">
                            <div className="w-28 h-28 relative transform hover:scale-105 transition-transform duration-500">
                                <img src={leaderboardData[1].image} alt={leaderboardData[1].name} className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(74,222,128,0.3)]" />
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-white mb-1 truncate">{leaderboardData[1].name}</h3>
                            <p className="text-green-400 text-xs font-mono mb-4">{leaderboardData[1].title}</p>

                            <div className="grid grid-cols-2 gap-2 text-xs bg-cyber-bg/50 p-2 rounded-xl border border-cyber-dim/10">
                                <div className="text-cyber-text/50">PnL</div>
                                <div className="text-green-400 font-bold text-right">{leaderboardData[1].pnl}</div>
                                <div className="text-cyber-text/50">MMR</div>
                                <div className="text-white font-bold text-right">{leaderboardData[1].mmr}</div>
                            </div>
                        </div>
                    </div>
                    {/* Base */}
                    <div className="w-[85%] h-24 md:h-32 bg-gradient-to-t from-cyber-dim/10 to-transparent border-x border-t border-cyber-dim/10 rounded-t-2xl mt-[-24px] pt-8 relative z-0"></div>
                </div>

                {/* Rank 1 */}
                <div className="order-1 md:order-2 flex flex-col items-center w-full md:w-1/3 max-w-[280px] md:max-w-xs relative z-20 mb-12 md:mb-0">
                    {/* Glowing Effect */}
                    <div className="absolute inset-0 bg-yellow-500/20 blur-[60px] rounded-full -z-10 opacity-60 animate-pulse-slow"></div>

                    {/* Card */}
                    <div className="bg-cyber-dark/90 border border-yellow-500/30 rounded-3xl p-6 w-full relative overflow-visible shadow-[0_0_40px_rgba(234,179,8,0.15)] hover:shadow-[0_0_60px_rgba(234,179,8,0.25)] hover:-translate-y-2 transition-all duration-300 backdrop-blur-md z-20">
                        {/* Bonus Overlay */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="absolute -top-6 right-0 md:-top-8 md:-right-6 bg-cyber-dark border border-cyber-primary/30 shadow-[0_0_25px_rgba(154,205,50,0.2)] rounded-xl p-3 z-50 flex flex-col items-center min-w-[100px]"
                        >
                            <div className="flex items-center gap-1 text-sm font-bold text-cyber-text mb-1">
                                Bonus <span>🐝</span>
                            </div>
                            <div className="bg-cyber-primary/10 text-cyber-primary text-sm font-bold px-3 py-1.5 rounded-md w-full text-center border border-cyber-primary/20 shadow-[0_0_15px_rgba(154,205,50,0.15)]">
                                {leaderboardData[0].bonus}
                            </div>
                        </motion.div>

                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50 rounded-t-3xl"></div>
                        <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center font-bold font-mono text-black shadow-lg shadow-yellow-500/50 z-20">
                            <Trophy size={18} />
                        </div>

                        <div className="flex justify-center mb-6">
                            <div className="w-40 h-40 relative transform hover:scale-110 transition-transform duration-500">
                                <img src={leaderboardData[0].image} alt={leaderboardData[0].name} className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(234,179,8,0.4)]" />
                            </div>
                        </div>

                        <div className="text-center relative z-10">
                            <h3 className="text-2xl font-black text-white mb-1 truncate">{leaderboardData[0].name}</h3>
                            <p className="text-yellow-400 text-sm font-mono mb-6">{leaderboardData[0].title}</p>

                            <div className="grid grid-cols-2 gap-4 text-sm bg-cyber-bg/80 p-4 rounded-xl border border-yellow-500/20 shadow-inner">
                                <div className="text-left">
                                    <div className="text-cyber-text/50 text-xs mb-1">Total PnL</div>
                                    <div className="text-green-400 font-bold text-lg">{leaderboardData[0].pnl}</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-cyber-text/50 text-xs mb-1">Skill Rating</div>
                                    <div className="text-yellow-400 font-bold text-lg">{leaderboardData[0].mmr}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Base */}
                    <div className="w-[90%] h-32 md:h-48 bg-gradient-to-t from-yellow-500/10 to-transparent border-x border-t border-yellow-500/20 rounded-t-2xl mt-[-24px] pt-8 relative z-0">
                        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-yellow-500/5 to-transparent"></div>
                    </div>
                </div>

                {/* Rank 3 */}
                <div className="order-3 md:order-3 flex flex-col items-center w-full md:w-1/3 max-w-[320px] md:max-w-sm relative">
                    {/* Card */}
                    <div className="bg-cyber-dark/80 border border-cyber-dim/20 rounded-3xl p-6 w-full relative overflow-visible hover:-translate-y-2 transition-transform duration-300 z-10 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                        {/* Bonus Overlay */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="absolute -top-4 right-0 md:-top-6 md:-right-4 bg-cyber-dark border border-cyber-primary/30 shadow-[0_0_20px_rgba(154,205,50,0.15)] rounded-xl p-2 z-50 flex flex-col items-center min-w-[80px]"
                        >
                            <div className="flex items-center gap-1 text-xs font-bold text-cyber-text mb-1">
                                Bonus <span>🚀</span>
                            </div>
                            <div className="bg-cyber-primary/10 text-cyber-primary text-xs font-bold px-2 py-1 rounded-md w-full text-center border border-cyber-primary/20 shadow-[0_0_10px_rgba(154,205,50,0.1)]">
                                {leaderboardData[2].bonus}
                            </div>
                        </motion.div>

                        <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-cyber-dim/20 flex items-center justify-center font-bold font-mono text-cyber-text/50">#3</div>
                        <div className="flex justify-center mb-4 -mt-2">
                            <div className="w-32 h-32 relative transform hover:scale-105 transition-transform duration-500">
                                <img src={leaderboardData[2].image} alt={leaderboardData[2].name} className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-white mb-1 truncate">{leaderboardData[2].name}</h3>
                            <p className="text-blue-400 text-xs font-mono mb-4">{leaderboardData[2].title}</p>

                            <div className="grid grid-cols-2 gap-2 text-xs bg-cyber-bg/50 p-2 rounded-xl border border-cyber-dim/10">
                                <div className="text-cyber-text/50">PnL</div>
                                <div className="text-green-400 font-bold text-right">{leaderboardData[2].pnl}</div>
                                <div className="text-cyber-text/50">MMR</div>
                                <div className="text-white font-bold text-right">{leaderboardData[2].mmr}</div>
                            </div>
                        </div>
                    </div>
                    {/* Base */}
                    <div className="w-[85%] h-16 md:h-24 bg-gradient-to-t from-cyber-dim/10 to-transparent border-x border-t border-cyber-dim/10 rounded-t-2xl mt-[-24px] pt-8 relative z-0"></div>
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