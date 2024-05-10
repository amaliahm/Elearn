import { tags } from "../../constants/data";

const Tags = () => {
    
    return (
        <>
          <div className='container-xxl bg-white p-0'>
            <main>
                <div className="container-xxl p-0 mb-5">
                    <div className="container-xxl py-5">
                        <div className="container px-lg-5">
                            <div className='section-title position-relative text-center mb-5 mt-0 pb-2 wow fadeInUp' data-wow-delay="0.1s">
                                <h6 className="position-relative d-inline text-primary ps-4">
                                    Cohorte-1CS 2023-2024
                                </h6>
                                <h1 className='mt-2'>
                                    Tags
                                </h1>
                            </div>
                        </div>
                        <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="col-12 text-center">
                                <ul className="list-inline mb-5" id="portfolio-flters">
                                    {tags.map((e, i) => (
                                        <li 
                                          onClick={() => {}}
                                          key={i}
                                          className='btn px-3 pe-4 ' 
                                        >
                                            {e}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
          </div>
          
        </>
    )
}

export default Tags