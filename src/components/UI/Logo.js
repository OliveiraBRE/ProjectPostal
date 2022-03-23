import React from 'react';

import styles from './Logo.module.css';

const Logo = props => {
  return (
    <button
      className={styles.logo}
      type={props.type || 'button'}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Logo;