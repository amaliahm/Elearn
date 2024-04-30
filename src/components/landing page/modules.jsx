import React, { useState } from 'react'
import { course } from '../../assets/images/index.js'
import { modules } from '../../constants/data'
import '../../css/App.css'

const ModulesComponent = () => {

  const [annee, setAnnee] = useState(0)
  
  function onClick (index) {
    setAnnee(index)
}

  const list_annees = [
    {
      annee: 'All',
      key: '*'
    },
    {
      annee: '1CP',
      key: 1
    },
    {
      annee: '2CP',
      key: 2
    },
    {
      annee: '1CS',
      key: 3
    },
    {
      annee: '2CS',
      key: 4
    },
    {
      annee: '3CS',
      key: 5
    },
  ]
  
    return (
        <div className="container-xxl py-5">
          <div className='container px-lg-5'>
            <div className='section-title position-relative text-center mb-5 pb-2 wow fadeInUp' data-wow-delay="0.1s">
              <h6 className='position-relative d-inline text-primary ps-4'>
                Courses
              </h6>
              <h1 className='mt-2'>
                This Year's Courses
              </h1>
            </div>
            <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.1s">
              <div className='col-12 text-center'>
                <ul className="list-inline mb-5" id="portfolio-flters">
                  {Object.keys(list_annees).map((e, i) => (
                    <li 
                      onClick={() => onClick(i)}
                      key={i}
                      className={`btn px-3 pe-4 ${annee == i ? 'active' : ''} `} 
                      data-filter={list_annees[e].key}
                    >
                      {list_annees[e].annee}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='row g-4 portfolio-container'>
              {Object.keys(modules).map((e, i) => (
                <div 
                  className={`col-lg-4 col-md-6 portfolio-item wow zoomIn hover:cursor-pointer ${(i % 2) == 0 ? 'first' : 'second'}`} 
                  data-wow-delay={`${i * 0.2 + 0.1}s`}
                  key={`course-${i + 1}`}
                >
                  <div className='position-relative rounded overflow-hidden'>
                    <img className="img-fluid w-100" src={course} alt="course" />
                    <div className='portfolio-overlay'>
                      <a className='btn btn-light'>
                        <i className="fa fa-folder fa-2x text-primary"></i>
                      </a>
                      <div className='mt-auto'>
                        <small className='text-white'>
                            {modules[e]['nom module']}
                        </small>
                        <a className='h5 d-block text-white mt-1 mb-0' href=''>
                          {modules[e]['responsable du module']}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    )
}

export default ModulesComponent