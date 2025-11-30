import React, { useEffect, useState } from "react"
import { useCheckout } from "../Context/CheckoutContext"

function Checkout({ products }) {
  const { cart } = useCheckout()
  let [checkout, setCheckout] = useState([])

  return (
    <div className="p-5">
      <div className="flex flex-col-reverse md:flex-row gap-10 justify-between">

        {/* CART SECTION */}
        <div className="w-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Your Cart</h2>

          <div className="grid gap-5">
            {cart.map(item => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-xl 
                shadow-sm border border-white/10 hover:shadow-md transition"
              >
                <div className="w-20 h-20 rounded overflow-hidden">
                  <img
                    className="w-full h-full"
                    src={item.image}
                    alt="Product"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-white text-lg">{item.title}</h3>
                  <p className="text-cyan-300 font-medium">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CHECKOUT SECTION */}
        <div className="w-full md:max-w-sm">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Checkout</h2>

          <div className="p-5 bg-white/5 backdrop-blur-md rounded-xl shadow-lg border border-white/10 flex flex-col gap-4">
            <p className="text-xl font-semibold text-emerald-400 text-center">
              Total Price: <span className="text-white">$0</span>
            </p>

            <button
              className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition text-white font-bold py-2 rounded-lg shadow-md"
            >
              Proceed to Payment
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Checkout
