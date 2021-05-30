import './HomePage.css';
import { useHistory } from 'react-router-dom'; 

function HomePage() {
    const history = useHistory();
    if (localStorage.getItem('accessToken')) {
        return (<div>
                <h1>Welcome you</h1>
                <button onClick={() => {
                    localStorage.removeItem('accessToken');
                    history.push('/');
                }}>Logout</button>
            </div>)
    }
    return (<div className="HomePage">
        <h1>Home Page</h1>
        <button onClick={() => {
            history.push('/register');
        }}>Register</button>
        <br/>
        <button onClick={() => {
            history.push('/login');
        }}>Login</button>
    </div>)
}

export default HomePage;