import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { Section } from '@/components/LayoutTwo/components/Section';
import { SECTIONS } from '@/components/LayoutTwo/components/Sitemap/sections';
import classNames from 'classnames';
import { Dropdown } from '@/components/ui/Dropdown';

export function Sitemap() {
  return (
    <>
      <div className={styles.sitemap}>
        {SECTIONS.map((value, index) => {
          return (
            <div
              key={index}
              className={classNames(styles.sections, {
                [styles['with-background']]: value.withBackground,
              })}
            >
              <Section
                title={value.title}
                subtitle={value.subtitle}
                date={value.date}
                withAppleIcon={value.withAppleIcon}
                showMoreOption={value.showMoreButton}
                withBackground={value.withBackground}
                descriptions={value.descriptions}
              />
            </div>
          );
        })}
        <div className={styles['border-bar']}></div>
        <div className={styles['previous-updates']}>
          <Dropdown title="Show Previous Updates" />
        </div>
      </div>
    </>
  );
}
