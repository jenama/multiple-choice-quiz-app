import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import Quiz from "./Page/Quiz/Quiz";
import Summary from "./Page/Result/Result";
import { quizzes } from "./data/quizzes";
import "./styles.css";

export default function App() {
  const [questions, setQuestions] = useState();
  const [currQuizIdx, setCurrQuizIdx] = useState(0);
  const [title, setTitle] = useState("");
  const [currQuestIdx, setCurrQuestIdx] = useState(0)
  const [selectedQuiz, setSelectedQuiz] = useState('')
  const [score, setScore] = useState(0)

  

  // const fetchQuestions = (title) => {
  //   if (title === 'Basic HTML'){
  //     setQuestions(quizzes[currQuizIdx].questions)
  //   } else if (title === 'Basic CSS'){
  //     setQuestions(quizzes[currQuizIdx + 1].questions)
  //         console.log('q', quizzes[currQuizIdx].questions)
  //   }
  // }

  



  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <Home
              quizzes={quizzes}
              currQuizIdx={currQuizIdx}
              setCurrQuizIdx={setCurrQuizIdx}
              currQuestIdx={currQuestIdx}
              setCurrQuestIdx={setCurrQuestIdx}
              selectedQuiz={selectedQuiz}
              setSelectedQuiz={setSelectedQuiz}
            />
          </Route>
          <Route path={"/quiz"}>
            <Quiz
              quizzes={quizzes}
              currQuizIdx={currQuizIdx}
              setCurrQuizIdx={setCurrQuizIdx}
              selectedQuiz={selectedQuiz}
              setSelectedQuiz={setSelectedQuiz}
              score={score}
              setScore={setScore}
              currQuestIdx={currQuestIdx}
              setCurrQuestIdx={setCurrQuestIdx}
              
            />
          </Route>
          <Route path={"/summary"}>
            <Summary quizzes={quizzes} 
                    currQuizIdx={currQuizIdx} 
                    setCurrQuizIdx={setCurrQuizIdx}
                      score={score}
                      setScore={setScore}
                      selectedQuiz={selectedQuiz}
                      setSelectedQuiz={setSelectedQuiz}
                    />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
