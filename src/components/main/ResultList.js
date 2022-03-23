import React from 'react';
import styles from './ResultList.module.css';

const ResultList = props => {
  return (

    <li className={styles.item}>
      <div className={styles.avatar}>
        <img src={props.resultImage} alt='' />
      </div>
      <div className={styles.descriptions}>
        <h2>{props.resultStatus}</h2>
        <p className={props.resultInfo ? styles.hasntValue : ''}>{props.resultFrom}</p>
        <p className={props.resultInfo ? styles.hasntValue : ''}>{props.resultTo}</p>
        <p className={props.resultInfo ? '' : styles.hasntValue}>{props.resultInfo}</p>
      </div>
    </li>
  );
};

export default ResultList;