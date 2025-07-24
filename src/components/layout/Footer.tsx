import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href={`/${locale}`} className="text-2xl font-bold mb-4 block">
              Yulia Kuts
            </Link>
            <p className="text-gray-300 max-w-md">
              Web Developer & Automation Expert based in Geneva, Switzerland. 
              Creating modern solutions for growing businesses.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="mailto:hello@yuliakuts.dev"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/yuliakuts"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/yuliakuts"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href={`/${locale}/about`} className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/portfolio`} className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Web Development</li>
              <li>E-commerce</li>
              <li>Automation</li>
              <li>Data Processing</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            {t('rights')}
          </div>
          <div className="text-gray-400 text-sm">
            {t('made')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;