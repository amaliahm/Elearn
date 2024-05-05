import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { cohorte } from "../../assets/images"
import { groupe_communication, navBarElementsAdmin } from "../../constants/data"
import NavBarComponent from "../../container/NavBarComponent"


const CommunicationAdmin = () => {

    const navigate = useNavigate()

    return (
        <>
          <div className='container-xxl bg-white p-0'>
            <NavBarComponent elements={navBarElementsAdmin} element={2}/>
            <Button 
              variant="contained"
              sx={{
                position: 'fixed',
                top: '90px',
                left: '20px',
                zIndex: '10',
                background: 'var(--main-color)'
              }}
              onClick={() => navigate('/home/admin/communication/add-cohorte')}
            >
                Add Cohorte
            </Button>
            <main>
                <div className="container-xxl p-0 mb-5">
                    <div className="container-xxl py-5">
                        <div className="container px-lg-5">
                            <div className='section-title position-relative text-center mb-5 mt-5 pb-2 wow fadeInUp' data-wow-delay="0.1s">
                                <h6 className="position-relative d-inline text-primary ps-4">
                                    Communications
                                </h6>
                                <h1 className='mt-2'>
                                    Your Cohorte
                                </h1>
                            </div>
                        </div>
                        <div className="section events">
                            <div className="container">
                                <div className="row">
                                    {Object.keys(groupe_communication).map((e, i) => (
                                        <div className="col-lg-12 col-md-6" key={i}>
                                            <div className="item">
                                                <div className="row">
                                                    <div className="col-lg-3">
                                                        <div className="image">
                                                            <img src={cohorte} alt={`cohorte-${groupe_communication[e].nom}`} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-9">
                                                        <ul>
                                                            <li>
                                                                <span className="category">
                                                                    cohorte-{groupe_communication[e].nom}
                                                                </span>
                                                                <h4>
                                                                    {groupe_communication[e].annee}
                                                                </h4>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    Student:
                                                                </span>
                                                                <h6>
                                                                    {groupe_communication[e].student}
                                                                </h6>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    Questions:
                                                                </span>
                                                                <h6>
                                                                    {groupe_communication[e].question}
                                                                </h6>
                                                            </li>
                                                            <li>
                                                                <span>
                                                                    Answers:
                                                                </span>
                                                                <h6>
                                                                    {groupe_communication[e].answer}
                                                                </h6>
                                                            </li>
                                                        </ul>
                                                        <a href="#" onClick={() => navigate(`/home/admin/communication/${groupe_communication[e].id}`)}>
                                                            <i className="fa fa-angle-right"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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

export default CommunicationAdmin