import React from 'react';
import classNames from 'classnames';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { NavBar } from './NavBar/NavBar';
import { Footer } from './Footer/Footer';

export function LayoutOne() {
  return (
    <>
      <NavBar></NavBar>
      <div className={classNames(styles.fold, globalStyles.contentPaddingWrapper)}>
        <h1 className={styles.foldTitle}>Flow Site Map</h1>
        <p className={styles.foldSubtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className={classNames(styles.homepage, globalStyles.contentWrapper)}>
        <div className={styles.homepageHeader}>
          <h2 className={styles.title}>Homepage</h2>
        </div>
        <div className={styles.homepageContent}>
          <div className={styles.sitemapSection}>
            <h3 className={styles.sectionTitle}>Choose Flow</h3>
            <a href="#" className={styles.sectionLink}>Why Flow</a>
            <a href="#" className={styles.sectionLink}>Features</a>
            <a href="#" className={styles.sectionLink}>Pricing</a>
            <a href="#" className={styles.sectionLink}>Security</a>
            <a href="#" className={styles.sectionLink}>Updates</a>
          </div>
          <div className={styles.sitemapSection}>
            <h3 className={styles.sectionTitle}>Flow</h3>
            <a href="#" className={styles.sectionLink}>For Teams</a>
            <a href="#" className={styles.sectionLink}>For Enterprise</a>
            <a href="#" className={styles.sectionLink}>Flow Chat</a>
            <a href="#" className={styles.sectionLink}>Flow Solo</a>
          </div>
          <div className={styles.sitemapSection}>
            <h3 className={styles.sectionTitle}>Results</h3>
            <a href="#" className={styles.sectionLink}>Customers</a>
            <a href="#" className={styles.sectionLink}>Reviews</a>
            <a href="#" className={styles.sectionLink}>Stories</a>
          </div>
          <div className={styles.sitemapSection}>
            <h3 className={styles.sectionTitle}>Resources</h3>
            <a href="#" className={styles.sectionLink}>Download Flow</a>
            <a href="#" className={styles.sectionLink}>Integrations</a>
          </div>
          <div className={styles.sitemapSection}>
            <h3 className={styles.sectionTitle}>Support</h3>
            <a href="#" className={styles.sectionLink}>Get Help</a>
            <a href="#" className={styles.sectionLink}>Getting Started</a>
            <a href="#" className={styles.sectionLink}>Tutorials</a>
            <a href="#" className={styles.sectionLink}>Helpful Guides</a>
          </div>
          <div className={styles.sitemapSection}>
            <h3 className={styles.sectionTitle}>Developers</h3>
            <a href="#" className={styles.sectionLink}>Developing for Flow</a>
            <a href="#" className={styles.sectionLink}>API Documentation</a>
            <a href="#" className={styles.sectionLink}>Site Status</a>
          </div>
          <div className={styles.sitemapSection}>
            <h3 className={styles.sectionTitle}>Company</h3>
            <a href="#" className={styles.sectionLink}>Our Story</a>
            <a href="#" className={styles.sectionLink}>Contact Us</a>
            <a href="#" className={styles.sectionLink}>Careers</a>
            <a href="#" className={styles.sectionLink}>Blog</a>
          </div>
          <div className={styles.sitemapSection}>
            <h3 className={styles.sectionTitle}>Flow for...</h3>
            <a href="#" className={styles.sectionLink}>Flow for Education</a>
            <a href="#" className={styles.sectionLink}>Flow for Nonprofits</a>
            <a href="#" className={styles.sectionLink}>Flow for Makers</a>
          </div>
          <div className={styles.sitemapSection}>
            <h3 className={styles.sectionTitle}>Flow Legal</h3>
            <a href="#" className={styles.sectionLink}>Legal</a>
            <a href="#" className={styles.sectionLink}>Terms of Service</a>
            <a href="#" className={styles.sectionLink}>Privacy Policy</a>
            <a href="#" className={styles.sectionLink}>Acceptable Use Policy</a>
            <a href="#" className={styles.sectionLink}>Subprocessors</a>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
