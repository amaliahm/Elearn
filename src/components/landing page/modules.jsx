import React, { useState } from 'react'
import { course } from '../../assets/images/index.js'
import { modules } from '../../constants/data'
import '../../css/App.css'

const ModulesComponent = () => {
  const list_annees = ['All', '1CP', '2CP', '1CS', '2CS', '3CS']

  const [annee, setAnnee] = useState(0)
  const [moduleItems, setModuleItems] = useState(modules)

  const filterItems = (e, i) => {
    setAnnee(i)
    if (e === 'All') {
      setModuleItems(modules)
      return;
    }
    const newModules = modules.filter((item) => item.niveau === e)
    setModuleItems(newModules)
  }

  
  
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
                  {list_annees.map((e, i) => (
                    <li 
                      onClick={() => filterItems(e, i)}
                      key={i}
                      className={`btn px-3 pe-4 ${annee == i ? 'active' : ''} `} 
                    >
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='row g-4 portfolio-container'>
              {Object.keys(moduleItems).map((e, i) => (
                <div 
                  className={`col-lg-4 col-md-6 portfolio-item module_item_animation wow zoomIn hover:cursor-pointer ${(i % 2) == 0 ? 'first' : 'second'}`} 
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
                            {moduleItems[e]['nom module']}
                        </small>
                        <a className='h5 d-block text-white mt-1 mb-0' href=''>
                          {moduleItems[e]['responsable du module']}
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