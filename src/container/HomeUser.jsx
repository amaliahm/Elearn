import React from 'react'
import NavBarComponent from '../components/landing page/NavBar'
import FooterComponent from '../components/landing page/footer'
import { navBarElementsUser } from "../constants/data"

const HomeComponentUser = () => {
    return (
        <>
          <div>
            <NavBarComponent elements={navBarElementsUser} />
              
            <FooterComponent />
          </div>
        </>
    )
}

export default HomeComponentUser