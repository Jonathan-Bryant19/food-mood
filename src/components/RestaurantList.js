import React from 'react'
import RestaurantCard from './RestaurantCard'

function RestaurantList({searchedRestaurants}) {
  
  
  
    return (
    <>
      <div>RestaurantList</div>
      <div className="cards">{searchedRestaurants.map(restaurant=><RestaurantCard  key ={restaurant.id} restaurant ={restaurant}/>)}</div>
    </>
    
    
  )
}

export default RestaurantList