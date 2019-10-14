import React from 'react';
import styles from './styles.module.scss';
import globalStyles from '@/styles/global.scss';

export function Sitemap() {
  return (
    <section className={globalStyles.contentWrapper}>
      <h4 className={styles.title}>Homepage</h4>
      <div className={styles.wrapper}>
        <nav className={styles.element}>
          <strong className={styles.elementTitle}>Choose Tofu</strong>
          <a>Why Tofu</a>
          <a>Features</a>
          <a>Pricing</a>
          <a>Security</a>
          <a>Updates</a>
        </nav>
        <nav className={styles.element}>
          <strong className={styles.elementTitle}>Tofu</strong>
          <a>For Teams</a>
          <a>For Enterprise</a>
          <a>Tofu Chat</a>
          <a>Tofu Solo</a>
        </nav>
        <nav className={styles.element}>
          <strong className={styles.elementTitle}>Results</strong>
          <a>Customers</a>
          <a>Reviews</a>
          <a>Stories</a>
        </nav>
      </div>
      <div className={styles.wrapper}>
        <nav className={styles.element}>
          <strong className={styles.elementTitle}>Resources</strong>
          <a>Download Tofu</a>
          <a>Integrations</a>
        </nav>
        <nav className={styles.element}>
          <strong className={styles.elementTitle}>Support</strong>
          <a>Get Help</a>
          <a>Getting Started</a>
          <a>Tutorials</a>
          <a>Helpful Guides</a>
        </nav>
        <nav className={styles.element}>
          <strong className={styles.elementTitle}>Developers</strong>
          <a>Developing for Tofu</a>
          <a>API Documentation</a>
          <a>Site Status</a>
        </nav>
      </div>
      <div className={styles.wrapper}>
        <nav className={styles.element}>
          <strong className={styles.elementTitle}>Company</strong>
          <a>Our Story</a>
          <a>Contact Us</a>
          <a>Careers</a>
          <a>Blog</a>
        </nav>
        <nav className={styles.element}>
          <strong className={styles.elementTitle}>Tofu for...</strong>
          <a>Tofu for Education</a>
          <a>Tofu for Nonprofits</a>
          <a>Tofu for Makers</a>
        </nav>
        <nav className={styles.element}>
          <strong className={styles.elementTitle}>Tofu Legal</strong>
          <a>Legal</a>
          <a>Terms of Service</a>
          <a>Privacy Policy</a>
          <a>Acceptable Use Policy</a>
          <a>Subprocessors</a>
        </nav>
      </div>
    </section>
  );
}
