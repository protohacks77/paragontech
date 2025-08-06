import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Rocket, Star } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Home = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'School Platforms',
      description: 'Complete educational management systems and learning platforms'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Creative Media',
      description: 'Branding, photography, and multimedia content creation'
    }
  ];

  const projects = [
    { name: 'ExamsideMan', url: 'https://examsidemann.org', category: 'Education' },
    { name: 'Mwenezi Pay Fees', url: 'https://mwenezipayfees.netlify.app', category: 'Fintech' },
    { name: 'Prominent Carpentry', url: 'https://prominentcarpentry.netlify.org', category: 'Business' },
    { name: 'ScanBiz App', url: 'https://scanbizapp.netlify.app', category: 'Tech' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-10"
    >
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="font-orbitron font-bold text-5xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-white via-cyber-purple to-cyber-blue bg-clip-text text-transparent animate-glow">
              PARAGON
            </h1>
            <h2 className="font-orbitron text-2xl md:text-4xl mb-6 text-white/90">
              TECH SOLUTIONS
            </h2>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Next-generation technology solutions that transform ideas into digital reality. 
              We craft exceptional web experiences and innovative platforms.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-cyber-purple to-cyber-blue rounded-full text-white font-semibold text-lg flex items-center space-x-2 hover:shadow-lg hover:shadow-cyber-purple/30 transition-all duration-300"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-lg hover:bg-white/5 transition-all duration-300"
              >
                View Portfolio
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-white">
              Our <span className="bg-gradient-to-r from-cyber-purple to-cyber-blue bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              We deliver cutting-edge solutions across multiple domains
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-8 h-full">
                  <div className="text-cyber-purple mb-4">{service.icon}</div>
                  <h3 className="font-orbitron text-xl font-bold mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {service.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-white">
              Featured <span className="bg-gradient-to-r from-cyber-purple to-cyber-blue bg-clip-text text-transparent">Projects</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-6 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <Star className="w-5 h-5 text-cyber-blue" />
                    <span className="text-xs text-cyber-purple font-medium px-2 py-1 bg-cyber-purple/10 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">{project.name}</h3>
                  <p className="text-white/60 text-sm">Visit live project →</p>
                </GlassCard>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's transform your vision into a digital masterpiece. Get started with a free consultation.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 bg-gradient-to-r from-cyber-purple to-cyber-blue rounded-full text-white font-bold text-lg hover:shadow-lg hover:shadow-cyber-purple/30 transition-all duration-300"
              >
                Get Started Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;