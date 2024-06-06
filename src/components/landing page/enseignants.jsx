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
        <div className="container-xxl py-5">
          <div className="container px-lg-5">
            <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="position-relative d-inline text-primary ps-4">
                Professors
              </h6>
              <h2 className="mt-2">
                Our Team Members
              </h2>
            </div>
            <div className="row g-4 app__professors-images">
              <div className="app__professors-images_container" ref={scrollRef}>
                {Object.keys(enseignants).map((e, i) => (
                  <div 
                    className="hover:cursor-pointer col-lg-4 col-md-6 wow fadeInUp m-3" 
                    data-wow-delay={`${i * 0.2 + 0.1}s`}
                    key={`professor_image-${i + 1}`}
                  >
                    <div className="team-item">
                      <div className="d-flex flex__center">
                        <div className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5 w-20"></div>
                        <img className="img-fluid rounded w-100" src={enseignants[e].image} alt="professor_image" />
                      </div>
                      <div className="px-4 py-3 text-wrap">
                        <h5 className="fw-bold m-0">
                          {enseignants[e].nom}
                        </h5>
                        <small>
                          {enseignants[e].statut}
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="app__professors-images_arrows">
                <BsArrowLeftShort className="professors__arrow-icon" onClick={() => scroll('left')}/>
                <BsArrowRightShort className="professors__arrow-icon" onClick={() => scroll('right')} />
              </div>
            </div>
          </div>
        </div>
    )
}

export default EnseignantsComponent