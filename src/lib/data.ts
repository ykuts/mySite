export interface Project {
  id: string;
  title: {
    en: string;
    fr: string;
    de: string;
  };
  description: {
    en: string;
    fr: string;
    de: string;
  };
  tech: string[];
  category: 'web' | 'ecommerce' | 'automation';
  image: string;
  url?: string;
  featured: boolean;
}

export interface Service {
  id: string;
  icon: string;
  title: {
    en: string;
    fr: string;
    de: string;
  };
  description: {
    en: string;
    fr: string;
    de: string;
  };
  features: {
    en: string[];
    fr: string[];
    de: string[];
  };
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: {
      en: 'E-commerce Platform',
      fr: 'Plateforme E-commerce',
      de: 'E-Commerce-Plattform'
    },
    description: {
      en: 'Full-featured online store with admin panel and payment processing',
      fr: 'Boutique en ligne complète avec panneau d\'administration et traitement des paiements',
      de: 'Vollausgestatteter Online-Shop mit Admin-Panel und Zahlungsabwicklung'
    },
    tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    category: 'ecommerce',
    image: '/projects/ecommerce-1.jpg',
    featured: true
  },
  {
    id: 'corporate-website',
    title: {
      en: 'Corporate Website',
      fr: 'Site Corporatif',
      de: 'Unternehmens-Website'
    },
    description: {
      en: 'Multi-page responsive website with animations and CMS integration',
      fr: 'Site web responsive multi-pages avec animations et intégration CMS',
      de: 'Mehrseitige responsive Website mit Animationen und CMS-Integration'
    },
    tech: ['React', 'Framer Motion', 'Sanity CMS', 'Vercel'],
    category: 'web',
    image: '/projects/corporate-1.jpg',
    featured: true
  },
  {
    id: 'automation-system',
    title: {
      en: 'Data Automation System',
      fr: 'Système d\'Automatisation de Données',
      de: 'Datenautomatisierungssystem'
    },
    description: {
      en: 'Automated data processing pipeline with real-time analytics dashboard',
      fr: 'Pipeline de traitement de données automatisé avec tableau de bord analytique en temps réel',
      de: 'Automatisierte Datenverarbeitungspipeline mit Echtzeit-Analytics-Dashboard'
    },
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'Docker'],
    category: 'automation',
    image: '/projects/automation-1.jpg',
    featured: true
  }
];

export const services: Service[] = [
  {
    id: 'web-development',
    icon: 'Globe',
    title: {
      en: 'Web Development',
      fr: 'Développement Web',
      de: 'Web-Entwicklung'
    },
    description: {
      en: 'Modern web solutions focused on user experience and performance',
      fr: 'Solutions web modernes axées sur l\'expérience utilisateur et la performance',
      de: 'Moderne Web-Lösungen mit Fokus auf Benutzererfahrung und Leistung'
    },
    features: {
      en: [
        'Responsive design for all devices',
        'Fast loading and SEO optimized',
        'Modern frameworks (React, Next.js)',
        'Custom animations and interactions'
      ],
      fr: [
        'Design responsive pour tous les appareils',
        'Chargement rapide et optimisé SEO',
        'Frameworks modernes (React, Next.js)',
        'Animations et interactions personnalisées'
      ],
      de: [
        'Responsive Design für alle Geräte',
        'Schnelles Laden und SEO-optimiert',
        'Moderne Frameworks (React, Next.js)',
        'Benutzerdefinierte Animationen und Interaktionen'
      ]
    }
  },
  {
    id: 'ecommerce',
    icon: 'ShoppingCart',
    title: {
      en: 'E-commerce & Web Apps',
      fr: 'E-commerce & Applications Web',
      de: 'E-Commerce & Web-Apps'
    },
    description: {
      en: 'Online stores and complex web applications built on modern technologies',
      fr: 'Boutiques en ligne et applications web complexes construites sur des technologies modernes',
      de: 'Online-Shops und komplexe Webanwendungen auf modernen Technologien'
    },
    features: {
      en: [
        'Payment gateway integration',
        'Inventory management systems',
        'User authentication & profiles',
        'Admin dashboards and analytics'
      ],
      fr: [
        'Intégration de passerelles de paiement',
        'Systèmes de gestion d\'inventaire',
        'Authentification utilisateur et profils',
        'Tableaux de bord admin et analyses'
      ],
      de: [
        'Payment-Gateway-Integration',
        'Bestandsverwaltungssysteme',
        'Benutzerauthentifizierung und Profile',
        'Admin-Dashboards und Analytics'
      ]
    }
  },
  {
    id: 'automation',
    icon: 'Database',
    title: {
      en: 'Automation & Data',
      fr: 'Automatisation & Données',
      de: 'Automatisierung & Daten'
    },
    description: {
      en: 'Data migration, processing, cleaning. Scraping and business process automation',
      fr: 'Migration, traitement, nettoyage de données. Scraping et automatisation des processus métier',
      de: 'Datenmigration, -verarbeitung, -bereinigung. Scraping und Geschäftsprozessautomatisierung'
    },
    features: {
      en: [
        'Web scraping and data extraction',
        'Database migration and optimization',
        'API development and integration',
        'Automated reporting systems'
      ],
      fr: [
        'Web scraping et extraction de données',
        'Migration et optimisation de bases de données',
        'Développement et intégration d\'API',
        'Systèmes de reporting automatisés'
      ],
      de: [
        'Web Scraping und Datenextraktion',
        'Datenbankmigration und -optimierung',
        'API-Entwicklung und -Integration',
        'Automatisierte Berichtssysteme'
      ]
    }
  }
];