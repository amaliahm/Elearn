import { useState } from 'react';
import { participate_quiz } from '../../constants/data';

import Typography from '@mui/material/Typography';

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
        {!showResult && <div className="mt-0 mr-0 mb-0 ml-auto font-semibold">
          15:27
        </div>}
        {!showResult ?
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
          : 
          <div>
            <Typography 
              className='text-2xl tracking-wide text-center' 
              component="h2" 
              id="modal-modal-title" 
              variant="h5" 
              sx={{mb: '20px'}}
            >
              Result
            </Typography>
            <p className='text-base font-medium mt-2'>
              Total Question: 
              <span className='text-[#2124B1] ml-2'>
                {participate_quiz[0].totalQuestions}
              </span>
            </p>
            <p className='text-base font-medium mt-2'>
              Total Score:
              <span className='text-[#2124B1] ml-2'>
                {score.score}
              </span>
            </p>
            <p className='text-base font-medium mt-2'>
              Success:
              <span className='text-[#2124B1] ml-2'>
                {score.correctAnswers}
              </span>
            </p>
            <p className='text-base font-medium mt-2'>
              Wrong Answers:
              <span className='text-[#2124B1] ml-2'>
                {score.wrongAnswers}
              </span>
            </p>
            <p className='text-base font-medium mt-2'>
              I don't know Answers:
              <span className='text-[#2124B1] ml-2'>
                {score.Oanswer}
              </span>
            </p>
          </div>
        }
      </div>
    </>
  )
}

export default ParticipateQuiz