import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const Preloader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  const letters = ['L', 'O', 'A', 'D', 'I', 'N', 'G'];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0D0C12] dark:bg-[#0D0C12]"
    >
      <div className="flex gap-4">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.1,
            }}
            className="text-4xl font-bold text-gray-300"
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};
