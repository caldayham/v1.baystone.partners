'use client';

import { useEffect, useState } from 'react';
import styles from './FloatingCTA.module.css';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const formSection = document.getElementById('consultation-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      className={`${styles.floatingButton} ${isVisible ? styles.visible : ''}`}
      onClick={handleClick}
      aria-label="Book free consultation"
    >
      Book Free In-Person Consultation
    </button>
  );
}
