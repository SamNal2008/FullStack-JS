import './HomePage.css';
import KnownUser from '../../components/home/KnownUser.component';
import UnknownUser from '../../components/home/UnknowUser.component';

function HomePage() {
    if (localStorage.getItem('accessToken')) {
        return (<KnownUser/>);
    }
    return (<UnknownUser/>)
}

export default HomePage;