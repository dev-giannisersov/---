import { useState } from 'react'

// ROUTER RELATED IMPORTS
import { Link } from "react-router-dom";

import Footer from '../ExtraComponents/Footer.jsx';
import QuestionMarkInner from '../ExtraComponents/QuestionMarkInner.jsx'
import PassangerDashboard from '../ExtraComponents/PassangerDashboard.jsx';

function PassangerPage() {

    const [Info, setInfo] = useState(false)

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
        <QuestionMarkInner onClick={() => {setInfo(!Info)}} />
        <div className='Box_Info'
        style={{opacity : Info ? "1" : "0"}}
        >
            This is the Passanger page, as a passanger you have 4 choises!,
            You can look through the drivers camer
            Order something from a local cafeteria,
            learn information about some of the most famous sights within Athens
            or use Walking mode for navigation!
        </div>
        </div>
    )
}

export default PassangerPage;