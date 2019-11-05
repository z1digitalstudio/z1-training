import React from 'react';
import globalStyles from '@/styles/global.scss';
import UpdateBox from './UpdateBox/UpdateBox';
import styles from './Updates.scss';
import Spec from '../../LayoutOne/Spec/Spec';
import Lines from '../../LayoutOne/Lines/Lines';
export default function Updates() {
  return (
    <div className={globalStyles.contentWrapper}>
      <UpdateBox
        title="Flow for iOS 5.25"
        subtitle="Performance improvements and bug fixes"
        date="March 20, 2019"
      >
        <Spec type="Added">
          <Lines>Lorem ipsum dolor sit amet, consectetur elit. </Lines>
          <Lines>Lorem ipsum dolor sit amet </Lines>
          <Lines>consectetur adipiscing elit. </Lines>
        </Spec>
        <Spec type="Fixed">
          <Lines>Lorem ipsum dolor sit amet, consectetur elit. </Lines>
          <Lines>Lorem ipsum dolor sit amet </Lines>
          <Lines>consectetur adipiscing elit. </Lines>
        </Spec>
        <Spec type="Improved">
          <Lines>Lorem ipsum dolor sit amet, consectetur elit. </Lines>
          <Lines>Lorem ipsum dolor sit amet </Lines>
          <Lines>consectetur adipiscing elit. </Lines>
        </Spec>
      </UpdateBox>
      <UpdateBox
        title="Flow for iOS 5.25"
        subtitle="Performance improvements and bug fixes"
        date="March 20, 2019"
      >
        <Spec type="Added">
          <Lines>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          </Lines>
          <Lines>Lorem ipsum dolor sit amet </Lines>
          <Lines>consectetur adipiscing elit. </Lines>
        </Spec>
        <Spec type="Fixed">
          <Lines>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          </Lines>
          <Lines>Lorem ipsum dolor sit amet </Lines>
          <Lines>consectetur adipiscing elit. </Lines>
        </Spec>
        <Spec type="Improved">
          <Lines>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          </Lines>
          <Lines>Lorem ipsum dolor sit amet </Lines>
          <Lines>consectetur adipiscing elit. </Lines>
        </Spec>
      </UpdateBox>
      <UpdateBox
        title="Flow for iOS 5.25"
        subtitle="Performance improvements and bug fixes"
        date="March 20, 2019"
      >
        <Spec type="Added">
          <Lines>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          </Lines>
          <Lines>Lorem ipsum dolor sit amet </Lines>
          <Lines>consectetur adipiscing elit. </Lines>
        </Spec>
        <Spec type="Fixed">
          <Lines>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          </Lines>
          <Lines>Lorem ipsum dolor sit amet </Lines>
          <Lines>consectetur adipiscing elit. </Lines>
        </Spec>
        <Spec type="Improved">
          <Lines>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          </Lines>
          <Lines>Lorem ipsum dolor sit amet </Lines>
          <Lines>consectetur adipiscing elit. </Lines>
        </Spec>
      </UpdateBox>
      <UpdateBox
        title="Flow for iOS 5.25"
        subtitle="Performance improvements and bug fixes"
        date="March 20, 2019"
      >
        <Spec type="Added">
          <Lines>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          </Lines>
          <Lines>Lorem ipsum dolor sit amet </Lines>
          <Lines>consectetur adipiscing elit. </Lines>
        </Spec>
        <Spec type="Fixed">
          <Lines>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          </Lines>
          <Lines>Lorem ipsum dolor sit amet </Lines>
          <Lines>consectetur adipiscing elit. </Lines>
        </Spec>
        <Spec type="Improved">
          <Lines>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          </Lines>
          <Lines>Lorem ipsum dolor sit amet </Lines>
          <Lines>consectetur adipiscing elit. </Lines>
        </Spec>
      </UpdateBox>
      <UpdateBox
        title="Flow for iOS 5.25"
        subtitle="Performance improvements and bug fixes"
        date="March 20, 2019"
      >
        <Spec type="Added">
          <Lines>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          </Lines>
          <Lines>Lorem ipsum dolor sit amet </Lines>
          <Lines>consectetur adipiscing elit. </Lines>
        </Spec>
        <Spec type="Fixed">
          <Lines>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          </Lines>
          <Lines>Lorem ipsum dolor sit amet </Lines>
          <Lines>consectetur adipiscing elit. </Lines>
        </Spec>
        <Spec type="Improved">
          <Lines>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          </Lines>
          <Lines>Lorem ipsum dolor sit amet </Lines>
          <Lines>consectetur adipiscing elit. </Lines>
        </Spec>
      </UpdateBox>
      <div className={styles.previousUpdates}>
        <span>Show Previous Updates</span>
        <i className={styles.down}></i>
      </div>
    </div>
  );
}
