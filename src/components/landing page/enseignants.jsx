import { useRef } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { enseignants } from "../../constants/data";

const EnseignantsComponent = () => {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

    return (
        <div className="app_without_bg relative z-3 flex__center section__padding">
          <h1 className="headtext__cormorant">professors</h1>
          <div className="app__professors-images">
            <div className="app__professors-images_container" ref={scrollRef}>
              {Object.keys(enseignants).map((e, i) => (
                <>
                  <div 
                    className="app__professors-images_card flex__center" 
                    key={`professor_image-${i + 1}`}
                  >
                    <img src={enseignants[e].image} alt="professor_image" />
                    <h1>{enseignants[e].nom}</h1>
                  </div>
                </>
              ))}
              {Object.keys(enseignants).map((e, i) => (
                <>
                  <div className="app__professors-images_card flex__center" key={`professor_image-${i + 1}`}>
                    <img src={enseignants[e].image} alt="professor_image" />
                    <h1>{enseignants[e].nom}</h1>
                  </div>
                </>
              ))}
            </div>
            <div className="app__professors-images_arrows">
              <BsArrowLeftShort className="professors__arrow-icon" onClick={() => scroll('left')}/>
              <BsArrowRightShort className="professors__arrow-icon" onClick={() => scroll('right')} />
            </div>
          </div>
        </div>
    )
}

export default EnseignantsComponent