import { useState } from 'react'

// ROUTER RELATED IMPORTS
import { Link } from "react-router-dom";


import Footer from './Footer.jsx';

function Home() {
  const [isInfoActive, setIsInfoActive] = useState(false);

    return (
    <div className="home-container">

      <div 
        className='Helper'
        onClick={() => setIsInfoActive(!isInfoActive)}
      >?</div>
      <div className={`Help-Main ${isInfoActive ? 'active' : ''}`}>
        CLICK THE BUTTON THAT DESCRIBES YOU BEST
      </div>

        <h1>Smart Tourist Bus of Athens</h1>

        <div className='Links-Main'>
          <Link to="/PassangerPage">
            <button
              onClick={() => setIsInfoActive(false)}
            >I am a Passenger</button>
          </Link>

          <Link to="/DriverPage">
            <button
              onClick={() => setIsInfoActive(false)}
            >I am a Driver</button>
          </Link>
        </div>
        <Footer />
    </div>
    )
}

export default Home;