import React, {useEffect} from 'react';
import userEvent from "@testing-library/user-event";
import axios from "axios";

function LandingPage() {

    // CORS test using proxy
    useEffect(() => {
        axios.get('/api/hello').then(r => console.log(r))
    })

    return (
        <div>
            LandingPage
        </div>
    );
}

export default LandingPage;