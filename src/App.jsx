import { useState } from 'react'
import './App.css'

// PAGES IMPORT HERE
import Home from './Pages/Home.jsx';
import DriverPage from './Pages/DriverPage.jsx';
import PassangerPage from './Pages/PassangerPage.jsx'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="DriverPage" element={<DriverPage/>}></Route>
        <Route path="PassangerPage" element={<PassangerPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
