import { Link } from 'react-router-dom'
import * as userService from '../utilities/users-service'

function NavBar(props) {
    function handleLogOut() {
        // Delegate to the users-service
        userService.logOut();
        // Update state will also cause a re-render
        props.setUser(null);
    }

    return (
        <nav>
            <Link to="/orders">Order History</Link>
            {" | "}
            <Link to="/orders/new">New Order</Link>
            {" | "}
            <div>Welcome, {props.user.name}</div>
            {" | "}
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>)
}

export default NavBar