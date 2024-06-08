import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import LoadingComponent from '../Layouts/Loading'
import FooterComponent from '../components/landing page/footer'
import { navBarElementsUser } from '../constants/data'
import Home from './Home'
import NavBarComponent from './NavBarComponent'

const HomeComponentUser = () => {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }, [])
  console.log(location.state)
    return (
        <>
          {isLoading ? <LoadingComponent /> : <div className='container-xxl bg-white p-0'>
            <NavBarComponent elements={navBarElementsUser} home={true} user={location.state} />
            <main>
              <div className='container-xxl bg-primary p-0 mb-5'>
                <Home user={location.state} />
              </div>
            </main>
            <FooterComponent />
          </div>}
        </>
    )
}

export default HomeComponentUser