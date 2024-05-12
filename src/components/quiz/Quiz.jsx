import { useNavigate } from "react-router-dom"
import { navBarElementsUser } from "../../constants/data"
import NavBarComponent from "../../container/NavBarComponent"


const Quiz = () => {

    const navigate = useNavigate()

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
                        <div className="service">
                            <div className="px-lg-5">
                                <div className="row g-4">                    
                                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                            
                                            <h5 className="mb-3">Quiz n=°1</h5>
                                            <a className="btn px-3 mt-auto mx-auto" href="">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        <div className="container px-lg-5">
                            <div className="row g-4">                    
                                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                                    <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                        
                                        <h5 className="mb-3">Quiz n=°1</h5>
                                        <a className="btn px-3 mt-auto mx-auto" href="">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="container px-lg-5">
                            <div className="row g-4">                    
                                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                                    <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                        
                                        <h5 className="mb-3">Quiz n=°1</h5>
                                        <a className="btn px-3 mt-auto mx-auto" href="">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        
                    


                    </div>
                </div>

            </main>
          </div>
        </>
    )
}

export default Quiz