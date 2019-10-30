import React from 'react';
import classNames from 'classnames';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';

export function Fold(props: any) {
    return (
      <>
        <div className={classNames(styles.fold, globalStyles.contentPaddingWrapper)}>
          <h1 className={styles.foldTitle}>{props.title}</h1>
          <p className={styles.foldSubtitle}>{props.subtitle}</p>
        </div>
      </>
  );
}
