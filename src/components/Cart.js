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
    
    const testTotal = totalArr.reduce((pv, cv) => pv + cv, 0)
    
    return (
      <div className={'container pt-5'}>
        <h1 className={'text-center'}>{mostRecentOrder.restaurant}</h1>
        <table style={{width:'100%' }}>
          <tbody>
            <tr> 
              <th className='text-center bg-danger'><em>Product</em></th>
              <th className='text-center bg-danger'><em>Price</em></th>
              <th className='text-center bg-danger'><em>Quantity</em></th>
              <th className='text-center bg-danger'><em>Total</em></th>
            </tr>
            {mostRecentOrder.order.map((item) => {
              return <CartTableItem key={item.food} item={item}/>
            })}
            <tr>
              <td>Total: {testTotal}</td>
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