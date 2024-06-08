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
  width: '100%',
  justifyContent: 'flex-end',
  p: 1,
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

export default function ModalResult({showModal, setShowModal, score, totalQuestion}) {
    const handleClose = () => setShowModal(false);
    const navigate = useNavigate()
   
    return (
      <div>
        <Modal
          open={showModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{
            ...style,
            minHeight: 300,
          }}>
            <Typography id="modal-modal-title" variant="h5" component="h2" sx={{mb: '20px'}}>
              Result
            </Typography>
            <hr />
            <Typography variant="body1" gutterBottom>
              {bull} Total Question:: 
                <span className='font-bold ml-1'> 
                    {totalQuestion}
                </span>
            </Typography>
            <Typography variant="body1" gutterBottom>
              {bull} Total Score: 
                <span className='font-bold ml-1'> 
                  {score.score}
                </span>
            </Typography>
            <Typography variant="body1" gutterBottom>
              {bull} Success: 
                <span className='font-bold ml-1'> 
                    {score.correctAnswers}
                </span>
            </Typography>
            <Typography variant="body1" gutterBottom>
              {bull} Wrong Answers: 
                <span className='font-bold ml-1'> 
                    {score.wrongAnswers}
                </span>
            </Typography>
            <Typography variant="body1" gutterBottom>
              {bull} I don't know Answers: 
                <span className='font-bold ml-1'> 
                    {score.Oanswer}
                </span>
            </Typography>
            <hr />
            <Box sx={button_box}>
              <Button 
                sx={confirme_button_style}
                onClick={() => {
                    navigate(`/user/assessment`)
                    handleClose()
                }}
              >
                Go back
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    );
  }