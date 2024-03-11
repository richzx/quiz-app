import { answerT } from '../../types/question.tsx'

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
  return (
    <>
      <div className='w-full flex items-center justify-center mt-5 m-10 '>
        <span className='font-medium text-[17px] text-slate-700 '>Question Title</span>
        <div className='flex items-center flex-wrap gap-5 justify-center w-[80%] mx-auto mb-5 md:justify-between '></div>
      </div>
    </>
  )
}

export default Quiz