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
import Courses from './components/courses/Courses.jsx';
import LandingPageComponent from './components/landing page/LandingPage.jsx';
import OldQuiz from './components/quiz/OldQuiz.jsx';
import Quiz from './components/quiz/Quiz.jsx';
import StartQuiz from './components/quiz/StartQuiz.jsx';
import ErrorPage from './container/ErrorPage.jsx';
import HomeComponentAdmin from './container/HomeAdmin.jsx';
import HomeComponentUser from './container/HomeUser.jsx';
import ProfileComponent from './container/Profile.jsx';
import Users from './container/users.jsx';


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


            <Route key='home-admin' element={<HomeComponentAdmin />} path='/admin/home' exact/>
            <Route key='home-admin-communication' element={<CommunicationAdmin />} path='/admin/communication' exact/>
            <Route key='home-user' element={<HomeComponentUser />} path='/user/home' exact/>
            <Route key='cohorte' element={<Cohorte />} path='/admin/communication/:id' exact />
            <Route key='tags' element={<Tags />} path='/admin/communication/:id/tags' exact />
            <Route key='add-question' element={<AddQuestion />} path='/admin/communication/:id/add' exact />
            <Route key='details-question' element={<DetailQuestion />} path='/admin/communication/:id/question' exact />
            <Route key='quiz' element={<Quiz />} path='/user/assessment' exact />
            <Route key='new-quiz' element={<StartQuiz />} path='/user/assessment/new/:id' exact />
            <Route key='old-quiz' element={<OldQuiz />} path='/user/assessment/old/:id' exact />
            <Route key='courses' element={<Courses />} path='/user/modules' exact />
            <Route key='users' element={<Users />} path='/users' exact />

          

          <Route path='/' element={<LandingPageComponent />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/password/reset' element={<Forgetpassword />} />
          {/* <Route path='/api/auth/password/reset/confirm/:token' element={<PasswordReset />} /> */}
          <Route path='/auth/password/reset/confirm' element={<PasswordReset />} />
          <Route path='/profile' element={<ProfileComponent />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>}
    </div>
  )
}

export default App