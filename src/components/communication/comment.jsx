import React, { useEffect } from 'react'
import ComntBody from './comntBody'

const Comments = ({comments}) => {


  useEffect(() => {
  }, [])
  
  return (
    <div className='w-[100%] flex flex-col gap-2 p-4'>
     {comments.map((ytem,i)=>(
      <>
        <ComntBody key={i} comment={ytem}/>
          <div className='flex flex-col gap-2 w-[95%] ml-[5%] pl-[7%] border-l-2 border-[#E8E9ED]'>
            {ytem.replies.map((item,i)=>(
              <ComntBody comment={item} key={i}/>
            ))}
          </div>
      </>
     ))}
     
    </div>
  )
}

export default Comments