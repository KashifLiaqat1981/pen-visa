'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  Home, 
  MapPin, 
  TrendingUp,
  ArrowRight,
  Star,
  Users,
  Award,
  CheckCircle
} from 'lucide-react';

const VisaServices = () => {
  const services = [
    {
      id: 'study',
      title: 'Study Visa',
      description: 'Unlock world-class education opportunities with our expert guidance through student visa applications.',
      icon: GraduationCap,
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      gradient: 'from-blue-600 to-purple-600',
      links: [
        { name: 'Canada Student Visa', href: '/services/canada-student-visa' },
        { name: 'Australia Student Visa', href: '/services/australia-student-visa' },
        { name: 'New Zealand Study Visa', href: '/services/new-zealand-study-visa' },
        { name: 'UK Study Visa', href: '/services/uk-study-visa' }
      ]
    },
    {
      id: 'skilled',
      title: 'Skilled Worker Visa',
      description: 'Advance your career globally with our comprehensive skilled worker visa consultation services.',
      icon: Briefcase,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      gradient: 'from-emerald-600 to-teal-600',
      links: [
        { name: 'Canada Express Entry', href: '/services/canada-express-entry' },
        { name: 'Australia Skilled Visa', href: '/services/australia-skilled-visa' },
        { name: 'UK Skilled Worker Visa', href: '/services/uk-skilled-worker-visa' },
        { name: 'Germany EU Blue Card', href: '/services/germany-eu-blue-card' }
      ]
    },
    {
      id: 'permanent',
      title: 'Permanent Residency',
      description: 'Make your dream destination your permanent home with our PR application expertise.',
      icon: Home,
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      gradient: 'from-orange-600 to-red-600',
      links: [
        { name: 'Canada PR Program', href: '/services/canada-pr-program' },
        { name: 'Australia PR Visa', href: '/services/australia-pr-visa' },
        { name: 'New Zealand Residence', href: '/services/new-zealand-residence' },
        { name: 'US Green Card', href: '/services/us-green-card' }
      ]
    },
    {
      id: 'tourist',
      title: 'Tourist/Visitor Visa',
      description: 'Explore the world with confidence through our streamlined tourist visa application process.',
      icon: MapPin,
      image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      gradient: 'from-pink-600 to-rose-600',
      links: [
        { name: 'Schengen Visa', href: '/services/schengen-visa' },
        { name: 'US Tourist Visa', href: '/services/us-tourist-visa' },
        { name: 'UK Visitor Visa', href: '/services/uk-visitor-visa' },
        { name: 'Canada Visitor Visa', href: '/services/canada-visitor-visa' }
      ]
    },
    {
      id: 'business',
      title: 'Business/Investment Visa',
      description: 'Expand your business horizons with our specialized investment and entrepreneur visa services.',
      icon: TrendingUp,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      gradient: 'from-violet-600 to-indigo-600',
      links: [
        { name: 'Canada Start-up Visa', href: '/services/canada-startup-visa' },
        { name: 'Australia Business Visa', href: '/services/australia-business-visa' },
        { name: 'UK Innovator Visa', href: '/services/uk-innovator-visa' },
        { name: 'US EB-5 Investor Visa', href: '/services/us-eb5-investor-visa' }
      ]
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
      y: 50,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      rotateX: 5,
      rotateY: 5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
              Why Choose <span className="pen-visa-yellow">Pen Visa</span>?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pen-visa-yellow to-pen-visa-green mx-auto rounded-full" />
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
              With over 15 years of excellence in visa consulting, Pen Visa stands as the premier choice for individuals and families seeking seamless immigration solutions. Our team of licensed immigration consultants has successfully processed over 10,000 visa applications across 7 global regions, maintaining an unprecedented 98.5% success rate. We combine deep regulatory knowledge with personalized service, ensuring each client receives tailored guidance that maximizes their chances of approval. Our comprehensive approach includes document preparation, application tracking, interview coaching, and post-approval support. What sets us apart is our commitment to transparency, competitive pricing, and our proven track record of turning complex immigration challenges into success stories. From student visas to permanent residency, we navigate the intricate legal landscape so you can focus on your dreams of global mobility.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <motion.div variants={itemVariants} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 pen-visa-yellow mr-2" />
                  <span className="text-2xl font-bold text-white">98.5%</span>
                </div>
                <p className="text-gray-400 text-sm">Success Rate</p>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 pen-visa-yellow mr-2" />
                  <span className="text-2xl font-bold text-white">10K+</span>
                </div>
                <p className="text-gray-400 text-sm">Happy Clients</p>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 pen-visa-yellow mr-2" />
                  <span className="text-2xl font-bold text-white">15+</span>
                </div>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="w-6 h-6 pen-visa-yellow mr-2" />
                  <span className="text-2xl font-bold text-white">7</span>
                </div>
                <p className="text-gray-400 text-sm">Global Regions</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Services Cards Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover="hover"
                className="group relative"
                style={{ perspective: '1000px' }}
              >
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl transform-gpu transition-all duration-300 group-hover:shadow-pen-visa-yellow/20 group-hover:border-pen-visa-yellow/30">
                  {/* Card Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-80`} />
                    <div className="absolute inset-0 bg-black/20" />
                    
                    {/* Icon Overlay */}
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:pen-visa-yellow transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Visa Links */}
                    <div className="space-y-2">
                      {service.links.map((link, linkIndex) => (
                        <motion.a
                          key={linkIndex}
                          href={link.href}
                          className="group/link flex items-center justify-between p-2 rounded-lg bg-gray-700/30 hover:bg-pen-visa-yellow/10 border border-transparent hover:border-pen-visa-yellow/30 transition-all duration-300"
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="text-gray-300 text-sm group-hover/link:text-white transition-colors duration-300">
                            {link.name}
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-500 group-hover/link:text-pen-visa-yellow group-hover/link:translate-x-1 transition-all duration-300" />
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  {/* 3D Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Shadow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-pen-visa-yellow/20 to-pen-visa-green/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10 transform translate-y-4" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Ready to start your visa journey? Our expert consultants are here to help.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pen-visa-yellow text-black px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300 inline-flex items-center gap-2"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default VisaServices;