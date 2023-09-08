import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="/policy">Policy</Link>
        </li>
        <li>
          <Link to="/newemp">Add New Employee</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
