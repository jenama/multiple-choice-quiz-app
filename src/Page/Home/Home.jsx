import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green, purple } from "@material-ui/core/colors";
import "./Home.css";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  },
  title: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  },
}))(Button);

export default function Home({
  quizzes,
  currQuizIdx,
  setCurrQuizIdx,
  setSelectedQuiz,
}) {
  
  const history = useHistory();

  function handleQuizClick(e) {
    if (e.currentTarget.id === "Basics of HTML") {
      setSelectedQuiz(e.currentTarget.id);
      history.push("/quiz");
    } else if (e.currentTarget.id === "Basics of CSS") {
      setCurrQuizIdx(currQuizIdx + 1);
      setSelectedQuiz(e.currentTarget.id);
      history.push("/quiz");
    }
  }

  return (
    <div>
      <h1>Pick a quiz</h1>
      <div>
        {quizzes.map((quiz) => {
          console.log("cat", quiz);
          return (
            <div className="quiz">
              <Button
                className="title"
                id={quiz.title}
                key={quiz.questions}
                value={quiz.title}
                onClick={handleQuizClick}
              >
                {quiz.title}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
