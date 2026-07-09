import { useEffect, useRef } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home/page";
import SubjectPage from "./pages/SubjectPage/page";
import QuizPage from "./pages/QuizPage/page";
import ExamPage from "./pages/ExamPage/page";
import { IsBackContext } from "./hooks/backNav";

function AnimatedRoutes() {
  const location = useLocation();
  const navType = useNavigationType();
  const navigated = useRef(false);
  const isBack = navigated.current && navType === "POP";
  useEffect(() => {
    navigated.current = true;
  }, [location.key]);

  return (
    <IsBackContext.Provider value={isBack}>
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <motion.div
          key={location.pathname}
          initial={isBack ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/subject/:subjectId" element={<SubjectPage />} />
            <Route path="/quiz/:subjectId/:topicId" element={<QuizPage />} />
            <Route path="/exam/:subjectId" element={<ExamPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </IsBackContext.Provider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
