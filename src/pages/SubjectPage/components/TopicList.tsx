import { motion } from "framer-motion";
import type { Subject } from "../../../types";
import { topicPct, type ProgressData } from "../../../utils/progress";
import { staggerContainer } from "../../../utils/animations";
import TopicCard from "./TopicCard";

interface Props {
  subject: Subject;
  progress: ProgressData;
}

export default function TopicList({ subject, progress }: Props) {
  return (
    <motion.div
      className="flex flex-col gap-2.5"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      {subject.topics.map((topic) => (
        <TopicCard
          key={topic.id}
          subjectId={subject.id}
          topic={topic}
          pct={topicPct(progress, subject.id, topic.id)}
        />
      ))}
    </motion.div>
  );
}
