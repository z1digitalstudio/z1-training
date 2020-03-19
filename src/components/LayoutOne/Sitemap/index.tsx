import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';

export function Sitemap() {
  return (
    <>
      <div className={classNames(styles.sitemap, globalStyles.contentWrapper)}>
        <div className={styles.sitemapHeader}>
          <h2 className={styles.title}>Homepage</h2>
        </div>
        <div className={styles.sitemapContent}>
          <div className={styles.sitemapSection}>
            <h3 className={styles.sectionTitle}>Choose Flow</h3>
            <Link to="/" className={styles.sectionLink}>Why Flow</Link>
            <Link to="/" className={styles.sectionLink}>Features</Link>
            <Link to="/layout-three" className={styles.sectionLink}>Pricing</Link>
            <Link to="/" className={styles.sectionLink}>Security</Link>
            <Link to="/layout-two" className={styles.sectionLink}>Updates</Link>
          </div>
          <div className={styles.sitemapSection}>
            <h3 className={styles.sectionTitle}>Flow</h3>
            <Link to="/" className={styles.sectionLink}>For Teams</Link>
            <Link to="/" className={styles.sectionLink}>For Enterprise</Link>
            <Link to="/" className={styles.sectionLink}>Flow Chat</Link>
            <Link to="/" className={styles.sectionLink}>Flow Solo</Link>
          </div>
          <div className={styles.sitemapSection}>
            <h3 className={styles.sectionTitle}>Results</h3>
            <Link to="/" className={styles.sectionLink}>Customers</Link>
            <Link to="/" className={styles.sectionLink}>Reviews</Link>
            <Link to="/" className={styles.sectionLink}>Stories</Link>
          </div>
          <div className={styles.sitemapSection}>
            <h3 className={styles.sectionTitle}>Resources</h3>
            <Link to="/" className={styles.sectionLink}>Download Flow</Link>
            <Link to="/" className={styles.sectionLink}>Integrations</Link>
          </div>
          <div className={styles.sitemapSection}>
            <h3 className={styles.sectionTitle}>Support</h3>
            <Link to="/" className={styles.sectionLink}>Get Help</Link>
            <Link to="/" className={styles.sectionLink}>Getting Started</Link>
            <Link to="/" className={styles.sectionLink}>Tutorials</Link>
            <Link to="/" className={styles.sectionLink}>Helpful Guides</Link>
          </div>
          <div className={styles.sitemapSection}>
            <h3 className={styles.sectionTitle}>Developers</h3>
            <Link to="/" className={styles.sectionLink}>Developing for Flow</Link>
            <Link to="/" className={styles.sectionLink}>API Documentation</Link>
            <Link to="/" className={styles.sectionLink}>Site Status</Link>
          </div>
          <div className={styles.sitemapSection}>
            <h3 className={styles.sectionTitle}>Company</h3>
            <Link to="/" className={styles.sectionLink}>Our Story</Link>
            <Link to="/" className={styles.sectionLink}>Contact Us</Link>
            <Link to="/" className={styles.sectionLink}>Careers</Link>
            <Link to="/" className={styles.sectionLink}>Blog</Link>
          </div>
          <div className={styles.sitemapSection}>
            <h3 className={styles.sectionTitle}>Flow for...</h3>
            <Link to="/" className={styles.sectionLink}>Flow for Education</Link>
            <Link to="/" className={styles.sectionLink}>Flow for Nonprofits</Link>
            <Link to="/" className={styles.sectionLink}>Flow for Makers</Link>
          </div>
          <div className={styles.sitemapSection}>
            <h3 className={styles.sectionTitle}>Flow Legal</h3>
            <Link to="/" className={styles.sectionLink}>Legal</Link>
            <Link to="/" className={styles.sectionLink}>Terms of Service</Link>
            <Link to="/" className={styles.sectionLink}>Privacy Policy</Link>
            <Link to="/" className={styles.sectionLink}>Acceptable Use Policy</Link>
            <Link to="/" className={styles.sectionLink}>Subprocessors</Link>
          </div>
        </div>
      </div>
    </>
  );
}
