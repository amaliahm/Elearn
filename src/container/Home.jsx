import React from 'react';
import { education1 } from '../assets/images';

const Home = ({user}) => {

    return (
        <>
          <div className="container-xxl py-5 bg-primary hero-header mb-5">
            <div className="container my-5 py-5 px-lg-5">
              <div className='row g-5 py-5'>
                <div className='col-lg-6 text-center text-lg-start'>
                  <h1 className='text-white mb-4 animated zoomIn'>
                    {user.fullname}, welcome to e-Lear ESI-SBA
                  </h1>
                  <p className='text-white pb-3 animated zoomIn'>
                    Plateforme pédagogique en ligne de l'École Supérieure en Informatique de Sidi Bel-Abbés
                  </p>
                </div>
                <div className='col-lg-6 text-center text-lg-start'>
                  <img src={education1} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default Home