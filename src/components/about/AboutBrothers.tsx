import Image from 'next/image';
import styles from './AboutBrothers.module.css';

export default function AboutBrothers() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Meet the Brothers</h2>
        <p className={styles.sectionSubtitle}>
          The team behind your dream outdoor space
        </p>

        <div className={styles.brothersCard}>
          <div className={styles.brotherInfo}>
            <h3 className={styles.brotherName}>Cal Day-Ham</h3>
            <p className={styles.brotherRole}>Lead Designer</p>
            <p className={styles.brotherDescription}>
              With a keen eye for detail and a passion for transforming outdoor spaces,
              Cal brings creative vision and thoughtful design to every project. His
              expertise in landscape architecture ensures your space is both beautiful
              and functional.
            </p>
          </div>

          <div className={styles.photoContainer}>
            <Image
              src="/imgs/cal-fynn-deck.jpg"
              alt="Cal and Fynn Dayham"
              width={500}
              height={500}
              className={styles.brothersPhoto}
              style={{ objectFit: 'cover', objectPosition: 'center', transform: 'scaleX(-1)' }}
            />
          </div>

          <div className={styles.brotherInfo}>
            <h3 className={styles.brotherName}>Fynn Day-Ham</h3>
            <p className={styles.brotherRole}>Lead Installation Specialist</p>
            <p className={styles.brotherDescription}>
              Fynn's hands-on expertise and meticulous attention to detail bring designs
              to life. His deep understanding of construction and installation ensures
              every project is executed flawlessly, on time, and to the highest standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
