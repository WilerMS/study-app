import { motion } from "framer-motion";
import type { Subject } from "../../../types";
import { subjectPct, type ProgressData } from "../../../utils/progress";
import { useIsBack } from "../../../hooks/backNav";
import { staggerContainer } from "../../../utils/animations";
import SubjectCard from "./SubjectCard";

interface Props {
  subjects: Subject[];
  progress: ProgressData;
}

export default function SubjectGrid({ subjects, progress }: Props) {
  const isBack = useIsBack();
  return (
    <motion.div
      className="grid grid-cols-2 gap-3"
      variants={staggerContainer}
      initial={isBack ? false : "hidden"}
      animate="show"
    >
      {subjects.map((subject) => (
        <SubjectCard
          key={subject.id}
          subject={subject}
          pct={subjectPct(progress, subject)}
        />
      ))}
    </motion.div>
  );
}
