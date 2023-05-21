import FormBill from "../interface/menu/FormBill";
import FormCash from "./menu/FormCash";
import styles from "@/styles/interfaces/interface.module.css";
const Menu = () => {
  return (
    <div className={styles.container}>
      <h3>Menu</h3>
      <div>
        <FormBill />
        <FormCash />
      </div>
    </div>
  );
};

export default Menu;
