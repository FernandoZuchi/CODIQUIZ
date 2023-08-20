import logoCodi from "../img/logomarca.png"
import "./Welcome.css";
import { useContext } from "react";
import { QuizContext } from "../contexto/quizcodi";

const Welcome = () => {
//Pegar os valores, alterar os valores
    const [quizState, dispatch] = useContext(QuizContext);

    return (
    <div id="welcome">
        <p>Seja bem-vindo ao CODI QUIZ</p>
        <br/>
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>Iniciar</button>
        <img className="image-container" src={logoCodi} alt="Identidade visual semelhante a da marca"/>
    </div>
  )
}

export default Welcome