import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {loginUser} from '../../../_actions/user_action';
import {response} from "express";

function LoginPage(props) {
    const disPatch = useDispatch();

    /** Init state instead of props, because state is used in one component.
     */
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSumbitHandler = (event) => {
        /** prevent page refreshing.
         */
        event.preventDefault();

        let body = {
            email: Email,
            password: Password
        }

        disPatch(loginUser(body))
            .then(response => {
                if(response.payload.loginSuccess) {
                    props.history.push('/')
                } else {
                    alert('Error')
                }
            })
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <form style={{display: 'flex', flexDirection: 'column'}}
                onSubmit={onSumbitHandler}
            >

                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler}/>
                <label>Password</label>
                <input type="Password" value={Password} onChange={onPasswordHandler}/>
                <br/>
                <button>
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginPage;