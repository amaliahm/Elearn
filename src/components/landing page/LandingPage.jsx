import React from 'react'
import { navBarElementsLanding } from '../../constants/data'
import MoreInfoComponent from './MoreInfo'
import NavBarComponent from './NavBar'
import FooterComponent from "./footer"
import HeroComponent from "./hero"
import ModulesComponent from "./modules"


const LandingPageComponent = () => {
    return (
        <>
          <div>
            <NavBarComponent elements={navBarElementsLanding} login={true} />
            <main>
              <div id='home' className='container-xxl bg-primary p-0'>
                <HeroComponent />
              </div>
              <div id='modules'>
                <ModulesComponent />
              </div>
              <div id='enseignants'>
                {/* <EnseignantsComponent /> */}
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