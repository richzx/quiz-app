import { useState } from "react"
import { answerT } from "./types/question";
import Layout from "./layout";

function App() {
  const [done, setDone] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<answerT[]>([]);

  return (
    <>
      <Layout>
        {done ? "done" : "quiz"}
      </Layout>
    </>
  )
}

export default App
