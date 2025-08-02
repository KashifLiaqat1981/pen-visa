import Hero from '@/components/Hero';
import VisaServices from '@/components/VisaServices';
import AboutUs from '@/components/AboutUs';
import CountriesWeServe from '@/components/CountriesWeServe';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <VisaServices />
      <AboutUs />
      <CountriesWeServe />

      {/* Additional content sections can be added here */}
      <section className="py-16 bg-pen-visa-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold pen-visa-green mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-700 text-lg">
            Contact our expert consultants today to discuss your visa requirements.
          </p>
        </div>
      </section>
    </main>
  );
}