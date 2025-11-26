  import { useEffect, useState } from 'react';
  import './App.css'
import ProductList from './Components/ProductList';
import { Routes, Route } from 'react-router';
import NabBar from './Components/NabBar';
import Category from './Pages/Category';
import CheckoutContext from './Context/CheckoutContext';
import Checkout from './Pages/Checkout';

  function App() {
    const [dataMam, setData] = useState([])
        const [cart, setCart] = useState([])
        const [quantity, setQuantity] = useState(0)
    useEffect(() => {
      const fetchProducts = async () =>{
        try {
          const response = await fetch('https://fakestoreapi.com/products')
          if(!response.ok) throw new Error("Network error")
          const data = await response.json()
          setData(data)
          
        } catch(err) {
        console.error(err);
        }
      }
      fetchProducts()
    }, [])
    
      const addToCart = (id) => {
        let find = cart.find(item => item === id)
        if (find) return
    setCart(prev => [...prev, id])
     console.log(cart);
      }
    const removeFromCart = (id) => { 
      setCart(prev => prev.filter(item => item !== id))
    }
    return (
      <CheckoutContext.Provider value={{addToCart, removeFromCart, cart, setCart, quantity, setQuantity}}>
      <NabBar />
        <Routes>
          <Route path='/' element = {<ProductList dataMam = {dataMam} />} />
          <Route path ='category' element ={ <Category data = {dataMam} /> }/>
          <Route path ='checkout' element = {<Checkout />} />
        </Routes>
      </CheckoutContext.Provider>
    )
  }

  export default App
