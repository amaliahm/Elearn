import React, { useState } from 'react'
import { modules } from '../../constants/data.js'
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

  let filteredModule = modules.filter(obj =>
    obj.niveau === list_annees[annee] 
  );
  
    return (
        <div className="app__bg relative z-10 section__padding">
          <h1>module</h1>
        </div>
    )
}

export default ModulesComponent