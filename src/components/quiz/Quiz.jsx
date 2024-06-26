import { Button } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { navBarElementsUser, quizes } from "../../constants/data"
import NavBarComponent from "../../container/NavBarComponent"
import ModalUpdate from "./ModalStartQuiz"


const Quiz = () => {

    const navigate = useNavigate()
    const [update, setUpdate] = useState(false)
    const [first, setFirst] = useState(false)

    return (
        <>
          <div className='container-xxl bg-white p-0'>
            <NavBarComponent elements={navBarElementsUser} element={2}/>
            <main>
                <div className="container-xxl p-0 mb-5">
                    <div className="container-xxl py-5">
                        <div className="container px-lg-5">
                            <div className='section-title position-relative text-center mb-5 mt-5 pb-2 wow fadeInUp' data-wow-delay="0.1s">
                                <h6 className="position-relative d-inline text-primary ps-4">
                                    Quiz
                                </h6>
                                <h1 className='mt-2'>
                                    Your Assessments
                                </h1>
                            </div>
                        </div>
                        <div className="absolute top-16 right-5">
                <Button className="add-comm" style={{color: 'white'}} >
                    <i class="fa-solid fa-plus" onClick={() => navigate('/user/assessment/add')}></i>
                </Button>
                
            </div>
                        <div className="service">
                            {quizes.map((e, i) => (
                                <div key={e.id} className="row g-4">                    
                                    {(e.id === 0 && !first) ? <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                                        <div className={`service-item d-flex flex-column justify-content-center text-center rounded service-item-hover`} >
                                            <h5 className="mb-3">{e.nom}</h5>
                                            <a className="btn px-3 mt-auto mx-auto" onClick={() => {
                                                 setUpdate(true)
                                            }}>Read More</a>
                                        </div>
                                    </div> : (e.id !== 0) && <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                                        <div className={`service-item d-flex flex-column justify-content-center text-center rounded `} >
                                            <h5 className="mb-3">{e.nom}</h5>
                                            <a className="btn px-3 mt-auto mx-auto" onClick={() => {
                                                 navigate(`/user/assessment/old/${e.id}`)
                                            }}>Read More</a>
                                        </div>
                                    </div>}
                                </div>
                            ))}
                        </div>
                        {update && <ModalUpdate
                          setShowModal={setUpdate}
                          showModal={update}
                          setFirst={setFirst}
                        />}
                    </div>
                </div>
            </main>
          </div>
        </>
    )
}

export default Quiz