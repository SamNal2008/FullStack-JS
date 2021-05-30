import './LoginForm.css'
import React, {useState} from "react";
import { Redirect, useHistory } from 'react-router-dom';
import Axios from 'axios';

function LoginForm() {

    const [name, setLogin] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();

    const clickSubmit = (event: any) => {
        event.preventDefault();
        Axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, {"name": name, "password": password}).then(res => {
            localStorage.setItem('accessToken', res.data.accessToken);
            console.log(res.data);
            history.push('/home');
        }).catch(err => {
            console.error(err);
            alert('Invalid creds');
        })
    }

    return (<div className={"LoginForm"}>
        <h1>Login form</h1>
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
