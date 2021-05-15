interface UserInterface {
    login: string;
    id: number;
    mail: string;
    password: string;
    promo: number;
    picture: string;
    firstName: string;
    lastName: string;
}

function DisplayUser(user: UserInterface) {
    return (<div>
        {user.login}
    </div>)
}

export default DisplayUser;
