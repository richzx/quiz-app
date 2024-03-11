import { answerT, optionT } from "../../types/question"

interface QuestionProps {
  option: optionT;
  onAnswer: (selectedId: number, questionId: number) => void;
  answers: answerT[];
}

const Question = ({ option, answers, onAnswer }: QuestionProps) => {
  return (
    <span 
      id={option.id.toString()}
      onClick={() => onAnswer(option.id, option.questionId)}
      className={
        answers.some(
          (item) => item.questionId === option.questionId && item.answerId === option.id
        )
        ? "border border-blue-300 transition-all duration-200 font-medium text-slate-700 shadow-sm rounded-md cursor-pointer bg-blue-100 flex items-center justify-center w-[250px] py-2 hover:bg-slate-200 hover:border-slate-400"
        : "border border-slate-300 transition-all duration-200 font-medium text-slate-700 shadow-sm rounded-md cursor-pointer bg-white flex items-center justify-center w-[250px] py-2 hover:bg-slate-200 hover:border-slate-400"
      } 
    >
      {option.title}  
    </span>
  )
}

export default Question