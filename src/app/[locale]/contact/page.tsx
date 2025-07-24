import ContactHero from '@/components/sections/ContactHero';
import ContactForm from '@/components/sections/ContactForm';
import ContactInfo from '@/components/sections/ContactInfo';
import ContactMap from '@/components/sections/ContactMap';
import ContactFAQ from '@/components/sections/ContactFAQ';

interface ContactPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  
  return (
    <div className="pt-16">
      <ContactHero />
      <div className="grid lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
      <ContactMap />
      <ContactFAQ />
    </div>
  );
}