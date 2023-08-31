import "./NavBar.css";
import { NavLink } from 'react-router-dom'

function navLinkStyles({ isActive }) {
    
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "rgb(200, 65, 65)" : "white",
    };
  }


function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <h3 className="navbar-styles align">{props.brandName}</h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {" "}
              <NavLink style={navLinkStyles} className="nav-link" to="/about">
                {props.title3}
            </NavLink>
            </li>
            <li className="nav-item">
              {" "}
              <NavLink style={navLinkStyles} className="nav-link" to="/contact">
                {props.title2}
            </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
