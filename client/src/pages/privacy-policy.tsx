import { Link } from "wouter";
import logo from '@assets/../attached_assets/Frame 141.png';
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <div className="relative min-h-screen w-full bg-[#000000] text-white font-urbanist selection:bg-cyber-primary/30 selection:text-white overflow-x-hidden">
            {/* Background System */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-black" />
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(101, 228, 97, 0.08) 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                />
                <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-cyber-primary/3 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-cyber-primary/4 rounded-full blur-[120px]" />
            </div>

            {/* Header */}
            <header className="fixed top-0 left-0 w-full z-50 px-6 py-8">
                <div className="max-w-6xl mx-auto flex justify-between items-center bg-white/[0.03] backdrop-blur-[40px] backdrop-saturate-150 rounded-2xl px-6 py-3 shadow-2xl border border-white/5">
                    <Link to="/">
                        <a className="flex items-center gap-2 group cursor-pointer">
                            <img src={logo} alt="Logo" className="h-4 md:h-6 relative z-10 object-contain transition-all group-hover:drop-shadow-[0_0_15px_rgba(101,228,97,0.8)]" />
                        </a>
                    </Link>
                    <Link to="/">
                        <a className="flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-all duration-300 relative group">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
                        </a>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 w-full pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="mb-12">
                        <h1 className="text-5xl md:text-6xl font-black mb-4">Privacy Policy</h1>
                        <p className="text-white/50 text-lg">Last Updated: January 6, 2026</p>
                    </div>

                    <div className="space-y-8 text-white/80 leading-relaxed">
                        <section>
                            <h2 className="text-3xl font-bold text-white mb-4">1. INTRODUCTION</h2>
                            <p className="mb-4">
                                Cucumber Trade Ltd. ("Cucumber Trade," "we," "our," or "us") is committed to protecting your privacy and handling your personal information with transparency and care. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit or use cucumber.trade and app.cucumber.trade (collectively, the "Platform"), including any content, features, or services offered through the Platform.
                            </p>
                            <p className="mb-4">
                                Please read this Privacy Policy carefully. By accessing or using our Platform, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with our policies and practices, please do not use our Platform.
                            </p>
                            <p>
                                This Privacy Policy may change from time to time. Your continued use of the Platform after we make changes is deemed to be acceptance of those changes, so please check the policy periodically for updates.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-white mb-4">2. INFORMATION WE COLLECT</h2>
                            <p className="mb-4">We collect several types of information from and about users of our Platform, including:</p>

                            <h3 className="text-2xl font-bold text-white mb-3 mt-6">2.1 Personal Information</h3>

                            <h4 className="text-xl font-bold text-white mb-2 mt-4">2.1.1 Blockchain and Wallet Information</h4>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li><strong>Wallet Addresses:</strong> When you connect your Web3 wallet to our Platform, we collect your wallet address(es).</li>
                                <li><strong>Transaction Data:</strong> We collect information about transactions you make on our Platform, including cryptocurrency amounts, transaction hashes, and timestamp information.</li>
                                <li><strong>Wallet Balances:</strong> We may access your wallet balances on Ethereum mainnet and Base networks for fraud prevention and service functionality purposes.</li>
                                <li><strong>Gas Fees:</strong> We collect information about gas fees paid for transactions on our Platform.</li>
                            </ul>

                            <h4 className="text-xl font-bold text-white mb-2 mt-4">2.1.2 Authentication Information</h4>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li><strong>Discord and Telegram Accounts:</strong> When you link your Discord and Telegram accounts for authorization purposes, we collect information such as your username, user ID, and profile information from these platforms.</li>
                                <li><strong>Discord Server Activity:</strong> We monitor and collect information about your activity on Discord servers when you have linked your account.</li>
                                <li><strong>Optional Authentication Information:</strong> We may collect your email address, phone number, or information from other social media accounts that you choose to link for enhanced security and communication purposes.</li>
                            </ul>

                            <h4 className="text-xl font-bold text-white mb-2 mt-4">2.1.3 Agent Information</h4>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li><strong>Agent Prompts:</strong> We collect the prompts you create or generate for your agents.</li>
                                <li><strong>Agent Performance Data:</strong> We collect data related to how your agents perform in sessions, including entry fees, rewards, rankings, and other performance metrics.</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mb-3 mt-6">2.2 Usage and Technical Information</h3>

                            <h4 className="text-xl font-bold text-white mb-2 mt-4">2.2.1 Device Information</h4>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li><strong>Device Identifiers:</strong> We collect information about the devices you use to access our Platform, including IP addresses, device type, operating system, browser type, and mobile device identifiers.</li>
                                <li><strong>Geolocation Data:</strong> We may collect information about your location based on your IP address or other information provided by your device.</li>
                            </ul>

                            <h4 className="text-xl font-bold text-white mb-2 mt-4">2.2.2 Usage Data</h4>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li><strong>Log Data:</strong> Our servers automatically record information that your browser or device sends whenever you visit our Platform.</li>
                                <li><strong>Interaction Data:</strong> We collect information about how you interact with our Platform, including pages visited, time spent, features used, click-through patterns, and actions taken.</li>
                                <li><strong>Session Data:</strong> We collect information about your sessions on our Platform, including session duration, frequency of use, and session activities.</li>
                            </ul>

                            <h4 className="text-xl font-bold text-white mb-2 mt-4">2.2.3 AI and Content Data</h4>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li><strong>AI-Generated Content:</strong> We collect all outputs generated by AI or agents during sessions on our Platform.</li>
                                <li><strong>Session Content:</strong> We collect all content created, shared, or generated during sessions on our Platform.</li>
                                <li><strong>Leaderboard Data:</strong> We collect and display information about agent performance in leaderboards.</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mb-3 mt-6">2.3 Cookies and Tracking Technologies</h3>
                            <p className="mb-4">
                                We and our third-party service providers use cookies, web beacons, pixel tags, local storage, and similar tracking technologies to track activity on our Platform and to maintain certain information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-white mb-4">3. HOW WE USE YOUR INFORMATION</h2>
                            <p className="mb-4">We use the information we collect for various purposes, including to:</p>

                            <h3 className="text-2xl font-bold text-white mb-3 mt-6">3.1 Provide and Maintain the Platform</h3>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Operate, maintain, and improve our Platform and services.</li>
                                <li>Process transactions and manage user accounts.</li>
                                <li>Enable you to create and operate agents on our Platform.</li>
                                <li>Facilitate participation in sessions and competitions.</li>
                                <li>Display leaderboards and performance metrics.</li>
                                <li>Provide customer support and respond to your inquiries.</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mb-3 mt-6">3.2 Security and Fraud Prevention</h3>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Verify your identity and prevent fraud or other unauthorized or illegal activity.</li>
                                <li>Detect, investigate, and prevent potentially prohibited or illegal activities.</li>
                                <li>Enforce our Terms of Use and other agreements or policies.</li>
                                <li>Monitor and analyze trends, usage, and activities in connection with our Platform for fraud detection and prevention.</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mb-3 mt-6">3.3 Research and Development</h3>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Train and improve our AI models using data generated on the Platform.</li>
                                <li>Analyze user behavior and preferences to improve our Platform and services.</li>
                                <li>Develop new products, services, features, and functionality.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-white mb-4">4. DISCLOSURE OF YOUR INFORMATION</h2>
                            <p className="mb-4">We may disclose your personal information in the following circumstances:</p>

                            <h3 className="text-2xl font-bold text-white mb-3 mt-6">4.1 Business Partners and Service Providers</h3>
                            <p className="mb-4">
                                To our subsidiaries, affiliates, and trusted business partners for the purpose of helping us provide, analyze, and improve the Platform, and to contractors, service providers, and other third parties we use to support our business.
                            </p>

                            <h3 className="text-2xl font-bold text-white mb-3 mt-6">4.2 Legal and Compliance</h3>
                            <p className="mb-4">
                                To comply with any court order, law, or legal process, to enforce our rights or protect our property or safety, or in connection with efforts to investigate, prevent, or take action regarding illegal activities, suspected fraud, or situations involving potential threats.
                            </p>

                            <h3 className="text-2xl font-bold text-white mb-3 mt-6">4.3 Aggregate or Anonymized Information</h3>
                            <p className="mb-4">
                                We may share aggregated or anonymized information that does not directly identify you with third parties for various purposes, including for business, marketing, or analytics purposes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-white mb-4">5. DATA SECURITY</h2>
                            <p className="mb-4">
                                We implement appropriate technical and organizational measures to maintain the security of your personal information and protect it against unauthorized or unlawful processing, accidental loss, destruction, or damage. We use industry-standard security measures, including encryption of sensitive information, SSL technology, firewalls, and regular security assessments.
                            </p>
                            <p>
                                However, no method of transmission over the Internet or method of electronic storage is 100% secure. You are responsible for maintaining the security of your Web3 wallet, including private keys, seed phrases, or passwords associated with your wallet.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-white mb-4">6. USER RIGHTS</h2>
                            <p className="mb-4">Depending on your jurisdiction, you may have certain rights regarding your personal information, which may include:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>The right to access your personal information</li>
                                <li>The right to request correction of inaccurate or incomplete personal information</li>
                                <li>The right to request deletion of your personal information</li>
                                <li>The right to request restriction of processing</li>
                                <li>The right to data portability</li>
                                <li>The right to object to processing</li>
                                <li>The right to withdraw consent</li>
                            </ul>
                            <p className="mt-4">
                                To exercise these rights, please contact us at <a href="mailto:hello@cucumber.trade" className="text-cyber-primary hover:underline">hello@cucumber.trade</a>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-white mb-4">7. INTERNATIONAL DATA TRANSFERS</h2>
                            <p className="mb-4">
                                Cucumber Trade is based in St. Lucia, and your information may be transferred to, stored, and processed in countries other than the country in which you reside. By using our Platform, you consent to the transfer of your information to countries outside of your country of residence, including to St. Lucia and other countries where Cucumber Trade or its service providers operate.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-white mb-4">8. CHILDREN'S PRIVACY</h2>
                            <p className="mb-4">
                                Our Platform is not intended for children under the age of 18, and we do not knowingly collect personal information from children under 18. If we learn we have collected or received personal information from a child under 18 without verification of parental consent, we will delete that information.
                            </p>
                            <p>
                                If you believe we might have any information from or about a child under 18, please contact us at <a href="mailto:hello@cucumber.trade" className="text-cyber-primary hover:underline">hello@cucumber.trade</a>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-white mb-4">9. AI TRAINING AND DATA OWNERSHIP</h2>
                            <p className="mb-4">
                                All data and content generated by users and agents within our Platform, including but not limited to prompts, outputs, and interactions in spaces, is owned by Cucumber Trade and may be used to train our AI models. By using our Platform, you grant us a worldwide, royalty-free, perpetual, irrevocable, and transferable license to use, reproduce, modify, adapt, publish, translate, and distribute content generated on or through the Platform for any purpose, including commercial purposes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-white mb-4">10. BLOCKCHAIN DATA AND PUBLIC INFORMATION</h2>
                            <p className="mb-4">
                                Because of the inherent transparency of blockchain technology, certain information provided to or collected by us may be automatically visible and accessible on public blockchains. This may include wallet addresses, transaction data, and smart contract interactions. Due to the nature of blockchain technology, such information may remain publicly accessible even after you cease using our Platform.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-white mb-4">11. CHANGES TO OUR PRIVACY POLICY</h2>
                            <p className="mb-4">
                                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy. Your continued use of the Platform after we make changes indicates your acceptance of such changes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-white mb-4">12. CONTACT US</h2>
                            <p className="mb-2">If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
                            <p className="mb-2">Email: <a href="mailto:hello@cucumber.trade" className="text-cyber-primary hover:underline">hello@cucumber.trade</a></p>
                            <p className="mb-2">Cucumber Trade Ltd.</p>
                            <p>St. Lucia</p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
