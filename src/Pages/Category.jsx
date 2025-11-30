    import React, { useState } from 'react'
import { useCheckout } from '../Context/CheckoutContext'
    function Category({data}) {
     const [category, setCategory] = useState('jewelery')
    let pep = data.filter(item => item.category === category)
    const {addToCart} = useCheckout()
    const [visible, setVisible] = useState(false)
    let timer;

    const addToCheckout = (id, image, title, price) =>{
        if(!id) return 
        addToCart(id, image, title, price)
        setVisible(true)
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(() => setVisible(false), 1000)
    }
    return (
        <>
        <div>
            <div className='p-4'>
                <div className='category items-center justify-end flex gap-3 flex-wrap '>
                    <span onClick={() => setCategory("women's clothing")}>Women's clothing</span>
                    <span onClick={() => setCategory("men's clothing")}>Men's clothing</span>
                    <span onClick={() => setCategory("electronics")}>Electronics</span>
                <span onClick={() => setCategory("jewelery")}>Jewelry</span>
                </div>
                <h2 className='text-2xl font-bold text-fuchsia-400'>Products: </h2>
            <div className='grid relative w-full grid-cols-1 justify-center mt-3 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
                <div
  className={`${
    visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
  } transition-opacity duration-500 ease-in-out right-6 z-2 rounded bottom-5 fixed bg-black/60 p-2`}
>
  <span className="font-mono text-cyan-600 font-bold">
    <span className="text-cyan-500">✔</span> Product Added
  </span>
</div>
            {pep.map((item) => (
            <div key={item.id} className='bg-gray-600 rounded p-3 flex flex-col relative items-center justify-between gap-3'>
                <div className='h-48 w-48 p-2 mt-4'>
                    <img src= {item.image} alt= {item.title} className="w-full h-full object-fit mb-2"/>
                </div>
            <div className='text-start w-full'>
                <h2 className='text-white/80'>{item.title}</h2>
                </div>
            <div className='flex w-full p-2 justify-between'>
                <span className='text-cyan-600 font-semibold'>Price: ${item.price}</span>
                <span className='text-cyan-500'>Rating ★ {item.rating.rate}</span>
            </div>
            <div className='w-full'>
                <button
                 className=' bg-white/10 hover:bg-emerald-300 transition duration-300 ease-in-out w-full py-2
                rounded cursor-pointer text-lg font-bold  hover:text-white
                active:scale-90
                '
                onClick={() => addToCheckout(item.id, item.image, item.title, item.price)}
                >Order Now</button>
            </div>
            </div>
            ))}
            </div>
         </div>
        </div>

        </>
    )
    }

    export default Category