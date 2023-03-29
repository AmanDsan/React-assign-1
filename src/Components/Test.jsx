import React, { useState, useRef } from "react";
import Question from "./Question";
import AnswerOption from "./AnswerOption";
import Result from "./Result";
import styles from "./Test.module.css";


const questions = [
  {
    question: "The Product of 131 * 0 * 300 * 4",
    answerOptions: [
      "11",
      "0",
      "46",
      "45",
    ],
    correctAnswer: "0",
  },
  {
    question: "Solve 23 + 3 ÷ 3",
    answerOptions: ["24", "25", "26", "27"],
    correctAnswer: "24",
  },
  {
    question: "Solve 3 + 6 * ( 5 + 4) ÷ 3 - 7",
    answerOptions: [
      "11",
      "16",
      "14",
      "15",
    ],
    correctAnswer: "14",
  },
  {
    question:
      " How Many Months Make a Century?",
    answerOptions: [
      "12",
      "120",
      "1200",
      "12000",
    ],
    correctAnswer: "1200",
  },
  {
    question: " Priya had 16 Red Balls, 2 Green Balls, 9  Blue Balls, and 1 Multicolor Ball. If He Lost 9 Red Balls, 1 Green Ball, and 3 Blue Balls. How Many Balls would be Left?",
    answerOptions: [
      "15",
      "11",
      "28",
      "39",
    ],
    correctAnswer: "15",
  },
  {
    question: " How Many Sides are there in a Decagon?",
    answerOptions: [
      "7",
      "8",
      "9",
      "10",
    ],
    correctAnswer: "10",
  },
  {
    question: "27 is a perfect cube. If true then what is the perfect cube of 27? ",
    answerOptions: ["3", "9", "27 is not a perfect cube", "6"],
    correctAnswer: "3",
  },
  {
    question: "What is 6% Equals to ?",
    answerOptions: [
      "0.06",
      "0.6",
      "0.006",
      "0.0006",
    ],
    correctAnswer: "0.06",
  },
  {
    question:
      "How Many Years are there in a Decade?",
    answerOptions: [
      "5",
      "10",
      "20",
      "50",
    ],
    correctAnswer: "10",
  },
  {
    question: " Look at this series: 36, 34, 30, 28, …, 22 What number should come to fill in the blank space",
    answerOptions: [
      "25",
      "24",
      "26",
      "23",
    ],
    correctAnswer: "26",
  },
];

const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const answerOptionsRef = useRef([]);

  const handleAnswerChange = (event) => {
    const { value } = event.target;
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNextClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestartClick = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (answers[i] === questions[i].correctAnswer) {
        score += 2;
      }
    }
    return score;
  };

  const score = calculateScore();
  const maxScore = questions.length * 2;

  return (
    <div className={styles.container}>
      {showResult ? (
        <Result
          score={score}
          maxScore={maxScore}
          onRestart={handleRestartClick}
        />
      ) : (
        <div className={styles.test}>
          <Question question={questions[currentQuestion].question} />
          {questions[currentQuestion].answerOptions.map((option, index) => (
            <AnswerOption
              key={option}
              answerOption={option}
              onChange={handleAnswerChange}
              ref={(el) => (answerOptionsRef.current[index] = el)}
            />
          ))}
          <button className={styles.button} onClick={handleNextClick}>
            {currentQuestion < questions.length - 1 ? "Next" : "Submit"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Test;
