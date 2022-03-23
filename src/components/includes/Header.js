import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Includes.module.css';
import Logo from '../UI/Logo';

const Header = props => {

  // const redirectMain = () => {
  //   props.onMain();
  // }

  // const redirectRegister = () => {
  //   props.onRegister();
  // };

  // const redirectTrail = () => {
  //   props.onTrail();
  // };


  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__logo}>
          <Link to='/' className={styles.link}>
            <Logo>
              <img src={"image/logo.png"} alt="Postal" />
            </Logo>
          </Link>
        </div>
        <div className={styles.header__login}>
          <Link to='/post' className={styles.link}>
            <img src={"./image/box.png"} alt="login" />
            <div>Post</div>
          </Link>
          <Link to='/delivery' className={styles.link}>
            <img src={"./image/trail.png"} alt="login" />
            <div>Delivery</div>
          </Link>
        </div>
      </div>
    </header >
  );
};

export default Header;