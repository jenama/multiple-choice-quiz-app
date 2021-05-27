import React from "react";
import Question from '../../Components/Question';
import './Quiz.css'

export default function Quiz({ quizzes, currQuizIdx, setCurrQuizIdx,setSelectedQuiz, selectedQuiz, setScore, score, currQuestIdx, setCurrQuestIdx }) {
  
  return(
    <div className='quiz-container'>
      <Question 
        quizzes={quizzes} 
        currQuizIdx={currQuizIdx} 
        setCurrQuizIdx={setCurrQuizIdx} 
        setSelectedQuiz={setSelectedQuiz}
        selectedQuiz={selectedQuiz}
        setScore={setScore}
        score={score}
        currQuestIdx={currQuestIdx}
        setCurrQuestIdx={setCurrQuestIdx}
      />
    </div>
  )
}