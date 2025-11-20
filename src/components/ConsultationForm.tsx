'use client';

import { useState } from 'react';
import styles from './ConsultationForm.module.css';

interface FormData {
  name: string;
  address: string;
  phone: string;
}

export default function ConsultationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    address: '',
    phone: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.address && formData.phone) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  return (
    <section className={styles.formSection} id="consultation-form">
      <div className={styles.container}>
        <div className={styles.formHeader}>
          <h2 className={styles.formTitle}>Book Your Free Consultation</h2>
          <p className={styles.formSubtitle}>
            Get expert advice and a custom design plan for your outdoor space
          </p>
        </div>

        <div className={styles.formCard}>
          <div className={styles.stepIndicator}>
            <div className={`${styles.stepDot} ${step === 1 ? styles.active : styles.completed}`}>
              1
            </div>
            <div className={styles.stepLine}></div>
            <div className={`${styles.stepDot} ${step === 2 ? styles.active : ''}`}>
              2
            </div>
          </div>

          <div className={styles.formContent}>
            {/* Step 1: Contact Information */}
            <div
              className={`${styles.formStep} ${step === 1 ? styles.stepActive : styles.stepLeft}`}
            >
              <form onSubmit={handleContinue}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                    placeholder="John Smith"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="address" className={styles.label}>
                    Property Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                    placeholder="123 Main Street, City, State"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                    placeholder="(555) 123-4567"
                  />
                </div>

                <button type="submit" className={styles.submitButton}>
                  Continue to Booking
                </button>
              </form>
            </div>

            {/* Step 2: Calendar */}
            <div
              className={`${styles.formStep} ${step === 2 ? styles.stepActive : styles.stepRight}`}
            >
              <div className={styles.calendarPlaceholder}>
                <div className={styles.calendarHeader}>
                  <h3 className={styles.calendarTitle}>Select Your Preferred Date</h3>
                  <p className={styles.calendarSubtitle}>Choose a convenient time for your consultation</p>
                </div>

                <div className={styles.calendarGrid}>
                  <div className={styles.calendarInfo}>
                    Calendar component will be integrated here
                  </div>
                </div>

                <div className={styles.calendarActions}>
                  <button
                    type="button"
                    onClick={handleBack}
                    className={styles.backButton}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className={styles.submitButton}
                    onClick={() => alert('Booking submitted! (Integration needed)')}
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
