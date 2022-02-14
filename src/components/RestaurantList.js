import React from 'react'
import RestaurantCard from './RestaurantCard'

function RestaurantList({restaurants}) {
  return (
    <>
      <div>RestaurantList</div>
      <div className="cards">{restaurants.map(restaurant=><RestaurantCard  key ={restaurant.id} restaurant ={restaurant}/>)}</div>
    </>
    
    
  )
}

export default RestaurantList