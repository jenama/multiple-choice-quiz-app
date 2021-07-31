
# Multiple-choice-quiz-app

## Summary
  This is a multiple choice application to test your knowledge in HTML and CSS. 

### Getting started
  
  Create a new react app
  ```
  npx create-react-app my-app
  ```
  Go inside the react app
  ```
  cd my-app
  ```
  Run your react app using 
  ```
  npm start
  ```
  

### What You're Given

Your application code should live in the `src/` directory. We've set it up to work with React, though you're welcome to add other libraries if you need.

In the `src/data/quizzes.js` file, we've exported for you a set of `quizzes`, each of which contains the following data:

- `title`: A human-readable display text title for the quiz

- `questions` An ordered list of questions to be asked, each of which consists of:
  - `text`
  - `correctAnswer`
  - `incorrectAnswers`

### Feature Requirements

Your code will allow the user to take each of those `quizzes` in order.

1. For a current quiz, display its title on top of the page, along with a single question’s text and randomly ordered answers -- starting with the first question.

2. When a question’s answer is clicked, it should show:

   - A ‘Next’ button at the bottom of the page
   - Either _'Correct!'_ or _'Incorrect...'_ above that button, with the correct answer outlined in green, and the incorrect answer (if any) outlined in red with a ~~strikethrough~~ over its text

3. After all questions have been answered, display a friendly summary screen that lists:

   - How many questions were in the quiz
   - How many of those questions were answered correctly
   - A button to move to the next quiz (or the first quiz, if they just took the last)
   - A random encouragement message _(use `getMessage` from `src/data/messages.js`)_.

4. You must write two unit tests:
   - one for when a user selects the correct answer
   - one for when the user selects the incorrect answer

### Delighters

In addition to the base requirements, we'll need you to pick and complete _one_ of the following "delighter" fun features.
We do mean _one_: completing additional features will _not_ gain you points! Please only complete _one_.

- A: In addition to the "Next" button after taking a quiz, display the number of times the quiz has been taken along with a "Retake" button.
- B: In addition to the summary showing the number of questions correct after taking a quiz, display a list of the quiz's questions with the user's selected answer and whether it was correct beside each question.
- C: Add more tests!

See `./mockups/delighters/*.png` for rough descriptions of what A and B would look like.
