import { data } from '../../data/data.ts';
import { answerT } from '../../types/question.tsx'
import Question from './Question.tsx';

interface QuizProps {
  currentQuestion: number;
  answers: answerT[];
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  done: () => void;
  setAnswers: React.Dispatch<React.SetStateAction<answerT[]>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const Quiz = ({
  currentQuestion,
  answers,
  setCurrentQuestion,
  done,
  setScore,
  setAnswers,
}: QuizProps) => {

  const next = () => {
    const hasNextQuestion = data[currentQuestion + 1];
    hasNextQuestion ? setCurrentQuestion(currentQuestion + 1) : done();
  };

  const back = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  }

  const onAnswer = (selectedId:number, questionId:number) => {
    const isQuestionAnswered = answers.some((item) => item.questionId === questionId);
  }

  return (
    <>
      <div className='w-full flex items-center justify-center mt-5 m-10 '>
        <span className='font-medium text-[17px] text-slate-700 '>
          {data[currentQuestion].title}
        </span>
        <div className='flex items-center flex-wrap gap-5 justify-center w-[80%] mx-auto mb-5 md:justify-between '>
          {data[currentQuestion].options.map((option) => {
            return(
              <Question onAnswer={onAnswer} answers={answers} option={option} key={option.id} />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Quiz