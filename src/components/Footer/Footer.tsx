import React from 'react';
import { Link } from '../Link/Link';
import ColumnBox from '../ColumnBox/ColumnBox';
import styles from './Footer.scss';

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <ColumnBox title="Flow">
        <Link>For Teams</Link>
        <Link>For Enterprise</Link>
        <Link>Flow Solo</Link>
      </ColumnBox>
      <ColumnBox title="Results">
        <Link>Customers</Link>
        <Link>Review</Link>
        <Link>Stories</Link>
      </ColumnBox>
      <ColumnBox title="Resources">
        <Link>Download Flow</Link>
        <Link>Integrations</Link>
        <Link>Developers</Link>
      </ColumnBox>
      <ColumnBox title="Support">
        <Link>Get Help</Link>
        <Link>Helpful Guides</Link>
        <Link>Tutorials(New)</Link>
      </ColumnBox>
      <ColumnBox title="Company">
        <Link>Our Story</Link>
        <Link>Contact Us</Link>
        <Link>Blog</Link>
      </ColumnBox>
    </div>
  );
}
