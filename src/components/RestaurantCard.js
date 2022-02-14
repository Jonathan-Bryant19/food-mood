

function RestaurantCard( {restaurant} ){
    
    return(
        <div className="card">
           <h2>{restaurant.name}</h2> 
           <img className ="image" src= {restaurant.image} alt={restaurant.name}></img>
            
        </div>

    )
}







export default RestaurantCard;