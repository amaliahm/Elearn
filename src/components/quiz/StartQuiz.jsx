import ParticipateQuiz from "./ParticipateQuiz"


const StartQuiz = () => {

    return (
        <>
          <div className='container-xxl bg-white p-0'>
            <main>
                <div className="container-xxl p-0 mb-5">
                    <div className="container-xxl py-0 flex row align-center justify-center">
                        <div className="container px-lg-5">
                            <div className='section-title position-relative text-center mb-5 mt-5 pb-2 wow fadeInUp' data-wow-delay="0.1s">
                                <h6 className="position-relative d-inline text-primary ps-4">
                                    Assessments
                                </h6>
                                <h1 className='mt-2'>
                                    Assessment n=°1
                                </h1>
                            </div>
                        </div>
                        <ParticipateQuiz />
                    </div>
                </div>
            </main>
          </div>
        </>
    )
}

export default StartQuiz