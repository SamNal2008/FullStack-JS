import React, {useState} from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function AddNewUser() {

    const [uid, setUid] = useState('');
    const [given_name, setGivenName] = useState('');
    const [family_name, setFamilyName] = useState('');
    const [preferred_username, setPreferredUsername] = useState('');
    const [picture, setPicture] = useState('');
    const [email, setEmail] = useState('');
    const [graduation_years, setGraduationYears] = useState('');

    let history = useHistory();

    const clickSubmit = (event: any) => {
        event.preventDefault();
        let newUser = {
            uid: uid,
            given_name: given_name,
            family_name: family_name,
            preferred_username: preferred_username,
            picture: picture,
            email: email,
            graduation_years: graduation_years,
        };
        axios.post('http://localhost:3001/users', newUser)
            .then(res => {
                if (res.status === 201) {
                    alert('Nouvel utilisateur ajouté avec succés !');
                    history.push('/admin/users');
                }
                else {
                    alert('Le nouvel utilisateur na pas pu être ajouté !');
                }
                console.log(res);
                console.log(res.data);
            });
    }

    return (
        <div className={"myAddUserComponent"}>
            <h1>Add a new user</h1>
            <label>
                UID
            </label>
            <input type="text" name="uid" onChange={(event) => setUid(event.target.value)}/>
            <br/>
            <label>
                Prénom
            </label>
            <input type="text" name="given_name" onChange={(event) => setGivenName(event.target.value)}/>
            <br/>
            <label>
                Nom de famille
            </label>
            <input type="text" name="family_name" onChange={(event) => setFamilyName(event.target.value)}/>
            <br/>
            <label>
                Login
            </label>
            <input type="text" name="preferred_username" onChange={(event) => setPreferredUsername(event.target.value)}/>
            <br/>
            <label>
                Photo
            </label>
            <input type="text" name="picture" onChange={(event) => setPicture(event.target.value)}/>
            <br/>
            <label>
                Email
            </label>
            <input type="text" name="email" onChange={(event) => setEmail(event.target.value)}/>
            <br/>
            <label>
                Année de promo
            </label>
            <input type="text" name="graduation_years" onChange={(event) => setGraduationYears(event.target.value)}/>
            <br/>
            <button onClick={clickSubmit}>Submit</button>
        </div>
    )
}


export default AddNewUser;
