import React, { useState } from 'react';

import Section from "./UI/Section";
import Container from "./UI/Container";
import Form from "./UI/Form";
import Button from "./UI/Button";

import styles from './Register.module.css';


let order = 1001;



const Register = props => {

  // const [objectNumber, setObjectNumber] = useState('');
  const [destinyCity, setDestinyCity] = useState('');
  const [destinyState, setDestinyState] = useState('');
  const [senderCity, setSenderCity] = useState('');
  const [senderState, setSenderState] = useState('');

  const initialState = () => {
    // setObjectNumber(order);
    setDestinyCity('');
    setDestinyState('');
    setSenderCity('');
    setSenderState('');
  };

  // const enteredObjectNumberHandler = event => {
  //   setObjectNumber(event.target.value);

  // };

  const enteredDestinyCityHandler = event => {
    setDestinyCity(event.target.value);
  };

  const enteredDestinyStateHandler = event => {
    setDestinyState(event.target.value);
  };

  const enteredSenderCityHandler = event => {
    setSenderCity(event.target.value);
  };

  const enteredSenderStateHandler = event => {
    setSenderState(event.target.value);
  };

  const registerObject = e => {

    e.preventDefault();

    const newRegister = {
      id: Math.random(),
      objectImage: './image/post_office.png',
      objectStatus: 'Posted',
      objectNumber: order,
      destinyCity: destinyCity,
      destinyState: destinyState,
      senderCity: senderCity,
      senderState: senderState
    };

    props.onCreateRegister(newRegister);

    order += 1;
    initialState();
  }

  // onChange={enteredObjectNumberHandler}

  return (
    <Section>
      <Container>
        <Form onSubmit={registerObject}>
          <div className={styles.form}>
            <div className={styles.contents}>
              <div className={styles.orderNumber}>
                <label htmlFor="objectNumber"><span>Objetc Number</span></label>
                <input type="text" value={order} id='objectNUmber' disabled />
              </div>
            </div>
            <div className={styles.contents}>
              <div className={styles.city}>
                <label htmlFor="destinyCity">Destiny</label>
                <input type="text" id='destinyCity' value={destinyCity} required onChange={enteredDestinyCityHandler} />
              </div>
              <div className={styles.state}>
                <label htmlFor="destinyState">State</label>
                <input type="text" id='destinyState' value={destinyState} required onChange={enteredDestinyStateHandler} />
              </div>
            </div>
            <div className={styles.contents}>
              <div className={styles.city}>
                <label htmlFor="senderCity">Sender</label>
                <input type="text" id='senderCity' value={senderCity} required onChange={enteredSenderCityHandler} />
              </div>
              <div className={styles.state}>
                <label htmlFor="senderState">State</label>
                <input type="text" id='senderState' value={senderState} required onChange={enteredSenderStateHandler} />
              </div>
            </div>
            <div className={styles.btn}>
              <Button type={'submit'}>Register</Button>
            </div>
          </div>
        </Form>
      </Container>
    </Section>);
};



export default Register;