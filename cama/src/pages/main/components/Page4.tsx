// components/Page3.tsx
import { motion } from "framer-motion";
import GridMotion from "../../../components/GridMotion";
import Dormakaba from "../../../assets/svg/dormakaba.svg?react";
import MT from "../../../assets/svg/mt.svg?react";
import GEZE from "../../../assets/svg/geze.svg?react";
import HEWI from "../../../assets/svg/hewi.svg?react";
import MERONI from "../../../assets/svg/meroni.svg?react";
import PORTA from "../../../assets/png/porta.png";
import SFS from "../../../assets/svg/sfs.svg?react";
import PAMAR from "../../../assets/svg/pamar.svg?react";
import Villes from "../../../assets/svg/villes.svg?react";

const Page4 = () => {
  const items = [
    <Dormakaba width={300} height={100} />,
    <HEWI width={300} height={100} />,
    <GEZE width={300} height={100} />,
    <MT width={300} height={100} />,
    <MERONI width={300} height={100} />,
    //첫 줄 끝
    <SFS width={300} height={100} />,
    <Dormakaba width={300} height={100} />,
    // <HEWI width={300} height={100} />,
    // <GEZE width={300} height={100} />,
    <MT width={300} height={100} />,
    <MERONI width={300} height={100} />,
    <Dormakaba width={300} height={100} />,
    <HEWI width={300} height={100} />,
    //
    <SFS width={300} height={100} />,
    <PAMAR width={300} height={95} />,
    <Villes width={300} height={100} />,
    <SFS width={300} height={100} />,
    <PAMAR width={300} height={100} />,
    //5번째 줄
    <SFS width={300} height={100} />,
    <HEWI width={300} height={100} />,
    <img src={PORTA} width={300} height={200} alt="PORTA" />,
    <SFS width={300} height={100} />,
    <PAMAR width={300} height={100} />,
  ];
  return (
    <motion.div transition={{ type: "spring" }}>
      <GridMotion items={items} />
    </motion.div>
  );
};
export default Page4;
