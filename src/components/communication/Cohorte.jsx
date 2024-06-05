import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Accordion } from 'react-bootstrap';
import { BsArrowRightShort } from 'react-icons/bs';
import { FaHashtag, FaQuestion } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { questions } from "../../constants/data";

const Cohorte = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/hello-world/')
          .then(response => {
            setMessage(response.data.message);
            console.log(message)
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
    
    return (
        <>
          <div className='container-xxl bg-white p-0'>
            <div className="absolute top-7 left-5 selected-answer rounded-2xl px-3 py-1">
                <p>Cohorte-1CS 2023-2024</p>
            </div>
            <div className="absolute top-1 right-5">
                <Button className="add-comm" style={{color: 'white'}} >
                    <FaQuestion onClick={() => navigate(`${location.pathname}/add`)}/>
                </Button>
                <Button className="add-comm" style={{color: 'white'}} >
                    <FaHashtag onClick={() => navigate(`${location.pathname}/tags`)} />
                </Button>
            </div>
            <main>
                <div className="container-xxl p-0 mb-5">
                    <div className="container-xxl py-4">
                        <div className="container px-lg-5">
                            <div className=' position-relative text-center mb-5 mt-2 pb-2 wow fadeInUp' data-wow-delay="0.1s">
                                <h6 className="position-relative d-inline text-primary ps-4">
                                    Communications
                                </h6>
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
                                            <BsArrowRightShort className="professors__arrow-icon" onClick={() => navigate(`${location.pathname}/question`)} />
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