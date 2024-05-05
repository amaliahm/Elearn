import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { navBarElementsAdmin, promo } from "../../constants/data";
import NavBarComponent from "../../container/NavBarComponent";
import Notification from '../../container/Notification';

const AddCohorte = () => {

    const [cohorte, setCohorte] = useState('')
    const [confirm, setConfirm] = useState(false)
    const navigate = useNavigate()

    const handleCreate = async () => {
        setConfirm(true)
        setTimeout(() => {
          setConfirm(false)
          navigate( '/home/admin/communication')
        }, 2000)
      }

    const handleChange = (event) => {
        setCohorte(event.target.value);
    };

    return (
        <>
          <div className="container-xxl bg-white p-0" >
            <NavBarComponent elements={navBarElementsAdmin} element={2} />
            <div className="container-xxl p-0 mb-5">
                <div className="container-xxl py-5">
                    <div className="container px-lg-5">
                        <div className='section-title position-relative text-center mb-5 mt-5 pb-2 wow fadeInUp' data-wow-delay="0.1s">
                            <h6 className="position-relative d-inline text-primary ps-4">
                                Communications    
                            </h6>
                            <h1 className='mt-2'>
                                Add Cohorte
                            </h1>
                        </div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <Box sx={{ minWidth: 120, width: 400}}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Cohorte Name</InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  value={cohorte}
                                  label="Cohorte Name"
                                  onChange={handleChange}
                                >
                                    {Object.keys(promo).map((e, i) => (
                                        <MenuItem 
                                          key={promo[e].id_promo}
                                          value={promo[e].nom}
                                        >
                                            {promo[e].nom}
                                        </MenuItem>
                                    )) }
                                </Select>
                            </FormControl>
                        </Box>
                        <Button 
                          variant="contained"
                          sx={{
                            background: 'var(--main-color)',
                            marginTop: 20
                          }}
                          disabled={cohorte === ''}
                          onClick={handleCreate}
                        >
                            Create Cohorte
                        </Button>
                    </div>
                </div>
            </div>
            {confirm && <Notification name={`${cohorte} has been created successfully`}/>}
          </div>
        </>
    )
}

export default AddCohorte