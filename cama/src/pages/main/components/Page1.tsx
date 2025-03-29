// components/Page1.tsx
import { motion } from "framer-motion";
import { mediaStyle, textLayer } from "../index.style.css";

const Page1 = () => {
  return (
    <>
      <motion.div
        className={textLayer}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <h1>LET YOUR HOME BE</h1>
        <h2>UNIQUE AND STYLISH</h2>
      </motion.div>
      <motion.div
        className={mediaStyle}
        initial={{ scale: 1 }}
        animate={{ scale: 1.2 }}
        transition={{
          duration: 10,
          repeat: 1,
          repeatType: "reverse",
        }}
      />
    </>
  );
};

export default Page1;
