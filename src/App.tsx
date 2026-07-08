import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home/page";
import SubjectPage from "./pages/SubjectPage/page";
import QuizPage from "./pages/QuizPage/page";
import ExamPage from "./pages/ExamPage/page";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subject/:subjectId" element={<SubjectPage />} />
        <Route path="/quiz/:subjectId/:topicId" element={<QuizPage />} />
        <Route path="/exam/:subjectId" element={<ExamPage />} />
      </Routes>
    </BrowserRouter>
  );
}
