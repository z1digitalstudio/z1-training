import React from 'react';
import styles from './TierBox.scss';
import { MenuArrow } from '@/components/Common/MenuArrow/MenuArrow';

interface Props {
  children: React.ReactNode;
}

export default function TierBox({ children }: Props) {
  return (
    <div className={styles.tierBoxContent}>
      <div className={styles.tierBox}>
        {React.Children.map(children, (child, i) => {
          return child;
        })}
      </div>

      <div className={styles.compareFeatures}>
        {' '}
        Compare all Features <MenuArrow></MenuArrow>
      </div>
    </div>
  );
}
