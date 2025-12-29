'use client';

import styles from './Portfolio.module.css';

export default function Portfolio() {
  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Work Speaks for Itself</h2>
        <p className={styles.sectionSubtitle}>
          Explore our portfolio of stunning landscape transformations
        </p>

        <div className={styles.portfolioGrid}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className={styles.portfolioItem}>
              <div className={styles.portfolioPlaceholder}>
                <span className={styles.placeholderText}>Project {item}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.portfolioCta}>
          <p className={styles.ctaText}>
            Ready to create your own outdoor masterpiece?
          </p>
          <button
            className={styles.ctaButton}
            onClick={() => {
              const formSection = document.getElementById('consultation-form');
              formSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Schedule Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
