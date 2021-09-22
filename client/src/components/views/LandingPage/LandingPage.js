import React, {useEffect} from 'react';
import axios from "axios";

function LandingPage(props) {

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