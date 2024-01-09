import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <nav>
            <NavLink to=".">Home</NavLink>
            <NavLink to="users">Users</NavLink>
            <NavLink to="contact">Contact</NavLink>
        </nav>
    )
}