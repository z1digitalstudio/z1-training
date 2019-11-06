import React from 'react';
import classNames from 'classnames';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { ReactComponent as CaretDownIcon } from '@/components/SVGIcon/caret-down-solid.svg';

export function LoadMore() {
  return (
    <>
      <div className={classNames(globalStyles.contentWrapper, styles.loadMoreContainer)}>
        <p className={styles.loadMore}>Show Previous Updates<CaretDownIcon className={classNames(globalStyles.icon, styles.icon)}></CaretDownIcon></p>
      </div>
    </>
  );
}
