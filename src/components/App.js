import React, {useEffect, useState} from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import Cart from './Cart';
import History from './History'

function App() {


  return (
    <>
      <div>
        <h1>Welcome, User!</h1>
      </div>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/cart">
          <Cart/>
        </Route>

        <Route path="/history">
          <History/>
        </Route>
        
      </Switch>
      
    </>
  );
}

export default App;