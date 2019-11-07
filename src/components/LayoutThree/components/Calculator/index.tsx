import React from 'react';
import styles from './styles.module.scss';
import { CustomButton } from '@/components/ui/CustomButton';
import { Avatar } from '@/components/ui/Avatar';
import { ReactComponent as PlusIcon } from '@/assets/icons/plus.svg';
import { ReactComponent as MinusIcon } from '@/assets/icons/minus.svg';
import { ReactComponent as InformationMark } from '@/assets/icons/information-button.svg';

export function Calculator() {
  let counter = 3;
  let value = '03';
  const operationNumber = (isSum: boolean) => {
    isSum ? counter++ : counter--;
    value = counter < 10 ? '0' + counter : counter + '';
    return;
  };
  return (
    <>
      <div className={styles.calculatorWrapper}>
        <div className={styles.calculatorWrapperHeader}>
          <div className={styles.avatar}>
            <Avatar color="#fff" />
          </div>
          <p className={styles.title}>
            Find out exactly how much you’ll pay? Use our pricing calculator.
          </p>
          <span className={styles.subtitle}>Team Size</span>
          <div className={styles.calculatorInput}>
            <MinusIcon
              className={styles.icon}
              onClick={() => operationNumber(false)}
            />
            <div className={styles.price}>
              <span>{value}</span>
            </div>
            <PlusIcon
              className={styles.icon}
              onClick={() => operationNumber(true)}
            />
          </div>
        </div>
        <div className={styles.calculatorWrapperBody}>
          <div className={styles.price}>
            <span className={styles.dollarSymbol}>$</span>
            <p className={styles.priceNumber}>35.85</p>
            <InformationMark className={styles.icon} />
          </div>
          <span className={styles.priceInfo}>Price for 3 users</span>
          <div className={styles.customButton}>
            <CustomButton text="Try Flow for Free" />
          </div>
        </div>
      </div>
    </>
  );
}
