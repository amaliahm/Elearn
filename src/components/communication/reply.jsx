import React from 'react'

const Reply = ({}) => {
  

  


  

  return (
    <>
      <>
    
    <div className='min-h-[150px] bg-[#FFFFFF] rounded-lg flex p-4 gap-4'>
      <form className='flex w-full gap-4' onSubmit={(e)=>{}}>
        <textarea name="reply" id="reply" placeholder='Add a comment...' className='rounded-lg w-[80%] border-[#E8E9ED] border-2 p-4 px-6 focus:border-[#2124B1] cursor-pointer' onChange={(e)=>{}}></textarea>
        <button type="submit" className=' rounded-md bg-[#5358B6] px-8 p-2 h-fit font-semibold text-white w-[8rem] cursor-pointer'>SEND</button>
      </form>
    </div>
      </>
    </>
  )
}

export default Reply