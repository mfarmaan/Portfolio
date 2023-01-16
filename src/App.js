import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import './Media.css'
import './index.css'
import Layout from './Home/Layout';
import LeftsideBlog from './assets/LeftsideBlog';
import Readingblog from './component/Readingblog';
import Register from './Admin/Register';
import Dashboard from './Admin/Dashboard';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Layout />} />
          <Route path="/about" element={<LeftsideBlog />} />
          <Route path="/readingblog" element={<Readingblog />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Dashboard />} />

          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Router>

    </>
  );
}


export default App;
