import styles from './Offer.module.css';

export default function Offer() {
  return (
    <section className={styles.offer} id="offer">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Offer</h2>

        <div className={styles.videoWrapper}>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/QG-UfcS7l3k"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className={styles.offerCard}>
          <p className={styles.offerText}>
            Because we are just starting out, we are offering a <strong>100% risk-free experience</strong>.
            My brother and I will drive to your property, consult you on your project with the knowledge
            we've gained from a year of experience at a national landscape design firm and running our own
            contracting business, scan your area, and draft two design options we feel best balance your
            space and preferences.
          </p>
          <p className={styles.offerHighlight}>
            If you don't feel like we're a good fit at that point, we part ways and you pay nothing!
          </p>
        </div>
      </div>
    </section>
  );
}
