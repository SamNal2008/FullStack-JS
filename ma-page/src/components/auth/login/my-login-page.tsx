import './my-login-page.css'
import React, {useState} from "react";
import { Redirect, useHistory } from 'react-router-dom';
import Axios from 'axios';

function MyLoginPage() {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();

    const verifyIdentity = async () => {
        let userVerified = false;
        await Axios.get('http://localhost:8000/auth/login')
            .then(res => {
                console.log(res);
                console.log(res.data);
                if (res.status === 200) {
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
        let isVerified = verifyIdentity();
        if (isVerified) {
            history.push('/home');
        }
        else {
            alert('Invalid credentials !');
        }
    }

    return (<div className={"myLoginPage"}>
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

export default MyLoginPage;
