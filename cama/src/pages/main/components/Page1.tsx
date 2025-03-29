// components/Page1.tsx
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { mediaStyle, textLayer } from "../index.style.css";

import { scrollIndicatorStyle, text } from "./Page1.style.css";
import scrollAnimation from "../../../assets/animations/scroll.json";

const Page1 = () => {
  return (
    <>
      <motion.div
        className={textLayer}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 30, duration: 5 }}
      >
        <h1 className={text}>CAMA</h1>
        <h2 className={text}>Where your space begin</h2>
      </motion.div>

      {/* 스크롤 유도 Lottie 애니메이션 */}
      <div className={scrollIndicatorStyle}>
        <Player
          src={scrollAnimation}
          autoplay
          loop
          style={{ width: "100px", height: "100px" }}
        />
      </div>

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
