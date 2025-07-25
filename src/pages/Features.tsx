import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Zap, 
  Shield, 
  Layers, 
  Bot, 
  ArrowRightLeft, 
  Coins,
  TrendingUp,
  Lock,
  Network
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Optimization",
      description: "Our GPT-4 integration analyzes market conditions in real-time to optimize your trading routes and minimize fees.",
      benefits: ["Smart route optimization", "Predictive analytics", "Automated rebalancing"]
    },
    {
      icon: ArrowRightLeft,
      title: "Cross-Chain Bridging",
      description: "Seamlessly move assets between 23+ blockchains with LayerZero's cutting-edge infrastructure.",
      benefits: ["Instant bridging", "Minimal fees", "No wrapped tokens"]
    },
    {
      icon: Shield,
      title: "Military-Grade Security",
      description: "Multi-signature wallets, smart contract audits, and insurance coverage protect your assets.",
      benefits: ["$100M insurance coverage", "Audited smart contracts", "Bug bounty program"]
    },
    {
      icon: TrendingUp,
      title: "Yield Optimization",
      description: "Automatically compound your yields across multiple protocols and chains for maximum returns.",
      benefits: ["Auto-compounding", "Cross-chain farming", "Risk assessment"]
    },
    {
      icon: Layers,
      title: "Unified Interface",
      description: "Manage all your DeFi positions from a single, intuitive dashboard across all supported chains.",
      benefits: ["Portfolio tracking", "Unified wallet", "Cross-chain analytics"]
    },
    {
      icon: Network,
      title: "Institutional Tools",
      description: "Advanced features designed for professional traders and institutional investors.",
      benefits: ["API access", "Bulk operations", "Advanced reporting"]
    }
  ];

  const chainLogos = [
    { name: "Ethereum", color: "text-blue-400" },
    { name: "Polygon", color: "text-purple-400" },
    { name: "BSC", color: "text-yellow-400" },
    { name: "Solana", color: "text-green-400" },
    { name: "Avalanche", color: "text-red-400" },
    { name: "Arbitrum", color: "text-blue-300" },
    { name: "Optimism", color: "text-red-300" },
    { name: "Fantom", color: "text-blue-500" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-space-grotesk font-bold mb-6">
              Powerful <span className="gradient-text">Features</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the advanced capabilities that make ChronoForge the most sophisticated 
              DeFi protocol in the multi-chain ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="crypto-card group"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Chains */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
              <span className="gradient-text">23+ Blockchains</span> Supported
            </h2>
            <p className="text-xl text-muted-foreground">
              Trade and earn across the entire multi-chain ecosystem
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {chainLogos.map((chain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="crypto-card text-center min-w-[120px] group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform ${chain.color}`}>
                  <Coins className="w-6 h-6" />
                </div>
                <div className="font-medium text-sm">{chain.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="crypto-card text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
              Ready to <span className="gradient-text">Get Started</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of users already earning with ChronoForge
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Launch App
              </button>
              <button className="btn-secondary">
                Read Documentation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;