import React from 'react'
import { useHistory } from  'react-router-dom'

function RestaurantCard( {restaurant} ){
    const history = useHistory();

    function openMenu() {
        history.push(`/menu/${restaurant.id}`)
    }
    
    return(
        <div onClick ={openMenu} className="card shadow">
           <h2>{restaurant.name}</h2> 
           <img className ="image" src= {restaurant.image} alt={restaurant.name}></img> 
        </div>

    )
}







export default RestaurantCard;