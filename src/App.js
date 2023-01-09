import './App.css';
import './Media.css'
import './index.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import styled, { css } from 'styled-components'


import Layout from './Home/Layout';
import LeftsideBlog from './assets/LeftsideBlog';
import Readingblog from './component/Readingblog';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Layout />} />
          <Route path="/about" element={<LeftsideBlog />} />
          <Route path="/readingblog" element={<Readingblog />} />
        </Routes>
      </Router>

    </>
  );
}


export default App;
