import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    return <nav className="navbar">
        <div className="navbar-container" aria-label="Main navigation">
            <Link to="/" className="navbar-brand">
              Shop<span className="accent">Hub</span>
            </Link>
            <div className="navbar-links">
                <NavLink to="/" className="navbar-link">Home</NavLink>
                <NavLink to="/checkout" className="navbar-link">Cart</NavLink>
            </div>
            <div className="navbar-auth">
                <div className="navbar-auth-links">
                    <Link to="/auth" className="btn btn-secondary">Login</Link>
                    <Link to="/auth" className="btn btn-primary">Sign Up</Link>
                    
                </div>
            </div>
        </div>
    </nav>
}