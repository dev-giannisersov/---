import { useState } from 'react'
import './App.css'

// PAGES IMPORT HERE
import Home from './Pages/Home.jsx';
import DriverPage from './Pages/DriverPage.jsx';
import PassangerPage from './Pages/PassangerPage.jsx'

import RoadView from './Pages/RoadView.jsx';
import Cafe from './Pages/Cafe.jsx';
import Sightseeing from './Pages/Sightseeing.jsx';
import Walk from './Pages/Walk.jsx';

import Safety from './Pages/Safety.jsx';
import Solar from './Pages/Solar.jsx';
import Climate from './Pages/Climate.jsx';
import Robot from './Pages/Vacuum.jsx';  


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home/>}></Route>

        <Route path="DriverPage" element={<DriverPage/>}></Route>
        <Route path="PassangerPage" element={<PassangerPage/>}></Route>

        <Route path="passenger/view" element={<RoadView/>}></Route>
        <Route path="Passenger/Cafe" element={<Cafe/>}></Route>
        <Route path="Passenger/Sightseeing" element={<Sightseeing/>}></Route>
        <Route path="Passenger/Walking" element={<Walk/>}></Route>

        <Route path="driver/assistant" element={<Safety/>}></Route>
        <Route path="driver/solar" element={<Solar/>}></Route>
        <Route path="driver/climate" element={<Climate/>}></Route>
        <Route path="driver/robot" element={<Robot/>}></Route>

      </Routes>
    </Router>
  )
}

export default App
