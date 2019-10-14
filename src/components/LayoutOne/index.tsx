import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { Header } from '@/components/LayoutOne/Header';
import { Jumbotron } from '@/components/LayoutOne/Jumbotron';
import { Footer } from '@/components/LayoutOne/Footer';

export function LayoutOne() {
  return (
    <>
      <Header />
      <main>
        <Jumbotron />
        <section className={globalStyles.contentWrapper}>
          <h4>Homepage</h4>
          <div className={styles.contentNavWrapper}>
            <nav className={styles.contentNav}>
              <strong>Choose Tofu</strong>
              <a>Why Tofu</a>
              <a>Features</a>
              <a>Pricing</a>
              <a>Security</a>
              <a>Updates</a>
            </nav>
            <nav className={styles.contentNav}>
              <strong>Tofu</strong>
              <a>For Teams</a>
              <a>For Enterprise</a>
              <a>Tofu Chat</a>
              <a>Tofu Solo</a>
            </nav>
            <nav className={styles.contentNav}>
              <strong>Results</strong>
              <a>Customers</a>
              <a>Reviews</a>
              <a>Stories</a>
            </nav>
          </div>
          <div className={styles.contentNavWrapper}>
            <nav className={styles.contentNav}>
              <strong>Resources</strong>
              <a>Download Tofu</a>
              <a>Integrations</a>
            </nav>
            <nav className={styles.contentNav}>
              <strong>Support</strong>
              <a>Get Help</a>
              <a>Getting Started</a>
              <a>Tutorials</a>
              <a>Helpful Guides</a>
            </nav>
            <nav className={styles.contentNav}>
              <strong>Developers</strong>
              <a>Developing for Tofu</a>
              <a>API Documentation</a>
              <a>Site Status</a>
            </nav>
          </div>
          <div className={styles.contentNavWrapper}>
            <nav className={styles.contentNav}>
              <strong>Company</strong>
              <a>Our Story</a>
              <a>Contact Us</a>
              <a>Careers</a>
              <a>Blog</a>
            </nav>
            <nav className={styles.contentNav}>
              <strong>Tofu for...</strong>
              <a>Tofu for Education</a>
              <a>Tofu for Nonprofits</a>
              <a>Tofu for Makers</a>
            </nav>
            <nav className={styles.contentNav}>
              <strong>Tofu Legal</strong>
              <a>Legal</a>
              <a>Terms of Service</a>
              <a>Privacy Policy</a>
              <a>Acceptable Use Policy</a>
              <a>Subprocessors</a>
            </nav>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
