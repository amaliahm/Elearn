import React from 'react'
import Pc from '../../Layouts/Computer'
import { Chef, Footer, Gallery, Intro, Laurels, SpecialMenu } from '../../container'
import NavBarComponent from "./NavBar"
import EnseignantsComponent from "./enseignants"
import FooterComponent from "./footer"
import HeroComponent from "./hero"
import ModulesComponent from "./modules"


const LoadingPageComponent = () => {
    return (
        <>
          <div>
            <section className={`w-full h-screen lg:px-0 pc`}>
              <Pc />
            </section>
            <NavBarComponent />
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
            </main>
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    
    <Footer />
            <FooterComponent />
          </div>
        </>
    )
}

export default LoadingPageComponent