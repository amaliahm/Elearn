import { SnackbarContent } from '@mui/material';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import { useEffect, useState } from 'react';

function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

export default function Notification({name}) {
  const [transition, setTransition] = useState(undefined);

  useEffect(() => {
      setTransition(() => TransitionRight);
  });


  return (
    <Box >
      <Snackbar
        open={true}
        TransitionComponent={transition}
        key={transition ? transition.name : ''}
      > 
            <SnackbarContent style={{
              backgroundColor:'var(--main-color)',
            }}
            message={<span style={{
                color: 'var(--white)',
              }}>{name}</span>}
            />
      </Snackbar>
    </Box>
  );
}