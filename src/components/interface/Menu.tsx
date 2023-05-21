import { useContext } from "react";
import FormGeneric from "../common/FormGeneric";
import styles from "@/styles/interfaces/interface.module.css";
import { UserContext } from "@/context/UserContext";
import { disclaimer, names } from "@/utils/data";
const Menu = () => {
  const { createData, loadMoney } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <h3>Menu</h3>
      <div>
        <FormGeneric
          formAction={createData}
          name={names[0]}
          disclaimer={disclaimer[0]}
        />
        <FormGeneric
          formAction={loadMoney}
          name={names[1]}
          disclaimer={disclaimer[1]}
        />
      </div>
    </div>
  );
};

export default Menu;
