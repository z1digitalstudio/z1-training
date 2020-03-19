import React from 'react';
import classNames from 'classnames';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { ReactComponent as AppleBrandImage } from '@/components/SVGIcon/apple-brands.svg';
import { ReactComponent as TedBrandImage } from '@/components/SVGIcon/ted-logo.svg';
import { ReactComponent as RedBullBrandImage } from '@/components/SVGIcon/redbull-logo.svg';
import { ReactComponent as OgilvyBrandImage } from '@/components/SVGIcon/ogilvy-logo.svg';
import { ReactComponent as YaleBrandImage } from '@/components/SVGIcon/yale-logo.svg';

export function CompaniesCta() {
  return (
    <>
      <div className={classNames(globalStyles.contentWrapper, styles.companiesCtaWrapper)}>
        <p className={styles.companiesCtaText}>Loved by thousands of organizations across the globe</p>
        <div className={styles.companiesContainer}>
          <AppleBrandImage className={classNames(styles.companiesItem, styles.appleBrand)}></AppleBrandImage>
          <TedBrandImage className={classNames(styles.companiesItem, styles.tedBrand)}></TedBrandImage>
          <RedBullBrandImage className={classNames(styles.companiesItem, styles.redbullBrand)}></RedBullBrandImage>
          <OgilvyBrandImage className={classNames(styles.companiesItem, styles.ogilvyBrand)}></OgilvyBrandImage>
          <YaleBrandImage className={classNames(styles.companiesItem, styles.yaleBrand)}></YaleBrandImage>
        </div>
      </div>
    </>
  )
}