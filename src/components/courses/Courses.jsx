import { FormControl, MenuItem, Select } from "@mui/material";
import Grid from '@mui/material/Grid';
import React, { useState } from "react";
import { navBarElementsUser } from "../../constants/data";
import NavBarComponent from "../../container/NavBarComponent";
import ModuleDetails from "./ModulesDetails";

const Courses = () => {
    const [selectedModule, setSelectedModule] = useState("Security");
    const [edit, setEdit] = useState(false)

    const handleModuleChange = (event) => {
        setSelectedModule(event.target.value);
        
    };
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
                                                <MenuItem value="Security">Security</MenuItem>
                                                <MenuItem value="module2">Module 2</MenuItem>
                                                <MenuItem value="module3">Module 3</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <label className="relative inline-flex items-center cursor-pointer w-fit h-fit absolute right-500 top-2" onClick={() => setEdit(!edit)}>
                                        <input type="checkbox" value='edit' className="sr-only peer" />
                                        <div className="peer ring-0 bg-rose-400 rounded-full outline-none duration-300 after:duration-500 w-12 h-12  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-['✖️'] after:rounded-full after:absolute after:outline-none after:h-10 after:w-10 after:bg-gray-50 after:top-1 after:left-1 after:flex after:justify-center after:items-center  peer-hover:after:scale-75 peer-checked:after:content-['✔️'] after:-rotate-180 peer-checked:after:rotate-0"></div>
                                    </label>
                                </div>
                                <ModuleDetails course={selectedModule} edit={edit}/>
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