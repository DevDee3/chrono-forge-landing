import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Zap, Shield, Layers, TrendingUp, Users, Award } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process transactions in milliseconds across any blockchain with our AI-optimized routing."
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Multi-signature wallets and smart contract audits ensure your assets are always protected."
    },
    {
      icon: Layers,
      title: "Cross-Chain Native",
      description: "Seamlessly interact with Ethereum, Polygon, BSC, Solana, and 20+ other chains."
    }
  ];

  const stats = [
    { label: "Total Value Locked", value: "$2.4B", change: "+12.5%" },
    { label: "Active Users", value: "156K", change: "+8.2%" },
    { label: "Chains Supported", value: "23", change: "+3" },
    { label: "Transactions", value: "12.8M", change: "+24.1%" },
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "DeFi Researcher",
      content: "Racks" has revolutionized how I manage cross-chain positions. The AI optimization saves me hours daily."
    },
    {
      name: "Sarah Johnson",
      role: "Crypto Trader",
      content: "Finally, a protocol that just works. No more bridge failures or stuck transactions."
    },
    {
      name: "Michael Rodriguez",
      role: "Protocol Designer",
      content: "The technical architecture is impressive. This is the future of DeFi infrastructure."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Stats Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm mb-1">{stat.label}</div>
                <div className="text-accent text-xs">↗ {stat.change}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
              Why Choose <span className="gradient-text">Racks</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built for the next generation of DeFi users who demand speed, security, and simplicity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="crypto-card text-center group"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
              Trusted by <span className="gradient-text">DeFi Leaders</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="crypto-card"
              >
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
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

export default Home;