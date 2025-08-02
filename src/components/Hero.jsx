'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Users,
  Award,
  ArrowRight,
  Phone,
  MapPin,
  CheckCircle,
  Star,
  Plane,
} from 'lucide-react';
import { openForm } from '@/lib/Form';

const Hero = ({ className = '' }) => {
  const trustIndicators = [
    {
      icon: Globe,
      value: '7',
      label: 'Global Regions'
    },
    {
      icon: Users,
      value: '10K+',
      label: 'Clients Served'
    },
    {
      icon: Award,
      value: '15+',
      label: 'Years Experience'
    },
    {
      icon: Star,
      value: '4.9',
      label: 'Client Rating'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
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

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col lg:flex-row items-center z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left lg:max-w-4xl"
        >
          {/* Brand Logo/Name */}
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <h1 className="text-4xl pen-visa-yellow sm:text-5xl lg:text-6xl xl:text-7xl text-transparent bg-gradient-to-br from-pen-visa-yellow to-pen-visa-green bg-clip-text font-bold leading-tight">
              PenVisa
            </h1>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium text-white mb-6 leading-relaxed"
          >
            Your Gateway to Global Opportunities
            <span className="block mt-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-200">
              Expert Visa Consulting Across <span className="text-[#ffd100] font-bold"> 7 Regions</span> Worldwide
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-[#f9fbe7] mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Navigate complex visa processes with confidence. Our experienced consultants
            provide personalized guidance to make your international dreams a reality.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 lg:mb-12"
          >
            {trustIndicators.map((indicator, index) => {
              const IconComponent = indicator.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                  transition={{ duration: 0.2 }}
                >
                  <IconComponent className="w-8 h-8 pen-visa-yellow mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    {indicator.value}
                  </div>
                  <div className="text-sm text-gray-300">
                    {indicator.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Call-to-Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start"
          >
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group bg-pen-visa-yellow text-black px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center gap-2"
              onClick={() => openForm()}
            >
              <Phone className="w-5 h-5" />
              Book Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>

          {/* Additional Trust Elements */}
          <motion.div
            variants={itemVariants}
            className="mt-8 lg:mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 text-gray-300"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 pen-visa-yellow" />
              <span>100% Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 pen-visa-yellow" />
              <span>Licensed Consultants</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 pen-visa-yellow" />
              <span>24/7 Support</span>
            </div>
          </motion.div>
        </motion.div>

        {/* //% Right Section */}
        <motion.div
        >
          <div className="relative flex items-center justify-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Central Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 lg:w-56 lg:h-56 bg-gradient-to-br from-[#f9fbe7]/80 via-[#ffd100]/80 to-[#ffd100]/80 backdrop-blur-sm rounded-full border border-slate-700/50 flex flex-col items-center justify-center shadow-2xl">
                  <div className="w-16 h-16 bg-[#386641]/80 rounded-full flex items-center justify-center mb-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#386641] text-center">Pen Visa</h3>
                  <p className="text-sm text-[#386641] text-center mt-1">Consultants</p>
                </div>
              </div>

              {/* Orbiting Border with Airplanes */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="relative w-full h-full">
                  {/* Airplane icons positioned around the circle */}
                  {Array.from({ length: 8 }).map((_, index) => {
                    const angle = index * 45 * (Math.PI / 180)
                    const radius = 160 // Distance from center
                    const x = Math.cos(angle) * radius
                    const y = Math.sin(angle) * radius

                    return (
                      <div
                        key={index}
                        className="absolute w-8 h-8 bg-[#ffd100]/50 rounded-full flex items-center justify-center border border-[#386641] "
                        style={{
                          left: "50%",
                          top: "50%",
                          transform: `translate(${x - 16}px, ${y - 16}px)`,
                        }}
                      >
                        <Plane className="h-4 w-4 text-[#386641] animate-pulse-custom" />
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-600/30 animate-pulse-custom"></div>

              {/* Inner Ring */}
              <div className="absolute inset-8 rounded-full border border-slate-700/40"></div>

              {/* Decorative dots */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-secondary rounded-full animate-ping-custom"></div>
              <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-slate-400 rounded-full animate-ping-custom delay-1000"></div>
              <div className="absolute top-12 left-12 w-1 h-1 bg-red-400 rounded-full animate-ping-custom delay-500"></div>
            </div>

            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-slate-blue/10 rounded-full blur-3xl scale-150 -z-10"></div>
          </div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div> */}
    </section>
  );
};

export default Hero;