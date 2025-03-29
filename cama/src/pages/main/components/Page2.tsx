// components/Page2.tsx
import { motion } from "framer-motion";

const Page2 = () => {
  return (
    <motion.div
      transition={{ type: "tween" }}
    >
      <h1>Second Page</h1>
    </motion.div>
  );
};

export default Page2;
