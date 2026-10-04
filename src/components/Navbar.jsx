import "./Navbar.css";

function Navbar(){
    return (
    
      <nav className="navbar">
        <div className="logo">
          MERIDIAN
        </div>
        <div className="nav-links">
          <button aria-label="Open menu" className="menu-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>
    
  )
}

export default Navbar;