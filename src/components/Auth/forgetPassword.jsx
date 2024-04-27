import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import LoadingComponent from '../../Layouts/Loading';
import forgotpassword from '../../assets/images/forgotpassword.png';

const initialValues = {
  email: ''
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Please enter your email')
});

const Forgetpassword = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
      // Add your password reset logic here, such as sending a request to your backend
    },
    validationSchema
  });

  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }, [])

  return (
    <Box
      sx={{
        backgroundColor: 'var(--color-black)',
        width: '100%',
        height: '100%',
        zIndex: -1,
        position: 'absolute',
        top: 0,
        left: 0
      }}
    >
      {isLoading ? <LoadingComponent /> :<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Paper elevation={5}>
          <Stack direction="row">
            <Box sx={{ display: {lg: 'block', xs: 'none'}}}>
              <img src={forgotpassword} alt="forgot password" style={{ height: '550px' }} />
            </Box>
            <form onSubmit={formik.handleSubmit} style={{ marginLeft: '50px', marginRight: '50px' }}>
              <Stack mt={15} mb={4}>
                <Typography variant="h6" sx={{ fontFamily: 'Poppins', fontWeight: 'bold' }} mb={1}>
                  Reset Your Password Now
                </Typography>
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 'Light' }} mb={3}>
                  Securing your account with a new<br /> Password
                </Typography>
                <TextField
                  type="text"
                  id="email"
                  name="email"
                  label="E-mail"
                  variant="outlined"
                  sx={{ width: '400px' }}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Stack>
              <Stack mb={5}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ width: { lg: '64%', xs: '100%' }, marginLeft: { lg: '144px', xs: '0px' }, fontFamily: 'Poppins', fontWeight: 'bold' }}
                  onClick={() => { navigate('/auth/password/reset/confirm') }}
                >
                  Send Reset Password Email
                </Button>
                <Button
                  variant="text"
                  startIcon={<ChevronLeftIcon />}
                  sx={{ color: '#000', marginTop: '40px', fontFamily: 'Poppins', fontWeight: 'Light' }}
                  onClick={() => { navigate('/auth/login') }}
                >
                  Log in page
                </Button>
              </Stack>
            </form>
          </Stack>
        </Paper>
      </Box>}
    </Box>
  );
};

export default Forgetpassword;