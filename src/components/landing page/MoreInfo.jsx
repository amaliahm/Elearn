import { moreInfoElements } from "../../constants/data"

const MoreInfoComponent = () => {
    return (
        <>
          <div className="container-xxl py-5">
            <div className="container px-lg-5">
              <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="section-title position-relative mb-4 pb-2">
                    <h6 className="position-relative text-primary ps-4">
                      About Us
                    </h6>
                    <h2 className="mt-2">
                      ESI-SBA
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-us">
              <div className="number-elements">
                {Object.keys(moreInfoElements).map((e, i) => (
                    <div className="element" key={i}>
                      <h2>{moreInfoElements[e].number}</h2>
                      <p>{moreInfoElements[e].element}</p>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </>
    )
}

export default MoreInfoComponent