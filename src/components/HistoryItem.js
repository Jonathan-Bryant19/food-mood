import React, {useState} from 'react'

function HistoryItem({item}) {
    const [toggleExpand, setToggleExpand] = useState(false)
    const totalArr = []
    item.order.forEach(element => {
      totalArr.push(element.price * element.quantity)
    })
    
    
    const subTotal = totalArr.reduce((pv, cv) => pv + cv, 0)
    const deliveryFee = +(item.distance)*.5
    const tax = subTotal*.08
    const total = subTotal + deliveryFee + tax
    console.log(typeof(tax.toFixed(2)))
    console.log(typeof(tax))

  return (
    <div style={{width:'65%'}} className="container pt-5">
        <div className="row border border-danger pb-2">
            <h2 style={{fontFamily: "Amaranth", fontSize: "36px"}} className="col text-center">{item.restaurant}</h2> <button style={{maxWidth: "400px", align: "center"}} onClick={()=>setToggleExpand(toggleExpand=>!toggleExpand)}className="col expandBtn">Expand Order</button>
            <div>
            {toggleExpand &&                 
                <ul className='row mt-3 orderList'>
                  <div className='col mx-auto'>
                    {item.order.map(item =>{
                        return(
                          <li style={{fontFamily: "Amaranth", fontSize: "22px"}} key= {item.food}>{`${item.food} (x${item.quantity}) $${item.quantity*item.price}`}</li>
                        )
                    } )}
                    </div>
                    <div className='col totalList'>
                      <li style={{fontFamily: "Amaranth", fontSize: "22px"}}>{`SubTotal: $${subTotal.toFixed(2)}`}</li>
                      <li style={{fontFamily: "Amaranth", fontSize: "22px"}}>{`Tax: $${tax.toFixed(2)}`}</li>
                      <li style={{fontFamily: "Amaranth", fontSize: "22px"}}>{`Delivery Fee: $${deliveryFee.toFixed(2)}`}</li>
                      <li style={{fontFamily: "Amaranth", fontSize: "22px"}}>{`Total: $${total.toFixed(2)}`}</li>
                    </div>

                </ul>}
              </div>
        </div>
            
    </div>
  )
}

export default HistoryItem


// 