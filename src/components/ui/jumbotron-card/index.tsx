import React from 'react';
import styles from './styles.module.scss';
import { VerificationText } from '@/components/ui/VerificationText';
import { CustomButton } from '@/components/ui/CustomButton';

export function JumbotronCard() {
  const plans_include = [
    'Unlimited Tasks',
    'Unlimited projects',
    '250GB of file storage',
    'Powerful integrations',
    'Desktop and mobile apps',
  ];

  return (
    <>
      <div className={styles.jumbotronCardWrapper}>
        <div className={styles.jumbotronCardWrapperHeader}>
          <div className={styles.avatar}></div>
          <h3 className={styles.title}>
            Use anywhere. Cancel anytime. First month free.
          </h3>
          <p className={styles.subtitle}>All of our plans include:</p>
        </div>
        <div className={styles.jumbotronCardWrapperBody}>
          <div className={styles.items}>
            {plans_include.map((value, index) => {
              return <VerificationText key={index} text={value} />;
            })}
          </div>
          <CustomButton text="Try Flow for Free" />
        </div>
      </div>
    </>
  );
}
