import React, { useState } from 'react'

function ProductList({ dataMam }) {
  const [show, setShow] = useState(true)

  const showProductDetails = () =>{
    setShow(prev => !prev)
  }
  return (
    <>
      <div >
      <div className='p-5 overflow-x-hidden'>
        <div className='grid relative w-full grid-cols-1 justify-center gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
            <div className={`fixed z-10 p-8 left-0 right-0 bottom-0 top-0 ${show ? 'hidden' : 'block'}`}>
          <div className="product-details flex items-center justify-center w-full h-full">
          <div className='text-center bg-amber-300 wrap-balance w-full md:w-md'>
            <h2>Product name</h2>
            <span>Rating : 4.5</span>
            <span>Price : 400</span>
            <h2>It's sometimes argued that people after crossing 60 years old they become less </h2>
          </div>
        </div>
      </div>
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
          <div className='w-full'>
            <button className=' bg-white/10 hover:bg-emerald-300 transition duration-300 ease-in-out w-full py-2 rounded cursor-pointer text-lg font-bold  hover:text-white'>Order Now</button>
          </div>
        
          <div className='absolute top-1 left-1 w-full text-sm font-bold cursor-pointer'>
          <div className=' bg-white/10 px-1 mt-2 w-fit rounded text-emerald-400'>
              {item.category}
          </div>
          <div className='hover:bg-black/10 duration-300 ease-in-out top-0 right-2 rounded absolute' onClick={showProductDetails}>
            <img width={40} src="./detail.svg" alt="" />
          </div>
          </div>
          </div>
          ))}
        </div>
      </div>
    </div>

    </>
  )
}

export default ProductList