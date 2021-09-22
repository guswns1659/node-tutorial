import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {loginUser, registerUser} from "../../../_actions/user_action";

function RegisterPage(props) {

    const disPatch = useDispatch();

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (Password !== ConfirmPassword) {
            return alert('Fail to confirm password')
        }

        let body = {
            name: Name,
            email: Email,
            password: Password,
        }

        disPatch(registerUser(body))
            .then(response => {
                if (response.payload.success) {
                    props.history.push('/login')
                } else {
                    alert('Failed to sign-up')
                }
            })
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={onSubmitHandler}>

                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler} />

                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />

                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />

                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />

                <br/>
                <button>
                    Register
                </button>
            </form>
        </div>
    );
}

export default RegisterPage;