import { ExpandMore, InsertDriveFile } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { Accordion, AccordionDetails, AccordionSummary, Box, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddTdTp from './AddTdTp';




const ModuleDetails = ({course, edit, chapitre, user}) => {
  const [insert, setInsert] = useState(false)
  console.log(chapitre)
  const [showAddtdtp, setShowAddtdtp] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState('');
  const [fiche, setFiche] = useState({})

  const handleOpen = () => {
    setShowAddtdtp(true);
  };
  const handleClose = () => {
    setShowAddtdtp(false);
  };

  const handleChange = (chapterTitle) => {
    setExpandedAccordion(chapterTitle === expandedAccordion ? '' : chapterTitle);
  }
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/promo/fiche/')
      .then(response => {
        setFiche(response.data);
      })
      .catch(error => {
        console.log(error);
        setFiche([])
      });
   }, []);
  return (
    <>
      <>
        {chapitre !== undefined && chapitre.length !== 0 && Object.keys(chapitre).map((chapter, index) => (
          <Accordion
            key={index}
            expanded={expandedAccordion === chapitre[chapter].nom}
            onChange={() => handleChange(chapitre[chapter].nom)}
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
                <Typography style={{ fontWeight: 'bold' }}>{chapitre[chapter].nom}</Typography>
                {edit && <AddIcon onClick={handleOpen} style={{
                  fontWeight: 'bold', backgroundColor: 'var(--main-color)', display: 'flex', justifyContent: 'center',
                  padding: '', borderRadius: '50%', color: 'white',
                  alignItems: 'center', cursor: 'pointer', fontSize: '18px'
                }} />}
              </div>

            </AccordionSummary>
            <AccordionDetails>
              <div>
                {(user.fullname === 'othmane BOHENNI' || (insert && fiche.length !== 0 && fiche[0].Chapitre === chapitre[0].id)) && Object.keys(fiche).map((e, i) => (
                  <Box
                    key={i}
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
                    <div className='hover:cursor-pointer' onClick={() => window.open('/td01.pdf', '_blank')} style={{ display: 'flex', alignItems: 'center' }}>
                      <InsertDriveFile style={{ marginRight: '10px' }} />
                      <Typography >
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: 'rgb(27,117,208)', textDecoration: 'none' }}
                        >
                          {fiche[e].nom}
                        </a>
                      </Typography>
                    </div>
                    <div>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <Typography>{fiche[e].date}</Typography>

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
        <DialogTitle>Add ressource</DialogTitle>
        <DialogContent>
          {chapitre.length > 0 && <AddTdTp chapterId={chapitre[0].id} setInsert={setInsert} onClose={handleClose} />}
        </DialogContent>

      </Dialog>
    </>
  );
}

export default ModuleDetails;