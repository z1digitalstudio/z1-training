import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';

export function LayoutOne() {
  return (
    <>
      <div title={'Nav'} className={globalStyles.contentWrapper}>
        <img src="" alt="Logo" />
        <p>Why Flow</p>
        <p>Overview</p>
        <p>Solutions</p>
        <p>Pricing</p>
        <p>More</p>
        <p>Login</p>
      </div>
      <div title={'Main'} className={styles.background}>
        <h1 className={styles.title}>Flow Site Map</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div title={'Content'} className={globalStyles.contentWrapper}>
        <p>Homepage</p>
        <hr />
        <div title={'Column1'} className={globalStyles.contentWrapper}>
          <div title={'Box11'} className={globalStyles.contentWrapper}>
            <h1 className={styles.title}>Choose Flow</h1>
            <p>Why Flow</p>
            <p>Features</p>
            <p>Pricing</p>
            <p>Security</p>
            <p>Updates</p>
          </div>
          <div title={'Box12'} className={globalStyles.contentWrapper}>
            <h1 className={styles.title}>Flow</h1>
            <p>For Teams</p>
            <p>For Enterprise</p>
            <p>Flow Chart</p>
            <p>Flow Solo</p>
          </div>
          <div title={'Box13'} className={globalStyles.contentWrapper}>
            <h1 className={styles.title}>Results</h1>
            <p>Customers</p>
            <p>Reviews</p>
            <p>Stories</p>
          </div>
        </div>
        <div title={'Column2'} className={globalStyles.contentWrapper}>
          <div title={'Box21'} className={globalStyles.contentWrapper}>
            <h1 className={styles.title}>Resources</h1>
            <p>Download Flow</p>
            <p>Integrations</p>
          </div>
          <div title={'Box22'} className={globalStyles.contentWrapper}>
            <h1 className={styles.title}>Support</h1>
            <p>Get Help</p>
            <p>Getting Started</p>
            <p>Tutorials</p>
            <p>Helpful Guides</p>
          </div>
          <div title={'Box23'} className={globalStyles.contentWrapper}>
            <h1 className={styles.title}>Developers</h1>
            <p>Developing for Flow</p>
            <p>API Documentation</p>
            <p>Site Status</p>
          </div>
        </div>
        <div title={'Column3'} className={globalStyles.contentWrapper}>
          <div title={'Box31'} className={globalStyles.contentWrapper}>
            <h1 className={styles.title}>Company</h1>
            <p>Our Story</p>
            <p>Contact Us</p>
            <p>Careers</p>
            <p>Blog</p>
          </div>
          <div title={'Box32'} className={globalStyles.contentWrapper}>
            <h1 className={styles.title}>Flow for...</h1>
            <p>Flow for Education</p>
            <p>Flow for Nonprofits</p>
            <p>Flow for Makers</p>
          </div>
          <div title={'Box33'} className={globalStyles.contentWrapper}>
            <h1 className={styles.title}>Flow Legal</h1>
            <p>Legal</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Acceptable Use Policy</p>
            <p>Subprocessors</p>
          </div>
        </div>
      </div>
      <div title={'Footer'} className={globalStyles.contentWrapper}>
        <div title={'FooterColumn1'}>
          <h1 className={styles.title}>Flow</h1>
          <p>For Teams</p>
          <p>For Enterprise</p>
          <p>Flow Solo</p>
        </div>
        <div title={'FooterColumn2'}>
          <h1 className={styles.title}>Results</h1>
          <p>Customers</p>
          <p>Reviews</p>
          <p>Stories</p>
        </div>
        <div title={'FooterColumn3'}>
          <h1 className={styles.title}>Resources</h1>
          <p>Download Flow</p>
          <p>Integrations (New)</p>
          <p>Developers</p>
        </div>
        <div title={'FooterColumn4'}>
          <h1 className={styles.title}>Support</h1>
          <p>Get Help</p>
          <p>Helpful Guides</p>
          <p>Tutorials (New)</p>
        </div>
        <div title={'FooterColumn5'}>
          <h1 className={styles.title}>Company</h1>
          <p>Our Story</p>
          <p>Contact Us</p>
          <p>Blog</p>
        </div>
      </div>
    </>
  );
}
