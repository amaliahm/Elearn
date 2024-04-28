import React from 'react'
import Pc from '../../Layouts/Computer'
import { navBarElementsLanding } from '../../constants/data'
import MoreInfoComponent from './MoreInfo'
import NavBarComponent from "./NavBar"
import EnseignantsComponent from "./enseignants"
import FooterComponent from "./footer"
import HeroComponent from "./hero"
import ModulesComponent from "./modules"


const LandingPageComponent = () => {
    return (
        <>
          <div>
            <section className={`w-full h-screen lg:px-0 pc`}>
              <Pc />
            </section>
            <NavBarComponent elements={navBarElementsLanding} login={true} />
            <main>
              <div id='home'>
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