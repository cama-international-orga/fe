// components/Page3.tsx
import { motion } from "framer-motion";
import Footer from "../../../components/Footer";

const Page5 = () => {
  return (
    <motion.div
      transition={{ type: "spring" }}
      style={{ width: "100%", height: "100%", margin: "0 auto" }}
    >
      <h1>5th Page</h1>
      <p>3D Rotation Effect</p>
      <Footer />
    </motion.div>
  );
};
export default Page5;
