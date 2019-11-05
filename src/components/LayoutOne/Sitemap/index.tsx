import React from 'react';
import styles from './styles.module.scss';
import globalStyles from '@/styles/global.scss';

export function Sitemap() {
  return (
    <section className={`${globalStyles.contentWrapper} ${styles.content}`}>
      <h4 className={styles.title}>Homepage</h4>
      <div className={styles.grid}>
        <nav className={styles.column}>
          <strong className={styles.columnTitle}>Choose Tofu</strong>
          <a href="#">Why Tofu</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Security</a>
          <a href="#">Updates</a>
        </nav>
        <nav className={styles.column}>
          <strong className={styles.columnTitle}>Tofu</strong>
          <a href="#">For Teams</a>
          <a href="#">For Enterprise</a>
          <a href="#">Tofu Chat</a>
          <a href="#">Tofu Solo</a>
        </nav>
        <nav className={styles.column}>
          <strong className={styles.columnTitle}>Results</strong>
          <a href="#">Customers</a>
          <a href="#">Reviews</a>
          <a href="#">Stories</a>
        </nav>
        <nav className={styles.column}>
          <strong className={styles.columnTitle}>Resources</strong>
          <a href="#">Download Tofu</a>
          <a href="#">Integrations</a>
        </nav>
        <nav className={styles.column}>
          <strong className={styles.columnTitle}>Support</strong>
          <a href="#">Get Help</a>
          <a href="#">Getting Started</a>
          <a href="#">Tutorials</a>
          <a href="#">Helpful Guides</a>
        </nav>
        <nav className={styles.column}>
          <strong className={styles.columnTitle}>Developers</strong>
          <a href="#">Developing for Tofu</a>
          <a href="#">API Documentation</a>
          <a href="#">Site Status</a>
        </nav>
        <nav className={styles.column}>
          <strong className={styles.columnTitle}>Company</strong>
          <a href="#">Our Story</a>
          <a href="#">Contact Us</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
        </nav>
        <nav className={styles.column}>
          <strong className={styles.columnTitle}>Tofu for...</strong>
          <a href="#">Tofu for Education</a>
          <a href="#">Tofu for Nonprofits</a>
          <a href="#">Tofu for Makers</a>
        </nav>
        <nav className={styles.column}>
          <strong className={styles.columnTitle}>Tofu Legal</strong>
          <a href="#">Legal</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Acceptable Use Policy</a>
          <a href="#">Subprocessors</a>
        </nav>
      </div>
    </section>
  );
}