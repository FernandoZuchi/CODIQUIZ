import "./App.css";
import Welcome from "./components/Welcome";
import { useContext } from "react";
import { QuizContext } from "./contexto/quizcodi";
import Question from "./components/question";
import QuizOver from "./components/QuizOver"
import { useEffect } from "react"


const App = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS"});
  }, []);

  return (
    //O "Welcome" será exibido somente se o usuário iniciar o quiz
    //As questões aparecerão somente se o usuário estiver jogando
    <div className="App">     
      {quizState.gameStage === "Start" && <Welcome />} 
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <QuizOver />}
    </div> 
  );
}

export default App;