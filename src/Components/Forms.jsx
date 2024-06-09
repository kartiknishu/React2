import React from 'react'

const Forms = () => {

    const submit = (event)=>{
        event.preventDefault()

        console.log("Name: ",event.target[0].value)
        console.log("E-Mail: ",event.target[1].value)
        console.log("Text: ",event.target[2].value)
    }

  return (
    <form onSubmit={submit} className=''>
        <div className='px-5 relative mt-5' action="">
            <label className='absolute bg-white px-1  text-xs font-bold top-[-9px] left-[40px]' htmlFor="">NAME</label>
            <input className='border block w-full m-auto px-4 py-2 border-black' type="text" />
        </div>
        <div className='px-5 mt-5 relative' action="">
            <label className='absolute bg-white text-xs px-1 font-bold top-[-9px] left-[40px]' htmlFor="">E-MAIL</label>
            <input className='border block w-full m-auto px-4 py-2 border-black' type="text" />
        </div>
        <div className='px-5 relative mt-5' action="">
            <label className='absolute bg-white text-xs px-1 font-bold top-[-9px] left-[40px]' htmlFor="">TEXT</label>
            <input className='border block w-full m-auto px-4 py-2 h-[100px] border-black' type="text" />
        </div>
        <div className='relative'>
        <button className='text-white font-semibold bg-black px-12 rounded-md mx-5 mt-4 right-0 absolute py-2 '>SUBMIT</button>
        </div>
        
      
    </form>
  )
}

export default Forms
