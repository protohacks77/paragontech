import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Palette, GraduationCap, Camera, FileText, Smartphone, X } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Web Development',
      category: 'Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies',
      features: [
        'React & Next.js Applications',
        'E-commerce Platforms',
        'Progressive Web Apps (PWA)',
        'API Development & Integration',
        'Performance Optimization',
        'SEO & Analytics Setup'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS'],
      pricing: 'Starting from $2,000'
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: 'School Tech Platforms',
      category: 'Education',
      description: 'Complete educational management systems and learning platforms for modern institutions',
      features: [
        'Student Management Systems',
        'Learning Management Systems (LMS)',
        'Fee Payment Platforms',
        'Online Examination Systems',
        'Parent-Teacher Communication',
        'Academic Analytics Dashboard'
      ],
      technologies: ['React', 'Node.js', 'MySQL', 'Socket.io', 'PDF.js', 'Chart.js'],
      pricing: 'Starting from $5,000'
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Creative Media',
      category: 'Design',
      description: 'Branding, photography, and multimedia content creation services',
      features: [
        'Brand Identity Design',
        'Logo & Visual Identity',
        'Professional Photography',
        'Video Production',
        'Social Media Content',
        'Marketing Materials'
      ],
      technologies: ['Photoshop', 'Illustrator', 'After Effects', 'Premiere Pro', 'Figma', 'Canva'],
      pricing: 'Starting from $500'
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: 'Photography Services',
      category: 'Media',
      description: 'Professional photography for events, products, and corporate needs',
      features: [
        'Event Photography',
        'Product Photography',
        'Corporate Headshots',
        'Wedding Photography',
        'Real Estate Photography',
        'Photo Editing & Retouching'
      ],
      technologies: ['Canon/Nikon', 'Lightroom', 'Photoshop', 'Capture One', 'DaVinci Resolve'],
      pricing: 'Starting from $200'
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: 'Document Solutions',
      category: 'Business',
      description: 'Professional document creation and management services',
      features: [
        'Business Document Templates',
        'Proposal Writing',
        'Technical Documentation',
        'User Manuals & Guides',
        'Document Automation',
        'Digital Forms & Workflows'
      ],
      technologies: ['Microsoft Office', 'Google Workspace', 'Adobe Acrobat', 'LaTeX', 'Markdown'],
      pricing: 'Starting from $100'
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile Development',
      category: 'Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: [
        'React Native Apps',
        'Progressive Web Apps',
        'Mobile-First Design',
        'Push Notifications',
        'Offline Functionality',
        'App Store Deployment'
      ],
      technologies: ['React Native', 'Expo', 'Firebase', 'Redux', 'AsyncStorage', 'Realm'],
      pricing: 'Starting from $3,000'
    }
  ];

  const categories = ['All', 'Development', 'Education', 'Design', 'Media', 'Business'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices = activeCategory === 'All' 
    ? services 
    : services.filter(service => service.category === activeCategory);

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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to elevate your business and bring your digital vision to life
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
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-cyber-purple to-cyber-blue text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard 
                    className="p-8 h-full cursor-pointer" 
                    onClick={() => setSelectedService(index)}
                  >
                    <div className="text-cyber-purple mb-6">{service.icon}</div>
                    <div className="mb-4">
                      <span className="text-xs text-cyber-blue font-medium px-2 py-1 bg-cyber-blue/10 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    <h3 className="font-orbitron text-xl font-bold mb-4 text-white">
                      {service.title}
                    </h3>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-cyber-purple font-semibold">
                        {service.pricing}
                      </span>
                      <span className="text-white/50 text-sm">
                        Click for details →
                      </span>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <GlassCard className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-cyber-purple">
                      {services[selectedService].icon}
                    </div>
                    <div>
                      <h2 className="font-orbitron text-3xl font-bold text-white">
                        {services[selectedService].title}
                      </h2>
                      <span className="text-cyber-blue">{services[selectedService].category}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>

                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  {services[selectedService].description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-orbitron text-xl font-bold text-white mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {services[selectedService].features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-white/70">
                          <div className="w-2 h-2 bg-cyber-purple rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-orbitron text-xl font-bold text-white mb-4">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {services[selectedService].technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-cyber-purple/20 text-cyber-purple rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-cyber-purple/20 to-cyber-blue/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Pricing</h4>
                      <p className="text-2xl font-bold text-cyber-purple">
                        {services[selectedService].pricing}
                      </p>
                      <p className="text-white/60 text-sm mt-1">
                        Final pricing depends on project scope and requirements
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-cyber-purple to-cyber-blue rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyber-purple/30 transition-all duration-300"
                  >
                    Request Quote
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 border border-white/20 backdrop-blur-sm rounded-full text-white font-semibold hover:bg-white/5 transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Services;