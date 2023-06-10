import React, { useContext, useRef } from "react";
import RestraContext from "../context/RestraContext";

const OrderForm = () => {
    const {addOrders} = useContext(RestraContext);
    const idRef=useRef();
    const priceRef=useRef();
    const dishRef=useRef();
    const categoryRef=useRef();

    const handleOrder=(e)=>{
        e.preventDefault();
        const orderId=idRef.current.value;
        const orderPrice=priceRef.current.value;
        const orderdish=dishRef.current.value;
        const orderCategory=categoryRef.current.value;

        if(orderId && orderPrice && orderdish && orderCategory){
            const newOreder={
                id:orderId,
                price:orderPrice,
                dish:orderdish,
                category:orderCategory
            }
            addOrders(newOreder);

            idRef.current.value='';
          priceRef.current.value='';
          dishRef.current.value='';
        categoryRef.current.value='';
        }

    }
  return (
    <div>
      <form onSubmit={handleOrder}>
        <label>
            Unique Order Id:
            <input type="number" ref={idRef}/>
        </label>
        <label>
            Choose Price:
            <input type="number" ref={priceRef}/>
        </label>
        <label>
            Choose Dish:
            <input type="title" ref={dishRef}/>
        </label>
        <label>
            Choose a Table:
           <select ref={categoryRef}>
            <option value='Table 1'>Table 1</option>
            <option value='Table 2'>Table 2</option>
            <option value='Table 3'>Table 3</option>
           </select>
        </label>
        <button type="submit">Add to bill</button>
      </form>
    </div>
  )
}

export default OrderForm
