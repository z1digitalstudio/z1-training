import React from 'react';
import styles from './styles.module.scss';
import { ReactComponent as AppleLogo } from '@/assets/icons/apple-logo.svg';
import { Description } from '@/components/LayoutTwo/components/Description';
import { Dropdown } from '@/components/ui/Dropdown';
import classNames from 'classnames';
import globalStyles from '@/styles/global.scss';
import { format } from 'date-fns';

interface SectionProps {
  title: string;
  subtitle: string;
  date: string;
  descriptions: { title: string; items: string[] }[];
  withBackground?: boolean;
  showMoreOption?: boolean;
  withAppleIcon?: boolean;
}

export function Section({
  title,
  subtitle,
  date,
  descriptions,
  showMoreOption = false,
  withAppleIcon = false,
}: SectionProps) {
  const customDate = format(new Date(date), 'MMMM dd, yyyy');
  return (
    <>
      <div
        className={classNames(
          globalStyles.contentWrapper,
          styles.sectionWrapper,
        )}
      >
        <div className={styles.sectionWrapperHeader}>
          <div className={styles.sectionWrapperHeaderTitle}>
            {withAppleIcon ? (
              <div className={styles.icon}>
                <AppleLogo />
              </div>
            ) : (
              ''
            )}
            <p>{title}</p>
          </div>
          <p className={styles.sectionWrapperHeaderSubtitle}>
            {subtitle}
          </p>
          <p className={styles['sectionWrapperHeaderDate']}>{customDate}</p>
        </div>
        <div className={styles['sectionWrapperLists']}>
          {descriptions.map((value, index) => {
            return (
              <Description
                key={index}
                title={value.title}
                items={value.items}
              />
            );
          })}
          {showMoreOption ? (
            <div className={styles.showMore}>
              <Dropdown title="See more" sortIcon={false} />
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
}
