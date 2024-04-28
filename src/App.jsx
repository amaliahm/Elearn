import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoadingComponent from './Layouts/Loading.jsx';
import PrivateRoute from './Layouts/PrivateRoute.jsx';
import LoginComponent from './components/Auth/LoginComponent.jsx';
import Forgetpassword from './components/Auth/forgetPassword.jsx';
import Login from './components/Auth/login.jsx';
import PasswordReset from './components/Auth/passwordReset.jsx';
import LoadingPageComponent from './components/landing page/LandingPage.jsx';
import HomeComponentAdmin from './container/HomeAdmin.jsx';
import HomeComponentUser from './container/HomeUser.jsx';
import './css/App.css';


function App() {

  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }, [])

  return (
    <>
      { isLoading ? <LoadingComponent /> : <Router>
        <Routes>
          {/* <Route path="*" element={<PageNotFound />} /> */}
          <Route key='/private route' element={<PrivateRoute />}>
          </Route>


            <Route key='home-admin' element={<HomeComponentAdmin />} path='/home/admin' exact/>
            <Route key='home-user' element={<HomeComponentUser />} path='/home/user' exact/>

          
          <Route path='/login' element={<LoginComponent />} />

          <Route path='/' element={<LoadingPageComponent />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/password/reset' element={<Forgetpassword />} />
          {/* <Route path='/api/auth/password/reset/confirm/:token' element={<PasswordReset />} /> */}
          <Route path='/auth/password/reset/confirm' element={<PasswordReset />} />
        </Routes>
      </Router>}
    </>
  )
}

export default App