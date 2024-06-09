import React from 'react'

const Header = () => {
  return (
    <div className=' w-full flex justify-between items-center px-[7%] py-3'>
        <img src="/img/Logo.png" alt="" />
        <ul className='flex justify-center font-semibold gap-10 text-lg'>
            <li className='hover:text-white'>Home</li>
            <li className='hover:text-white'>About</li>
            <li className='hover:text-white'>Contact</li>
        </ul>

      
    </div>
  )
}

export default Header