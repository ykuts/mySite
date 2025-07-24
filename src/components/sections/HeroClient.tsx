'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface HeroClientProps {
  children: React.ReactNode;
}

const HeroClient = ({ children }: HeroClientProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl"
    >
      {children}
    </motion.div>
  );
};

export default HeroClient;