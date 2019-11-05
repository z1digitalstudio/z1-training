import React from 'react';
import classNames from 'classnames';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { ReactComponent as MinusCircleIcon } from '@/components/SVGIcon/minus-circle-solid.svg';
import { ReactComponent as PlusCircleIcon } from '@/components/SVGIcon/plus-circle-solid.svg';
import { ReactComponent as InfoCircleIcon } from '@/components/SVGIcon/info-circle-solid.svg';

export function PriceCalculator() {
  return (
    <>
      <div className={classNames(globalStyles.contentWrapper, styles.calculatorContainer)}>
        <div className={styles.calculatorContent}>
          <div className={styles.inputContainer}>
            <div className={classNames(globalStyles.contentPaddingWrapper, styles.inputContent)}>
              <div className={styles.navigationAvatar}></div>
              <h3 className={styles.title}>Find out exactly how much you’ll pay? Use our pricing calculator.</h3>
              <div className={styles.inputLabelValueContainer}>
                <span className={styles.inputLabel}>Team Size</span>
                <div className={styles.inputValueContainer}>
                  <MinusCircleIcon className={styles.inputIcon}></MinusCircleIcon>
                  <input type="text" className={styles.inputValue} placeholder="03"></input>
                  <PlusCircleIcon className={styles.inputIcon}></PlusCircleIcon>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.resultContainer}>
            <div className={classNames(globalStyles.contentPaddingWrapper, styles.resultContent)}>
              <div className={styles.resultValueContainer}>
                <span className={styles.resultCurrency}>$</span>
                <span className={styles.resultValue}>35.85</span>
                <InfoCircleIcon className={styles.infoIcon}></InfoCircleIcon>
              </div>
              <p className={styles.usersNumber}>Price for 3 users</p>
              <a href="#" className={styles.button}>Try Flow for Free</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
