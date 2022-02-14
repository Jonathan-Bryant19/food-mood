import Search from './Search'
import RestaurantList from './RestaurantList'
import React, {useEffect, useState} from 'react'

function Home() {
    const [restaurants, setRestaurants] = useState([])
    const [search, setSearch] = useState('')
    const [distance, setDistance] = useState(0)

    useEffect(()=>{
        fetch('http://localhost:3001/Restraunts')
        .then(r=>r.json())
        .then(setRestaurants)
    },[])
        
    function handleOnChange(e) {
        setDistance(e.target.value)
    }

    const searchedRestaurants = restaurants.filter(restaurantObj => {
        const lowerName = restaurantObj.name.toLowerCase()
        const lowerSearch = search.toLocaleLowerCase()
        return lowerName.includes( lowerSearch )
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