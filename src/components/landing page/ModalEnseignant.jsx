import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';

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
  justifyContent: 'center',
  p: 1,
  margin: 'auto',
}

const button_style = {
  color: 'var(--main-color)',
  bgcolor: 'transparent',
  border: '1px solid var(--main-color)',
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

export default function ModalEnseignant({showModal, setShowModal, details}) {
    const handleClose = () => setShowModal(false);
    console.log(details)
   
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
              {details.nom}
            </Typography>
            <hr />
            <p className='font-bold ml-1' sx={{mb: '20px'}}>
              {details.statut}
            </p>
            <span className='font-bold ml-1'>
                Email:
            </span>
            <p className='font-bold ml-1' sx={{mb: '20px'}}>
                {bull} {details.email}
            </p>
            <span className='font-bold ml-1'>
                Telephone:
            </span>
            <p className='font-bold ml-1' sx={{mb: '20px'}}>
                {bull} {details.telephone}
            </p>
            <span className='font-bold ml-1'>
                Modules:
            </span>
            {details.modules.map((e, i) => (
                <p
                  className='font-bold ml-1'
                  sx={{mb: '20px'}}
                  key={i}
                >
                    {bull} {e}
                </p>
            ))}
            <hr />
            <Box sx={button_box}>
              <Button sx={button_style} onClick={handleClose}>return</Button>
            </Box>
          </Box>
        </Modal>
      </div>
    );
  }