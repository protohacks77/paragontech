import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'ExamsideMan',
      category: 'Education',
      url: 'https://examsidemann.org',
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive online examination platform with advanced analytics and secure test delivery',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      features: ['Real-time Monitoring', 'Anti-Cheating System', 'Detailed Analytics', 'Multi-format Questions']
    },
    {
      title: 'Mwenezi Pay Fees',
      category: 'Fintech',
      url: 'https://mwenezipayfees.netlify.app',
      image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern school fee payment platform with multiple payment gateways and receipt management',
      technologies: ['React', 'Firebase', 'Stripe API', 'PDF.js'],
      features: ['Multiple Payment Methods', 'Receipt Generation', 'Payment Tracking', 'Mobile Responsive']
    },
    {
      title: 'Prominent Carpentry',
      category: 'Business',
      url: 'https://prominentcarpentry.netlify.org',
      image: 'https://images.pexels.com/photos/162551/carpenter-wood-hammer-wooden-162551.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional carpentry business website with portfolio showcase and service booking',
      technologies: ['React', 'TailwindCSS', 'Framer Motion', 'Netlify Forms'],
      features: ['Portfolio Gallery', 'Service Booking', 'Contact Forms', 'SEO Optimized']
    },
    {
      title: 'ScanBiz App',
      category: 'Tech',
      url: 'https://scanbizapp.netlify.app',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'QR code business card solution with digital contact sharing and analytics',
      technologies: ['React', 'QR.js', 'Local Storage', 'PWA'],
      features: ['QR Code Generation', 'Digital Business Cards', 'Contact Sharing', 'Analytics Dashboard']
    },
    {
      title: 'MasPoly Dining',
      category: 'Food & Beverage',
      url: 'https://maspolydining.netlify.app',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'University dining service platform with menu management and ordering system',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      features: ['Menu Management', 'Online Ordering', 'Payment Integration', 'Order Tracking']
    },
    {
      title: 'Crown Lyric',
      category: 'Entertainment',
      url: 'https://crownlyric.netlify.app',
      image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Music streaming platform with lyrics integration and social features',
      technologies: ['React', 'Web Audio API', 'Lyrics API', 'Firebase'],
      features: ['Music Streaming', 'Synchronized Lyrics', 'Social Sharing', 'Playlist Creation']
    },
    {
      title: 'Gutu High School',
      category: 'Education',
      url: 'https://gutuhigh.netlify.app',
      image: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern school website with student portal and academic information system',
      technologies: ['React', 'Firebase', 'TailwindCSS', 'EmailJS'],
      features: ['Student Portal', 'Academic Calendar', 'News & Events', 'Parent Communication']
    }
  ];

  const categories = ['All', 'Education', 'Fintech', 'Business', 'Tech', 'Food & Beverage', 'Entertainment'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
              Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-black/70 max-w-4xl mx-auto leading-relaxed">
              Explore our collection of innovative projects that showcase our expertise across various industries and technologies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-cyber-purple to-cyber-blue text-white'
                    : 'bg-black/10 text-black/70 hover:bg-black/20 hover:text-black'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    whileHover={{ y: -5 }}
                  >
                    <GlassCard className="overflow-hidden h-full">
                      <div className="relative group">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                          <ExternalLink className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs text-cyber-blue font-medium px-2 py-1 bg-cyber-blue/10 rounded-full">
                            {project.category}
                          </span>
                          <Star className="w-4 h-4 text-yellow-500" />
                        </div>

                        <h3 className="font-orbitron text-xl font-bold mb-3 text-black">
                          {project.title}
                        </h3>

                        <p className="text-black/70 text-sm mb-4 leading-relaxed line-clamp-2">
                          {project.description}
                        </p>

                        <div className="mb-4">
                          <h4 className="text-black font-semibold mb-2 text-sm">Key Features:</h4>
                          <div className="flex flex-wrap gap-1">
                            {project.features.slice(0, 2).map((feature, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-black/10 text-black/70 px-2 py-1 rounded"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-black font-semibold mb-2 text-sm">Technologies:</h4>
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-cyber-purple/20 text-cyber-purple px-2 py-1 rounded"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.a>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-black">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-black/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our expertise and innovative approach.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-cyber-purple to-cyber-blue rounded-full text-white font-bold text-lg hover:shadow-lg hover:shadow-cyber-purple/30 transition-all duration-300"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Portfolio;