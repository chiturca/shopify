import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <Link className="logo" to="/">
          <img src={Logo} alt="logo" height="100px" />
        </Link>
        <div>
          <Link to="/">Home</Link>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
