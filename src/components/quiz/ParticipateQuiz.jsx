import { useState } from 'react'
import { participate_quiz } from '../../constants/data'

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
          score: prev.score + 1,
          correctAnswers: prev.correctAnswers + 1,
        } : selectedAnswer[e.id] === 'I do not know' ? {
          ...prev,
          Oanswer: prev.Oanswer + 1,
        } : {
          ...prev,
          score: prev.score - 1,
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
      { !showResult ?
        <div>
          {participate_quiz.map((e, j) => (

          <>
          {(e.questions).map((q, i) => (

          <>
          <div className='mt-5'>
            <span className="font-medium text-3xl text-[#2124B1]">{addLeadingZero(i + 1)}</span>
            <span className="text-neutral-950 font-medium text-base">/{addLeadingZero(e.questions.length)}</span>
          </div>
          <h2 className='mt-2 font-medium text-xl'>{q.question}</h2>
          <ul>
            {q.choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(q.id, answer, q.correctAnswer)}
                key={index}
                className={selectedAnswer[q.id] == answer ? 'selected-answer' : ''}>
                {answer}
              </li>
            ))}
          </ul>
          </>
          ))}
          <div className="flex justify-end">
            <button onClick={onSubmitQuiz} disabled={!allQuestionsAnswered || showResult}>
              Correct
            </button>
          </div>
          </>
          ))}
        </div>
      : 
      <div className="result">
          <h3 className='text-2xl tracking-wide text-center'>Result</h3>
          <p className='text-base font-medium mt-2'>
            Total Question: <span className='text-[#2124B1]'>{participate_quiz[0].questions.length}</span>
          </p>
          <p>
            Total Score:<span> {score.score}</span>
          </p>
          <p>
            Success:<span> {score.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers:<span> {score.wrongAnswers}</span>
          </p>
          <p>
            I don't know Answers:<span> {score.Oanswer}</span>
          </p>
        </div>}
    </div>
    </>
  )
}

export default ParticipateQuiz