import { User } from '../../../interfaces/User.interface';

function ProfileComponent(props: User) {
    return (<div>
        <h1>Profile</h1>
        <div>
            {props.id}
            {props.name}
        </div>
    </div>)
}

export default ProfileComponent;