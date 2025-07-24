// src/app/[locale]/services/page.tsx
import ServicesHero from '@/components/sections/ServicesHero';
import ServicesDetailed from '@/components/sections/ServicesDetailed';
import ProcessSection from '@/components/sections/ProcessSection';
import TechnologiesSection from '@/components/sections/TechnologiesSection';
import ServicesContact from '@/components/sections/ServicesContact';

interface ServicesPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  
  return (
    <div className="pt-16">
      <ServicesHero />
      <ServicesDetailed />
      <ProcessSection />
      <TechnologiesSection />
      <ServicesContact />
    </div>
  );
}