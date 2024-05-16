import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

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

export default function ModalUpdate({showModal, setShowModal}) {
    const handleClose = () => setShowModal(false);
    const navigate = useNavigate()
   
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
              Start Quiz
            </Typography>
            <hr />
            <Typography id="modal-modal-title" variant="subtitle1" sx={{mb: '20px'}}>
              Are you sure you want to begin "Quiz n=°1"
            </Typography>
            <Typography variant="body1" gutterBottom>
              {bull} Created at: 
                <span className='font-bold ml-1'> 
                    May 16, 2024, 6:19 p.m.
                </span>
            </Typography>
            <Typography variant="body1" gutterBottom>
              {bull} Difficulty: 
                <span className='font-bold ml-1'> 
                    Medium
                </span>
            </Typography>
            <Typography variant="body1" gutterBottom>
              {bull} Topic: 
                <span className='font-bold ml-1'> 
                    topic-1.
                </span>
            </Typography>
            <Typography variant="body1" gutterBottom>
              {bull} Number of questions: 
                <span className='font-bold ml-1'> 
                    20
                </span>
            </Typography>
            <Typography variant="body1" gutterBottom>
              {bull} Time available: 
                <span className='font-bold ml-1'> 
                    20 min
                </span>
            </Typography>
            <Typography variant="body1" gutterBottom>
              {bull} Score needed to pass: 
                <span className='font-bold ml-1'> 
                    20.00%
                </span>
            </Typography>
            <hr />
            <Box sx={button_box}>
              <Button sx={button_style} onClick={handleClose}>annuler</Button>
              <Button 
                sx={confirme_button_style}
                onClick={() => {
                    navigate(`/home/user/assessment/new/${10}`)
                    handleClose()
                }}
              >confirmer</Button>
            </Box>
          </Box>
        </Modal>
      </div>
    );
  }