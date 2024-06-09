import React from 'react'
import Formbuttons from './Formbuttons'
import Forms from './Forms'

const Body = () => {
  return (
    <div className='flex justify-center gap-10 px-[14%]'>
      <div className='w-1/2'>
        <Formbuttons/>
        <Forms/>
      </div>
      <div className='w-1/2]'>
        <img className='' src="/img/char.png" alt="" />
      </div>      
    </div>
  )
}

export default Body
