import { User } from '../../interfaces/User.interface';

export default function UserItem(props: User) {
    return (<div>
        <div>{props.id} - {props.name}</div>
        </div>)
}