import React from 'react';
import classNames from 'classnames';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { ReactComponent as CheckIcon } from '@/components/SVGIcon/check-solid.svg';

export function FeaturesCard() {
  return (
    <>
      <div className={classNames(globalStyles.contentPaddingWrapper, styles.cardWrapper)}>
        <div className={styles.cardContainer}>
          <div className={styles.headerContainer}>
            <div className={classNames(globalStyles.contentPaddingWrapper, styles.headerContent)}>
              <div className={styles.navigationAvatar}></div>
              <h3 className={styles.title}>Use anywhere. Cancel anytime. First month free.</h3>
              <p className={styles.description}>All of our plans include:</p>
            </div>
          </div>
          <div className={styles.listContainer}>
            <div className={classNames(globalStyles.contentPaddingWrapper, styles.listContent)}>
              <ul className={styles.listElementContainer}>
                <li className={styles.listElement}><CheckIcon className={styles.checkIcon}></CheckIcon><span>Unlimited tasks</span></li>
                <li className={styles.listElement}><CheckIcon className={styles.checkIcon}></CheckIcon><span>Unlimited projects</span></li>
                <li className={styles.listElement}><CheckIcon className={styles.checkIcon}></CheckIcon><span>250GB of file storage</span></li>
                <li className={styles.listElement}><CheckIcon className={styles.checkIcon}></CheckIcon><span>Powerful integrations</span></li>
                <li className={styles.listElement}><CheckIcon className={styles.checkIcon}></CheckIcon><span>Desktop and mobile apps</span></li>
              </ul>
              <a href="#" className={styles.button}>Try Flow for Free</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
