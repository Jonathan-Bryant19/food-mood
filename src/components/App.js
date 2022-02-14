import React, {useEffect, useState} from 'react'
import Navbar from './Navbar';
import Home from './Home';

function App() {


  return (
    <>
      <div>
        <h1>Welcome, User!</h1>
      </div>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
