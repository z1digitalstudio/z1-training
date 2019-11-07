import React, { useState } from 'react';
import styles from './styles.module.scss';
import { CustomButton } from '@/components/ui/CustomButton';
import { Avatar } from '@/components/ui/Avatar';
import { ReactComponent as PlusIcon } from '@/assets/icons/plus.svg';
import { ReactComponent as MinusIcon } from '@/assets/icons/minus.svg';
import { ReactComponent as InformationMark } from '@/assets/icons/information-button.svg';

export function Calculator() {
  const [count, setCount] = useState(0);
  const operationNumber = (counter: number) => {
    if (counter === 0) {
      return '00';
    }
    return counter < 10 ? '0' + counter : counter + '';
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
              onClick={() => setCount(count - 1)}
            />
            <div className={styles.price}>
              <span>{operationNumber(count)}</span>
            </div>
            <PlusIcon
              className={styles.icon}
              onClick={() => setCount(count + 1)}
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
