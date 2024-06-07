import React from 'react'
import { useLocation } from 'react-router-dom'
import FooterComponent from '../components/landing page/footer'
import { navBarElementsUser } from '../constants/data'
import Home from './Home'
import NavBarComponent from './NavBarComponent'

const HomeComponentUser = () => {
  const location = useLocation()
  console.log(location.state)
    return (
        <>
          <div className='container-xxl bg-white p-0'>
            <NavBarComponent elements={navBarElementsUser} home={true} user={location.state} />
            <main>
              <div className='container-xxl bg-primary p-0 mb-5'>
                <Home user={location.state} />
              </div>
            </main>
            <FooterComponent />
          </div>
        </>
    )
}

export default HomeComponentUser