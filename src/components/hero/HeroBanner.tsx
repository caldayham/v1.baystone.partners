'use client';

import styles from './HeroBanner.module.css';

export default function HeroBanner() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Quality Landscape Design in Palo Alto
        </h1>
        <p className={styles.heroSubtitle}>
          From the first on-site consultation to finding the right contractor, Baystone pushes to be the best solution for new homeowners in Palo Alto.
        </p>
        <button
          className={styles.heroCta}
          onClick={() => {
            const formSection = document.getElementById('consultation-form');
            formSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Start Your Transformation
        </button>
      </div>
      <div className={styles.heroOverlay}></div>
    </section>
  );
}
