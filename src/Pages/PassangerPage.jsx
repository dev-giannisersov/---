import { useState } from 'react'

// ROUTER RELATED IMPORTS
import { Link } from "react-router-dom";

import Footer from '../ExtraComponents/Footer.jsx';
import PassangerDashboard from '../ExtraComponents/PassangerDashboard.jsx';

function PassangerPage() {
    return (
        <div className='CENTER-OPTIONS'>
        <div>Passenger</div>

        <div className='Options-Driver'>
    <div className='row-driver'>
        <Link to="/passenger/view" className="option-box">
            Driver’s View
        </Link>

        <Link to="/passenger/Sightseeing" className="option-box">
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

        <Footer />
        <PassangerDashboard />
        </div>
    )
}

export default PassangerPage;