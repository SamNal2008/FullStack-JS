import React from 'react';
import './App.css';
import MyLoginPage from "./components/auth/login/my-login-page";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./components/home/home-page";
import ViewPage from "./components/content/view-page";
import UsersPage from "./components/admin/users-page";
import AddNewUser from "./components/admin/add-new-user";
import MyRegisterPage from './components/auth/register/my-register-page';

function App() {
  let myHeader = 'myHeader';
  return (<div>
          <header className={myHeader}>
            My website
          </header>
          <Router>
              <Switch>
                  <Route path={'/'} exact component={() => <HomePage/>}/>
                  <Route path={'/auth/login'} exact component={() => <MyLoginPage/>}/>
                  <Route path={'/home'} exact component={() => <ViewPage/>}/>
                  <Route path={'/admin/users'} exact component={() => <UsersPage/>}/>
                  <Route path={'/admin/create-user'} exact component={() => <AddNewUser/>}/>
                  <Route path={'/auth/signup'} exact component={() => <MyRegisterPage/>}/>
              </Switch>
          </Router>
          <footer className={"myFooter"}>
              Thanks for coming on my website
          </footer>
      </div>
  );
}

export default App;
