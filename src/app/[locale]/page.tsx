import FeaturedProjectsSection from '@/components/sections/FeaturedProjectsSection';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';

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
      
      {/* Временные секции - добавим позже */}
      <ServicesSection />

      <FeaturedProjectsSection />
    </div>
  );
}