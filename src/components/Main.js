import { useState } from "react";

import Section from "./UI/Section";
import React from 'react';

import Container from "./UI/Container";
import Button from './UI/Button'
import Form from "./UI/Form";
import Result from "./main/Result";

// import styles from './Main.module.css';


const Main = props => {
  const [researchNumber, setResearchNumnber] = useState('');
  const [resultObject, setResultObject] = useState('');

  const targetNumber = props.registers.filter(register => {
    return register.objectNumber === Number(researchNumber);
  });


  const enteredResearchNumberHandler = event => {
    setResearchNumnber(event.target.value);
  }

  const filterObjectNumberHandler = e => {
    e.preventDefault();

    setResultObject(targetNumber);
  };

  return (
    <Section>
      <Container>
        <Form onSubmit={filterObjectNumberHandler}>
          <input type="text" name="research__number" id="research__number" value={researchNumber} required onChange={enteredResearchNumberHandler} />
          <Button type={'submit'}>
            <img src={process.env.PUBLIC_URL + "/image/lupa.png"} alt="lupa" />
          </Button>
        </Form>

        <Result
          resultObject={resultObject}
        />

      </Container>
    </Section>);
}

export default Main;