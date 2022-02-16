import React,{useState} from 'react'

function MenuItem({id, menuItem, menu, setFullOrder, fullOrder}) {
   
    const price = menu[menuItem]
    const food = menuItem
    const [menuOrder,setMenuOrder] = useState({
        quantity:1,
        price : price,
        food : food
    })


    function handleMenuInput(e){

        setMenuOrder({
            quantity:parseInt(e.target.value),
            price : price,
            food : food
        })
        const menuFilter = fullOrder.findIndex(element=> element.food === food)
            console.log (menuFilter)


        if (menuFilter == -1 ) {
            setFullOrder(()=>{
                const newOrder = [...fullOrder,
                    {
                    quantity:parseInt(e.target.value),
                    price : price,
                    food : food
                    }
                ]
                return newOrder
                
        })

        } else {
            // setFullOrder[menuFilter].quantity((quantity)=>{quantity})
            // console.log(fullOrder)


            // setFullOrder(()=>{
            //     const newOrder = [...fullOrder,
            //         {
                        
            //         }
            //     ]
            // })
            
        }
            

    }
    console.log(fullOrder)

    return(
        <tbody key = {id}>
            <td>{food} </td>
            <td>{price} </td>
            <td>
                <input onChange={handleMenuInput}type={"number"} min={"0"} defaultValue={0} />
            </td>
        </tbody>
    )
}


export default MenuItem