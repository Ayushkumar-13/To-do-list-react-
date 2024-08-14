
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-800 text-slate-100 py-2' >
      <div className="logo">
        <span className='font-bold text-xl mx-7'> Welcome</span></div> 
      <ul className="flex gap-7 mx-9">
       <a href="/"><li className='cursor-pointer hover:font-bold transition-all '> Home</li></a>
       <a href="/"> <li className='cursor-pointer hover:font-bold transition-all '> YourTask</li></a>
      </ul>
    </nav>
  )
}

export default Navbar
