// components/Page3.tsx
import { motion } from "framer-motion";
import Footer from "../../../components/Footer";
// import TrueFocus from "./TrueFocus";

const Page5 = () => {
  return (
    <motion.div
      transition={{ type: "spring" }}
      style={{ width: "100%", margin: "0 auto", overflow: "hidden" }}
    >
      {/* <TrueFocus sentence="Focus on the moment" /> */}
      <Footer />
    </motion.div>
  );
};
export default Page5;
