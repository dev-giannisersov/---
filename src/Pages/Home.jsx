import { useState } from 'react'

// ROUTER RELATED IMPORTS
import { Link } from "react-router-dom";


function Home() {
    return (
        <div className="home-container">
      <h1>Smart Tourist Bus</h1>
      
      <Link to="/PassangerPage">
        <button>I am a Passenger</button>
      </Link>

      <Link to="/DriverPage">
        <button>I am a Driver</button>
      </Link>
    </div>
    )
}

export default Home;