  import { useEffect, useState } from 'react';
  import './App.css'

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
    <div >
      <div className='p-5'>
        <div className='grid w-full grid-cols-1 justify-center gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
          {dataMam.map((item) => (
          <div key={item.id} className='bg-gray-600 rounded p-3 flex flex-col relative items-center justify-between gap-3'>
              <div className='h-48 w-48 p-2 mt-4'>
                <img src= {item.image} alt= {item.title} className="w-full h-full object-fit mb-2"/>
              </div>
          <div className='text-start w-full'>
            <h2 className='text-white/80'>{item.title}</h2>
            </div>
          <div className='flex w-full p-2 justify-between'>
              <span className='text-fuchsia-600 font-semibold'>Price: ${item.price}</span>
            <span className='text-cyan-700'>Rating ★ {item.rating.rate}</span>
          </div>
        
          <div className='absolute top-1 left-1 bg-pink-700 px-1 rounded font-bold cursor-pointer'>
            {item.category}
          </div>
          </div>
          ))}
        </div>
      </div>
    </div>
      </>
    )
  }

  export default App
