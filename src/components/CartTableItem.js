import React from 'react'

function CartTableItem( {item}) {
    console.log(item)
    return (
    <tr>
        <td>{item.food}</td>
        <td>{item.price}</td>
        <td>{item.quantity}</td>
        <td>{item.price * item.quantity}</td>
    </tr>
  )
}

export default CartTableItem