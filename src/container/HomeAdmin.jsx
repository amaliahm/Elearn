import React from 'react'
import NavBarComponent from '../components/landing page/NavBar'
import FooterComponent from '../components/landing page/footer'
import { navBarElementsAdmin } from '../constants/data'

const HomeComponentAdmin = () => {
    return (
        <>
          <div>
            <NavBarComponent elements={navBarElementsAdmin} />
              
            <FooterComponent />
          </div>
        </>
    )
}

export default HomeComponentAdmin