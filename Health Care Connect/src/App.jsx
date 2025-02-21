import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout wrappedComponent={<>Home</>} />} />
    </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
