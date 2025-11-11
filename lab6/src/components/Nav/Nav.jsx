import './Nav.css'
import { NavLink } from 'react-router-dom'


export default function Nav() {
  return (
    <nav>
      <ul className="list">
        <li><NavLink className="link" to="/">Home</NavLink></li>
        <li><NavLink className="link" to="/characters">Characters list</NavLink></li>
        <li><NavLink className="link" to="/about">About</NavLink></li>
        <li><NavLink className="link" to="/login">Login</NavLink></li>
      </ul>
    </nav>
  )
}