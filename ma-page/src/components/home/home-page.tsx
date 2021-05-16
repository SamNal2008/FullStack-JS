import { Link } from "react-router-dom";
import './my-home-page.css'

function HomePage() {

    

    return (<div className={"MyHomePage"}>
        Hello there
        <Link to={'/auth/login'} className={'btn btn-primary'}>Login</Link>
        <a href={'http://localhost:8000/cri?redirectAddress=http://localhost:3000/auth/signup'} className={'btn btn-primary'}>Register with CRI</a>
    </div>);
}

export default HomePage;
