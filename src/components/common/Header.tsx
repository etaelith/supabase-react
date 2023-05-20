import { useContext } from "react";
import DarkMode from "./DarkMode";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";
const Header: React.FC = () => {
  const { signOut } = useContext(AuthContext);
  const location = useLocation();
  return (
    <header>
      <DarkMode />
      {location.pathname === "/user/login" ? (
        <Link to="/user/signup" className="btn">
          SignUp
        </Link>
      ) : location.pathname === "/user/signup" ? (
        <Link to="/user/login" className="btn">
          LogIn
        </Link>
      ) : (
        <button onClick={signOut} className="btn">
          Log Out
        </button>
      )}
    </header>
  );
};

export default Header;
