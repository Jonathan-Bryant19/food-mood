import React from 'react'
import { useHistory } from  'react-router-dom'

function RestaurantCard( {restaurant} ){
    const history = useHistory();

    function openMenu() {
        history.push(`/menu/${restaurant.id}`)
    }
    
    return(
        <div style={{border: "5px solid #C60C20"}}onClick ={openMenu} className="card shadow-lg">
           <h2 style={{fontFamily: "Amaranth"}}>{restaurant.name}</h2> 
           <img className ="image" src= {restaurant.image} alt={restaurant.name}></img> 
        </div>

    )
}







export default RestaurantCard;