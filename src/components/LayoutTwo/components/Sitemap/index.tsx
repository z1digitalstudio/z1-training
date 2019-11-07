import React from 'react';
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
                [styles.withBackground]: value.withBackground,
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
        <div className={styles.borderBar}></div>
        <div className={styles.previousUpdates}>
          <Dropdown title="Show Previous Updates" />
        </div>
      </div>
    </>
  );
}
