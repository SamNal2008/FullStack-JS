import './LoginForm.css'
import React, {useState} from "react";
import { Redirect, useHistory } from 'react-router-dom';
import Axios from 'axios';

function LoginForm() {

    const [name, setLogin] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();

    const verifyIdentity = async () => {
        let userVerified = false;
        await Axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, {"name": name, "password": password})
            .then(res => {
                console.log(res);
                console.log(res.data);
                if (res.status === 201) {
                    userVerified = true;
                }
                else {
                    userVerified = false;
                }
            });
        return userVerified;
    }

    const clickSubmit = (event: any) => {
        event.preventDefault();
        Axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, {"name": name, "password": password}).then(res => {
            console.log(res.data);
            localStorage.setItem('accessToken', res.data.accessToken);
            history.push('/home');
        }).catch(err => {
            console.error(err);
            alert('Invalid creds');
        })
    }

    return (<div className={"LoginForm"}>
        <h1>Connection page</h1>
        <label>
            Login
        </label>
        <input type="text" name="login" onChange={(event) => setLogin(event.target.value)}/>
        <br/>
        <label>
            Password
        </label>
        <input type={"password"} name={"password"} onChange={(event) => {setPassword(event.target.value)}}/>
        <br/>
        <button onClick={clickSubmit}>Submit</button>
    </div>);
}

export default LoginForm;
