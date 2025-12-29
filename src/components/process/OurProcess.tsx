import styles from './OurProcess.module.css';

export default function OurProcess() {
  const steps = [
    {
      number: '01',
      title: 'Free Onsite Consultation',
      description:
        'One of the brothers visits your property to discuss your needs, design options, and inspiration. We take scans and measurements to understand your space perfectly.',
    },
    {
      number: '02',
      title: 'Design Phase',
      description:
        'We create your dream outdoor space with professional 2D and 3D visualizations, plus detailed construction documents ready for any licensed contractor.',
    },
    {
      number: '03',
      title: 'Bid Solicitation & Negotiation',
      description:
        'We help solicit bids from quality contractors and leverage our expertise to negotiate fair pricing and payment terms that protect your interests.',
    },
    {
      number: '04',
      title: 'Build Support',
      description:
        'We stay available throughout the entire construction process to answer questions and ensure a smooth build that preserves your aesthetic vision.',
    },
  ];

  return (
    <section className={styles.process} id="process">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Process</h2>
        <p className={styles.sectionSubtitle}>
          From concept to completion, we're with you every step of the way
        </p>

        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.stepImagePlaceholder}>
                <span className={styles.stepNumber}>{step.number}</span>
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
