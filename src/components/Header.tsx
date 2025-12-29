'use client';

import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/baystone-text-logo.png"
            alt="Baystone Partners"
            width={200}
            height={60}
            priority
          />
        </div>

        <nav className={styles.nav}>
          <button
            className={styles.navLink}
            onClick={() => scrollToSection('offer')}
          >
            Offer
          </button>
          <button
            className={styles.navLink}
            onClick={() => scrollToSection('process')}
          >
            Process
          </button>
          <button
            className={styles.navLink}
            onClick={() => scrollToSection('portfolio')}
          >
            Portfolio
          </button>
          <button
            className={styles.navLink}
            onClick={() => scrollToSection('consultation-form')}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
