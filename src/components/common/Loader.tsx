import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex justify-center items-center w-full h-screen fixed top-0 left-0 border">
      <motion.div
        className="size-30 bg-black dark:bg-white rounded-xl"
        aria-label="로딩 중"
        tabIndex={0}
        role="status"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
