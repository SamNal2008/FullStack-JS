import React, {useEffect, useState} from "react";
import { Redirect, useHistory } from 'react-router-dom';
import Axios from 'axios';


function MyRegisterPage() {
    console.log('Register');
    let history = useHistory();
    const [isError, setError] = useState(false);
    const [password, setPassword] = useState('');
    const [userInfo, setUserInfo] = useState('');
    useEffect(() => {
        Axios.get('http://localhost:8000/cri_infos').then(res => {
            console.log(res);
            alert('Success');
            return res;  
        }).catch(err => {
            alert('Error');
            console.error(err);
            setError(true);
            return (<h1>Invalid connection</h1>);
        })});
    return (<div className={"MyRegisterPage"}>
        <h1>Welcome {userInfo}</h1>
        <h2>Please enter your new password</h2>
        <input type="password" name="passwd" id="passwd" onChange={(event) => {
            setPassword(event.target.value);
        }}></input>
        <button onClick={ () => {
        console.log(userInfo);
        console.log(password);
        }}>Confirmer</button>
    </div>);
}

export default MyRegisterPage;