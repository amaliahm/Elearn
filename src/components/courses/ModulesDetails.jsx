import { ExpandMore, InsertDriveFile } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { Accordion, AccordionDetails, AccordionSummary, Box, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import AddTdTp from './AddTdTp';
import chapters from './chapters.json';



const ModuleDetails = ({course, edit}) => {
  const [showAddtdtp, setShowAddtdtp] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState('');

  const handleOpen = () => {
    setShowAddtdtp(true);
  };
  const handleClose = () => {
    setShowAddtdtp(false);
  };

  const handleChange = (chapterTitle) => {
    setExpandedAccordion(chapterTitle === expandedAccordion ? '' : chapterTitle);
  }
  const [textFieldValue, setTextFieldValue] = useState('');
  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      try {
        const response = await axios.post('/backend-api-endpoint', {
          text: textFieldValue
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <>
      <>
        {chapters.map((chapter, index) => (
          <Accordion
            key={index}
            expanded={expandedAccordion === chapter.title}
            onChange={() => handleChange(chapter.title)}
            sx={{
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
              borderRadius: '10px',
              '&::before': {
                boxShadow: 'none'
              },
              marginTop: '10px',
              padding: '10px',
            }}

          >
            <AccordionSummary expandIcon={<ExpandMore />}  >
              <div className='flex justify-between align-center w-[98%]'>
                <Typography style={{ fontWeight: 'bold' }}>{chapter.title}</Typography>
                <AddIcon onClick={handleOpen} style={{
                  fontWeight: 'bold', backgroundColor: 'var(--main-color)', display: 'flex', justifyContent: 'center',
                  padding: '', borderRadius: '50%', color: 'white',
                  alignItems: 'center', cursor: 'pointer', fontSize: '18px'
                }} />
              </div>

            </AccordionSummary>
            <AccordionDetails>
              <div>
                {chapter.links.map((link, linkIndex) => (
                  <Box
                    key={linkIndex}
                    sx={{
                      border: '0.5px solid #ccc',
                      borderRadius: '4px',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                      marginBottom: '10px',
                      padding: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <InsertDriveFile style={{ marginRight: '10px' }} />
                      <Typography>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: 'rgb(27,117,208)', textDecoration: 'none' }}
                        >
                          {link.name}
                        </a>
                      </Typography>
                    </div>
                    <div>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <Typography>{link.despose_date}</Typography>

                      </div>
                    </div>
                  </Box>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </>

      <Dialog open={showAddtdtp} onClose={handleClose}>
        <DialogTitle></DialogTitle>
        <DialogContent>
          <AddTdTp />
        </DialogContent>

      </Dialog>
    </>
  );
}

export default ModuleDetails;