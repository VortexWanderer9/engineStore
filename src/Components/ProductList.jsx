import React, { useState } from 'react'

function ProductList({ dataMam }) {
  const [show, setShow] = useState(true)
  const [details, setDetails] = useState([])


  const showProductDetails = (image,description) =>{
    setShow(prev => !prev)
    if(description){      
          setDetails({description, image})
    }
  }  
  return (
    <>
      <div >
      <div className='p-5 overflow-x-hidden'>
        <div className='grid relative w-full grid-cols-1 justify-center gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
            <div className={`fixed  z-10 p-8 left-0 right-0 bottom-0 top-0 ${show ? 'hidden' : 'block'}`}>
          <div className="product-details flex items-center justify-center w-full h-full">
          <div className='relative text-balance bg-cyan-400 p-10 rounded w-full md:w-lg'>
            <div className='absolute cursor-pointer hover:bg-amber-200 duration-300 ease-in-out bg-amber-500 top-1 
            rounded-full right-1' onClick={showProductDetails}>
              <img width={20} src="./x.svg" alt="Close"  />
            </div>
            <div className='flex items-center gap-2'>
              <div className="image p-5 shadow">
                <img className='' src={details.image} alt="image" />
              </div>
              <div className="text font-mono text-cyan-200">{details.description}</div>
            </div>
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
            <button className=' bg-white/10 hover:bg-emerald-300 transition duration-300 ease-in-out w-full py-2
             rounded cursor-pointer text-lg font-bold  hover:text-white'>Order Now</button>
          </div>
        
          <div className='absolute top-1 left-1 w-full text-sm font-bold cursor-pointer'>
          <div className=' bg-white/10 px-1 mt-2 w-fit rounded text-emerald-400'>
              {item.category}
          </div>
          <div className='hover:bg-black/10 duration-300 ease-in-out top-0 right-2 rounded absolute' 
          onClick={() => showProductDetails(item.image, item.description)}>
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