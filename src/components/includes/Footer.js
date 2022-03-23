import React from 'react';
import styles from './Includes.module.css';

const Footer = props => {
  return (<footer className={styles.footer}>
    <div className={styles.container}>{props.children}</div>
  </footer>);
}

export default Footer;