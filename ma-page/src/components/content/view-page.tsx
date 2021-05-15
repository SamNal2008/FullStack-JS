function ViewPage() {
    let connectionInfo = {
        isLoggedIn: false,
    };
    return (<div>
        {connectionInfo.isLoggedIn ? <div>Admin</div> : <div>User</div>}
    </div>);
}

export default ViewPage;
