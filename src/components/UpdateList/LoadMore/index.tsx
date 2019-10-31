import React from 'react';
import classNames from 'classnames';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { ReactComponent as CaretDownIcon } from '@/components/SVGIcon/caret-down-solid.svg';

export function LoadMore() {
  return (
    <>
      <div className={classNames(globalStyles.contentWrapper, styles.loadMoreContainer)}>
        <a href="#" className={styles.loadMore}>Show Previous Updates<CaretDownIcon></CaretDownIcon></a>
      </div>
    </>
  );
}
