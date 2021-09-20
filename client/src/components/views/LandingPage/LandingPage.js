import React, {useEffect} from 'react';
import userEvent from "@testing-library/user-event";
import axios from "axios";

function LandingPage() {

    useEffect(() => {
        axios.get('/api/hello').then(r => console.log(r))
    })

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <h2>
                시작페이지
            </h2>
        </div>
    );
}

export default LandingPage;