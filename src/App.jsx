  import { useEffect, useState } from 'react';
  import './App.css'
import ProductList from './Components/ProductList';
import { Routes, Route } from 'react-router';
import NabBar from './Components/NabBar';
import Category from './Pages/Category';
import Checkout from './Pages/Checkout';

  function App() {
    const [dataMam, setData] = useState([])
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
    return (
      <>
      <NabBar />
        <Routes>
          <Route path='/' element = {<ProductList dataMam = {dataMam} />} />
          <Route path ='category' element = <Category /> />
          <Route path ='checkout' element = {<Checkout />} />
        </Routes>
      </>
    )
  }

  export default App
