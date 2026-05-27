import { Link, useLocation } from 'react-router-dom'
import '../styles/navbar.css'

export default function NavBar() {
  const { pathname } = useLocation()

  return (
    <nav className="menu-bar">
      <Link to="/home" className={`menu-item${pathname === '/home' || pathname === '/home-next' ? ' active' : ''}`}>
        <span className="min-icon">&#xE110;</span>
        <span>HOME</span>
      </Link>
      <Link to="/map" className={`menu-item${pathname === '/map' ? ' active' : ''}`}>
        <span className="min-icon">&#xEFA0;</span>
        <span>MAP</span>
      </Link>
      <Link to="/my" className={`menu-item${pathname === '/my' ? ' active' : ''}`}>
        <span className="min-icon">&#xEF20;</span>
        <span>MY PAGE</span>
      </Link>
      <Link to="/setting" className={`menu-item${pathname === '/setting' ? ' active' : ''}`}>
        <span className="min-icon">&#xE0B0;</span>
        <span>SETTING</span>
      </Link>
    </nav>
  )
}
