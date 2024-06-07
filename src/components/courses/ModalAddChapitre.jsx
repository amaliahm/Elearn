import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import Notification from '../../container/Notification';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'var(--white)',
  borderRadius: '10px',
  boxShadow: 24,
  p: 3,
};

const button_box = {
  display: 'flex',
  width: '50%',
  justifyContent: 'space-between',
  p: 1,
  margin: 'auto',
}

const button_style = {
  color: 'var(--main-color)',
  bgcolor: 'transparent',
  border: '1px solid var(--main-color)',
};

const confirme_button_style = {
  bgcolor: 'var(--main-color)',
  border: '1px solid var(--main-color)',
  color: 'white',
  '&:hover' : {
    color: 'var(--main-color)',
  },
  '&:disabled' : {
    bgcolor: 'transparent'
  }
};

const bull = 
    <span style={{
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(1.1)',
        }}
    >
        •
    </span>;

export default function ModalAddChapitre({showModal, setShowModal, details}) {
    const handleClose = () => setShowModal(false);
    console.log(details)
    
    const [name, setName] = useState('')
    const [notify, setNotify] = useState(false)

     const handleChange = (e) => {
      e.preventDefault();
      setName(e.target.value)
    }
    const handleConfirm = async (e) => {
      try {
        const response = await axios.post('http://localhost:8000/promo/chapitre/', {
          'nom': name,
          'Module': details.id,
        });
        setNotify(true)
        setTimeout(() => {
          setNotify(false)
          handleClose()
      }, 2000)
      setTimeout(() => {
        window.location.reload();
    }, 4000)
        setName('');
      } catch (error) {
        console.error('There was an error adding the item!', error);
      }
    }
   
    return (
      <div>
        <Modal
          open={showModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{
            ...style,
            minHeight: 300,
          }}>
            <Typography id="modal-modal-title" variant="h5" component="h2" sx={{mb: '20px'}}>
              Add Course
            </Typography>
            <hr />
            <Typography id="modal-modal-title" variant="subtitle1" sx={{mb: '20px'}}>
              {bull} Enter the name
            </Typography>
            <TextField 
              id={"outlined-read-only-input"}
              label='name' variant="outlined"
              type={'text'}
              sx={{
                borderColor: "transparent",
                margin: '10px'
              }}
              name='name'
              className={{"& label.Mui-focused": {
        color: "white"
      },
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: "#12f7d6",
        }
      }}}
              onChange={handleChange}
              defaultValue={name}
            > </TextField>
            <hr />
            <Box sx={button_box}>
              <Button sx={button_style} onClick={handleClose}>return</Button>
              <Button 
                sx={confirme_button_style}
                disabled={name === ''}
                onClick={handleConfirm}
              >add</Button>
            </Box>
          </Box>
        </Modal>
        {notify && <Notification name='chapitre is added'/>}
      </div>
    );
  }