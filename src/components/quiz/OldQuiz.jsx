import { useState } from "react"
import { old_quiz } from "../../constants/data"


const OldQuiz = () => {
    
    const [score, setScore] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        Oanswer: 0,
    })

    function getScore () {
        old_quiz[0].questions.map((e, i) => {
            setScore((prev) =>
                e.choosenAnswer === e.correctAnswer ? {
                  ...prev,
                  score: prev.score + old_quiz[0].perQuestionScore,
                  correctAnswers: prev.correctAnswers + 1,
                } : e.choosenAnswer === 'I do not know' ? {
                  ...prev,
                  Oanswer: prev.Oanswer + 1,
                } : {
                  ...prev,
                  score: prev.score - old_quiz[0].perQuestionScore,
                  wrongAnswers: prev.wrongAnswers + 1,
                }
              )
        })
        console.log(score)
    }

    return (
        <>
          <div className='container-xxl bg-white p-0'>
            <main>
                <div className="container-xxl p-0 mb-5">
                    <div className="container-xxl py-0">
                        <div className="container px-lg-5">
                            <div className='section-title position-relative text-center mb-5 mt-5 pb-2 wow fadeInUp' data-wow-delay="0.1s">
                                <h6 className="position-relative d-inline text-primary ps-4">
                                    Assessments
                                </h6>
                                <h1 className='mt-2'>
                                    Assessments n=°2
                                </h1>
                            </div>
                        </div>
                        <div className="old-question">
                            <p className="text-base font-medium mt-2">
                                <span className="mr-2 text-black">
                                    Date:
                                </span>
                                {old_quiz[0].date}
                            </p>
                            <p className="text-base font-medium mt-2">
                                <span className="mr-2 text-black">
                                    Duration:
                                </span>
                                {old_quiz[0].Duration}/{old_quiz[0].time} min
                            </p>
                            <p className="text-base font-medium mt-2">
                                <span className="mr-2 text-black">
                                    Score:
                                </span>
                                {score.score}/{old_quiz[0].perQuestionScore * old_quiz[0].totalQuestions}
                            </p>
                            <p className="text-base font-medium mt-7">
                                <span className="mr-2 text-black">
                                    ## "I don't know":
                                </span>
                                {score.Oanswer}
                            </p>
                            <p className="text-base font-medium mt-2">
                                <span className="mr-2 text-black">
                                    ## Success:
                                </span>
                                {score.correctAnswers}
                            </p>
                            <p className="text-base font-medium mt-2">
                                <span className="mr-2 text-black">
                                    ## Fail:
                                </span>
                                {score.wrongAnswers}
                            </p>
                            <h3 className="text-2xl tracking-wide my-5">
                                Responses:
                            </h3>
                            
                            {old_quiz.map((e, j) => ( 
              <>
                {(e.questions).map((q, i) => (
                  <>
                   
                    <h2 className='mt-2 font-medium text-xl ml-2'>
                      {q.question}
                    </h2>
                    <ul>
                      {q.choices.map((answer, index) => (
                        <li
                          key={index}
                          className={` 
                          ${((q.choosenAnswer === answer && answer === q.correctAnswer || (answer === q.correctAnswer))) && 'correct-answer'}
                          ${q.choosenAnswer === answer && answer !== q.correctAnswer && 'wrong-answer'}
                        `}
                        >
                          {answer}
                        </li>
                      ))}
                      <li className='selected-answer'>
                        Score: {q.choosenAnswer === 'I do not know' ? '0' : `${q.choosenAnswer === q.correctAnswer ? '' : '-'} ${old_quiz[0].perQuestionScore}`}
                      </li>
                    </ul>
                    <hr />
                  </>
                ))}
              </>
            ))}

                        </div>
                    </div>
                </div>
            </main>
          </div>
        </>
    )
}

export default OldQuiz