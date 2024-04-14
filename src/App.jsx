import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoadingComponent from './Layouts/Loading.jsx';
import PrivateRoute from './Layouts/PrivateRoute.jsx';
import Auth from './components/Auth/auth.jsx';
import LoadingPageComponent from './components/landing page/LandingPage.jsx';
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
            {/* <Route key='home' element={<Home />} path='/home' exact/> */}
          </Route>
          <Route path='/' element={<LoadingPageComponent />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </Router>}
    </>
  )
}

export default App
