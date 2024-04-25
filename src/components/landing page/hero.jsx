import React, { useState } from 'react';

const HeroComponent = () => {

  const [loading, setLoading] = useState(false)

    return (
        <>
          <div className="app_without_bg w-full app__wrapper section__padding">
            <div className="app__wrapper_info">
              <h1 className="app__header-h1">welcome to Elearn</h1>
              <p className="p__opensans" style={{ margin: '2rem 0' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem assumenda beatae tenetur, velit porro ducimus illo, recusandae, magni facere iure minima magnam tempore rerum. </p>
            </div>
          </div>
        </>
    )
}

export default HeroComponent