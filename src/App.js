import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Header from './components/includes/Header';
import Footer from './components/includes/Footer';
import Main from './components/Main';
import Register from './components/Register'
import Trail from './components/Trail';


const App = () => {
  const [database, setDatabase] = useState([
    {
      id: 1000,
      objectImage: './image/post_office.png',
      objectStatus: 'Postad',
      objectNumber: 1000,
      destinyCity: 'Cambe',
      destinyState: 'PR',
      senderCity: 'Cambé',
      senderState: 'PR'
    }
  ]);


  const addDatabaseHandler = newRegister => {
    setDatabase(prevRegister => {
      return [...prevRegister, newRegister];
    });
  };


  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Main registers={database} />
        </Route>
        <Route path='/post' exact>
          <Register onCreateRegister={addDatabaseHandler} />
        </Route>
        <Route path='/delivery' exact>
          <Trail onTrailRegister={database} onCreateRegister={addDatabaseHandler} />
        </Route>
        <Redirect to='/' />
      </Switch>
      <Footer>
      </Footer>
    </Router>
  );
}

export default App;
