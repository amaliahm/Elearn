import { useEffect, useState } from 'react'
import { participate_quiz } from '../../constants/data'

const ParticipateQuiz = () => {
  const questions = participate_quiz
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(new Array(participate_quiz[0].questions.length))
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })
  const onAnswerSelected = (answer, index, correctAnswer, questionNumber) => {
    const tmp = selectedAnswer
    tmp[questionNumber] = index
    setSelectedAnswer(tmp)
    console.log(selectedAnswer)
    if (answer === correctAnswer) {
      //score + 1
    } else {
      //score -1
    }
  }

  function calculScore (answer, index, correctAnswer, questionNumber) {
    onAnswerSelected(answer, index, correctAnswer, questionNumber)
  }
  useEffect(() => {
    
  }, [selectedAnswer])

  

  // const onClickNext = () => {
  //   setSelectedAnswerIndex(null)
  //   setResult((prev) =>
  //     selectedAnswer
  //       ? {
  //           ...prev,
  //           score: prev.score + 5,
  //           correctAnswers: prev.correctAnswers + 1,
  //         }
  //       : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
  //   )
  //   if (activeQuestion !== questions.length - 1) {
  //     setActiveQuestion((prev) => prev + 1)
  //   } else {
  //     setActiveQuestion(0)
  //     setShowResult(true)
  //   }
  // }

  

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)
 
  return (
    <>
        
                
    <div className="quiz-container">
      {
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
                onClick={() => calculScore(answer, index, q.correctAnswer, i)}
                key={answer}
                className={selectedAnswer[i] === index ? 'selected-answer' : ''}>
                {answer}
              </li>
            ))}
          </ul>
          </>
          ))}
          <div className="flex-right">
            <button onClick={() => {}} disabled={selectedAnswerIndex === null}>
              Correct
            </button>
          </div>
          </>
          ))}
        </div>
      }
      {showResult & 
      <div className="result">
          <h3>Result</h3>
          <p>
            Total Question: <span>{questions.length}</span>
          </p>
          <p>
            Total Score:<span> {result.score}</span>
          </p>
          <p>
            Correct Answers:<span> {result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers:<span> {result.wrongAnswers}</span>
          </p>
        </div>}
    </div>
    </>
  )
}

export default ParticipateQuiz