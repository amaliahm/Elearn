import React from 'react'
import CommunicationAdmin from '../components/communication/communicationAdmin'
import NavBar from '../components/landing page/NavBar'
import FooterComponent from '../components/landing page/footer'
import { navBarElementsAdmin } from '../constants/data'
import Home from './Home'

const HomeComponentAdmin = () => {
    return (
        <>
          <div className='container-xxl bg-white p-0'>
            <NavBar elements={navBarElementsAdmin} home={true} />
            <main>
              {<div className='container-xxl bg-primary p-0 mb-5'>
                <Home user='User' />
              </div>}
              <div className='container-xxl bg-primary p-0 mb-5'>
                <CommunicationAdmin />
              </div>
            </main>
            <FooterComponent />
          </div>
        </>
    )
}

export default HomeComponentAdmin      