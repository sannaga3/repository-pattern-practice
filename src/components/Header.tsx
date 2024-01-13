import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Top</Link>
          </li>
          <li>
            <Link to="/users">UserList</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
