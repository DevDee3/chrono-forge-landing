import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, MessageCircle, Users, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant support from our team",
      action: "Start Chat",
      available: "24/7 Support"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed support for complex issues",
      action: "support@chronoforge.io",
      available: "Response within 2 hours"
    },
    {
      icon: Users,
      title: "Community",
      description: "Join our Discord community",
      action: "Join Discord",
      available: "10K+ Active Members"
    },
    {
      icon: Phone,
      title: "Enterprise Sales",
      description: "Dedicated support for institutions",
      action: "Schedule Call",
      available: "Business Hours"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Crypto Street, Suite 400",
      country: "United States"
    },
    {
      city: "London",
      address: "456 DeFi Lane, Floor 12",
      country: "United Kingdom"
    },
    {
      city: "Singapore",
      address: "789 Blockchain Ave, Tower B",
      country: "Singapore"
    }
  ];

  const subjects = [
    "General Inquiry",
    "Technical Support",
    "Partnership",
    "Media & Press",
    "Bug Report",
    "Feature Request"
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
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about Racks? Our team is here to help you 
              navigate the future of DeFi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="crypto-card text-center group cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <method.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{method.description}</p>
                <div className="text-primary font-medium mb-2">{method.action}</div>
                <div className="text-xs text-accent">{method.available}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-space-grotesk font-bold mb-6">
                Send us a <span className="gradient-text">Message</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    required
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject, index) => (
                      <option key={index} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <button type="submit" className="btn-primary w-full group">
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-space-grotesk font-bold mb-6">
                Our <span className="gradient-text">Offices</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Visit us at one of our global offices or reach out to our distributed team.
              </p>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="crypto-card">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{office.city}</h3>
                        <p className="text-muted-foreground text-sm mb-1">{office.address}</p>
                        <p className="text-primary text-sm">{office.country}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-12 grid grid-cols-2 gap-6">
                <div className="crypto-card text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
                <div className="crypto-card text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">&lt;2h</div>
                  <div className="text-sm text-muted-foreground">Average Response</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;