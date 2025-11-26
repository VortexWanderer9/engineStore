import React from 'react'
import { NavLink } from 'react-router'

function NabBar() {
  return (
    <>
 <div className='flex items-center justify-center  p-4'>
  <div className='flex gap-5 border-b-2 py-2 border-b-cyan-500 px-5 text-lg font-bold'>
    <NavLink className={({isActive}) => isActive ? 'text-cyan-400' : ''} to={'/'}>Home</NavLink>
    <NavLink className={({isActive}) => isActive ? 'text-cyan-400' : ''} to = '/category'>Category</NavLink>
    <NavLink className={({isActive}) => isActive ? 'text-cyan-400' : ''} to = '/checkout'>Checkout</NavLink>
  </div>
 </div>
    </>
  )
}

export default NabBar