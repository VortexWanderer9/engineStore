import React, { useEffect, useState } from "react"
import { useCheckout } from "../Context/CheckoutContext"
function Checkout({products}) {
  console.log(products);
  const {cart} = useCheckout()
  console.log(cart);
  
 let [checkout, setCheckout] = useState([])
 const check = products.filter(item => item.id === cart)
 console.log(check);
  return (
    <>
    <div>
      <div>

      </div>
    </div>
    </>
  )
}

export default Checkout