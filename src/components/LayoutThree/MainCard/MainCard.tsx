import React from 'react';
import Card from '@/components/LayoutOne/Card/Card';
import styles from './MainCard.scss';
import Button from '@/components/Common/Button/Button';

export default function MainCard(props: any) {
  return (
    <div className={styles.mainCard}>
      <Card {...props}>
        <div className={styles.bodyBox}>
          <ul>{props.children}</ul>
          <Button value="Try Flow for Free"></Button>
        </div>
      </Card>
    </div>
  );
}
