// src/app/[locale]/about/page.tsx
import AboutHero from '@/components/sections/AboutHero';
import AboutStory from '@/components/sections/AboutStory';
import AboutSkills from '@/components/sections/AboutSkills';
import AboutExperience from '@/components/sections/AboutExperience';
import AboutValues from '@/components/sections/AboutValues';
import AboutCTA from '@/components/sections/AboutCTA';

interface AboutPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  
  return (
    <div className="pt-16">
      <AboutHero />
      <AboutStory />
      <AboutSkills />
      <AboutExperience />
      <AboutValues />
      <AboutCTA />
    </div>
  );
}

