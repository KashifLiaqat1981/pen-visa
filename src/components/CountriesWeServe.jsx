'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  ArrowRight, 
  Star,
  Users,
  Award,
  Globe
} from 'lucide-react';

const CountriesWeServe = () => {
  const countries = [
    {
      name: 'Canada',
      flagImage: 'https://images.pexels.com/photos/2906142/pexels-photo-2906142.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'As trusted Canada immigration consultants we provide superior consulting and advisory services for Canada immigration.',
      specialties: ['Express Entry', 'Provincial Nominee Program', 'Study Permits', 'Work Permits'],
      gradient: 'from-red-600 to-red-800'
    },
    {
      name: 'Australia',
      flagImage: 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'As trusted Australia immigration consultants we provide superior consulting and advisory services for Australia immigration.',
      specialties: ['Skilled Migration', 'Student Visas', 'Business Visas', 'Family Visas'],
      gradient: 'from-blue-600 to-green-600'
    },
    {
      name: 'United States',
      flagImage: 'https://images.pexels.com/photos/2886268/pexels-photo-2886268.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'As trusted United States immigration consultants we provide superior consulting and advisory services for United States immigration.',
      specialties: ['H-1B Visas', 'Green Card', 'Student Visas', 'Investor Visas'],
      gradient: 'from-blue-800 to-red-700'
    },
    {
      name: 'United Kingdom',
      flagImage: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'As trusted United Kingdom immigration consultants we provide superior consulting and advisory services for United Kingdom immigration.',
      specialties: ['Skilled Worker Visa', 'Student Visas', 'Innovator Visa', 'Family Visas'],
      gradient: 'from-blue-700 to-red-600'
    },
    {
      name: 'Germany',
      flagImage: 'https://images.pexels.com/photos/2646237/pexels-photo-2646237.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'As trusted Germany immigration consultants we provide superior consulting and advisory services for Germany immigration.',
      specialties: ['EU Blue Card', 'Job Seeker Visa', 'Student Visas', 'Family Reunion'],
      gradient: 'from-gray-800 to-red-700'
    },
    {
      name: 'New Zealand',
      flagImage: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'As trusted New Zealand immigration consultants we provide superior consulting and advisory services for New Zealand immigration.',
      specialties: ['Skilled Migrant Category', 'Work Visas', 'Student Visas', 'Investor Visas'],
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Singapore',
      flagImage: 'https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'As trusted Singapore immigration consultants we provide superior consulting and advisory services for Singapore immigration.',
      specialties: ['Employment Pass', 'S Pass', 'Student Pass', 'Investor Visas'],
      gradient: 'from-red-600 to-white'
    },
    {
      name: 'Netherlands',
      flagImage: 'https://images.pexels.com/photos/2031706/pexels-photo-2031706.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'As trusted Netherlands immigration consultants we provide superior consulting and advisory services for Netherlands immigration.',
      specialties: ['Highly Skilled Migrant', 'Student Visas', 'Self-Employment', 'Family Visas'],
      gradient: 'from-red-600 to-blue-700'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 30
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.03,
      rotateX: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Countries We <span className="pen-visa-yellow">Serve</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pen-visa-yellow to-pen-visa-green mx-auto rounded-full" />
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
              With extensive expertise across 7 major global regions, Pen Visa provides comprehensive immigration consulting services for the world's most sought-after destinations. Our deep understanding of each country's unique immigration landscape ensures personalized guidance tailored to your specific goals and circumstances.
            </p>

            {/* Global Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <motion.div variants={itemVariants} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Globe className="w-6 h-6 pen-visa-yellow mr-2" />
                  <span className="text-2xl font-bold text-white">8+</span>
                </div>
                <p className="text-gray-400 text-sm">Countries Covered</p>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 pen-visa-yellow mr-2" />
                  <span className="text-2xl font-bold text-white">10K+</span>
                </div>
                <p className="text-gray-400 text-sm">Global Clients</p>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 pen-visa-yellow mr-2" />
                  <span className="text-2xl font-bold text-white">98.5%</span>
                </div>
                <p className="text-gray-400 text-sm">Success Rate</p>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 pen-visa-yellow mr-2" />
                  <span className="text-2xl font-bold text-white">15+</span>
                </div>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Countries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
              style={{ perspective: '1000px' }}
            >
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl transform-gpu transition-all duration-300 group-hover:shadow-pen-visa-yellow/20 group-hover:border-pen-visa-yellow/30">
                {/* Country Flag/Image Background */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${country.flagImage})` }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${country.gradient} opacity-70`} />
                  <div className="absolute inset-0 bg-black/30" />
                  
                  {/* Country Name Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:pen-visa-yellow transition-colors duration-300">
                      {country.name}
                    </h3>
                  </div>

                  {/* Map Pin Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {country.description}
                  </p>

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Our Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {country.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-pen-visa-yellow/10 text-pen-visa-yellow text-xs rounded-full border border-pen-visa-yellow/20"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <motion.button
                    className="group/btn w-full flex items-center justify-center gap-2 p-3 rounded-lg bg-gray-700/30 hover:bg-pen-visa-yellow/10 border border-transparent hover:border-pen-visa-yellow/30 transition-all duration-300"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-gray-300 text-sm group-hover/btn:text-white transition-colors duration-300">
                      Learn More About {country.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover/btn:text-pen-visa-yellow group-hover/btn:translate-x-1 transition-all duration-300" />
                  </motion.button>
                </div>

                {/* 3D Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Shadow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-pen-visa-yellow/20 to-pen-visa-green/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10 transform translate-y-4" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-pen-visa-yellow/10 to-pen-visa-green/10 rounded-2xl p-8 border border-pen-visa-yellow/20">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Start Your Global Journey?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              No matter which destination you choose, our expert consultants are ready to guide you through every step of your immigration journey with personalized service and proven expertise.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pen-visa-yellow text-black px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300 inline-flex items-center gap-2"
            >
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CountriesWeServe;