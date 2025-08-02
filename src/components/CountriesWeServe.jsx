'use client';
import "../styles/CWS.css";
import React from 'react';
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
      flagImage: 'https://images.pexels.com/photos/2916828/pexels-photo-2916828.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'As trusted Canada immigration consultants we provide superior consulting and advisory services for Canada immigration.',
      specialties: ['Express Entry', 'Provincial Nominee Program', 'Study Permits', 'Work Permits']
    },
    {
      name: 'Australia',
      flagImage: 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'As trusted Australia immigration consultants we provide superior consulting and advisory services for Australia immigration.',
      specialties: ['Skilled Migration', 'Student Visas', 'Business Visas', 'Family Visas']
    },
    {
      name: 'United States',
      flagImage: 'https://images.pexels.com/photos/60003/statue-of-liberty-new-york-ny-nyc-60003.jpeg',
      description: 'As trusted United States immigration consultants we provide superior consulting and advisory services for United States immigration.',
      specialties: ['H-1B Visas', 'Green Card', 'Student Visas', 'Investor Visas']
    },
    {
      name: 'United Kingdom',
      flagImage: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'As trusted United Kingdom immigration consultants we provide superior consulting and advisory services for United Kingdom immigration.',
      specialties: ['Skilled Worker Visa', 'Student Visas', 'Innovator Visa', 'Family Visas']
    },
    {
      name: 'Europe',
      flagImage: 'https://images.pexels.com/photos/113885/pexels-photo-113885.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'As trusted Europe immigration consultants we provide superior consulting and advisory services for Europe immigration.',
      specialties: ['EU Blue Card', 'Job Seeker Visa', 'Student Visas', 'Family Reunion']
    },
    {
      name: 'New Zealand',
      flagImage: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'As trusted New Zealand immigration consultants we provide superior consulting and advisory services for New Zealand immigration.',
      specialties: ['Skilled Migrant Category', 'Work Visas', 'Student Visas', 'Investor Visas']
    },
    {
      name: 'UAE',
      flagImage: 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'As trusted UAE immigration consultants we provide superior consulting and advisory services for UAE immigration.',
      specialties: ['Employment Pass', 'S Pass', 'Student Pass', 'Investor Visas']
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-[#f9fbe7]/50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full animate-float-slow" style={{ backgroundColor: '#ffd100' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full animate-float-medium" style={{ backgroundColor: '#386641' }}></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 rounded-full animate-float-fast" style={{ backgroundColor: '#fff3b3' }}></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 rounded-full animate-float-slow" style={{ backgroundColor: '#386641' }}></div>
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23386641' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="section-container">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="mb-6">
              <h2 className="hero-title font-bold mb-4 animate-slide-in-left" style={{ color: '#386641' }}>
                Countries We <span style={{ color: '#ffd100' }}>Serve</span>
              </h2>
              <div className="w-24 h-1 mx-auto rounded-full animate-expand"
                style={{ background: 'linear-gradient(90deg, #ffd100, #386641)' }} />
            </div>

            <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="hero-description leading-relaxed mb-8" style={{ color: '#4a5568' }}>
                With extensive expertise across 8 major global regions, Pen Visa provides comprehensive immigration consulting services for the world's most sought-after destinations. Our deep understanding of each country's unique immigration landscape ensures personalized guidance tailored to your specific goals and circumstances.
              </p>

              {/* Global Stats */}
              {/* <div className="stats-grid mb-8">
              <div className="text-center stats-card">
                <div className="flex items-center justify-center mb-2">
                  <Globe className="w-6 h-6 mr-2" style={{ color: '#ffd100' }} />
                  <span className="text-2xl font-bold" style={{ color: '#386641' }}>8+</span>
                </div>
                <p className="text-sm" style={{ color: '#4a5568' }}>Countries Covered</p>
              </div>
              <div className="text-center stats-card">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 mr-2" style={{ color: '#ffd100' }} />
                  <span className="text-2xl font-bold" style={{ color: '#386641' }}>10K+</span>
                </div>
                <p className="text-sm" style={{ color: '#4a5568' }}>Global Clients</p>
              </div>
              <div className="text-center stats-card">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 mr-2" style={{ color: '#ffd100' }} />
                  <span className="text-2xl font-bold" style={{ color: '#386641' }}>98.5%</span>
                </div>
                <p className="text-sm" style={{ color: '#4a5568' }}>Success Rate</p>
              </div>
              <div className="text-center stats-card">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 mr-2" style={{ color: '#ffd100' }} />
                  <span className="text-2xl font-bold" style={{ color: '#386641' }}>15+</span>
                </div>
                <p className="text-sm" style={{ color: '#4a5568' }}>Years Experience</p>
              </div>
            </div> */}
            </div>
          </div>

          {/* Countries Grid */}
          <div className="countries-grid mb-16">
            {countries.map((country, index) => (
              <div
                key={country.name}
                className="country-card group relative transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-transparent transition-all duration-300 hover:shadow-2xl hover:border-opacity-30"
                  style={{ '--hover-border-color': '#ffd100' }}>

                  {/* Country Flag/Image Background */}
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${country.flagImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                    {/* Country Name Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-1 transition-colors duration-300 group-hover:text-yellow-300">
                        {country.name}
                      </h3>
                    </div>

                    {/* Map Pin Icon */}
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-white/30 backdrop-blur-sm transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: '#ffd100' }}>
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: '#4a5568' }}>
                      {country.description}
                    </p>

                    {/* Specialties */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-sm" style={{ color: '#386641' }}>Our Specialties:</h4>
                      <div className="flex flex-wrap gap-1">
                        {country.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-xs rounded-full border transition-colors duration-300 hover:scale-105"
                            style={{
                              backgroundColor: '#fff3b3',
                              color: '#386641',
                              borderColor: '#ffd100'
                            }}
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Learn More Button */}
                    <button className="country-btn group/btn w-full flex items-center justify-center gap-2 p-3 rounded-lg transition-all duration-300">
                      <span className="text-sm font-medium transition-all duration-300">
                        Learn More About {country.name}
                      </span>
                      <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ boxShadow: `0 0 30px #ffd100` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="rounded-2xl p-8 border-2 cta-section"
              style={{
                background: 'linear-gradient(135deg, #fff3b3, #f9fbe7)',
                borderColor: '#ffd100'
              }}>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#386641' }}>
                Ready to Start Your Global Journey?
              </h3>
              <p className="mb-6 max-w-2xl mx-auto" style={{ color: '#4a5568' }}>
                No matter which destination you choose, our expert consultants are ready to guide you through every step of your immigration journey with personalized service and proven expertise.
              </p>
              <button
                onClick={() => openForm()}
                className="cta-button px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 inline-flex items-center gap-2 hover:scale-105 hover:shadow-xl">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountriesWeServe;