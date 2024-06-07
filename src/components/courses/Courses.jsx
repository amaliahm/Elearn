import { FormControl, MenuItem, Select } from "@mui/material";
import Grid from '@mui/material/Grid';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { navBarElementsUser } from "../../constants/data";
import NavBarComponent from "../../container/NavBarComponent";
import ModalAddChapitre from "./ModalAddChapitre";
import ModuleDetails from "./ModulesDetails";

const bull = 
    <span style={{
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(1.1)',
        }}
    >
        •
    </span>;

const Courses = () => {
    const location = useLocation()
    console.log(location)
    const [selectedModule, setSelectedModule] = useState("Introduction au génie logiciel");
    const [infoModule, setInfoModule] = useState({
        nom: 'Introduction au génie logiciel',
        description: ' documentation et diagrammes',
        Niveau: 1, 
        responsable: 'bensaber',
        assistants: ['taouli', 'bendaoued'],
    })
    const [edit, setEdit] = useState(false)
    const [message, setMessage] = useState([])
    const [responsable, setResponsable] = useState('')
    const [assistants, setAssistants] = useState([])
    const [chapitre, setChapitre] = useState()
    const [moduleChapitre, setModuleChapitre] = useState({})
    const [addCourse, setAddCourse] = useState()

    const handleModuleChange = (event) => {
        setSelectedModule(event.target.value);
    };
    const handleModule = (i) => {
        setInfoModule(message[i])
        if ('Introduction au génie logiciel' === message[i].nom) {
            setInfoModule({
                ...message[i], 
                id: 9
            })
        } else if ('base de donnees' === message[i].nom) {
            setInfoModule({
                ...message[i], 
                id: 10
            })
        } else {
            setInfoModule({
                ...message[i], 
                id: 6
            })
        }
        getResponsable(message[i].responsable, responsable)
        getAssistants(message[i].assistants, assistants)
        getChapitre({
            ...infoModule,
            ...message[i]
        }, chapitre)
    }

    const getResponsable = (id, table) => {
        table.map(e => {
            if (e.id === id) {
                setInfoModule(mod => ({
                    ...mod,
                    responsable: e.fullname
                }))
            }
        })
    }
    const getAssistants = (assistant, table) => {
        let tmp = []
        assistant.map((assist) => {
            table.map(e => {
                if (e.id == assist) {
                    tmp.push(e.fullname)
                }
                setInfoModule(mod => ({
                    ...mod,
                    assistants: tmp
                }))
            })
        })
    }

    const getChapitre = (infoModule, chapitre) => {
        let tmp = []
        console.log(infoModule)
        console.log(chapitre)
        Object.keys(chapitre).map((e, i) => {
            if(chapitre[e].Module === infoModule.id) {
                tmp.push(chapitre[e])
                setModuleChapitre(tmp)
            }
        })
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/promo/module/')
          .then(response => {
            setMessage(response.data);
          })
          .catch(error => {
            console.log(error);
            setMessage([])
          });
        axios.get('http://127.0.0.1:8000/promo/prof/responsable/')
          .then(response => {
            setResponsable(response.data);
          })
          .catch(error => {
            console.log(error);
            setResponsable([])
          });
        axios.get('http://127.0.0.1:8000/promo/prof/assistant/')
          .then(response => {
            setAssistants(response.data);
          })
          .catch(error => {
            console.log(error);
            setAssistants([])
          });
        axios.get('http://127.0.0.1:8000/promo/chapitre/')
          .then(response => {
            setChapitre(response.data);
          })
          .catch(error => {
            console.log(error);
            setChapitre([])
          });
    }, []);
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
                                    Courses
                                </h6>
                                <h1 className='mt-2'>
                                    Your Courses 2023-2024
                                </h1>
                            </div>
                        </div>
                        <Grid container spacing={2} >
                            <div className="flex flex-col justify-center align-center w-[100%] selected-answer rounded-2xl p-2 relative">
                                <div className="flex flex-row justify-around align-center w-[100%] mb-2 relative">
                                    <Grid item xs={12} >
                                        <FormControl >
                                            <Select 
                                                labelId="module-label"
                                                id="module-select"
                                                value={selectedModule}
                                                onChange={handleModuleChange}
                                                style={{ 
                                                    width:'300px', 
                                                    marginBottom: '10px', 
                                                    fontWeight: 'bold',
                                                    borderRadius: '16px',
                                                    color: 'var(--color-gray)',
                                                    background: 'white',
                                                }}
                                            >
                                                {Object.keys(message).map((e, i) => (
                                                    <MenuItem 
                                                      key={i}
                                                      value={message[e].nom}
                                                      onClick={() => handleModule(i)}
                                                    >
                                                        {message[e].nom}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    {location.state.fullname === infoModule.responsable && <label className="relative inline-flex items-center cursor-pointer w-fit h-fit absolute right-500 top-2" >
                                        <input type="checkbox" value='edit' className="sr-only peer" onClick={() => setEdit(!edit)} />
                                        <div className="peer ring-0 bg-rose-400 rounded-full outline-none duration-300 after:duration-500 w-12 h-12  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-['✖️'] after:rounded-full after:absolute after:outline-none after:h-10 after:w-10 after:bg-gray-50 after:top-1 after:left-1 after:flex after:justify-center after:items-center  peer-hover:after:scale-75 peer-checked:after:content-['✔️'] after:-rotate-180 peer-checked:after:rotate-0"></div>
                                    </label>}
                                </div>
                                <div className="p-7 rounded-2xl w-full bg-[#fff] p-2.5 mb-4">
                                    <span className='font-bold ml-1'>
                                      Description:
                                    </span>
                                    <p className='font-bold ml-1' sx={{mb: '20px'}}>
                                        {bull} {infoModule.description}
                                    </p>
                                    <span className='font-bold ml-1'>
                                        Responsable:
                                    </span>
                                    <p className='font-bold ml-1' sx={{mb: '20px'}}>
                                        {bull} {infoModule.responsable}
                                    </p>
                                    <span className='font-bold ml-1'>
                                      Assistants:
                                    </span>
                                    {(infoModule.assistants).map((e, i) => (
                                      <p className='font-bold ml-1' sx={{mb: '20px'}}>
                                        {bull} {e}
                                      </p>
                                    ))}
                                </div>
                                <div className="rounded-2xl w-full bg-[#fff] p-2.5">
                                    <div className="flex justify-between align-center">
                                        {edit && <button className='noselect' onClick={() => setAddCourse(true)}>
                                          <span className='text'>Add Course</span>
                                          <span className='icon'>
                                              <i class="fa-solid fa-plus"></i>
                                          </span>
                                        </button>}
                                    </div>
                                    {addCourse && <ModalAddChapitre showModal={addCourse} setShowModal={setAddCourse} details={infoModule} />}
                                    <ModuleDetails course={infoModule} edit={edit} chapitre={moduleChapitre}/>
                                </div>
                            </div>
                        </Grid>
                    </div>
                </div>
            </main>
          </div>
        </>
    )
}

export default Courses