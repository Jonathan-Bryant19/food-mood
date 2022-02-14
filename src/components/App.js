import React, {useEffect, useState} from 'react'
import '../App.css';
import Navbar from './Navbar';
import RestaurantList from './RestaurantList';
import Search from './Search'

function App() {

  const [restaurants, setRestaurants] = useState([])

  useEffect(()=>{
    fetch('http://localhost:6001/Restraunts')
    .then(r=>r.json())
    .then(setRestaurants)
  },[])
  
  return (
    <>
      <div>
        <h1>Welcome, User!</h1>
      </div>
      <Navbar />
      <Search />
      <hr></hr>
      <RestaurantList restaurants={restaurants}/>
    </>
  );
}

export default App;
