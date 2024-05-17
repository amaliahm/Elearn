import { CircularProgressbar } from 'react-circular-progressbar';
import { old_quiz } from "../../constants/data";


const OldQuiz = () => {

  const percentage = 66;
  const correctAnswers = ( old_quiz[0].correctAnswers / old_quiz[0].totalQuestions ) * 100;
  const wrongAnswers = ( old_quiz[0].wrongAnswers / old_quiz[0].totalQuestions ) * 100;
  const Oanswer = ( old_quiz[0].Oanswer / old_quiz[0].totalQuestions ) * 100;
   
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
                          <div className='flex row justify-between align-center flex-wrap px-3 mb-3'>
                            <p className="text-base font-medium p-3 rounded-xl selected-answer" style={{width: 'fit-content', height: 'fit-content'}}>
                                <span className="mr-2 text-black">
                                    Date:
                                </span>
                                {old_quiz[0].date}
                            </p>
                            <p className="text-base font-medium p-3 rounded-xl selected-answer" style={{width: 'fit-content', height: 'fit-content'}}>
                                <span className="mr-2 text-black">
                                    Duration:
                                </span>
                                {old_quiz[0].Duration}/{old_quiz[0].time} min
                            </p>
                            <p className="text-base font-medium p-3 rounded-xl selected-answer" style={{width: 'fit-content', height: 'fit-content'}}>
                                <span className="mr-2 text-black">
                                    Score:
                                </span>
                                {old_quiz[0].score}/{old_quiz[0].perQuestionScore * old_quiz[0].totalQuestions}
                            </p>
                          </div>
                          <div className="flex row justify-evenly flex-wrap p-3 w-[80%]" style={{ margin: '0 auto' }}>
                            <CircularProgressbar value={correctAnswers} text={`S: ${old_quiz[0].correctAnswers}/${old_quiz[0].totalQuestions}`} className='success-progress' />
                            <CircularProgressbar value={wrongAnswers} text={`F: ${old_quiz[0].wrongAnswers}/${old_quiz[0].totalQuestions}`} className='wrong-progress'/>
                            <CircularProgressbar value={Oanswer} text={`O: ${old_quiz[0].Oanswer}/${old_quiz[0].totalQuestions}`} />
                          </div>
                            <h3 className="text-2xl tracking-wide mt-2 mb-5">
                                Responses:
                            </h3>
                            
                            {old_quiz.map((e, j) => ( 
              <>
                {(e.questions).map((q, i) => (
                  <>
                   
                    <h2 className='mt-2 font-medium text-xl'>
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