import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoadingComponent from './Layouts/Loading.jsx';
import PrivateRoute from './Layouts/PrivateRoute.jsx';
import Forgetpassword from './components/Auth/forgetPassword.jsx';
import Login from './components/Auth/login.jsx';
import PasswordReset from './components/Auth/passwordReset.jsx';
import AddQuestion from './components/communication/AddQuestion.jsx';
import Cohorte from './components/communication/Cohorte.jsx';
import DetailQuestion from './components/communication/DetailQuestion.jsx';
import Tags from './components/communication/Tags.jsx';
import CommunicationAdmin from './components/communication/communicationAdmin.jsx';
import LandingPageComponent from './components/landing page/LandingPage.jsx';
import Quiz from './components/quiz/Quiz.jsx';
import HomeComponentAdmin from './container/HomeAdmin.jsx';
import HomeComponentUser from './container/HomeUser.jsx';
import ProfileComponent from './container/Profile.jsx';


function App() {

  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }, [])

  return (
    <div className='container-xxl bg-white p-0'>
      { isLoading ? <LoadingComponent /> : <Router>
        <Routes>
          {/* <Route path="*" element={<PageNotFound />} /> */}
          <Route key='/private route' element={<PrivateRoute />}>
          </Route>


            <Route key='home-admin' element={<HomeComponentAdmin />} path='/home/admin' exact/>
            <Route key='home-admin-communication' element={<CommunicationAdmin />} path='/home/admin/communication' exact/>
            <Route key='home-user' element={<HomeComponentUser />} path='/home/user' exact/>
            <Route key='cohorte' element={<Cohorte />} path='/home/admin/communication/:id' exact />
            <Route key='tags' element={<Tags />} path='/home/admin/communication/:id/tags' exact />
            <Route key='add-question' element={<AddQuestion />} path='/home/admin/communication/:id/add' exact />
            <Route key='details-question' element={<DetailQuestion />} path='/home/admin/communication/:id/question' exact />
            <Route key='quiz' element={<Quiz />} path='/home/user/assessment' exact />

          

          <Route path='/' element={<LandingPageComponent />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/password/reset' element={<Forgetpassword />} />
          {/* <Route path='/api/auth/password/reset/confirm/:token' element={<PasswordReset />} /> */}
          <Route path='/auth/password/reset/confirm' element={<PasswordReset />} />
          <Route path='/profile' element={<ProfileComponent />} />
        </Routes>
      </Router>}
    </div>
  )
}

export default App