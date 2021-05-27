import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { getMessage } from '../../data/messages';
import '../Result/result.css'

export default function Summary ({ quizzes, currQuizIdx, setScore, score, selectCategory}) {

    const history = useHistory()
    const [msg, setMsg] = useState('')
    const [attempt, setAttempt] = useState(0)
    
    console.log('score', score)

    function backToHome () {
        setScore(0)
        setAttempt(attempt + 1)
        history.push('/')
    }

    useEffect(() => {
        setMsg(getMessage())
    }, [msg]);

    return (
        <div className='result'>
            {selectCategory === 'title-btn0' ?
                <div>
                    <h1>{quizzes[currQuizIdx].title}</h1>
                    <h2>You Got {score} 0f {quizzes[currQuizIdx].questions.length} questions right</h2>
                    <p >{msg}</p>
                    <p>This was attempt{attempt}</p>
                    <button onClick={backToHome} className='restart'>Play Again</button>
                </div>
            :
            <div>
                <h1>{quizzes[currQuizIdx].title}</h1>
                <h2>You Got {score} 0f {quizzes[currQuizIdx].questions.length} questions right</h2>
                <p>{msg}</p>
                <p>This was attempt{attempt}</p>
                <button onClick={backToHome} className='restart'>Play Again</button>
            </div>
            }
            
            
        </div>
    )
}