import { Button, FormControl, MenuItem, Select, TextField } from "@mui/material";
import Grid from '@mui/material/Grid';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import axios from "axios";
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Notification from "../../container/Notification";

const columns_add_data = [
    {
      field: "question",
      headerName: "QUESTION",
      flex: 1,
      minWidth: 200,
      maxWidth: 300,
      headerAlign: 'left'
    },
    {
      field: "correct answer",
      headerName: "CORRECT RESPONSE",
      flex: 1,
      minWidth: 150,
      maxWidth: 2500,
      headerAlign: 'left'
    },
    {
      field: "reponse1",
      headerName: "RESPONSE",
      flex: 1,
      minWidth: 150,
      maxWidth: 250,
      headerAlign: 'left'
    },
    {
      field: "reponse2",
      headerName: "RESPONSE",
      flex: 1,
      minWidth: 150,
      maxWidth: 250,
      headerAlign: 'left'
    },
    {
      field: "reponse3",
      headerName: "RESPONSE",
      flex: 1,
      minWidth: 150,
      maxWidth: 250,
      headerAlign: 'left'
    },
  ];

const AddQuiz = () => {

    const [selectedModule, setSelectedModule] = useState("Introduction au génie logiciel");
    const handleModuleChange = (event) => {
        setSelectedModule(event.target.value);
    };
    const [message, setMessage] = useState([])
    const [infoModule, setInfoModule] = useState({
        nom: 'Introduction au génie logiciel',
        description: ' documentation et diagrammes',
        Niveau: 1, 
        responsable: 'bensaber',
        assistants: ['taouli', 'bendaoued'],
    })

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/promo/module/')
          .then(response => {
            setMessage(response.data);
          })
          .catch(error => {
            console.log(error);
            setMessage([])
          });
    }, []);

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
    }


    const add_data = {
        question: '',
        'correct answer': '',
        reponse1: '',
        reponse2: '',
        reponse3: '',
      }

    const [data, setData] = useState(add_data)
    const [done, setDone] = useState(false)
    const [AllData, SetAllData] = useState([])
    const navigate = useNavigate()
    const [val, setVal] = useState(false)
    const currentDate = new Date();
    const gridRef = useRef();
    const defaultColDef = useMemo(() => ({
      sortable: true,
      filter: true,
      enableRowGroup: true,
    }))
    
    const handleClick = async e => {
      setDone(true)
      addText()
    }
    const handleValidate = async e => {
      e.preventDefault();
      console.log(AllData)
      setVal(true)
      setTimeout(() => {
        setDone(false)
        setVal(false)        
        navigate('/user/assessment')
      }, 2000)
      
    }
    const [texts, setTexts] = useState([]);

    const addText = () => {
      const newText = `Text ${texts.length + 1}`;
      const inter = AllData
      inter.unshift(data)
      SetAllData(inter)
      if (gridRef.current) {
          gridRef.current.api.setGridOption('rowData', AllData);
        }
      setData(add_data)
      setTexts([...texts, newText])
    };
    return (
        <>
            <div className='container-xxl bg-white p-0'>
            <main>
                <div className="container-xxl p-0 mb-5">
                    <div className="container-xxl py-5">
                        <div className="container px-lg-5">
                            <div className='section-title position-relative text-center mb-5 mt-1 pb-2 wow fadeInUp' data-wow-delay="0.1s">
                                <h6 className="position-relative d-inline text-primary ps-4">
                                    Quiz
                                </h6>
                                <h1 className='mt-2'>
                                    Add Quiz
                                </h1>
                            </div>
                        </div>
                        <Grid container spacing={2} >
                            <div className="flex flex-col justify-center align-center w-[100%] selected-answer rounded-2xl p-2 relative h-full">
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



                                        <div className="text-field-done" >
             
              
              
              <div className="select-article">

                <TextField 
                    id={"outlined-controlled"}
                    label='question' variant="outlined"
                    type='text'
                    sx={{
                      borderColor: "transparent",
                      margin: '10px'
                    }}
                    className={{
                        "& label.Mui-focused": {
                          color: "white"
                        },
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderColor: "#12f7d6",
                          }
                        }
                      }}
                    onChange={(e) => {
                        setData(d => ({
                            ...d,
                            'question': e.target.value
                        }))
                    }}
                    value={data.question}
                ></TextField>
                <TextField 
                    id={"outlined-controlled"}
                    label='correct answer' variant="outlined"
                    type='text'
                    sx={{
                      borderColor: "transparent",
                      margin: '10px'
                    }}
                    className={{
                        "& label.Mui-focused": {
                          color: "white"
                        },
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderColor: "#12f7d6",
                          }
                        }
                      }}
                    onChange={(e) => {
                        setData(d => ({
                            ...d,
                            'correct answer': e.target.value
                        }))
                    }}
                    value={data["correct answer"]}
                ></TextField><TextField 
                id={"outlined-controlled"}
                label='response 1' variant="outlined"
                type='text'
                sx={{
                  borderColor: "transparent",
                  margin: '10px'
                }}
                className={{
                    "& label.Mui-focused": {
                      color: "white"
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#12f7d6",
                      }
                    }
                  }}
                onChange={(e) => {
                    setData(d => ({
                        ...d,
                        'reponse1': e.target.value
                    }))
                }}
                value={data.reponse1}
            ></TextField><TextField 
            id={"outlined-controlled"}
            label='response 2' variant="outlined"
            type='text'
            sx={{
              borderColor: "transparent",
              margin: '10px'
            }}
            className={{
                "& label.Mui-focused": {
                  color: "white"
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "var(--main-color)",
                  }
                }
              }}
            onChange={(e) => {
                setData(d => ({
                    ...d,
                    'reponse2': e.target.value
                }))
            }}
            value={data.reponse2}
        ></TextField><TextField 
        id={"outlined-controlled"}
        label='response 3' variant="outlined"
        type='text'
        sx={{
          borderColor: "transparent",
          margin: '10px'
        }}
        className={{
            "& label.Mui-focused": {
              color: "white"
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#12f7d6",
              }
            }
          }}
        onChange={(e) => {
            setData(d => ({
                ...d,
                'reponse3': e.target.value
            }))
        }}
        value={data.reponse3}
    ></TextField>
              </div>
                <Button
                sx={{
                    color: 'white',
                    border: '1px solid var(--main-color)',
                    marginBottom: '10px',
                    marginRight: '40px',
                    marginTop: '50px',
                    background: 'var(--main-color)',
                    '&:hover' : {
                        color: 'var(--main-color)',
                    },
                    ':disabled' : {
                        background:'transparent',
                        color: 'var(--main-color)'
                    }
                }} 
                disabled={data.question === '' || data['correct answer'] === ''}
                onClick={handleClick}
                >add</Button>
           
            </div>
            {val && <Notification name='quiz is added'/>}
              {done && 
                <div 
                className="ag-theme-quartz"
                style={{
                  marginTop: "50px",
                  height: `calc(25vh + ${AllData.length} * 5vh)`,
                  width: '95vw',
                  marginBottom: '80px'
                }}> 
                  <AgGridReact className="clear"
                  ref={gridRef}
                  rowData={AllData}
                  columnDefs={columns_add_data}
                  defaultColDef={defaultColDef}
                  rowGroupPanelShow='always'
                  />
                  <Button
                    sx={{
                        bgcolor: 'var(--main-color)',
                        border: '1px solid var(--main-color)',
                        marginBottom: '10px',
                        marginRight: '10px',
                        position: 'relative',
                        color: 'white',
                        top: '20px',
                        '&:hover' : {
                          color: 'var(--main-color)'
                        },
                    }} 
                    onClick={handleValidate}
                    >validate</Button>
                </div>
              }




                                    </Grid>
                                    
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

export default AddQuiz