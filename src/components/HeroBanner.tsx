'use client';

import styles from './HeroBanner.module.css';

export default function HeroBanner() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Transforming Outdoor Spaces Into
          <span className={styles.heroAccent}> Living Masterpieces</span>
        </h1>
        <p className={styles.heroSubtitle}>
          The Bay's top up-and-coming landscape design firm.
          Award-winning design that elevates your property's beauty and value.
          Experience the Baystone difference with a complimentary consultation.
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
