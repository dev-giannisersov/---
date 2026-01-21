import { useState } from 'react'

// ROUTER RELATED IMPORTS
import { Link } from "react-router-dom";

function DriverPage() {
    return (
        <div className='CENTER-OPTIONS'>
        <div>DRIVER</div>

        <div className='Options-Driver'>
    <div className='row-driver'>
        <Link to="/driver/assistant" className="option-box">
            Safety Assistant
        </Link>

        <Link to="/driver/climate" className="option-box">
            Climate Control
        </Link>
    </div>

    <div className='row-driver'>
        <Link to="/driver/solar" className="option-box">
            Solar Manager
        </Link>

        <Link to="/driver/robot" className="option-box">
            Robot Vacuum
        </Link>
    </div>
</div>

        <Link to="/">
            <button className='exit-button'>GO HOME</button>
        </Link>
        <div className='footer'>
          ΕΡΓΑΣΙΑ ΑΛΛΗΛΕΠΙΔΡΑΣΙΑΣ ΑΝΘΡΩΠΟΥ-ΥΠΟΛΟΓΙΣΤΗ - ΕΡΣΩΒ ΙΩΑΝΝΗΣ - 2025
        </div>
        </div>
    )
}

export default DriverPage;