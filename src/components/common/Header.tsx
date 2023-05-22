import { useContext } from "react";
import DarkMode from "./DarkMode";
import { useLocation } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";
import styles from "@/styles/header.module.css";
const Header: React.FC = () => {
  const { signOut } = useContext(AuthContext);
  const location = useLocation();
  return (
    <header className={styles.header}>
      <DarkMode />
      {location.pathname !== "/user/" && (
        <button onClick={signOut} className={styles.btn}>
          Log Out
        </button>
      )}
    </header>
  );
};

export default Header;
