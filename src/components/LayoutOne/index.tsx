import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';

export function LayoutOne() {
  return (
    <>
      <div title={'Nav'} className={globalStyles.contentWrapper}>
        <nav>
          <img src="" alt="Logo" />
          <a href={''}>Why Flow</a>
          <a href={''}>Overview</a>
          <a href={''}>Solutions</a>
          <a href={''}>Pricing</a>
          <a href={''}>More</a>
          <a href={''}>Login</a>
        </nav>
      </div>
      <div title={'Main'} className={styles.background}>
        <h1 className={styles.title}>Flow Site Map</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div title={'Links Map'} className={globalStyles.contentWrapper}>
        <a href={''}>Homepage</a>
        <hr />
        <div title={'Column1'} className={globalStyles.contentWrapper}>
          <div title={'Box11'} className={globalStyles.contentWrapper}>
            <h1 className={styles.title}>Choose Flow</h1>
            <a href={''}>Why Flow</a>
            <a href={''}>Features</a>
            <a href={''}>Pricing</a>
            <a href={''}>Security</a>
            <a href={''}>Updates</a>
          </div>
          <div title={'Box12'} className={globalStyles.contentWrapper}>
            <h1 className={styles.title}>Flow</h1>
            <a href={''}>For Teams</a>
            <a href={''}>For Enterprise</a>
            <a href={''}>Flow Chart</a>
            <a href={''}>Flow Solo</a>
          </div>
          <div title={'Box13'} className={globalStyles.contentWrapper}>
            <h1 className={styles.title}>Results</h1>
            <a href={''}>Customers</a>
            <a href={''}>Reviews</a>
            <a href={''}>Stories</a>
          </div>
        </div>
        <div title={'Column2'} className={globalStyles.contentWrapper}>
          <div title={'Box21'} className={globalStyles.contentWrapper}>
            <h1 className={styles.title}>Resources</h1>
            <a href={''}>Download Flow</a>
            <a href={''}>Integrations</a>
          </div>
          <div title={'Box22'} className={globalStyles.contentWrapper}>
            <h1 className={styles.title}>Support</h1>
            <a href={''}>Get Help</a>
            <a href={''}>Getting Started</a>
            <a href={''}>Tutorials</a>
            <a href={''}>Helpful Guides</a>
          </div>
          <div title={'Box23'} className={globalStyles.contentWrapper}>
            <h1 className={styles.title}>Developers</h1>
            <a href={''}>Developing for Flow</a>
            <a href={''}>API Documentation</a>
            <a href={''}>Site Status</a>
          </div>
        </div>
        <div title={'Column3'} className={globalStyles.contentWrapper}>
          <div title={'Box31'} className={globalStyles.contentWrapper}>
            <h1 className={styles.title}>Company</h1>
            <a href={''}>Our Story</a>
            <a href={''}>Contact Us</a>
            <a href={''}>Careers</a>
            <a href={''}>Blog</a>
          </div>
          <div title={'Box32'} className={globalStyles.contentWrapper}>
            <h1 className={styles.title}>Flow for...</h1>
            <a href={''}>Flow for Education</a>
            <a href={''}>Flow for Nonprofits</a>
            <a href={''}>Flow for Makers</a>
          </div>
          <div title={'Box33'} className={globalStyles.contentWrapper}>
            <h1 className={styles.title}>Flow Legal</h1>
            <a href={''}>Legal</a>
            <a href={''}>Terms of Service</a>
            <a href={''}>Privacy Policy</a>
            <a href={''}>Acceptable Use Policy</a>
            <a href={''}>Subprocessors</a>
          </div>
        </div>
      </div>
      <div title={'Footer'} className={globalStyles.contentWrapper}>
        <div title={'FooterColumn1'}>
          <h1 className={styles.title}>Flow</h1>
          <a href={''}>For Teams</a>
          <a href={''}>For Enterprise</a>
          <a href={''}>Flow Solo</a>
        </div>
        <div title={'FooterColumn2'}>
          <h1 className={styles.title}>Results</h1>
          <a href={''}>Customers</a>
          <a href={''}>Reviews</a>
          <a href={''}>Stories</a>
        </div>
        <div title={'FooterColumn3'}>
          <h1 className={styles.title}>Resources</h1>
          <a href={''}>Download Flow</a>
          <a href={''}>Integrations (New)</a>
          <a href={''}>Developers</a>
        </div>
        <div title={'FooterColumn4'}>
          <h1 className={styles.title}>Support</h1>
          <a href={''}>Get Help</a>
          <a href={''}>Helpful Guides</a>
          <a href={''}>Tutorials (New)</a>
        </div>
        <div title={'FooterColumn5'}>
          <h1 className={styles.title}>Company</h1>
          <a href={''}>Our Story</a>
          <a href={''}>Contact Us</a>
          <a href={''}>Blog</a>
        </div>
      </div>
      <div title={'Subfooter'}>
        <p>© 2019 Flow Technologies Ltd. All rights reserved.</p>
        <a href={''}>Privacy & Terms</a>
        <a href={''}>Service Status</a>
        <a href={''}>Site Map</a>
        <li>
          <a>asd</a>
        </li>
      </div>
    </>
  );
}
