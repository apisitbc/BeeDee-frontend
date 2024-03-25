import React from 'react';

interface QuestionProps {
  id: number;
  question: string;
  options: string[];
}

const Question: React.FC<QuestionProps> = ({ id, question, options }) => {
  return (
    <div>
      <h2>Question {id}</h2>
      <p>{question}</p>
      <ul>
        {options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </div>
  );
};

export default Question;