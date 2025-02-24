import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const projectFeatures = [
    {
      id: 'dashboard',
      title: 'Smart Dashboard',
      description: 'AI-powered interface that provides personalized task prioritization and resource recommendations.',
      image: '/api/placeholder/600/400'
    },
    {
      id: 'scheduler',
      title: 'Intelligent Scheduler',
      description: 'Automatically balances workload across courses and adapts to your productivity patterns.',
      image: '/api/placeholder/600/400'
    },
    {
      id: 'analytics',
      title: 'Performance Analytics',
      description: 'Visual insights into your academic performance with predictive modeling for future outcomes.',
      image: '/api/placeholder/600/400'
    }
  ];

  const tabVariants = {
    inactive: { opacity: 0.6, y: 0 },
    active: { opacity: 1, y: -5, transition: { duration: 0.3 } }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex justify-center mb-8 relative">
        <div className="inline-flex bg-slate-800 rounded-lg p-1">
          {projectFeatures.map((feature, index) => (
            <motion.button
              key={feature.id}
              className={`px-4 py-2 rounded-md text-sm font-medium relative z-10 ${
                activeTab === index ? 'text-white' : 'text-slate-400'
              }`}
              onClick={() => setActiveTab(index)}
              variants={tabVariants}
              initial="inactive"
              animate={activeTab === index ? 'active' : 'inactive'}
              whileHover={{ opacity: 0.9 }}
              whileTap={{ scale: 0.95 }}
            >
              {feature.title}
            </motion.button>
          ))}
          <motion.div
            className="absolute top-1 bottom-1 rounded-md bg-slate-600"
            initial={{ width: '33.333%', x: 0 }}
            animate={{ 
              x: `${activeTab * 100}%`,
              width: `${100 / projectFeatures.length}%`
            }}
            transition={{ type: 'spring', damping: 20 }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative overflow-hidden rounded-xl">
        {projectFeatures.map((feature, index) => (
          <motion.div
            key={feature.id}
            className="w-full"
            initial="hidden"
            animate={activeTab === index ? 'visible' : 'hidden'}
            variants={contentVariants}
            style={{ display: activeTab === index ? 'block' : 'none' }}
          >
            <div className="bg-slate-800 rounded-xl overflow-hidden">
              <img 
                src={feature.image} 
                alt={feature.title}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {projectFeatures.map((_, index) => (
          <motion.button
            key={index}
            className={`w-2 h-2 rounded-full ${
              activeTab === index ? 'bg-[#4bbc43]' : 'bg-slate-600'
            }`}
            onClick={() => setActiveTab(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            animate={{ 
              scale: activeTab === index ? [1, 1.2, 1] : 1,
              transition: { duration: 0.5 }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;