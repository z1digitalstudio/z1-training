import React from 'react';
import styles from './styles.module.scss';
import { Selector } from '@/components/LayoutThree/components/Selector';
import { CardPlan } from '@/components/LayoutThree/components/CardPlan';
import { PLAN_LISTS } from '@/components/LayoutThree/components/ChoicePlan/lists';
import { Dropdown } from '@/components/ui/Dropdown';

export function ChoicePlan() {
  return (
    <>
      <Selector />
      <div className={styles.choiceWrapper}>
        <div className={styles.planLists}>
          {PLAN_LISTS.map((plan, index) => {
            return (
              <div key={index} className={styles.plan}>
                <CardPlan
                  title={plan.title}
                  subtitle={plan.subtitle}
                  price={plan.price}
                  items={plan.items}
                  showEssentialMsg={plan.showEssentialMsg}
                />
              </div>
            );
          })}
        </div>
        <div className={styles.comparerFeatures}>
          <div className={styles.comparerFeaturesDropdown}>
            <Dropdown title="Compare all Features" />
          </div>
        </div>
      </div>
    </>
  );
}
