import React, { useEffect, useState } from "react";

import { questions } from "../data";
import Question from "../components/question";

interface QuizPageProps {
  isDisabled: boolean;
}

const QuizPage: React.FC<QuizPageProps> = ({isDisabled}) => {
  const [randomQuestions, setRandomQuestions] = useState<any[]>([]);

  useEffect(() => {
    const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    const selectedQuestions = shuffledQuestions.slice(0, 20);
    setRandomQuestions(selectedQuestions);
  }, []);


  return isDisabled ? (
    <div>
      <h1>Quiz</h1>
      {randomQuestions.map((question, index) => (
        <Question
          key={index}
          id={index + 1}
          question={question.question}
          options={question.options}
        />
      ))}
    </div>
  ) : (
    <div></div>
  );
};

export default QuizPage;
