import { useState } from "react";
import { Accordion } from 'react-bootstrap';
import { BsArrowRightShort } from 'react-icons/bs';
import { questions } from "../../constants/data";

const Cohorte = () => {

  const [show, setShow] = useState(false)
    
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
                        <Accordion defaultActiveKey={['0']}  >
                            {questions.map((e, i) => (
                                <Accordion.Item key={e.id} eventKey={i} >
                                    <Accordion.Header>
                                        {e.tag}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <hr />
                                        {e.info}
                                        <span className="flex justify-between align-center">
                                            <p>
                                                {e.person}
                                            </p>
                                            <p>
                                                0 answers
                                            </p>
                                            <p>
                                                Comments
                                            </p>
                                        </span>
                                        <hr />
                                        <span className="flex justify-between align-center">
                                            {e.time}
                                            <BsArrowRightShort className="professors__arrow-icon" onClick={() => {}} />
                                        </span>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </main>
          </div>
        </>
    )
}

export default Cohorte