import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { quizzes } from "../data/quizzes";
import styled from 'styled-components';
import "./Question.css";

export default function Question({
  currQuizIdx,
  setScore,
  score,
  currQuestIdx,
  setCurrQuestIdx,
}) {
  const history = useHistory();

  const [selectAnswer, setSelectAnswer] = useState("");

  const [falsy, setFalsy] = useState();
  const [right, setRight] = useState();
  const [submitted, setSubmitted] = useState(false);

  const topic1 = quizzes[currQuizIdx].title;
  const correctAnswer = quizzes[currQuizIdx].questions[currQuestIdx].correctAnswer;
  const incorrectAnswers = quizzes[currQuizIdx].questions[currQuestIdx].incorrectAnswers;
  const allQuestionOptions = incorrectAnswers.concat(correctAnswer);

  const randomOption = allQuestionOptions.sort(() => Math.random() - 0.5);

  function handleClick(e) {
    setSelectAnswer(e.target.value);
  }

  function handleSelectedAnswer(event) {
    event.preventDefault();
    if (correctAnswer === selectAnswer) {
      setSubmitted(true);
      setScore(score + 1);
      setRight('correct')
    } else if (selectAnswer !== correctAnswer) {
      setSubmitted(true);
      setFalsy('wrong')
      setRight('correct')
    }
  }

  const handleButton = (e) => {
    if (currQuestIdx === quizzes[currQuizIdx].questions.length - 1) {
      history.push("/summary");
    } else {
      setCurrQuestIdx(currQuestIdx + 1);
      setSubmitted(false);
      setSelectAnswer();
      setRight()
      setFalsy()
    }
  };

  return (
    <div className="question-container">
     <div className="current">
        <div>
          <h1>{topic1}</h1>
          <h2>{quizzes[currQuizIdx].questions[currQuestIdx].text}</h2>
          <form onSubmit={handleSelectedAnswer}>
          
            {randomOption.map((option, i) => {
              return (
                <div key={i}>
                  <label
                    className="form-check-label option-labels"
                    htmlFor={`option${option}`}
                  ></label>
                  <input
                    className={`choices ${
                      selectAnswer && option === correctAnswer ? right: falsy 
                    }`}
                    type="submit"
                    name="inlineOptions"
                    id={`option${option}`}
                    value={option}
                    disabled={submitted}
                    defaultChecked={selectAnswer === option}
                    onClick={handleClick}
                  />
                </div>
              );
            })}
          </form>
        </div>

        {selectAnswer ? (
          <div>
            <p>{selectAnswer === correctAnswer ? "Correct!" : "Incorrect!"}</p>{" "}
            <button onClick={handleButton} className="next">
              Next
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
