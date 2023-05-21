import { TabData } from "@/interfaces/interfacesUser";
import styles from "@/styles/item.module.css";
import deleteIcon from "@/assets/delete.svg";

import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
type ItemsProps = {
  item: TabData;
};
const Item = ({ item }: ItemsProps) => {
  const time = new Date(`${item.created_at}`).toLocaleDateString();
  const { deleteData } = useContext(UserContext);
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.amount}</td>
      <td>{time}</td>
      <td>{String(item.paid_up)} </td>
      <td>
        {" "}
        <img
          className={styles.img}
          src={deleteIcon}
          onClick={() => deleteData(item.id)}
        />
      </td>
    </tr>
  );
};

export default Item;
/* <div className={styles.li}>
      <div className={styles.dates}>
        <span>{item.name}</span>
        <span>{item.amount}</span>
        <span>{time}</span>
        <div>{String(item.paid_up)}</div>
      </div>
      <div className={styles.divimg}>
        <img
          src={rotateIcon}
          className={styles.img}
          onClick={() => changeState(item.id, item.paid_up)}
        />
        <img
          className={styles.img}
          src={deleteIcon}
          onClick={() => deleteData(item.id)}
        />
      </div>
    </div> */
