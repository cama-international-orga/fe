// components/Page3.tsx
import { motion } from "framer-motion";

const Page4 = () => {
  return (
    <motion.div
      transition={{ type: "spring" }}
    >
      <h1>4th Page</h1>
      <p>3D Rotation Effect</p>
    </motion.div>
  );
};
export default Page4;
