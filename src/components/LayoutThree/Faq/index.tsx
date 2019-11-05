import React from 'react';
import classNames from 'classnames';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { FaqQuestion } from './FaqQuestion';

export function Faq() {
  return (
    <>
      <div className={classNames(globalStyles.contentWrapper, styles.faqContainer)}>
        <h2 className={styles.title}>Common questions</h2>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>General</h3>
          <FaqQuestion
            question="How does the free trial work?"
            answer="Try us free for 30 days! If you enjoy your Flow trial, do nothing and your membership will automatically continue for as long as you choose to remain a member. Cancel anytime before your trial ends and you won’t be charged. There’s no complicated contract, no cancellation fees, and no commitment. Cancel online anytime, 24 hours a day."
          ></FaqQuestion>
          <FaqQuestion
            question="Can we cancel at any time?"
            answer="Yes."
          ></FaqQuestion>
          <FaqQuestion
            question="Do you support guest accounts?"
            answer="No."
          ></FaqQuestion>
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Billing</h3>
          <FaqQuestion
            question="What are my payment options?"
            answer="With monthly billing, you must pre-pay for the next month by credit card.
            With annual billing, you can always pay for the next year by credit card. We’re also happy to help annual customers pay quarterly or every six months rather than yearly. If you’re an annual billing customer and you’d like to change your payment frequency just write us at help@getflow.com.
            With our enterprise plan you can pay quarterly, every six months, or yearly via credit card, ACH, or wire transfer."
          ></FaqQuestion>
          <FaqQuestion
            question="What currency can I pay in?"
            answer="Bitcoins."
          ></FaqQuestion>
          <FaqQuestion
            question="How does adding and removing licenses work?"
            answer="I don't know it."
          ></FaqQuestion>
          <FaqQuestion
            question="Do you offer discounts for education or non-profits?"
            answer="No."
          ></FaqQuestion>
          <FaqQuestion
            question="What’s your refund policy?"
            answer="I don't know it."
          ></FaqQuestion>
        </div>
      </div>
    </>
  );
}