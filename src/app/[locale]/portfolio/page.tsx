import PortfolioHero from '@/components/sections/PortfolioHero';
import PortfolioGrid from '@/components/sections/PortfolioGrid';
import PortfolioStats from '@/components/sections/PortfolioStats';
import PortfolioCTA from '@/components/sections/PortfolioCTA';

interface PortfolioPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { locale } = await params;
  
  return (
    <div className="pt-16">
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioStats />
      <PortfolioCTA />
    </div>
  );
}