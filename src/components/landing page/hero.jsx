import React from 'react';
import { useNavigate } from 'react-router-dom';
import { education } from '../../assets/images';

const HeroComponent = () => {

  const navigate = useNavigate()

    return (
        <>
          <div className="container-xxl py-5 bg-primary hero-header mb-5">
            <div className="container my-5 py-5 px-lg-5">
              <div className='row g-5 py-5'>
                <div className='col-lg-6 text-center text-lg-start'>
                  <h1 className='text-white mb-4 animated zoomIn'>
                    e-Learning ESI-SBA
                  </h1>
                  <p className='text-white pb-3 animated zoomIn'>
                    Plateforme pédagogique en ligne de l'École Supérieure en Informatique de Sidi Bel-Abbés
                  </p>
                  <a className='btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft' onClick={() => navigate('/auth/login')}>
                    Login
                  </a>
                  <a href='https://www.esi-sba.dz/fr/' className='btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight'>
                    See More
                  </a>
                </div>
                <div className='col-lg-6 text-center text-lg-start'>
                  <img src={education} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default HeroComponent