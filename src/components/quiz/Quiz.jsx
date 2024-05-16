import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { navBarElementsUser, quizes } from "../../constants/data"
import NavBarComponent from "../../container/NavBarComponent"
import ModalUpdate from "./ModalStartQuiz"


const Quiz = () => {

    const navigate = useNavigate()
    const [update, setUpdate] = useState(false)

    return (
        <>
          <div className='container-xxl bg-white p-0'>
            <NavBarComponent elements={navBarElementsUser} element={1}/>
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
                        <div className="service">
                            {quizes.map((e, i) => (
                                <div key={e.id} className="row g-4">                    
                                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                            <h5 className="mb-3">{e.nom}</h5>
                                            <a className="btn px-3 mt-auto mx-auto" onClick={() => {
                                                e.id === 0 ? setUpdate(true) : navigate(`/home/user/assessment/old/${e.id}`)
                                            }}>Read More</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {update && <ModalUpdate
                          setShowModal={setUpdate}
                          showModal={update}
                        />}
                    </div>
                </div>
            </main>
          </div>
        </>
    )
}

export default Quiz