import './RegisterForm.css';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';


interface IFormInputs {
    name: string,
    email: string,
    password: string,
  }

function RegisterForm() {
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>();
    const onSubmit = (data: any) => {
        console.log(data);
        Axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/signup`, data).then((res) => {
            console.log(res);
            localStorage.setItem('accessToken', res.data.access_token);
            history.push('/');
        }).catch((err) => {
            console.error(err);
            alert('Error');
        })
    }
    console.log(errors);
    return (<div className={'register-form'}>
        <h1>You're here to register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="name" {...register("name", {required: true, maxLength: 80})} />
            <p>{errors.name && "Name is required"}</p>
            <input type="text" placeholder="email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
            <p>{errors.email && "Please enter a valid email"}</p>
            <input type="password" placeholder="password" {...register("password", {required: true, minLength: 6, maxLength: 20})} />
            <p>{errors.password && "Please enter a valid password : min 6 max 20"}</p>
        <input type="submit" />
    </form>
    </div>)
}


export default RegisterForm;