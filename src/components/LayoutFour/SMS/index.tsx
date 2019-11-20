import React, { useState } from 'react';
import styles from './styles.module.scss';
import { ReactComponent as PhoneIcon } from './mobile-solid.svg';

export function SMS() {
  const [number, setNumber] = useState();
  const [prefix, setPrefix] = useState('+1');

  const onChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNumber(e.target.value);

  return (
    <div className={styles.wrapper}>
      <div className={styles.bigRectangle}>
        <div className={styles.smallRectangle}></div>
      </div>
      <div className={styles.textSide}>
        <h2 className={styles.title}>Stay in sync, no matter where you go</h2>
        <p className={styles.subtitle}>
          Quickly capture tasks and stay in the loop with our apps for iPhone
          and Android.
        </p>
        <p className={styles.smallText}>
          We can text you a quick download link to get you started!
        </p>
        <form
          className={styles.phone}
          onSubmit={event => {
            event.preventDefault();
            alert('Your phone number is ' + prefix + ' ' + number);
          }}
        >
          <select
            className={styles.countryCode}
            name="prefix"
            onChange={e => setPrefix(e.target.value)}
          >
            <option value={'+1'} defaultValue={'true'}>
              United States +1
            </option>
            <option value={'+34'}>Spain +34</option>
            <option value={'+49'}>Germany +49</option>
          </select>
          <div className={styles.inputContainer}>
            <input
              required
              name="number"
              type="number"
              placeholder="(201) 555-5555"
              className={styles.phoneInput}
              onChange={onChangeNumber}
            ></input>
            <PhoneIcon className={styles.phoneIcon} />
          </div>
          <button className={styles.sendButton} type="submit">
            <p className={styles.buttonText}>Send Link</p>
          </button>
        </form>
      </div>
    </div>
  );
}
