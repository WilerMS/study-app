import { motion } from "framer-motion";
import type { Subject } from "../../../types";
import { subjectPct, type ProgressData } from "../../../utils/progress";
import { gridStagger } from "../animations";
import SubjectCard from "./SubjectCard";

interface Props {
  subjects: Subject[];
  progress: ProgressData;
}

export default function SubjectGrid({ subjects, progress }: Props) {
  return (
    <motion.div
      className="grid grid-cols-2 gap-3"
      variants={gridStagger}
      initial="hidden"
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
