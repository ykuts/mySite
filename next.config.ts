import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

// Важно: указываем правильный путь к файлу конфигурации next-intl
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  // Добавляем основные настройки для интернационализации
  experimental: {
    // Может помочь с производительностью
    optimizePackageImports: ['next-intl']
  }
};

export default withNextIntl(nextConfig);