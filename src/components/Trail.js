import React, { useState } from 'react';

import Section from "./UI/Section";
import Container from "./UI/Container";
import Form from "./UI/Form";
import Button from "./UI/Button";

import styles from './Trail.module.css';

const motives = [

  {
    return: false,
    status: "Delivered",
    image: './image/delivered.png',
    info: "Object was delivered"
  },
  {
    return: true,
    status: "Object Refused",
    image: './image/not_delivered.png',
    info: "Object was refused by recipient"
  },
  {
    return: true,
    status: "Unknow",
    image: './image/not_delivered.png',
    info: "Recipient unknown at address"
  },
  {
    return: true,
    status: "Moved",
    image: './image/not_delivered.png',
    info: "Recipient has moved from address"
  },
  {
    return: false,
    status: "Absent - New Try",
    image: './image/not_delivered.png',
    info: "Object was not delivered, tomorrow will be try again"
  },
  {
    return: false,
    status: "Absent 3X - Returned",
    image: './image/return.png',
    info: "Object was not delivered, tomorrow will return to sender"
  }

];

const Trail = props => {
  const [numberObjectRequired, setNumberObjectRequired] = useState('');
  const [objectNumberReturned, setObjectNumberReturned] = useState('');
  const [cityObjectRequired, setCityObjectRequired] = useState('');
  const [stateObjectRequired, setStateObjectRequired] = useState('');
  const [updateObjectCode, setUpdateObjectCode] = useState('');


  const getObjectTrail = e => {
    e.preventDefault();
    const objectRequired = props.onTrailRegister.filter(object => object.objectNumber === Number(numberObjectRequired))
    if (objectRequired.length === 0) {
      setNumberObjectRequired('');
      return alert('Object not found');
    }
    setObjectNumberReturned(objectRequired[0].objectNumber);
    setCityObjectRequired(objectRequired[0].destinyCity);
    setStateObjectRequired(objectRequired[0].destinyState);
    setNumberObjectRequired('');
  };

  const updateInfoHandler = event => {
    setUpdateObjectCode(event.target.value);
  }

  const updateInfoTrail = event => {
    event.preventDefault();

    if (!objectNumberReturned) {
      return alert('Object not found');
    }

    const toWay = {
      id: Math.random(),
      objectImage: './image/order_delivery.png',
      objectStatus: 'Out for Delivery',
      objectNumber: objectNumberReturned,
      objectInfo: 'Object left for dellivery'
    }

    const newRegister = {
      id: Math.random(),
      objectImage: motives[updateObjectCode].image,
      objectStatus: motives[updateObjectCode].status,
      objectNumber: objectNumberReturned,
      objectInfo: motives[updateObjectCode].info
    }

    props.onCreateRegister(toWay);
    props.onCreateRegister(newRegister);

    if (motives[updateObjectCode].return) {
      const toReturn = {
        id: Math.random(),
        objectImage: './image/return.png',
        objectStatus: 'In Return',
        objectNumber: objectNumberReturned,
        objectInfo: 'return object'
      }

      props.onCreateRegister(toReturn);
    }

    setObjectNumberReturned('');
    setCityObjectRequired('');
    setStateObjectRequired('');
    setUpdateObjectCode('');

  };

  const enteredObjectNumberHandler = event => {
    setNumberObjectRequired(event.target.value);
  }

  const resetHandler = () => {
    setObjectNumberReturned('');
    setCityObjectRequired('');
    setStateObjectRequired('');
  }



  return (
    <Section>
      <Container>
        <Form onSubmit={getObjectTrail}>
          <div className={styles.contents}>
            <input type="text" placeholder="object number" value={numberObjectRequired} required onChange={enteredObjectNumberHandler} />
            <Button type={'submit'}>OK</Button>
          </div>

        </Form>
        <Form onSubmit={updateInfoTrail}>
          <div className={styles.form}>

            <div className={styles.contents}>
              <div className={styles.number}>
                {objectNumberReturned}
              </div>

            </div>

            <div className={styles.contents}>
              <div className={styles.city}>
                <label htmlFor="destinyCity">Destiny</label>
                <input type="text" defaultValue={cityObjectRequired} disabled />
              </div>
              <div className={styles.state}>
                <label htmlFor="destinyState">State</label>
                <input type="text" defaultValue={stateObjectRequired} disabled />
              </div>
            </div>
            <div className={styles.contents}>
              <label htmlFor="return__motive">Motive</label>
              <select id='return__motive' className={styles.return__motive} value={updateObjectCode} onChange={updateInfoHandler} required>
                <option></option>
                <option value={0}>1 - object delivered</option>
                <option value={1}>2 - object refused</option>
                <option value={2}>3 - unknow</option>
                <option value={3}>4 - moved</option>
                <option value={4}>5 - absent - new try</option>
                <option value={5}>6 - absent 3X - returned</option>
              </select>
            </div>
            <div className={styles.btn}>
              <Button onClick={resetHandler}>Cancel</Button>
              <Button type={'submit'}>Register</Button>
            </div>
          </div>
        </Form>
      </Container>
    </Section >
  );
}

export default Trail;