import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MenuItem from "./MenuItem"
import { useHistory } from  'react-router-dom'


function Menu (){
    const [fullOrder, setFullOrder] =useState([])
    const [restaurant,setRestaurant] = useState("Loading")
    const { id } = useParams()
    const [isSubmitted, setIsSubmitted] = useState(false)
    const history = useHistory()
    function openCart() {
        history.push(`/cart`)
    }

    useEffect(()=>{
        isSubmitted? setTimeout(()=>{
            setIsSubmitted((isSubmitted) => !isSubmitted)
            openCart()
        },2000):console.log("timer ended")

    },[isSubmitted])
    


    useEffect(()=>{
        fetch(`http://localhost:3001/Restaurants/${id}`)
        .then(r=>r.json())
        .then(restaurant => setRestaurant(restaurant))
    },[id])
    
    const menu = restaurant.menu
    const restaurantName = restaurant.name
    const postOrder =
        {
          "restaurant": restaurantName,
          "order": fullOrder
        }

    // menu && console.log(Object.keys(menu))

    function handleSubmit(e){
        e.preventDefault()
        console.log(fullOrder)
        fetch('http://localhost:3001/Order-History/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postOrder),
        })
        
        !isSubmitted? setIsSubmitted((isSubmitted)=>!isSubmitted) : console.log("idk")
        
    }
    
    

    return(
        <div className={'container'}>
            <h1 style={{fontFamily: "Amaranth", fontSize: "48px"}} align={"center"} className={"mt-3 mb-3"}><em>{restaurant.name}</em></h1>
            <form className="ui form" onSubmit={handleSubmit} >
                <table align={"center"} style={{tableLayout:"fixed" ,width:"750px"}}>
                    <thead>
                        <tr>
                            <th style={{fontFamily: "Amaranth", fontSize: "24px"}} className='text-center bg-danger'><em>Item</em></th>
                            <th style={{fontFamily: "Amaranth", fontSize: "24px"}} className='text-center bg-danger'><em>Price</em></th>
                            <th style={{fontFamily: "Amaranth", fontSize: "24px"}} className='text-center bg-danger'><em>Quantity</em></th>
                        </tr>
                    </thead>
                    {menu && Object.keys(menu).map((menuItem)=>               
                    <MenuItem key={menuItem} id={id} menuItem={menuItem} menu={menu} setFullOrder={setFullOrder} fullOrder= {fullOrder} />
                    )}
                    <tfoot>
                        <tr>
                            { isSubmitted ? 
                                <td><button className={"btn btn-primary"} type="submit">
                                <span className={"spinner-border spinner-border-sm"} role="status" aria-hidden="true"></span>
                                Submitting Order...
                                </button></td>
                                :
                                <td><button style={{fontFamily: "Amaranth", fontSize: "20px"}} type="submit" className={"btn btn-primary"}>Place Your Order</button></td>
                            }
                            {/* <td><input type={"submit"} value={"Place Your Order"}/></td>  */}
                        </tr>
                    </tfoot>
                </table>
            </form>
            


        </div>
    )
}


export default Menu;