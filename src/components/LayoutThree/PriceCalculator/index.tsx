import React from 'react';
import { Link } from 'react-router-dom';
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
                  <MinusCircleIcon className={classNames(globalStyles.icon, styles.icon)}></MinusCircleIcon>
                  <input type="text" className={styles.inputValue} placeholder="03"></input>
                  <PlusCircleIcon className={classNames(globalStyles.icon, styles.icon)}></PlusCircleIcon>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.resultContainer}>
            <div className={classNames(globalStyles.contentPaddingWrapper, styles.resultContent)}>
              <div className={styles.resultValueContainer}>
                <span className={styles.resultCurrency}>$</span>
                <span className={styles.resultValue}>35.85</span>
                <InfoCircleIcon className={classNames(globalStyles.icon, styles.icon)}></InfoCircleIcon>
              </div>
              <p className={styles.usersNumber}>Price for 3 users</p>
              <Link to="/" className={styles.button}>Try Flow for Free</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
