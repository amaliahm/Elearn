import { useState } from "react";
import { Accordion } from 'react-bootstrap';
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
                            <div className='section-title position-relative text-center mb-5 mt-5 pb-2 wow fadeInUp' data-wow-delay="0.1s">
                                <h6 className="position-relative d-inline text-primary ps-4">
                                    Communications
                                </h6>
                                <h1 className='mt-2'>
                                    Cohorte-1CS 2023-2024
                                </h1>
                            </div>
                        </div>
                        


  <Accordion defaultActiveKey={['0']} >
  {questions.map((e, i) => (
                                          <Accordion.Item key={i} eventKey={i} >
                                          <Accordion.Header>Accordion Item #1</Accordion.Header>
                                          <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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