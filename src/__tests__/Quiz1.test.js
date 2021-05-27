import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Question from "../Components/Question";
import { quizzes } from "../data/quizzes";

/**
 * render a question
 * simulate a click on correct answer
 * verify correct answer/message shows below
 *
 */

describe("Question component", () => {
  test("Verify correct msg when correct answer is selected", () => {
    const score = 0;

    render(
      <Question
        setScore={() => {
          score++;
        }}
        score={score}
        currQuestIdx={0}
        currQuizIdx={0}
        setCurrQuestIdx={() => {}}
      />
    );

    const answer = screen.getByDisplayValue("h1");
    userEvent.click(answer);

    const message = screen.getByText("Correct!");
    expect(message).toBeInTheDocument();
  });

  test("Verify incorrect msg when incorrect answer is selected", () => {
    const score = 0;

    render(
      <Question currQuestIdx={0} currQuizIdx={0} setCurrQuestIdx={() => {}} />
    );

    const wrongAnswer1 = screen.getByDisplayValue("div");

    userEvent.click(wrongAnswer1);

    const message = screen.getByText("Incorrect!");
    expect(message).toBeInTheDocument();
  });

  test("Verify incorrect msg when incorrect answer is selected", () => {
    const score = 0;

    render(
      <Question currQuestIdx={0} currQuizIdx={0} setCurrQuestIdx={() => {}} />
    );

    const wrongAnswer2 = screen.getByDisplayValue("p");

    userEvent.click(wrongAnswer2);

    const message = screen.getByText("Incorrect!");
    expect(message).toBeInTheDocument();
  });
  
  test("Verify incorrect msg when incorrect answer is selected", () => {
    const score = 0;

    render(
      <Question
        setScore={() => {
          score;
        }}
        score={score}
        currQuestIdx={0}
        currQuizIdx={0}
        setCurrQuestIdx={() => {}}
      />
    );

    const wrongAnswer3 = screen.getByDisplayValue("h0");

    userEvent.click(wrongAnswer3);
    const message = screen.getByText("Incorrect!");
    expect(message).toBeInTheDocument();
  });
});


