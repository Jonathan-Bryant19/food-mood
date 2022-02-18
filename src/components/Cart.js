import React, {useEffect, useState} from 'react'
import CartTableItem from './CartTableItem'

function Cart() {
  const [currentCart, setCurrentCart] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3001/Order-History')
      .then(r => r.json())
      .then(res => {
        setCurrentCart(res)
      })
    }, [])

 
  function TableRender() {
    const totalArr = []
    mostRecentOrder.order.forEach(element => {
      totalArr.push(element.price * element.quantity)
    })
    console.log(currentCart)
    
    const subTotal = totalArr.reduce((pv, cv) => pv + cv, 0)
    const deliveryFee = +(mostRecentOrder.distance)*.5
    const tax = subTotal*.08
    const total = subTotal + deliveryFee + tax
    
    return (
      <div className={'container pt-5'}>
        <h1 style={{fontFamily: "Amaranth", fontSize: "44px"}} className='text-center '>{mostRecentOrder.restaurant}</h1>
        <table align="center" style={{width:'75%'}}>
          <tbody>
            <tr> 
              <th style={{fontFamily: "Amaranth", fontSize: "22px"}} className='text-center bg-danger'><em>Product</em></th>
              <th style={{fontFamily: "Amaranth", fontSize: "22px"}} className='text-center bg-danger'><em>Quantity</em></th>
              <th style={{fontFamily: "Amaranth", fontSize: "22px"}} className='text-center bg-danger'><em>Price</em></th>
              
            </tr>
            {mostRecentOrder.order.map((item) => {
              return <CartTableItem key={item.food} item={item}/>
            })}
            <tr>
              <td style={{fontFamily: "Amaranth", fontSize: "22px"}}>Subtotal: {`$${subTotal.toFixed(2)}`}</td>
              <td style={{fontFamily: "Amaranth", fontSize: "22px"}}>DeliveryFee: {`$${deliveryFee.toFixed(2)}`}</td>
              <td style={{fontFamily: "Amaranth", fontSize: "22px"}}>Tax: {`$${tax.toFixed(2)}`}</td>
            </tr>
            <tr>
            <td style={{fontFamily: "Amaranth", fontSize: "22px"}}>Total: {`$${total.toFixed(2)}`}</td>
            </tr>
          </tbody>   
        </table> 
      </div>
      )
  } 

  function NoTableRender() {
    return <div>Loading...</div>
  }

  const myIndex = currentCart.length-1
  const mostRecentOrder = (currentCart[myIndex])

  if (mostRecentOrder === undefined) {
    return <NoTableRender />
  } else {
    return <TableRender />
  }
  
}

export default Cart