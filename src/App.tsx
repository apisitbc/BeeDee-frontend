import { useState } from "react";
import "./App.css";
import Leaderboard from "./components/leaderboard";
import QuizPage from "./pages/quizPage";

function App() {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const handleClickGoToQuiz = () => {
    setIsDisabled(!isDisabled);
  };

  const handleClickBack = () => {
    setIsDisabled(!isDisabled);
  };


  return (
    <div>
      <h1>My Quiz App</h1>
      <button onClick={handleClickBack} hidden={!isDisabled}>back</button>
      <Leaderboard isDisabled={!isDisabled} />
      <QuizPage isDisabled={isDisabled} />

      <button onClick={handleClickGoToQuiz} hidden={isDisabled}>go to quiz</button>
    </div>
  );
}

export default App;
