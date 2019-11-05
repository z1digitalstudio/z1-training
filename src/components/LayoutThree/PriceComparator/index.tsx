import React from 'react';
import classNames from 'classnames';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { ReactComponent as InfoCircleIcon } from '@/components/SVGIcon/info-circle-solid.svg';
import { ReactComponent as CheckIcon } from '@/components/SVGIcon/check-solid.svg';
import { ReactComponent as CaretDownIcon } from '@/components/SVGIcon/caret-down-solid.svg';

export function PriceComparator() {
  return (
    <>
      <div className={classNames(globalStyles.contentWrapper, styles.comparatorContainer)}>
        <div className={styles.comparatorToggleContainer}>
          <div className={styles.comparatorToggleContent}>
            <a href="#" className={classNames(styles.comparatorToggleItem, styles.selected)}>Pay Yearly (Save 25%)</a>
            <a href="#" className={styles.comparatorToggleItem}>Pay Monthly</a>
          </div>
          <p className={styles.comparatorToggleInfo}>Save 25% by paying yearly!”</p>
        </div>
        <div className={styles.comparatorWrapper}>
          <div className={styles.comparatorContent}>
            <div className={classNames(styles.row, styles.nameRow)}>
              <div className={styles.navigationAvatar}></div>
              <h3 className={styles.title}>Essentials</h3>
              <p>The essentials to get your team up and running.</p>
            </div>
            <div className={classNames(styles.row, styles.priceRow)}>
              <div className={styles.priceContent}>
                <div className={styles.priceValueContainer}>
                  <span className={styles.priceCurrency}>$</span>
                  <span className={styles.priceValue}>4.79</span>
                  <InfoCircleIcon className={styles.infoIcon}></InfoCircleIcon>
                </div>
                <p className={styles.priceSubtext}>Per User/Month</p>
                <a href="#" className={styles.button}>Try Flow for Free</a>
              </div>
            </div>
            <div className={classNames(styles.row, styles.featureRow)}><span>Unlimited Tasks</span></div>
            <div className={classNames(styles.row, styles.featureRow)}><span>Unlimited Projects</span></div>
            <div className={classNames(styles.row, styles.featureRow)}><span>Asignees + Due Dates</span></div>
            <div className={classNames(styles.row, styles.featureListRow)}>
              <span>Essential Features</span>
              <ul className={styles.featuresList}>
                <li className={styles.featuresItem}><CheckIcon></CheckIcon>Commenting</li>
                <li className={styles.featuresItem}><CheckIcon></CheckIcon>File Uploads (Unlimited)</li>
                <li className={styles.featuresItem}><CheckIcon></CheckIcon>Tagging</li>
                <li className={styles.featuresItem}><CheckIcon></CheckIcon>Filtering</li>
                <li className={styles.featuresItem}><CheckIcon></CheckIcon>Search</li>
              </ul>
            </div>
            <div className={classNames(styles.row, styles.featureRow)}><span>Advanced Security<InfoCircleIcon className={styles.infoIcon}></InfoCircleIcon></span></div>
            <div className={classNames(styles.row, styles.featureRow)}></div>
            <div className={classNames(styles.row, styles.nameRow)}>
              <div className={styles.navigationAvatar}></div>
              <h3 className={styles.title}>Everything (Best Value)</h3>
              <p>Everything you need to help your team achive more together.</p>
            </div>
            <div className={classNames(styles.row, styles.priceRow)}>
              <div className={styles.priceContent}>
                <div className={styles.priceValueContainer}>
                  <span className={styles.priceCurrency}>$</span>
                  <span className={styles.priceValue}>11.95</span>
                  <InfoCircleIcon className={styles.infoIcon}></InfoCircleIcon>
                </div>
                <p className={styles.priceSubtext}>Per User/Month</p>
                <a href="#" className={styles.button}>Try Flow for Free</a>
              </div>
              <p className={styles.priceSubtext}>Everything in Essentials, plus:</p>
            </div>
            <div className={classNames(styles.row, styles.featureRow)}><span>Start Dates + Timelines</span></div>
            <div className={classNames(styles.row, styles.featureRow)}><span className={styles.smallNote}>Coming Soon</span><span>Free Guest Accounts (Unlimited)</span></div>
            <div className={classNames(styles.row, styles.featureRow)}><span>Workgroups for different teams and departments</span></div>
            <div className={classNames(styles.row, styles.featureListRow)}>
              <span>Advanced Reporting</span>
              <ul className={styles.featuresList}>
                <li className={styles.featuresItem}><CheckIcon></CheckIcon>Project timelines</li>
                <li className={styles.featuresItem}><CheckIcon></CheckIcon>Open and completed tasks...</li>
                <li className={styles.featuresItem}><CheckIcon></CheckIcon>Team workload management...</li>
              </ul>
            </div>
            <div className={classNames(styles.row, styles.featureRow)}><span>Advanced Security<InfoCircleIcon className={styles.infoIcon}></InfoCircleIcon></span></div>
            <div className={classNames(styles.row, styles.featureRow)}></div>
            <div className={classNames(styles.row, styles.nameRow)}>
              <div className={styles.navigationAvatar}></div>
              <h3 className={styles.title}>Enterprise</h3>
              <p>Everything we offer, plus additional security, control, and support.</p>
            </div>
            <div className={classNames(styles.row, styles.priceRow)}>
              <div className={styles.priceContent}>
                <div className={styles.priceValueContainer}>
                  <span className={styles.priceCurrency}>$</span>
                  <span className={styles.priceValue}>19.95</span>
                  <InfoCircleIcon className={styles.infoIcon}></InfoCircleIcon>
                </div>
                <p className={styles.priceSubtext}>Per User/Month</p>
                <a href="#" className={styles.button}>Try Flow for Free</a>
              </div>
              <p className={styles.priceSubtext}>Everything in Essentials, plus:</p>
            </div>
            <div className={classNames(styles.row, styles.featureRow)}><span>SAML Single Sign-On (SSO)</span></div>
            <div className={classNames(styles.row, styles.featureRow)}><span>Dedicated Training + Account Manager</span></div>
            <div className={classNames(styles.row, styles.featureRow)}><span>Priority Support</span></div>
            <div className={classNames(styles.row, styles.featureListRow)}>
              <span>Advanced Controls</span>
              <ul className={styles.featuresList}>
                <li className={styles.featuresItem}><CheckIcon></CheckIcon>Full data export</li>
                <li className={styles.featuresItem}><CheckIcon></CheckIcon>Cross-regional backups</li>
                <li className={styles.featuresItem}><CheckIcon></CheckIcon>User provisioning and deprovis...</li>
              </ul>
            </div>
            <div className={classNames(styles.row, styles.featureRow)}><span>Advanced Security<InfoCircleIcon className={styles.infoIcon}></InfoCircleIcon></span></div>
            <div className={classNames(styles.row, styles.featureRow)}><span>99.9% Uptime SLA</span></div>
          </div>
          <div className={styles.comparatorMore}>
            <a href="#"><span>Compare all Features</span><CaretDownIcon></CaretDownIcon></a>
          </div>
        </div>
      </div>
    </>
  )
}
