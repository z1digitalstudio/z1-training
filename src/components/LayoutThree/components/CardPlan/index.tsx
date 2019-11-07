import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { ReactComponent as InformationMark } from '@/assets/icons/information-button.svg';
import { VerificationText } from '@/components/ui/VerificationText';
import { CustomButton } from '@/components/ui/CustomButton';
import { Avatar } from '@/components/ui/Avatar';

interface CardPlanProps {
  items: {
    title: string;
    children?: string[];
    comingSoon?: boolean;
    withIcon?: boolean;
    longText?: boolean;
  }[];
  title: string;
  subtitle: string;
  price: number;
  showEssentialMsg: boolean;
}

export function CardPlan({
  items,
  title,
  subtitle,
  price,
  showEssentialMsg,
}: CardPlanProps) {
  return (
    <div className={styles.cardPlanWrapper}>
      <div className={styles.cardPlanWrapperHeader}>
        <Avatar width={48} height={48} color="#fff"/>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div className={styles.cardPlanWrapperBody}>
        <div className={styles.priceContent}>
          <div className={styles.price}>
            <span className={styles.dollarSymbol}>$</span>
            <p className={styles.priceNumber}>{price}</p>
            <InformationMark className={styles.icon} />
          </div>
          <p className={styles.rememberUserMonth}>Per User/Month</p>
          <CustomButton text="Try Flow for Free" />
          {showEssentialMsg ? (
            <p className={styles.plusMessage}>
              Everything in Essentials, plus:
            </p>
          ) : (
            ''
          )}
        </div>
        <div className={styles.itemsList}>
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className={classNames(styles.item, {
                  [styles.black]: (index + 1) % 2 !== 0,
                })}
              >
                <div
                  className={classNames(
                    styles.title,
                    { [styles.withIcon]: item.withIcon },
                    { [styles.comingSoon]: item.comingSoon },
                    {[styles.longText]: item.longText }
                  )}
                >
                  {item.comingSoon ? (
                    <p className={styles.comingSoonText}>Coming soon</p>
                  ) : (
                    ''
                  )}
                  <p className={styles.message}>{item.title}</p>
                  {item.withIcon ? (
                    <InformationMark className={styles.icon} />
                  ) : (
                    ''
                  )}
                </div>
                {item.children && item.children.length > 0 ? (
                  <div className={styles.children}>
                    {item.children.map((value, index) => {
                      return <VerificationText key={index} text={value} />;
                    })}
                  </div>
                ) : (
                  ''
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
