import { useState } from 'react'

// ROUTER RELATED IMPORTS
import { Link } from "react-router-dom";

function DriverPage() {
    return (
        <>
        <div>DRIVER</div>

        <Link to="/">
            <button>GO HOME</button>
        </Link>
        </>
    )
}

export default DriverPage;