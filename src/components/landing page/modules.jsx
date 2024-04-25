import React, { useState } from 'react'
import '../../css/App.css'

const ModulesComponent = () => {

  const [annee, setAnnee] = useState(0)

  function onClick (index) {
    setAnnee(index)
  }

  const list_annees = [
    '1CP',
    '2CP',
    '1CS',
    '2CS',
    '3CS',
  ]

    return (
        <div className="app__bg z-10 section__padding">
          <h1 className="headtext__cormorant">Courses</h1>
          <ul className="list_annees cursor-pointer">
            {list_annees.map((e, i) => (
              <li key={i}>
                <a className={annee === i ? 'is_active' : ''}
                   data-filter={`.${i}`}
                   onClick={() => {onClick(i)}}
                >
                  {e}
                </a>
              </li>
            ))}
            
       
        
      </ul>
          <h1>ModulesComponent</h1>
          <h1>ModulesComponent</h1>
          <h1>ModulesComponent</h1>
          <h1>ModulesComponent</h1>
          <h1>ModulesComponent</h1>
          <h1>ModulesComponent</h1>
          <h1>ModulesComponent</h1>
        </div>
    )
}

export default ModulesComponent