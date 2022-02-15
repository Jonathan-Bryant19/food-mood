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
    console.log(restaurant)
    const menu = restaurant.menu
    console.log(menu)

    menu && console.log(Object.keys(menu))

    return(
        <>
        <h1>{restaurant.name}</h1>
        <h1>{menu && Object.keys(menu).map((menuItem)=>
               <form className="ui form">
               <tbody>
                   <tr> 
                       <td>{menuItem} </td>
                       <td>{menu[menuItem]} </td>
                       <td className="ui header">Quantity</td>
                       <td>
                           <input type="text" placeholder="Quantity"/>
                       </td>
                   </tr>
               </tbody>
       </form> 
                 
                
            )}
        </h1>
        
        
        
        </>
    )
        
    }





export default Menu;