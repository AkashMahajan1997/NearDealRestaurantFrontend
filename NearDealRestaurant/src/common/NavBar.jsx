import "./NavBar.css";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleAccountClick = () => {
    navigate("/login");
  };

  return (
    <div className="navbar-container">
      <div className="logo">
        <span>NearDeal</span>
      </div>
      <div className="nav-links">
        <span>Events</span>
        <span>Stories</span>
        <span>Deals</span>
      </div>
      <div className="account-icon" onClick={handleAccountClick}>
        <FaUserCircle size={40} className="icon" />
      </div>
    </div>
  );
}

export default NavBar;