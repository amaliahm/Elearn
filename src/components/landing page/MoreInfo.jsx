import { moreInfoElements } from "../../constants/data"

const MoreInfoComponent = () => {
    return (
        <>
          <div className="app__bg p-20">
            <h1 className="headtext__cormorant z-10 mt-10">About Us</h1>
            <p className="p__opensans z-10" style={{ margin: '2rem 0' }}> Ecole Supérieure en Informatique 08-MAI-1945 Sidi Bel Abbes (ESI-SBA) </p>
            <div className="relative">
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
          </div>
        </>
    )
}

export default MoreInfoComponent