import Search from './Search'
import RestaurantList from './RestaurantList'
import React, {useEffect, useState} from 'react'

function Home() {
    const [restaurants, setRestaurants] = useState([])
    const [search, setSearch] = useState('')
    const [distance, setDistance] = useState(100)

    useEffect(()=>{
        fetch('http://localhost:3001/Restaurants')
        .then(r=>r.json())
        .then(setRestaurants)
    },[])
     
    
    function handleOnChange(e) {
        setDistance(e.target.value)
    }

    const searchedRestaurants = restaurants.filter(restaurantObj => {
        const lowerName = restaurantObj.name.toLowerCase()
        const lowerSearch = search.toLowerCase()
        const restDistance = restaurantObj.distance
        console.log(restDistance < distance)
        return lowerName.includes( lowerSearch ) && restDistance <= distance
  })
  
  
    return (
    <>
        <Search setSearch={setSearch} handleOnChange={handleOnChange} />
        <hr></hr>
        <RestaurantList searchedRestaurants={searchedRestaurants}/>
    </>
  )
}

export default Home