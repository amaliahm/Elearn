import { Button } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ParticipateQuiz from "./ParticipateQuiz"


const StartQuiz = () => {

    const navigate = useNavigate()
    const [start, setStart] = useState(false)

    

    return (
        <>
          <div className='container-xxl bg-white p-0'>
            <main>
                <div className="container-xxl p-0 mb-5">
                    <div className="container-xxl py-5 flex row align-center justify-center">
                        <div className="container px-lg-5">
                            <div className='section-title position-relative text-center mb-5 mt-5 pb-2 wow fadeInUp' data-wow-delay="0.1s">
                                <h6 className="position-relative d-inline text-primary ps-4">
                                    Assessments
                                </h6>
                                <h1 className='mt-2'>
                                    Assessment n=°1
                                </h1>
                            </div>
                        </div>
                        {!start ? <Button 
                          variant="contained" 
                          style={{background: 'var(--main-color)', width: '150px'}} 
                          onClick={() => setStart(true)}
                        >
                            Start
                        </Button> 
                        : <ParticipateQuiz />
                        }
                    </div>
                </div>
            </main>
          </div>
        </>
    )
}

export default StartQuiz