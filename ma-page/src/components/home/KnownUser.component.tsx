import { useHistory } from 'react-router-dom';

export default function KnownUser() {
    const history = useHistory();
    const userName = localStorage.getItem('userInfo')
    return (<div>
        <h1>Welcome you</h1>
    </div>)
}