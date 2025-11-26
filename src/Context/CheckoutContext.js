import React, { createContext, useContext } from "react";
// Create the Checkout Context
export const CheckoutContext = createContext()
// Create a provider component
//
// Custom hook to use the Checkout Context
export const useCheckout = () => {
    return  useContext(CheckoutContext)
}
// Export the Checkout Context
export default CheckoutContext