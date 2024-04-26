import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main'
import Projects from './Projects'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
