import { useState } from "react"
import { old_quiz } from "../../constants/data"


const OldQuiz = () => {
    
    const [score, setScore] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        Oanswer: 0,
    })

    old_quiz[0].questions.map((e, i) => {
        // setScore((prev) => 
        //     e.choosenAnswer === 'I do not know' ? {
        //     ...prev,
        //     Oanswer: prev.Oanswer + 1
        // } 
        //: e.choosenAnswer === e.correctAnswer ? {
        //     ...prev,
        //     score: prev.score + old_quiz[0].perQuestionScore,
        //     correctAnswers: prev.correctAnswers + 1
        // } : {
        //     ...prev,
        //     score: prev.score - old_quiz[0].perQuestionScore,
        //     wrongAnswers: prev.wrongAnswers + 1
        // })
    })

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
                        <div className="w-[99%] bg-[#DDDDDD] py-5 px-3 rounded-2xl ">
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
                            <h3 className="text-2xl tracking-wide mt-5 mb-2">
                                Responses:
                            </h3>
                            {old_quiz[0].questions.map((question, index) => (
                                <div key={question.id}>
                                    <p className="text-base font-medium my-3 text-black">
                                        {index}.{question.question}
                                    </p>
                                    {question.choices.map((choice, i) => (
                                        <p 
                                          className={
                                            `text-base font-medium mt-1 
                                            ${question.choosenAnswer === choice && choice === question.correctAnswer && 'text-emerald-600'}
                                            ${question.choosenAnswer === choice && choice !== question.correctAnswer && 'text-rose-600'}
                                            ${question.choosenAnswer !== choice && choice == question.correctAnswer && 'text-green-700'}
                                          `}
                                          key={i}
                                        >
                                            {choice}
                                        </p>
                                    ))}
                                    <p className="text-base font-medium ml-5 mt-3 text-black">
                                        Score:
                                        <span className="text-base font-medium ml-2 text-[#2124B1]">
                                            {question.choosenAnswer === 'I do not know' ? '0' : `${question.choosenAnswer === question.correctAnswer ? '' : '-'} ${old_quiz[0].perQuestionScore}`}
                                        </span>
                                    </p>
                                </div>
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