import React from 'react'
import FooterComponent from '../components/landing page/footer'
import { navBarElementsUser } from '../constants/data'
import Home from './Home'
import NavBarComponent from './NavBarComponent'

const HomeComponentUser = () => {
    return (
        <>
          <div className='container-xxl bg-white p-0'>
            <NavBarComponent elements={navBarElementsUser} home={true} />
            <main>
              <div className='container-xxl bg-primary p-0 mb-5'>
                <Home user='User' />
              </div>
            </main>
            <FooterComponent />
          </div>
        </>
    )
}

export default HomeComponentUser