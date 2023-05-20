import styles from "@/styles/home.module.css";
import UserContainer from "@/container/UserContainer";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.h2}>Hello {user?.email?.replace(/@.*$/, "")}</h2>
      </div>
      <UserContainer />
    </div>
  );
};

export default Home;
