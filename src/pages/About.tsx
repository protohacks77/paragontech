import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Zap } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const About = () => {
  const milestones = [
    { year: '2020', title: 'Founded', description: 'Paragon Tech Solutions established with a vision to revolutionize digital experiences' },
    { year: '2021', title: 'First Major Project', description: 'Launched ExamsideMan platform, transforming educational assessment' },
    { year: '2022', title: 'Expansion', description: 'Extended services to include fintech solutions and business platforms' },
    { year: '2023', title: 'Innovation Focus', description: 'Pioneered creative media solutions and advanced web technologies' },
  ];

  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Precision',
      description: 'Every project is executed with meticulous attention to detail'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'We work closely with clients to bring their visions to life'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we deliver'
    }
  ];

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
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              We are a forward-thinking technology company dedicated to creating exceptional digital experiences 
              that push the boundaries of what's possible in the modern web.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-white">
              Our <span className="bg-gradient-to-r from-cyber-purple to-cyber-blue bg-clip-text text-transparent">Mission</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8">
                <h3 className="font-orbitron text-2xl font-bold mb-6 text-white">
                  Transforming Ideas into Digital Reality
                </h3>
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  At Paragon Tech Solutions, we believe that technology should be an enabler, not a barrier. 
                  Our mission is to bridge the gap between innovative ideas and practical digital solutions 
                  that make a real impact.
                </p>
                <p className="text-white/70 text-lg leading-relaxed">
                  We specialize in creating web platforms, educational systems, and creative media solutions 
                  that not only meet current needs but anticipate future requirements.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="p-6 h-full text-center">
                    <div className="text-cyber-purple mb-4 flex justify-center">
                      {value.icon}
                    </div>
                    <h4 className="font-orbitron font-bold text-white mb-2">
                      {value.title}
                    </h4>
                    <p className="text-white/60 text-sm">
                      {value.description}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-white">
              Our <span className="bg-gradient-to-r from-cyber-purple to-cyber-blue bg-clip-text text-transparent">Journey</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyber-purple to-cyber-blue"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <GlassCard className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyber-purple to-cyber-blue rounded-full flex items-center justify-center font-orbitron font-bold text-white">
                        {milestone.year.slice(-2)}
                      </div>
                      <h3 className="font-orbitron text-xl font-bold text-white ml-4">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-white/70">
                      {milestone.description}
                    </p>
                  </GlassCard>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyber-purple rounded-full border-4 border-dark-900"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '25+', label: 'Happy Clients' },
              { number: '4+', label: 'Years Experience' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-8">
                  <h3 className="font-orbitron text-4xl font-bold text-cyber-purple mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-white/70">
                    {stat.label}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;