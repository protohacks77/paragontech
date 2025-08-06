import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the emerging technologies and methodologies that are shaping the future of web development...',
      category: 'Technology',
      date: '2024-01-15',
      author: 'Paragon Tech Team',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Building Effective School Management Systems',
      excerpt: 'Key considerations and best practices for developing comprehensive educational platforms...',
      category: 'Education',
      date: '2024-01-10',
      author: 'John Doe',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'The Art of Digital Branding: Creating Memorable Online Experiences',
      excerpt: 'How to build a strong digital brand that resonates with your target audience...',
      category: 'Design',
      date: '2024-01-05',
      author: 'Jane Smith',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Mobile-First Development: Why It Matters More Than Ever',
      excerpt: 'Understanding the importance of mobile-first approach in modern web development...',
      category: 'Development',
      date: '2023-12-28',
      author: 'Mike Johnson',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Cybersecurity Best Practices for Small Businesses',
      excerpt: 'Essential security measures every small business should implement to protect their digital assets...',
      category: 'Security',
      date: '2023-12-20',
      author: 'Sarah Wilson',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'The Rise of AI in Creative Industries',
      excerpt: 'How artificial intelligence is transforming creative workflows and what it means for designers...',
      category: 'AI & Innovation',
      date: '2023-12-15',
      author: 'Alex Thompson',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const categories = ['All', 'Technology', 'Education', 'Design', 'Development', 'Security', 'AI & Innovation'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              Tech Insights
            </h1>
            <p className="text-xl md:text-2xl text-black/70 max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest trends, insights, and best practices in technology, development, and digital innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/50 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-black/10 border border-black/20 rounded-lg text-black placeholder-black/50 focus:outline-none focus:border-cyber-purple transition-colors"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyber-purple to-cyber-blue text-white'
                      : 'bg-black/10 text-black/70 hover:bg-black/20 hover:text-black'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="h-full overflow-hidden group cursor-pointer">
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-cyber-purple/80 text-white text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-3 text-black/60 text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>

                      <h2 className="font-orbitron text-xl font-bold text-black mb-3 line-clamp-2 group-hover:text-cyber-purple transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-black/70 text-sm mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-cyber-blue text-sm font-medium">
                          {post.readTime}
                        </span>
                        <motion.button
                          whileHover={{ x: 5 }}
                          className="flex items-center space-x-1 text-cyber-purple hover:text-cyber-blue transition-colors"
                        >
                          <span className="text-sm font-medium">Read More</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </GlassCard>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <GlassCard className="p-12 max-w-md mx-auto">
                <Search className="w-16 h-16 text-black/30 mx-auto mb-4" />
                <h3 className="font-orbitron text-xl font-bold text-black mb-2">
                  No Articles Found
                </h3>
                <p className="text-black/60">
                  Try adjusting your search terms or browse all categories.
                </p>
              </GlassCard>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-white/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-12">
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 text-black">
                Stay Updated
              </h2>
              <p className="text-xl text-black/70 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss our latest insights on technology and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-black/10 border border-black/20 rounded-lg text-black placeholder-black/50 focus:outline-none focus:border-cyber-purple transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-cyber-purple to-cyber-blue rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-cyber-purple/30 transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;