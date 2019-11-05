import React from 'react';
import { Link } from '../../Link/Link';
import ColumnBox from '../ColumnBox';
import styles from './ColumnMenu.scss';
import globalStyles from '@/styles/global.scss';

export function ColumnMenu(props: any) {
  return (
    <div className={globalStyles.contentWrapper}>
      <div className={styles.homepage}>
        <span>HomePage</span>
      </div>
      <hr className={styles.divisor} />
      <div className={styles.container}>
        <ColumnBox title="Choose Flow">
          <Link>Why Flow</Link>
          <Link>Features</Link>
          <Link>Pricing</Link>
          <Link>Security</Link>
          <Link>Updates</Link>
        </ColumnBox>

        <ColumnBox title="Resources">
          <Link>Download Flow</Link>
          <Link>Integrations</Link>
        </ColumnBox>

        <ColumnBox title="Company">
          <Link>Our Story</Link>
          <Link>Contact Us</Link>
          <Link>Careers</Link>
          <Link>Blog</Link>
        </ColumnBox>

        <ColumnBox title="Flow">
          <Link>For Teams</Link>
          <Link>For Enterprise</Link>
          <Link>Flow Chat</Link>
          <Link>Flow Solo</Link>
        </ColumnBox>

        <ColumnBox title="Support">
          <Link>Get Help</Link>
          <Link>Getting Started</Link>
          <Link>Tutorials</Link>
          <Link>Helpful Guides</Link>
        </ColumnBox>

        <ColumnBox title="Flow for...">
          <Link>Flow for Education</Link>
          <Link>Flow for Nonprofits</Link>
          <Link>Flow for Makers</Link>
        </ColumnBox>

        <ColumnBox title="Results">
          <Link>Customers</Link>
          <Link>Review</Link>
          <Link>Stories</Link>
        </ColumnBox>

        <ColumnBox title="Developers">
          <Link>Developing for Flow</Link>
          <Link>API Documentation</Link>
          <Link>Site Status</Link>
        </ColumnBox>

        <ColumnBox title="Flow Legal">
          <Link>Legal</Link>
          <Link>Terms of Service</Link>
          <Link>Privacy Policy</Link>
          <Link>Acceptable Use Policy</Link>
          <Link>Subprocessors</Link>
        </ColumnBox>
      </div>
    </div>
  );
}
