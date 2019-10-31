import React from 'react';
import classNames from 'classnames';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { ReactComponent as AppleBrandIcon } from '@/components/SVGIcon/apple-brands.svg';
import { ReactComponent as CheckIcon } from '@/components/SVGIcon/check-solid.svg';

export function Update(props: any) {
  return (
    <>
      <div className={classNames(styles.updateContainer, {[styles.recent]: props.recent})}>
        <div className={classNames(globalStyles.contentWrapper, styles.updateContent)}>
          <div className={styles.generalInfo}>
            <h2 className={styles.updateTitle}>
              {props.ios && <AppleBrandIcon className={styles.platformBrandIcon}></AppleBrandIcon>}
              {props.title}
            </h2>
            <p className={styles.updateDescription}>{props.description}</p>
            <p className={styles.updateDate}>{props.date}</p>
          </div>
          <div className={styles.changeList}>
            {props.added.length > 0 && <ul className={styles.listSection}>
              <h3 className={styles.sectionTitle}>Added</h3>
              {
                props.added.length > 0 && props.added.map((value:any, index:any) => {
                  return <li className={styles.sectionElement} key={index}><CheckIcon></CheckIcon>{value}</li>
                })
              }
              </ul>
            }
            {props.fixed.length > 0 && <ul className={styles.listSection}>
              <h3 className={styles.sectionTitle}>Fixed</h3>
              {
                props.fixed.length > 0 && props.fixed.map((value:any, index:any) => {
                  return <li className={styles.sectionElement} key={index}><CheckIcon></CheckIcon>{value}</li>
                })
              }
              </ul>
            }
            {props.improved.length > 0 && <ul className={styles.listSection}>
              <h3 className={styles.sectionTitle}>Improved</h3>
              {
                props.improved.length > 0 && props.improved.map((value:any, index:any) => {
                  return <li className={styles.sectionElement} key={index}><CheckIcon></CheckIcon>{value}</li>
                })
              }
              </ul>
            }
          </div>
        </div>
      </div>
    </>
  );
}