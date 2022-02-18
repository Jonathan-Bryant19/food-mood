import React from 'react'

function CartTableItem( {item}) {
    console.log(item)
    return (
    <tr>
        <td style={{fontFamily: "Amaranth", fontSize: "22px"}}>{item.food}</td>        
        <td style={{fontFamily: "Amaranth", fontSize: "22px"}} >{item.quantity}</td>
        <td style={{fontFamily: "Amaranth", fontSize: "22px"}}>{`$ ${(item.price * item.quantity).toFixed(2)}`}</td>
        
    </tr>
  )
}

export default CartTableItem