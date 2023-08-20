import { useContext } from "react"
import { QuizContext } from "../contexto/quizcodi"
import CodiIcon from "../img/codi_icon.png"
import "./QuizOver.css"


const QuizOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const totalQuestions = quizState.questions.length;
  const correctAnswers = quizState.score;
  const percentage = (correctAnswers / totalQuestions) * 100;

  return (
    <div id="gameover">
        <h1>Você concluiu o CODI QUIZ!</h1>
        <br/>
        <p>Sua pontuação: {quizState.score}</p>
        <br/>
        <p>Você acertou: {quizState.score} de {quizState.questions.length} perguntas.</p>
        <br/>
        <p>Pontuação em porcentagem: {percentage.toFixed(2)}%</p>
        <br/>
        <img className="image-container1" src={CodiIcon} alt="Identidade visual semelhante a da marca"  width="720px" height="660px"/>
        <br></br>
        <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  )
}

export default QuizOver