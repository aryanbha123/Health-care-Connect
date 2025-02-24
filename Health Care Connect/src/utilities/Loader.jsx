import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LogoLoader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulated loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-transparent z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          >
            <motion.img
              src="/logo/main.png" // Replace with your logo
              alt="Loading..."
              className="w-[300px]"
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
      >
        {!loading && children}
      </motion.div>
    </>
  );
}
