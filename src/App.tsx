import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SubjectPage from './pages/SubjectPage';
import QuizPage from './pages/QuizPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subject/:subjectId" element={<SubjectPage />} />
        <Route path="/quiz/:subjectId/:topicId" element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  );
}
