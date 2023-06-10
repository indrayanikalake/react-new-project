import React from 'react'
import { RestraProvider } from './context/RestraContext'
import OrderForm from './component/OrderForm'
import OrederList from './component/OrederList'

const App = () => {
  return (
   <div>
    <RestraProvider>
        <OrderForm />
        <OrederList />
    </RestraProvider>
    
   </div>
      
  )
}

export default App
