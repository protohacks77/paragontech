import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, Send, Calculator } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: ''
  });

  const [showQuoteCalculator, setShowQuoteCalculator] = useState(false);
  const [quoteData, setQuoteData] = useState({
    projectType: 'website',
    complexity: 'medium',
    features: [],
    timeline: 'standard'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'paragontech@gmail.com',
      href: 'mailto:paragontech@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+263 782 456 936',
      href: 'tel:+263782456936'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'WhatsApp',
      value: '+263 71 395 2798',
      href: 'https://wa.me/263713952798'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: '190 Rugare Street, Pangolin',
      href: '#'
    }
  ];

  const services = [
    'Web Development',
    'School Tech Platforms',
    'Creative Media',
    'Photography Services',
    'Document Solutions',
    'Mobile Development',
    'Consulting'
  ];

  const calculateEstimate = () => {
    let basePrice = 0;
    const { projectType, complexity, features, timeline } = quoteData;

    // Base prices
    const basePrices = {
      website: 2000,
      webapp: 5000,
      mobile: 3000,
      ecommerce: 4000,
      platform: 8000
    };

    basePrice = basePrices[projectType as keyof typeof basePrices] || 2000;

    // Complexity multiplier
    const complexityMultipliers = {
      simple: 0.7,
      medium: 1.0,
      complex: 1.5
    };

    basePrice *= complexityMultipliers[complexity as keyof typeof complexityMultipliers] || 1.0;

    // Timeline adjustment
    if (timeline === 'rush') basePrice *= 1.3;
    if (timeline === 'extended') basePrice *= 0.9;

    // Features addon
    basePrice += features.length * 500;

    return Math.round(basePrice);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-10 pt-24"
    >
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="font-orbitron text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyber-purple to-cyber-blue bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your digital presence? Get in touch with our team of experts and let's create something extraordinary together.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-orbitron text-2xl font-bold text-white">
                Get A Quote
              </h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowQuoteCalculator(!showQuoteCalculator)}
                className="flex items-center space-x-2 text-cyber-purple hover:text-cyber-blue transition-colors"
              >
                <Calculator className="w-5 h-5" />
                <span>Quick Calculator</span>
              </motion.button>
            </div>

            {showQuoteCalculator && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <h3 className="font-semibold text-white mb-4">Project Estimator</h3>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-white/70 mb-2">Project Type</label>
                    <select
                      value={quoteData.projectType}
                      onChange={(e) => setQuoteData(prev => ({ ...prev, projectType: e.target.value }))}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyber-purple"
                    >
                      <option value="website">Website</option>
                      <option value="webapp">Web Application</option>
                      <option value="mobile">Mobile App</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="platform">Custom Platform</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white/70 mb-2">Complexity</label>
                    <select
                      value={quoteData.complexity}
                      onChange={(e) => setQuoteData(prev => ({ ...prev, complexity: e.target.value }))}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyber-purple"
                    >
                      <option value="simple">Simple</option>
                      <option value="medium">Medium</option>
                      <option value="complex">Complex</option>
                    </select>
                  </div>
                </div>

                <div className="text-center p-4 bg-gradient-to-r from-cyber-purple/20 to-cyber-blue/20 rounded-lg">
                  <p className="text-white/70">Estimated Cost:</p>
                  <p className="text-2xl font-bold text-cyber-purple">${calculateEstimate().toLocaleString()}</p>
                  <p className="text-white/60 text-sm">*Final pricing may vary based on specific requirements</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyber-purple transition-colors"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white/70 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyber-purple transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 mb-2">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyber-purple"
                  >
                    <option value="">Select a service</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white/70 mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyber-purple"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-1000">Under $1,000</option>
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-plus">$10,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white/70 mb-2">Project Details *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyber-purple transition-colors resize-none"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyber-purple to-cyber-blue rounded-lg text-white font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-cyber-purple/30 transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </GlassCard>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <GlassCard className="p-8">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-6">
              Get In Touch
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              We're here to help you bring your digital vision to life. Reach out through any of these channels and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                >
                  <div className="text-cyber-purple group-hover:text-cyber-blue transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">{info.title}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </GlassCard>

          {/* Business Hours */}
          <GlassCard className="p-8">
            <h3 className="font-orbitron text-xl font-bold text-white mb-4">
              Business Hours
            </h3>
            <div className="space-y-2 text-white/70">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
            <p className="text-white/60 text-sm mt-4">
              Emergency support available 24/7 for existing clients
            </p>
          </GlassCard>

          {/* Quick Response */}
          <GlassCard className="p-8">
            <h3 className="font-orbitron text-xl font-bold text-white mb-4">
              Quick Response Guarantee
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-white/70">Email responses within 2 hours</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-white/70">Project quotes within 24 hours</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-white/70">Initial consultation scheduled within 48 hours</span>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Map Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <GlassCard className="p-8">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-6 text-center">
              Our Location
            </h2>
            <div className="bg-dark-800 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-white/60">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-cyber-purple" />
                <p className="text-lg font-semibold">190 Rugare Street</p>
                <p>Pangolin, Zimbabwe</p>
                <p className="text-sm mt-2">Interactive map integration available</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;