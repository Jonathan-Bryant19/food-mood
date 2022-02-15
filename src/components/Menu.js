import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MenuItem from "./MenuItem"
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
               <form className="ui form" >
               <table style={{tableLayout:"fixed" ,width:"750px"}}>
                   <thead>
                    <th> Item </th>
                    <th> Price </th>
                    <th> Quantity </th>
                   </thead>
                   <MenuItem id={id} menuItem={menuItem} menu={menu}/>
               </table>
           </form>
            )}
        </h1>
        </>
    )
    }
export default Menu;