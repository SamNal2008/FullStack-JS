import React, { useEffect, useState } from "react";
import Axios from 'axios';
import UserItem from "../../components/users/User.item";
import './UserPage.css'
import { User } from '../../interfaces/User.interface';


export default function UsersPage() {
    //const res = Axios.get(`${process.env.REACT_APP_BACKEND_URL}/users`);
    const [users, setUsers] = useState<User[]>([]);
    let randomUser: User = {id: 1, name: "sam", email: "sam@sam.fr", password: "oui"};
    /*useEffect(() => {
        async function fetchUsers()
        {
            const res = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/users`);
            let incomingUsers = res.data;
            setUsers(incomingUsers);
        }
        fetchUsers();
    }, [users])*/
    console.log(users);

    return (<div className={'UserPage'}>
        <h1>User Page</h1>
        <ol>
            <li>Oui</li>
            <li><UserItem {...randomUser}/></li>
        </ol>
        
        </div>);
}