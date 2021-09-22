import axios from "axios";
import {LOGIN_USER} from "./types";

export function loginUser(dataToSubmit) {

    const response = axios.post('/api/users/login', dataToSubmit)
        .then(r => r.data);

    return {
        type: LOGIN_USER,
        payload: response
    }
}