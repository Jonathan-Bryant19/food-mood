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

    function handleSubmit(e){
        e.preventDefault()

    }



    return(
        <>
            <h1>{restaurant.name}</h1>
            <form className="ui form" onSubmit={handleSubmit} >
                <table style={{tableLayout:"fixed" ,width:"750px"}}>
                    <thead>
                        <th> Item </th>
                        <th> Price </th>
                        <th> Quantity </th>
                    </thead>
                    {menu && Object.keys(menu).map((menuItem)=>               
                    <MenuItem id={id} menuItem={menuItem} menu={menu} />
                    )}
                    <tfoot>
                        <td><input type="submit"/></td> 
                    </tfoot>
                </table>
            </form>        
        </>
    )
    }
export default Menu;