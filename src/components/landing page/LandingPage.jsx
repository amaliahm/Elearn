import React from 'react'
import { navBarElementsLanding } from '../../constants/data'
import MoreInfoComponent from './MoreInfo'
import NavBar from './NavBar'
import EnseignantsComponent from './enseignants'
import FooterComponent from "./footer"
import HeroComponent from "./hero"
import ModulesComponent from "./modules"


const LandingPageComponent = () => {
    return (
        <>
          <div>
            <NavBar elements={navBarElementsLanding} login={true} />
            <main>
              <div id='home' className='container-xxl bg-primary p-0 mb-5'>
                <HeroComponent />
              </div>
              <div id='modules'>
                <ModulesComponent />
              </div>
              <div id='enseignants'>
                <EnseignantsComponent />
              </div>
              <div id='more-info'>
                <MoreInfoComponent />
              </div>
            </main>
            <FooterComponent />
          </div>
        </>
    )
}

export default LandingPageComponent