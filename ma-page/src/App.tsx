import React, { useState } from 'react';
import './App.css';
import MyLoginPage from "./components/auth/login/LoginForm";
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/navbar/MyNavbar';
import UsersPage from './pages/users/UsersPage';

function App() {
  let myHeader = 'myHeader';
  const history = useHistory();
  return (<div>
          <header className={myHeader}>
            My website
          </header>
          <MyNavbar/>
          <Router>
              <Switch>
                  <Route path={'/'} exact component={() => <HomePage/>}/>
                  <Route path={'/login'} exact component={() => <LoginPage/>}/>
                  <Route path={'/home'} exact component={() => <HomePage/>}/>
                  <Route path={'/register'} exact component={() => <RegisterPage/>}/>
                  <Route path={'/users'} exact component={() => <UsersPage/>}/>
              </Switch>
          </Router>
          <footer className={"myFooter"}>
              Thanks for coming on my website
          </footer>
      </div>
  );
}

export default App;
