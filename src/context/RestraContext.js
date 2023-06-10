import React, { createContext, useEffect, useState } from 'react'
const RestraContext=createContext();

export const RestraProvider = ({children}) => {
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
      localStorage.setItem('orders',JSON.stringify(orders))
    },[orders]);

    useEffect(()=>{
       const storedOrders=localStorage.getItem('orders');
       if(storedOrders)setOrders(JSON.parse(storedOrders));
    },[]);

    const addOrders=(newOreder)=>{
        setOrders([newOreder,...orders]);
    };

    const deleteOrders=(index)=>{
        const updatedOrders=[...orders];
        updatedOrders.splice(index,1);
        setOrders(updatedOrders)

    }

    const RestraContextValue={
        orders,
        addOrders,
        deleteOrders
    }
  return (
    <div>
      <RestraContext.Provider value={RestraContextValue}>{children}</RestraContext.Provider>
    </div>
  )
}

export default RestraContext
