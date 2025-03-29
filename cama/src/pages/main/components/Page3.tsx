// components/Page3.tsx
import { motion } from 'framer-motion';

const Page3 = () => {
  return (
    <motion.div
      transition={{ type: 'spring' }}
    >
      <h1>Third Page</h1>
      <p>3D Rotation Effect</p>
    </motion.div>
  );
};
export default Page3;
