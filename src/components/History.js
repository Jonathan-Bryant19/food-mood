import React,{useEffect, useState} from 'react'
import HistoryItem from './HistoryItem'

function History() {
  const [orderHistory, setOrderHistory] = useState([])
  const reversed = [...orderHistory]

  useEffect(() => {
    fetch('http://localhost:3001/Order-History')
      .then(r => r.json())
      .then(res => {
        setOrderHistory(res)
      })
    }, [])

  return (
    <div>
      {reversed.reverse().map(item => <HistoryItem key = {item.id} item={item} />)}
    </div>
  )
}

export default History