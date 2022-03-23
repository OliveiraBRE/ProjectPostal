import React from 'react';
import ResultList from './ResultList';

import styles from './Result.module.css';

const Result = props => {

  const result = props.resultObject

  if (result.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.number}>
          {'Enter the object number'}
        </div>
      </div >
    );
  }


  return (
    <div className={styles.container}>
      <div className={styles.number}>
        {result[0].objectNumber}
      </div>

      <ul className={styles.list}>
        {result.map(obj => (
          <ResultList
            key={obj.id}
            resultImage={obj.objectImage}
            resultStatus={obj.objectStatus}
            resultTo={`To ${obj.destinyCity}/${obj.destinyState}`}
            resultFrom={`From ${obj.senderCity}/${obj.senderState}`}
            resultInfo={obj.objectInfo}
          />
        )).reverse()}
      </ul>
    </div>
  );
}

export default Result;