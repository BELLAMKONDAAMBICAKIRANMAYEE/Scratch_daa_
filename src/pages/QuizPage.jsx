import { useParams } from "react-router-dom";
import quizData from "../data/quiz.json";
import { useState } from "react";

function QuizPage() {
  const { id } = useParams();

  // get quiz of selected topic
  const topicQuiz = quizData.find(q => q.topicId == id);

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  if (!topicQuiz) return <h2>No Quiz Found</h2>;

  const question = topicQuiz.quiz[current];

  const handleAnswer = (option) => {
    if (option === question.answer) {
      setScore(score + 1);
    }

    if (current < topicQuiz.quiz.length - 1) {
      setCurrent(current + 1);
    } else {
      alert(`Final Score: ${score + (option === question.answer ? 1 : 0)}`);
    }
  };

  return (
    <div>
      <h2>{topicQuiz.title}</h2>

      <h3>Q{current + 1}. {question.question}</h3>

      {question.options.map((opt, i) => (
        <button key={i} onClick={() => handleAnswer(opt)}>
          {opt}
        </button>
      ))}
    </div>
  );
}

export default QuizPage;