import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const App = () => {


  const Home = lazy(() => import('./pages/Home'))

  return (
    <Suspense fallback={<Loaader/>}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout wrappedComponent={<Home />} />} />
        </Routes>
      </BrowserRouter>

    </Suspense>
  );
}

export default App;


const Loaader = () => {
  return <>
    <div className='flex gap-2 justify-center items-center h-screen w-screen' >
      <div className='h-3 animate-bounce w-3 rounded-full bg-gray-800' style={{ animationDelay: "0s" }}  ></div>
      <div className='h-3 animate-bounce w-3 rounded-full bg-gray-800' style={{ animationDelay: "0.3s" }} ></div>
      <div className='h-3 animate-bounce w-3 rounded-full bg-gray-800' ></div>
    </div>
  </>
}