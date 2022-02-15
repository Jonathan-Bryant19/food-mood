import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';




function Menu (){
    const [restaurant,setRestaurant] = useState("Loading")

    const { id } = useParams()

    console.log(id)

    useEffect(()=>{
        fetch(`http://localhost:3001/Restaurants/${id}`)
        .then(r=>r.json())
        .then(restaurant => setRestaurant(restaurant))
            
    },[id])

    console.log(restaurant.name)

    return(
        <>
        <h1>yoyoyoyoyoyo</h1>
        <h1>{restaurant.name}</h1>
        
        </>
    )
        
    }





export default Menu;