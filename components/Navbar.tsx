import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className="flex  font-mono font-extrabold justify-center w-full text-1xl">
      <div className="sm:bg-red-700 bg-red-500 flex justify-center w-full  py-6 space-x-4 sm:text-2xl sm:space-x-8 md:space-x-10 lg:space-x-12 flex-wrap min-w-full text-lg ">
        <Link href="/">
      <h1 className='relative text-center   cursor-pointer group'>Home
        <span className='absolute left-0 right-0 bottom-0 h-1 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span></h1>
    </Link>

    <Link href="/about-us">
      <h1 className='relative text-center cursor-pointer group'>About<span className='absolute left-0 right-0 bottom-0 h-1 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span></h1>
   </Link>

   <Link href="/recipes">
      <h1 className='relative text-center  cursor-pointer group'>Recipes<span className='absolute left-0 right-0 bottom-0 h-1 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span></h1>
</Link>

<Link href="/contact">
      <h1 className='relative text-center pr-4  cursor-pointer group'>Contact<span className='absolute left-0 right-0 bottom-0 h-1 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span></h1>
      </Link>
</div>
  </div>
  ) 
}

export default Navbar