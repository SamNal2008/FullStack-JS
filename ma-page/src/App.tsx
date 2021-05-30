import React from 'react';
import './App.css';
import MyLoginPage from "./components/auth/login/LoginForm";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';

function App() {
  let myHeader = 'myHeader';
  return (<div>
          <header className={myHeader}>
            My website
          </header>
          <Router>
              <Switch>
                  <Route path={'/'} exact component={() => <HomePage/>}/>
                  <Route path={'/login'} exact component={() => <LoginPage/>}/>
                  <Route path={'/home'} exact component={() => <HomePage/>}/>
                  <Route path={'/register'} exact component={() => <RegisterPage/>}/>
              </Switch>
          </Router>
          <footer className={"myFooter"}>
              Thanks for coming on my website
          </footer>
      </div>
  );
}

export default App;
