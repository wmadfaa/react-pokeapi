import React from "react";
import { motion, Variants } from "framer-motion";

const SCREEN_MOTION_VARIANTS: Variants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const ScreenWrapper: React.FC = ({ children }) => {
  return (
    <motion.div
      className="w-screen min-h-screen bg-gray-50"
      initial="initial"
      animate="in"
      exit="out"
      variants={SCREEN_MOTION_VARIANTS}
    >
      {children}
    </motion.div>
  );
};

export default ScreenWrapper;
