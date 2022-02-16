import React, {useEffect, useState} from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import Cart from './Cart';
import History from './History'
import Menu from './Menu'

function App() {


  return (
    <>
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

        <Route path="/menu/:id">
          <Menu/>
        </Route>
        
      </Switch>
      
    </>
  );
}

export default App;