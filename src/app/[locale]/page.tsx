import { useTranslations } from 'next-intl';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import FeaturedProjectsSection from '@/components/sections/FeaturedProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
export default function HomePage() {
  return (
<>
    <div className="pt-16">
      <HeroSection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <ContactSection />
    </div>

    {/* <div style={{ padding: '20px', border: '2px solid blue' }}>
      <h1 style={{ color: 'blue' }}>✅ Page works!</h1>
      <p>This is the locale-specific page!</p>
    </div> */}
    </>
  );
}