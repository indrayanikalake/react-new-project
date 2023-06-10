import React, { useContext } from 'react'
import RestraContext from '../context/RestraContext'

const OrederList = () => {
    const {orders, deleteOrders}=useContext(RestraContext);
    const categories=['Table 1','Table 2','Table 3'];
  return (
    <div>
      <h2>Oreders</h2>
      {categories.map((category)=>(
        <div key={category}>
        <h3>{category}</h3>
        {orders.filter((order)=>order.category===category)
        .map((order,index)=>(
            <li key={index}>
             <div>
                <strong>Id:</strong>
                {order.id}
             </div>
             <div>
                <strong>Price:</strong>
                {order.price}
             </div>
             <div>
                <strong>Dish:</strong>
                {order.dish}
             </div>
             <div>
                <strong>category:</strong>
                {order.category}
             </div>
             <button onClick={()=>deleteOrders(index)}>Delete Order</button>
            </li>
        ))}
        </div>
     ))}

    </div>
  )
}

export default OrederList
