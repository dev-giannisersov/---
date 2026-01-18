import { useState } from 'react'

// ROUTER RELATED IMPORTS
import { Link } from "react-router-dom";

function PassangerPage() {
    return (
        <>
        <div>Passanger</div>

        <Link to="/">
            <button>GO HOME</button>
        </Link>
        </>
    )
}

export default PassangerPage;