import React, {useState} from 'react'

function HistoryItem({item}) {
    const [toggleExpand, setToggleExpand] = useState(false)
    const totalArr = []
    item.order.forEach(element => {
      totalArr.push(element.price * element.quantity)
    })
    
    
    const total = totalArr.reduce((pv, cv) => pv + cv, 0)


  return (
    <div className="container">
        <div className="row">
            <h2 className="col">{item.restaurant}</h2> <button onClick={()=>setToggleExpand(toggleExpand=>!toggleExpand)}className="col">Expand Order</button>
            {toggleExpand && 
                <ul>
                    {item.order.map(item =>{
                        return(                 
                            <li key= {item.food}>{`Food: ${item.food} X${item.quantity} ${item.quantity*item.price}`}</li>
                        )
                    } )}
                    <li>Total:{total}</li>
                </ul>}
        </div>
            
    </div>
  )
}

export default HistoryItem


// 