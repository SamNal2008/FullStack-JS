import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';


function UsersPage() {
    interface UserInterface {
        _login: string;
        _id: number;
        _mail: string;
        _password: string;
        _promo: number;
        _picture: string;
        _firstName: string;
        _lastName: string;
    }

    let backendUsers:UserInterface[] = [];
    axios.get('http://localhost:3001/users')
        .then( res => {
            console.log(res.data);
            backendUsers = res.data;
        });

    let history = useHistory();
    const [users, setUsers] = useState<UserInterface[]>(backendUsers);

    return (
        <div>
            <ul>
            {
                users.map(user => <li>{user._login} - <button>X</button></li>)
            }
            </ul>
            <button onClick={() => {history.push('/admin/create-user')}}>Create user</button>
        </div>
    )
}

export default UsersPage;
