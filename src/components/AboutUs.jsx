"use client"
import React, { useEffect, useRef } from 'react';
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
import "../styles/abouts-us.css";
const AboutUs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    // Counter animation
    const counters = document.querySelectorAll('.counter');
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      const increment = target / 100;
      let current = 0;
      
      const updateCounter = () => {
        if (current < target) {
          current += increment;
          if (counter.textContent?.includes('%')) {
            counter.textContent = Math.ceil(current) + '%';
          } else if (counter.textContent?.includes('+')) {
            counter.textContent = Math.ceil(current).toLocaleString() + '+';
          } else {
            counter.textContent = Math.ceil(current).toString();
          }
          requestAnimationFrame(updateCounter);
        } else {
          if (counter.textContent?.includes('%')) {
            counter.textContent = target + '%';
          } else if (counter.textContent?.includes('+')) {
            counter.textContent = target.toLocaleString() + '+';
          } else {
            counter.textContent = target.toString();
          }
        }
      };
      
      if (counter.closest('.animate-in')) {
        updateCounter();
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const statistics = [
    {
      icon: Users,
      value: '10000',
      displayValue: '10,000+',
      label: 'Successful Applications',
      description: 'Visa applications processed with excellence'
    },
    {
      icon: Star,
      value: '98',
      displayValue: '98.5%',
      label: 'Success Rate',
      description: 'Industry-leading approval percentage'
    },
    {
      icon: Award,
      value: '15',
      displayValue: '15+',
      label: 'Years Experience',
      description: 'Decades of immigration expertise'
    },
    {
      icon: Globe,
      value: '7',
      displayValue: '7',
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

  return (
    <section className="about-us-section py-20 bg-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-pattern" />
      </div>

      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="mb-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-green mb-4 animate-title">
              About <span className="text-yellow">Pen Visa</span>
            </h2>
            <div className="title-underline w-24 h-1 bg-yellow mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-dark-green leading-relaxed mb-8 animate-fade-in">
              For over 15 years, Pen Visa has stood as the premier immigration consulting firm, transforming dreams of global mobility into reality for thousands of individuals and families worldwide. Our unwavering commitment to excellence has established us as the most trusted name in immigration services, with an unprecedented 98.5% success rate across all visa categories.
            </p>
            <p className="text-lg text-dark-green/80 leading-relaxed animate-fade-in-delayed">
              Founded on the principles of integrity, expertise, and personalized service, we have successfully guided over 10,000 clients through complex immigration processes across 7 major global regions. Our team of licensed immigration consultants combines deep regulatory knowledge with compassionate guidance, ensuring each client receives the highest standard of professional service tailored to their unique circumstances and aspirations.
            </p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-on-scroll">
          {statistics.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="stat-card text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-dark-green/10 shadow-lg hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="stat-icon w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <IconComponent className="w-8 h-8 text-dark-green" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-dark-green mb-2">
                  <span className="counter" data-target={stat.value}>
                    {stat.displayValue}
                  </span>
                </div>
                <div className="text-yellow font-semibold mb-2 text-lg">
                  {stat.label}
                </div>
                <div className="text-sm text-dark-green/70">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Value Propositions Section */}
        <div className="mb-16 animate-on-scroll">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-dark-green mb-4">
              Why Choose <span className="text-yellow">Pen Visa</span>?
            </h3>
            <p className="text-dark-green/80 text-lg max-w-3xl mx-auto">
              Our comprehensive approach and unwavering commitment to client success sets us apart in the immigration consulting industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuePropositions.map((prop, index) => {
              const IconComponent = prop.icon;
              return (
                <div
                  key={index}
                  className="value-card group p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-dark-green/10 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="value-icon w-12 h-12 bg-yellow/20 rounded-lg flex items-center justify-center mb-4 border border-yellow/30">
                    <IconComponent className="w-6 h-6 text-dark-green" />
                  </div>
                  <h4 className="text-xl font-bold text-dark-green mb-3 group-hover:text-yellow transition-colors duration-300">
                    {prop.title}
                  </h4>
                  <p className="text-dark-green/80 leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mission-section text-center bg-gradient-to-r from-[#f9fbe7]/50 via-[#f9fbe7]/50 to-[#386641]/10 rounded-2xl p-8 border border-yellow/20 animate-on-scroll">
          <div className="mission-icon w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="w-8 h-8 text-dark-green" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-dark-green mb-4">
            Our Mission
          </h3>
          <p className="text-lg text-dark-green/80 leading-relaxed max-w-3xl mx-auto">
            To empower individuals and families to achieve their global mobility dreams through expert guidance, 
            transparent processes, and unwavering support. We believe that everyone deserves the opportunity to 
            build a better future, and we are committed to making that journey as smooth and successful as possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;