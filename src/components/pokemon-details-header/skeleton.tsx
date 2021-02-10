import { motion } from "framer-motion";
import React from "react";

export const PokemonDetailsHeaderSkeleton: React.VFC<{ id: string }> = ({
  id,
}) => {
  return (
    <motion.div className="animate-pulse flex flex-col lg:flex-row justify-center items-start w-full mx-auto my-4 rounded-lg shadow-lg">
      <motion.div className="w-full">
        <motion.div
          className="px-4 md:px-8 h-24"
          layoutId={`title-container-${id}`}
        >
          <div className="flex items-center mb-1 mt-4 h-7">
            <span className="block h-4 bg-gray-50 rounded-full w-2/12" />
          </div>
          <div className="flex mb-6 h-10">
            <span className="block h-6 bg-gray-50 rounded-full w-3/12" />
          </div>
        </motion.div>
        <motion.div
          className="relative text-center mx-auto w-full h-96 mt-8 lg:mt-24"
          layoutId={`card-image-container-${id}`}
        >
          <div className="opacity-50 flex items-center justify-center h-15">
            <span className="h-8 bg-gray-50 rounded-full w-2/12" />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
