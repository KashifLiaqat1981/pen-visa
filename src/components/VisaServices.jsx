"use client"

import React, { useEffect, useRef } from 'react';
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
  CheckCircle,
  Sparkles
} from 'lucide-react';
import "../styles/visa-services.css";
import { openForm } from '@/lib/Form';

const VisaServices = () => {
  const containerRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // Create floating particles
    const createParticles = () => {
      if (!particlesRef.current) return;
      
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (10 + Math.random() * 10) + 's';
        particlesRef.current.appendChild(particle);
      }
    };

    createParticles();

    // Parallax effect for cards
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const cards = containerRef.current.querySelectorAll('.visa-card');
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      cards.forEach((card, index) => {
        const htmlCard = card;
        const intensity = (index + 1) * 0.5;
        const rotateX = (y - 0.5) * intensity;
        const rotateY = (x - 0.5) * intensity;
        htmlCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    };

    if (containerRef.current) {
      containerRef.current.addEventListener('mousemove', handleMouseMove);
    }

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

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
      }
      observer.disconnect();
    };
  }, []);

  const services = [
    {
      id: 'study',
      title: 'Study Visa',
      description: 'Unlock world-class education opportunities with our expert guidance through student visa applications.',
      icon: GraduationCap,
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      gradient: 'from-blue-500 via-blue-600 to-purple-700',
      shadowColor: 'shadow-blue-500/30',
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
      gradient: 'from-emerald-500 via-emerald-600 to-teal-700',
      shadowColor: 'shadow-emerald-500/30',
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
      gradient: 'from-orange-500 via-orange-600 to-red-700',
      shadowColor: 'shadow-orange-500/30',
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
      gradient: 'from-pink-500 via-pink-600 to-rose-700',
      shadowColor: 'shadow-pink-500/30',
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
      gradient: 'from-violet-500 via-violet-600 to-indigo-700',
      shadowColor: 'shadow-violet-500/30',
      links: [
        { name: 'Canada Start-up Visa', href: '/services/canada-startup-visa' },
        { name: 'Australia Business Visa', href: '/services/australia-business-visa' },
        { name: 'UK Innovator Visa', href: '/services/uk-innovator-visa' },
        { name: 'US EB-5 Investor Visa', href: '/services/us-eb5-investor-visa' }
      ]
    }
  ];

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-[#386641] via-[#386641]/95 to-[#386641]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#386641]/90 via-[#386641]/80 to-[#386641]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,209,0,0.1),transparent_50%)]" />
        
        {/* Animated geometric shapes */}
        <div className="geometric-bg">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="floating-shape shape-4"></div>
        </div>
        
        {/* Particles */}
        <div ref={particlesRef} className="particles-container"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid-pattern"></div>
        </div>
      </div>

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20 animate-on-scroll">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-yellow-400/20 backdrop-blur-sm rounded-full border border-yellow-400/30">
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="text-yellow-400 font-medium">Premium Visa Services</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Why Choose{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent animate-gradient">
                  Pen Visa
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-expand"></div>
              </span>
              ?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg sm:text-xl text-green-100 leading-relaxed mb-8 animate-fade-in-up">
              With over 15 years of excellence in visa consulting, Pen Visa stands as the premier choice for individuals and families seeking seamless immigration solutions. Our team of licensed immigration consultants has successfully processed over 10,000 visa applications across{' '}
              <span className="text-yellow-400 font-bold animate-pulse">7 Regions</span>, maintaining an unprecedented{' '}
              <span className="text-yellow-400 font-bold animate-pulse">98.5%</span> success rate.
            </p>
          </div>

          {/* Trust Indicators with enhanced animations */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Star, value: '98.5%', label: 'Success Rate', delay: '0s' },
              { icon: Users, value: '10K+', label: 'Happy Clients', delay: '0.1s' },
              { icon: Award, value: '15+', label: 'Years Experience', delay: '0.2s' },
              { icon: CheckCircle, value: '7', label: 'Global Regions', delay: '0.3s' }
            ].map((item, index) => (
              <div key={index} className="trust-indicator animate-on-scroll" style={{ animationDelay: item.delay }}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-500 hover:scale-105 group">
                    <div className="flex items-center justify-center mb-3">
                      <div className="p-2 bg-yellow-400/20 rounded-full mr-3 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-6 h-6 text-yellow-400" />
                      </div>
                      <span className="text-3xl font-bold text-white counter-animation">{item.value}</span>
                    </div>
                    <p className="text-green-100/80 text-sm font-medium">{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`visa-card animate-on-scroll group relative`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-700 scale-105`}></div>
                
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden hover:bg-white/15 transition-all duration-700 group-hover:scale-105 group-hover:-translate-y-2">
                  {/* Image Section with enhanced overlay */}
                  <div className="relative h-56 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transform transition-transform duration-1000 group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br opacity-70 group-hover:opacity-60 transition-opacity duration-500`} />
                    <div className="absolute inset-0 bg-black/30" />
                    
                    {/* Floating icon */}
                    <div className="absolute top-4 right-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <div className="w-14 h-14 bg-[#ffd100]/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-lg">
                        <IconComponent className="w-7 h-7 text-[#ffd100]" />
                      </div>
                    </div>

                    {/* Overlay gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Card Content */}
                  <div className="p-8 bg-[#386641]/20">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-green-100/80 text-sm mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Enhanced Links */}
                    <div className="space-y-3">
                      {service.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.href}
                          className="group/link flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-yellow-400/10 border border-transparent hover:border-yellow-400/30 transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-md"
                          style={{ animationDelay: `${linkIndex * 0.05}s` }}
                        >
                          <span className="text-green-100/90 text-sm group-hover/link:text-white transition-colors duration-300 font-medium">
                            {link.name}
                          </span>
                          <ArrowRight className="w-4 h-4 text-green-300 group-hover/link:text-yellow-400 group-hover/link:translate-x-2 transition-all duration-300" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#386641]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shine-effect" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center animate-on-scroll">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-3xl blur-2xl animate-pulse"></div>
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
              <p className="text-green-100 mb-6 text-lg">
                Ready to start your visa journey? Our expert consultants are here to help.
              </p>
              <button onClick={() => openForm()} className="cta-button group relative overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-yellow-400/30 transition-all duration-500 inline-flex items-center gap-3 hover:scale-105">
                <span className="relative z-10">Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaServices;