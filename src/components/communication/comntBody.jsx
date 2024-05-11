import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { FaReply } from 'react-icons/fa'

const ComntBody = ({comment}) => {
  const [target, setTarget] = useState(comment)
  console.log(target)


  

  const [reply, setReply] = useState(false)
  

  

  
  
  

  const timePasses = ()=>{
    let now = new Date()
    let created = new Date(target.createdAt)
    let diff = now.getTime() - created.getTime()
    let seconds = Math.floor(diff/1000)
    let minutes = Math.floor(seconds/60)
    let hours = Math.floor(minutes/60)
    let days = Math.floor(hours/24)
    return days
  }

  
  
  return (
    <>
    <div className='flex gap-4 rounded-lg bg-[#FFFFFF] w-[95%] h-full p-4 relative min-h-[200px] '>
      <div className='comment-score'>
        <i className='cusrsor' onClick={()=> {}}><AiOutlinePlus size={15}/></i>
        <p>{target.agree}</p>
        <p>{target.disagree}</p>
        <i className='cusrsor' onClick={()=>{}}><AiOutlineMinus size={15}/></i>
      </div>
      <div className='comments-main-section'>
        <div className='comment-headline'>
          <p className=' font-[600]'>{target.user}</p>
          <p className='time'>{
            timePasses() < 1? 'Today':
            timePasses() < 7? timePasses() +' days ago':
            timePasses() <= 29? timePasses()%7 +' weeks ago':
            timePasses() % 29 + ' month ago'
          }</p>
          <div className='comment-opt'>
             <p className='flex items-center gap-1 text-[#5358B6] cusrsor' onClick={()=>setReply(!reply)}><i><FaReply size={15}/></i>Reply</p>
          </div>
        </div>
        <div className='comments-body'>
            <p>{target.content}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default ComntBody