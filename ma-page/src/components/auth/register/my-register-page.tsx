import React, {useEffect, useState} from "react";
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import Axios from 'axios';


const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

function MyRegisterPage() {
    console.log('Register');
    let history = useHistory();
    const [password, setPassword] = useState('');
    const [isError, setError] = useState(false);
    let errorOccured: boolean = false;
    let userInfo: any = null;
    let query = useQuery();  
    let id = query.get('id');
    Axios.get(`http://localhost:8000/cri_infos?sessionID=${id}`).then(res => {
        console.log(res);
        userInfo = res;
    }).catch(err => console.error(err));

    const myComponent = (<div><h1>Welcome {userInfo}</h1>
        <h2>Please enter your new password</h2>
        <input type="password" name="passwd" id="passwd" onChange={(event) => {
            setPassword(event.target.value);
        }}></input>
        <button onClick={ () => {
        let data = {
            "password": password,
            "id": id
        }
        Axios.post('http://localhost:8000/auth/create_password', data);
        }}>Confirmer</button>
        </div>);
    
    return (<div className={"MyRegisterPage"}>
        {myComponent}
    </div>);
}

export default MyRegisterPage;