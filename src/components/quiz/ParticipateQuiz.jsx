import { useState } from 'react';
import { participate_quiz } from '../../constants/data';
import ModalResult from './ModalResult';

const ParticipateQuiz = () => {
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState({})
  const [score, setScore] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    Oanswer: 0,
  })

  const onSubmitQuiz = () => {
    setShowResult(true)
    participate_quiz[0].questions.map((e, i) => {
      setScore((prev) =>
        selectedAnswer[e.id] === e.correctAnswer ? {
          ...prev,
          score: prev.score + participate_quiz[0].perQuestionScore,
          correctAnswers: prev.correctAnswers + 1,
        } : selectedAnswer[e.id] === 'I do not know' ? {
          ...prev,
          Oanswer: prev.Oanswer + 1,
        } : {
          ...prev,
          score: prev.score - participate_quiz[0].perQuestionScore,
          wrongAnswers: prev.wrongAnswers + 1,
        }
      )
    })
  }

  const onAnswerSelected = ( id, answer) => {
    setSelectedAnswer({
      ...selectedAnswer,
      [id]: answer
    })
  }

  const allQuestionsAnswered = participate_quiz[0].questions.length === Object.keys(selectedAnswer).length;  
  
  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)
 
  return (
    <>
      <div className="quiz-container">
        <div className="mt-0 mr-0 mb-0 ml-auto font-semibold">
          15:27
        </div>
          <div>
            {participate_quiz.map((e, j) => ( 
              <>
                {(e.questions).map((q, i) => (
                  <>
                    <div className='mt-0'>
                      <span className="font-medium text-3xl text-[#2124B1]">
                        {addLeadingZero(i + 1)}
                      </span>
                      <span className="text-neutral-950 font-medium text-base">
                        /{addLeadingZero(e.questions.length)}
                      </span>
                    </div>
                    <h2 className='mt-2 font-medium text-xl'>
                      {q.question}
                    </h2>
                    <ul>
                      {q.choices.map((answer, index) => (
                        <li
                          onClick={() => onAnswerSelected(q.id, answer, q.correctAnswer)}
                          key={index}
                          className={selectedAnswer[q.id] == answer ? 'selected-answer' : ''}
                        >
                          {answer}
                        </li>
                      ))}
                    </ul>
                    <hr />
                  </>
                ))}
                <div className="flex justify-end">
                  <button onClick={onSubmitQuiz} disabled={!allQuestionsAnswered || showResult}>
                    Validate
                  </button>
                </div>
              </>
            ))}
          </div>
          {showResult && <ModalResult
            setShowModal={setShowResult}
            showModal={showResult}
            score={score}
            totalQuestion={participate_quiz[0].totalQuestions}
          />}
      </div>
    </>
  )
}

export default ParticipateQuiz