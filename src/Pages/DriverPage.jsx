import { useState } from 'react'

// ROUTER RELATED IMPORTS
import { Link } from "react-router-dom";

import Footer from '../ExtraComponents/Footer.jsx';
import QuestionMarkInner from '../ExtraComponents/QuestionMarkInner.jsx'
import DriverDashBoard from '../ExtraComponents/DriverDashBoard.jsx';

function DriverPage() {

    const [Info, setInfo] = useState(false)

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
        <Footer />
        <DriverDashBoard />
        <QuestionMarkInner onClick={() => {setInfo(!Info)}}/>
        <div className='Box_Info'
            style={{opacity : Info ? "1" : "0"}}
        >
            This is the Driver page, as a driver you have 4 critical controls!
            You can manage the Climate and Solar Roof systems to save energy ,
            monitor the Robot Vacuum for lost valuables ,
            receive real-time Safety Alerts for fatigue and speed ,
            or check the Door Status before moving!
        </div>
        </div>
    )
}

export default DriverPage; 