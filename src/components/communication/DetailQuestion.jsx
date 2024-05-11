import { question } from "../../constants/data";
import Comments from './comment';
import Reply from "./reply";

const DetailQuestion = () => {

    
    return (
        <>
            
          <div className='container-xxl bg-white p-0'>
            <main>
                <div className="container-xxl p-0 mb-5">
                    <div className="container-xxl py-5">
                        <div className="container px-lg-5">
                            <div className='section-title position-relative text-center mb-5 mt-0 pb-2 wow fadeInUp' data-wow-delay="0.1s">
                                <h6 className="position-relative d-inline text-primary ps-4">
                                    Communications
                                </h6>
                                <h1 className='mt-2'>
                                    Cohorte-1CS 2023-2024
                                </h1>
                            </div>
                        </div>
                        <div >
                            {question.map((e, i) => (
                                <div 
                                  key={i} className='bg-[#F5F6FA] p-3 rounded-2xl'
                                >
                                    <div>

                                    <h6 className="d-inline text-primary ps-4">
                                        {e.title}
                                    </h6>
                                    <h4 className="d-block text-black ps-4 pt-2 mb-3">
                                        {e.description}
                                    </h4>
                                    tags : 
                                    {e.tags.map((tag, iTag) => (
                                        <span 
                                          key={iTag} 
                                          className="ml-3"
                                          style={{background: 'var(--main-color)', color: 'white', borderRadius: '10px', padding: '7px 15px'}}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    <div className="flex justify-between align-center mt-4" style={{width: '30%'}}>
                                        <span>
                                            {e.time}
                                        </span>
                                        <span className="text-primary" >
                                            {e.person}
                                        </span>
                                    </div>
                                    <hr />
                                    </div>
                                    <div className="flex flex-col justify-center items-center w-full " >

                                        <Comments comments={e.comments}/>
                                    </div>
                                    <Reply />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
          </div>
        </>
    )
}

export default DetailQuestion