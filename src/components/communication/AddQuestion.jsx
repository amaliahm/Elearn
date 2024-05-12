import React from 'react'

const AddQuestion = ({}) => {

  return (
    <>
        <div className='container-xxl bg-white p-0'>
            <main>
                <div className="container-xxl p-0 mb-5">
                    <div className="container-xxl py-5">
                        <div className="container px-lg-5">
                            <div className='section-title position-relative text-center mb-5 mt-0 pb-2 wow fadeInUp' data-wow-delay="0.1s">
                                <h6 className="position-relative d-inline text-primary ps-4">
                                    Cohorte-1CS 2023-2024
                                </h6>
                                <h1 className='mt-2'>
                                    Add question
                                </h1>
                            </div>
                        </div>
                        <div className='min-h-[150px] bg-[#FFFFFF] rounded-lg flex p-4 gap-4'>
                            <form className='w-full gap-4' onSubmit={(e)=>{}}>
                                <textarea name="reply" id="reply" placeholder='Add a question...' className='rounded-lg w-[100%] border-[#E8E9ED] border-2 p-2 px-6 focus:border-[#2124B1] cursor-pointer' onChange={(e)=>{}}></textarea>
                                <textarea name="reply" id="reply" placeholder='Add a description...' className='rounded-lg w-[100%] border-[#E8E9ED] border-2 p-2 px-6 focus:border-[#2124B1] cursor-pointer' onChange={(e)=>{}}></textarea>
                                <textarea name="reply" id="reply" placeholder='Add a tag...' className='rounded-lg w-[100%] border-[#E8E9ED] border-2 p-2 px-6 focus:border-[#2124B1] cursor-pointer' onChange={(e)=>{}}></textarea>
                                <button type="submit" className=' rounded-md bg-[#5358B6] px-8 p-2 h-fit font-semibold text-white w-[8rem] cursor-pointer'>
                                    ASK
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
          </div>
    </>
  )
}

export default AddQuestion