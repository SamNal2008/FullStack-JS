import { Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { Button } from 'react-bootstrap';
import './MyNavbar.css';
import { useEffect, useState } from 'react';

function MyNavbar() {
    let isLoggedIn = localStorage.getItem('accessToken');
    const [navbarUserIsLogged, setnavbarUserIsLogged] = useState(false);
    useEffect(() => {
        (async () => {
            const loggedIn = localStorage.getItem('accessToken');
            if (loggedIn) setnavbarUserIsLogged(true);
        })();
    }, [navbarUserIsLogged])
    return (
        <Navbar bg="bg-blue" expand="lg" className={'MyNavbar'}>
            <Navbar.Brand href="/home">My Website</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                {!navbarUserIsLogged && <Nav.Link href="/login">Login</Nav.Link>}
                {!navbarUserIsLogged && <Nav.Link href="/register">Signup</Nav.Link>}
                { navbarUserIsLogged &&
                    <NavDropdown title="Admin" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/users">Users pannel</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                }
                </Nav>
                { navbarUserIsLogged && <button type="button" className={"btn btn-info"}>Info</button>}
                {navbarUserIsLogged && <button className={'btn btn-outline-danger'} onClick={() => {
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('userInfos');
                }}>Sign out</button>}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar;

