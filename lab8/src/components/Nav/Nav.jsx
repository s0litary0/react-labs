import './Nav.css'
import { NavLink, Link } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import { logout } from '../../firebase/auth'; 

export default function Nav() {
  const { userLoggedIn } = useAuth();
  return (
    <nav>
      <ul className="list">
        <li><NavLink className="link" to="/">Home</NavLink></li>
        <li><NavLink className="link" to="/characters">Characters list</NavLink></li>
        <li><NavLink className="link" to="/about">About</NavLink></li>

        {!userLoggedIn && (<><li><NavLink className="link" to="/sign-up">Sign up</NavLink></li>
        <li><NavLink className="link" to="/login">Login</NavLink></li></>)}

        {userLoggedIn && (<><li><NavLink className="link" to="/profile">Profile</NavLink></li>
        <li><Link className="link" to="/" onClick={() => logout()}>Logout</Link></li></>)}
      </ul>
    </nav>
  )
}