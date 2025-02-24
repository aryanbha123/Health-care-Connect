import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { motion, AnimatePresence } from "framer-motion";

const Home = lazy(() => import('./pages/Home'));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulated loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense fallback={<Loaader />}>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout wrappedComponent={<Home />} />} />
          </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

const LogoLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <motion.img
        src="/logo/main.png" // Replace with your logo
        alt="Loading..."
        className="w-[400px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

const Loaader = () => {
  return (
    <div className='flex gap-2 justify-center items-center h-screen w-screen'>
      <div className='h-3 w-3 rounded-full bg-gray-800 animate-bounce' style={{ animationDelay: "0s" }}></div>
      <div className='h-3 w-3 rounded-full bg-gray-800 animate-bounce' style={{ animationDelay: "0.3s" }}></div>
      <div className='h-3 w-3 rounded-full bg-gray-800 animate-bounce'></div>
    </div>
  );
};
