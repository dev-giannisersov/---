import { useState } from 'react'

// ROUTER RELATED IMPORTS
import { Link } from "react-router-dom";

function PassangerPage() {
    return (
        <div className='CENTER-OPTIONS'>
        <div>Passenger</div>

        <div className='Options-Driver'>
    <div className='row-driver'>
        <Link to="/passenger/view" className="option-box">
            Driver’s View
        </Link>

        <Link to="/passenger/map" className="option-box">
            Smart Sightseeing
        </Link>
    </div>

    <div className='row-driver'>
        <Link to="/passenger/cafe" className="option-box">
             Cafe Ordering
        </Link>

        <Link to="/passenger/walking" className="option-box">
             Walking Mode
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

export default PassangerPage;