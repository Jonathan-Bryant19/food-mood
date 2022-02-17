import React, {useEffect, useState} from 'react'


function Cart() {
  const [index, setIndex] = useState()
  const [currentCart, setCurrentCart] = useState([])



  useEffect(() => {
    fetch('http://localhost:3001/Order-History')
      .then(r => r.json())
      .then(res => {
        setIndex(res.length)
        setCurrentCart(res)
      })
  }, [])

  console.log(index)
  console.log(currentCart)

  return (
    <div className={'container pt-5'}>
      <table style={{width:'100%' }}>
        <tbody>
          <tr> 
            <th className='text-center bg-danger'><em>Product</em></th>
            <th className='text-center bg-danger'><em>Price</em></th>
            <th className='text-center bg-danger'><em>Quantity</em></th>
            <th className='text-center bg-danger'><em>Total</em></th>
          </tr>
          <tr>
            <td>product1</td>
            <td>fsf</td>
            <td>fs</td>
            <td>asfd</td>
          </tr>
        </tbody>
      </table> 
    </div>
  )
}



export default Cart