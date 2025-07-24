import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import FeaturedProjectsSection from '@/components/sections/FeaturedProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

interface HomePageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <ContactSection />
    </div>
  );
}