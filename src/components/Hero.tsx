import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Layers } from 'lucide-react';
import cryptoHeroBg from '@/assets/crypto-hero-bg.jpg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${cryptoHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-20 container mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium">
            <Zap className="w-4 h-4 mr-2 text-primary" />
            Powered by Solana & Alchemy infrastructure
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-space-grotesk font-bold mb-6 leading-tight"
        >
          Claim Your
          <br />
          <span className="gradient-text text-glow">RACKS Airdrop</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
        >
          Join the exclusive RACKS token distribution. Early supporters and community members 
          are eligible for free token allocation. Check your eligibility and claim now.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <button className="btn-primary group">
            Check Eligibility
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="btn-secondary">
            Claim Tokens
          </button>
        </motion.div>

        {/* Feature Icons */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center items-center space-x-12 opacity-60"
        >
          <div className="flex items-center space-x-2">
            <Shield className="w-6 h-6 text-primary" />
            <span className="text-sm">10M Total Supply</span>
          </div>
          <div className="flex items-center space-x-2">
            <Layers className="w-6 h-6 text-secondary" />
            <span className="text-sm">15% Airdrop</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="w-6 h-6 text-accent" />
            <span className="text-sm">Zero Fees</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;