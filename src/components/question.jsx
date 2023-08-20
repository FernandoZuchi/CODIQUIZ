import { useContext } from "react";
import { QuizContext } from "../contexto/quizcodi";
import './question.css';
import Option from "./Option"

const question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
//Disparada para checar a resposta do usuário, envia dados através do payload
    dispatch({
        type: "CHECK_ANSWER",
        payload: {answer: currentQuestion.answer, option},
    });
  };
  //Fazendo a progressão de perguntas
  return (
    <div id="question">
        |<p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
        <h2>{currentQuestion.question}</h2> 
        <div id="options-container">
            {currentQuestion.options.map((option) => (
                <Option 
                    option={option}
                    key={option}
                    answer={currentQuestion.answer}
                    selectOption={() => onSelectOption(option)}
                />
            ))}
        </div>
        {quizState.answerSelected && (
            <button onClick={() => dispatch({ type: "CHANGE_QUESTION"})}>
                Continuar
            </button>
            )}
    </div>
    //Renderizando as perguntas
  );
};

export default question;