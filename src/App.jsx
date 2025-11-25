  import { useEffect, useState } from 'react';
  import './App.css'
import ProductList from './Components/ProductList';

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
     <ProductList dataMam = {dataMam} />
      </>
    )
  }

  export default App
