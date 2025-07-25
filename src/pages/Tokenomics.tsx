import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PieChart, TrendingUp, Lock, Users, Zap, Award } from 'lucide-react';

const Tokenomics = () => {
  const tokenDistribution = [
    { category: "Community Rewards", percentage: 30, color: "bg-primary", description: "Liquidity mining and staking rewards" },
    { category: "Team & Advisors", percentage: 20, color: "bg-secondary", description: "4-year vesting with 1-year cliff" },
    { category: "Public Sale", percentage: 15, color: "bg-accent", description: "Fair launch and public distribution" },
    { category: "Treasury", percentage: 15, color: "bg-neon-purple", description: "Protocol development and partnerships" },
    { category: "Ecosystem Fund", percentage: 10, color: "bg-neon-blue", description: "Grants and ecosystem growth" },
    { category: "Private Sale", percentage: 10, color: "bg-neon-pink", description: "Strategic investors and VCs" },
  ];

  const tokenMetrics = [
    { label: "Token Symbol", value: "RACKS", icon: Zap },
    { label: "Total Supply", value: "1,000,000,000", icon: TrendingUp },
    { label: "Circulating Supply", value: "150,000,000", icon: Users },
    { label: "Current Price", value: "$0.42", icon: Award },
  ];

  const vestingSchedule = [
    { group: "Community Rewards", schedule: "Released linearly over 4 years based on participation" },
    { group: "Team & Advisors", schedule: "1-year cliff, then 25% annually for 4 years" },
    { group: "Public Sale", schedule: "20% at TGE, then 20% quarterly for 4 quarters" },
    { group: "Treasury", schedule: "Unlocked based on governance decisions" },
    { group: "Ecosystem Fund", schedule: "Released quarterly based on milestone achievements" },
    { group: "Private Sale", schedule: "6-month cliff, then 12.5% quarterly for 8 quarters" },
  ];

  const utilities = [
    {
      title: "Governance",
      description: "Vote on protocol upgrades, fee structures, and treasury management decisions.",
      icon: Users
    },
    {
      title: "Staking Rewards",
      description: "Stake RACKS tokens to earn yield and participate in protocol revenue sharing.",
      icon: TrendingUp
    },
    {
      title: "Fee Discounts",
      description: "Reduced trading fees and premium features for RACKS token holders.",
      icon: Award
    },
    {
      title: "Liquidity Mining",
      description: "Earn additional RACKS tokens by providing liquidity to supported pools.",
      icon: Zap
    },
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
              <span className="gradient-text">RACKS</span> Tokenomics
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the economic model powering the Racks ecosystem. 
              Designed for sustainable growth and community-driven governance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Token Metrics */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {tokenMetrics.map((metric, index) => (
              <div key={index} className="crypto-card text-center">
                <metric.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                  {metric.value}
                </div>
                <div className="text-muted-foreground text-sm">{metric.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Token Distribution */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
              Token <span className="gradient-text">Distribution</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Pie Chart Representation */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                {/* Simplified pie chart using divs */}
                <div className="w-full h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <PieChart className="w-16 h-16 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold">1B RACKS</div>
                    <div className="text-muted-foreground">Total Supply</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Distribution Breakdown */}
            <div className="space-y-4">
              {tokenDistribution.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="crypto-card"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded ${item.color}`}></div>
                      <span className="font-semibold">{item.category}</span>
                    </div>
                    <span className="font-bold text-lg">{item.percentage}%</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Token Utilities */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
              Token <span className="gradient-text">Utility</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              RACKS tokens unlock exclusive benefits and governance rights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {utilities.map((utility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="crypto-card text-center group"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <utility.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">{utility.title}</h3>
                <p className="text-muted-foreground">{utility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vesting Schedule */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
              Vesting <span className="gradient-text">Schedule</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {vestingSchedule.map((vesting, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="crypto-card"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-center space-x-3 mb-2 md:mb-0">
                    <Lock className="w-5 h-5 text-primary" />
                    <span className="font-semibold">{vesting.group}</span>
                  </div>
                  <span className="text-muted-foreground text-sm">{vesting.schedule}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tokenomics;