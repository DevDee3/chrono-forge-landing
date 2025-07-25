import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, X, Zap, Crown, Rocket } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for getting started with DeFi",
      icon: Zap,
      features: [
        "Up to $10K monthly volume",
        "3 supported chains",
        "Basic analytics",
        "Standard support",
        "Manual yield farming",
      ],
      notIncluded: [
        "AI optimization",
        "Advanced analytics",
        "Priority support",
        "Auto-compounding",
        "API access"
      ],
      popular: false,
      buttonText: "Get Started",
      buttonVariant: "btn-secondary"
    },
    {
      name: "Pro",
      price: "$49",
      period: "/month",
      description: "For serious DeFi traders and yield farmers",
      icon: Crown,
      features: [
        "Up to $1M monthly volume",
        "All 23 supported chains",
        "AI-powered optimization",
        "Advanced analytics & insights",
        "Priority support",
        "Auto-compounding yields",
        "Portfolio rebalancing",
        "Risk management tools",
      ],
      notIncluded: [
        "API access",
        "White-label solutions"
      ],
      popular: true,
      buttonText: "Start Pro Trial",
      buttonVariant: "btn-primary"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For institutions and large-scale operations",
      icon: Rocket,
      features: [
        "Unlimited volume",
        "All chains + custom integrations",
        "Full AI optimization suite",
        "Real-time analytics dashboard",
        "24/7 dedicated support",
        "Custom yield strategies",
        "Advanced risk management",
        "API access & SDKs",
        "White-label solutions",
        "Custom fee structures",
        "Compliance tools",
      ],
      notIncluded: [],
      popular: false,
      buttonText: "Contact Sales",
      buttonVariant: "btn-secondary"
    }
  ];

  const feeStructure = [
    { tier: "Basic", tradingFee: "0.3%", withdrawalFee: "0.1%", gasCoverage: "No" },
    { tier: "Pro", tradingFee: "0.15%", withdrawalFee: "0.05%", gasCoverage: "50%" },
    { tier: "Enterprise", tradingFee: "0.05%", withdrawalFee: "0.02%", gasCoverage: "100%" },
  ];

  const benefits = [
    "No hidden fees or surprise charges",
    "Cancel anytime with full transparency",
    "30-day money-back guarantee",
    "Dedicated onboarding for Pro+ users"
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
              Simple, <span className="gradient-text">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that fits your DeFi journey. Start free and upgrade 
              as your portfolio grows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`crypto-card relative ${plan.popular ? 'ring-2 ring-primary scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <div key={i} className="flex items-center opacity-50">
                      <X className="w-5 h-5 text-muted-foreground mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full ${plan.buttonVariant}`}>
                  {plan.buttonText}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
              Fee <span className="gradient-text">Structure</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Transparent pricing with no hidden costs
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="crypto-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left py-4 px-6 font-semibold">Plan</th>
                      <th className="text-left py-4 px-6 font-semibold">Trading Fee</th>
                      <th className="text-left py-4 px-6 font-semibold">Withdrawal Fee</th>
                      <th className="text-left py-4 px-6 font-semibold">Gas Coverage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructure.map((tier, index) => (
                      <tr key={index} className="border-b border-border/25 last:border-b-0">
                        <td className="py-4 px-6 font-medium">{tier.tier}</td>
                        <td className="py-4 px-6 text-muted-foreground">{tier.tradingFee}</td>
                        <td className="py-4 px-6 text-muted-foreground">{tier.withdrawalFee}</td>
                        <td className="py-4 px-6">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            tier.gasCoverage === "100%" ? "bg-accent/20 text-accent" :
                            tier.gasCoverage === "50%" ? "bg-primary/20 text-primary" :
                            "bg-muted/50 text-muted-foreground"
                          }`}>
                            {tier.gasCoverage}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
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
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <Check className="w-6 h-6 text-accent flex-shrink-0" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="crypto-card text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
              Ready to <span className="gradient-text">Start Trading</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of users earning with ChronoForge's AI-powered DeFi platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Free Trial
              </button>
              <button className="btn-secondary">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;