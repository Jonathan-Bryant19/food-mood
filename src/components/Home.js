import Search from './Search'
import RestaurantList from './RestaurantList'
import React, {useEffect, useState} from 'react'
import logo from '../assets/foodmood.png'

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
        return lowerName.includes( lowerSearch ) && restDistance <= distance
  })
  
  // src/components/Home.js
  // public/foodmood.jpg
    return (
    <>
        <div className='container'>
            <div className='row' align="center">
                <div className='col' align="center" id={'logo'}>
                    <img src={logo} alt={"logo"} ></img>
                </div>
            <div className={'row'} align={"center"}>
                <div className={'col'} align={'center'} id={'slogan'}>
                    <h3><em>We got the food for your mood!</em></h3>
                </div>
            </div>
            <div className='row' align="center">
                <div className='col' align="center">
                    <Search setSearch={setSearch} handleOnChange={handleOnChange} />
                </div>
            </div>
        </div>
          
          
        </div>

        
        <hr></hr>
        <RestaurantList searchedRestaurants={searchedRestaurants}/>
    </>
  )
}

export default Home