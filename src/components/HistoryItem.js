import React, {useState} from 'react'

function HistoryItem({item}) {
    const [toggleExpand, setToggleExpand] = useState(false)
    const totalArr = []
    item.order.forEach(element => {
      totalArr.push(element.price * element.quantity)
    })
    
    
    const total = totalArr.reduce((pv, cv) => pv + cv, 0)


  return (
    <div style={{width:'65%'}} className="container pt-5">
        <div className="row border border-danger pb-2">
            <h2 style={{fontFamily: "Amaranth", fontSize: "24px"}} className="col text-center">{item.restaurant}</h2> <button style={{maxWidth: "400px", align: "center"}} onClick={()=>setToggleExpand(toggleExpand=>!toggleExpand)}className="col expandBtn">Expand Order</button>
            <div>
            {toggleExpand &&                 
                <ul className='ps-5'>
                    {item.order.map(item =>{
                        return(                 
                            <li style={{fontFamily: "Amaranth", fontSize: "22px"}} key= {item.food}>{`${item.food} (x${item.quantity}) $${item.quantity*item.price}`}</li>
                        )
                    } )}
                    <li style={{fontFamily: "Amaranth", fontSize: "24px"}}>{`Total: $${total}`}</li>
                </ul>}
              </div>
        </div>
            
    </div>
  )
}

export default HistoryItem


// 