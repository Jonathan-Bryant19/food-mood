import React from 'react'
import RestaurantCard from './RestaurantCard'

function RestaurantList({searchedRestaurants}) {
  
  
  
    return (
    <div className={'container border'} align={"center"} >
      <h5 className={'row justify-content-center'} ><em>Browse Our Restaurants....</em></h5>
      <div className="cards justify-content-center">{searchedRestaurants.map(restaurant=><RestaurantCard key ={restaurant.id} restaurant ={restaurant}/>)}</div>
    </div>
    
    
  )
}

export default RestaurantList