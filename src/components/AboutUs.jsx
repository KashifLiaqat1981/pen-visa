'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Globe, 
  CheckCircle, 
  Star,
  Shield,
  Clock,
  TrendingUp,
  Heart,
  Target,
  Briefcase,
  GraduationCap
} from 'lucide-react';



const AboutUs = () => {
  const statistics = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Successful Applications',
      description: 'Visa applications processed with excellence'
    },
    {
      icon: Star,
      value: '98.5%',
      label: 'Success Rate',
      description: 'Industry-leading approval percentage'
    },
    {
      icon: Award,
      value: '15+',
      label: 'Years Experience',
      description: 'Decades of immigration expertise'
    },
    {
      icon: Globe,
      value: '7',
      label: 'Global Regions',
      description: 'Comprehensive worldwide coverage'
    }
  ];

  const valuePropositions = [
    {
      icon: Shield,
      title: 'Licensed & Certified',
      description: 'Our team consists of licensed immigration consultants with official certifications and memberships in professional regulatory bodies.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance throughout your immigration journey with dedicated case managers and multilingual support staff.'
    },
    {
      icon: TrendingUp,
      title: 'Proven Track Record',
      description: 'Over 15 years of consistent success with a 98.5% approval rate across all visa categories and immigration programs.'
    },
    {
      icon: Heart,
      title: 'Personalized Approach',
      description: 'Every client receives customized guidance tailored to their unique circumstances, goals, and immigration pathway requirements.'
    },
    {
      icon: Target,
      title: 'End-to-End Service',
      description: 'Complete immigration solutions from initial assessment to post-landing services, ensuring seamless transition to your new country.'
    },
    {
      icon: Briefcase,
      title: 'Professional Network',
      description: 'Extensive partnerships with educational institutions, employers, and settlement agencies to maximize your success opportunities.'
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
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative overflow-hidden">
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
              About <span className="pen-visa-yellow">Pen Visa</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pen-visa-yellow to-pen-visa-green mx-auto rounded-full" />
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
              For over 15 years, Pen Visa has stood as the premier immigration consulting firm, transforming dreams of global mobility into reality for thousands of individuals and families worldwide. Our unwavering commitment to excellence has established us as the most trusted name in immigration services, with an unprecedented 98.5% success rate across all visa categories.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Founded on the principles of integrity, expertise, and personalized service, we have successfully guided over 10,000 clients through complex immigration processes across 7 major global regions. Our team of licensed immigration consultants combines deep regulatory knowledge with compassionate guidance, ensuring each client receives the highest standard of professional service tailored to their unique circumstances and aspirations.
            </p>
          </motion.div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {statistics.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="text-center p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-lg hover:shadow-pen-visa-yellow/20 hover:border-pen-visa-yellow/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pen-visa-yellow to-pen-visa-green rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <IconComponent className="w-8 h-8 text-black" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-pen-visa-yellow font-semibold mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Value Propositions Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose <span className="pen-visa-yellow">Pen Visa</span>?
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our comprehensive approach and unwavering commitment to client success sets us apart in the immigration consulting industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuePropositions.map((prop, index) => {
              const IconComponent = prop.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-pen-visa-yellow/30 transition-all duration-300 hover:shadow-lg hover:shadow-pen-visa-yellow/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-pen-visa-yellow/20 to-pen-visa-green/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 pen-visa-yellow" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:pen-visa-yellow transition-colors duration-300">
                    {prop.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {prop.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center bg-gradient-to-r from-pen-visa-yellow/10 to-pen-visa-green/10 rounded-2xl p-8 border border-pen-visa-yellow/20"
        >
          <GraduationCap className="w-16 h-16 pen-visa-yellow mx-auto mb-6" />
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Our Mission
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            To empower individuals and families to achieve their global mobility dreams through expert guidance, 
            transparent processes, and unwavering support. We believe that everyone deserves the opportunity to 
            build a better future, and we are committed to making that journey as smooth and successful as possible.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;