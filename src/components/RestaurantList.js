import React from 'react'
import RestaurantCard from './RestaurantCard'

function RestaurantList({searchedRestaurants}) {
  
    const pizza = "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")"
  
    return (
    <div className={'container'} align={"center"} >
      <img src="https://res.cloudinary.com/april-skrine/image/upload/v1645134228/browse_restaurants_kvaya6.jpg" className={'row justify-content-center'} ></img>
      <div style={{backgroundImage: "url(" + "https://res.cloudinary.com/april-skrine/image/upload/v1645135006/pepperonibg_goz79a.jpg" + ")"}} className="cards justify-content-center">{searchedRestaurants.map(restaurant=><RestaurantCard key ={restaurant.id} restaurant ={restaurant}/>)}</div>
    </div>
    
    
  )
}

export default RestaurantList