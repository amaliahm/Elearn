import React, { useState } from 'react';
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
    
    <div 
                                          className="accordion-item"
                                        >
                                            <h2 className="accordion-header" onClick={() => setShowInfo(!showInfo)}>
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                {title}
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                { showInfo && <div className="accordion-body">
                                                    
                                                {info}
                                                    
                                                </div>}
                                            </div>
                                        </div>
    </>
  );
};

export default Question;