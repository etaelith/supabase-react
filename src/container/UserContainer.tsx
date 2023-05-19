import { useContext } from "react";
import FormBill from "@/components/FormBill";
import { UserContext } from "@/context/UserContext";
import Item from "@/components/common/Item";
import styles from "@/styles/userContainer.module.css";
import DisplayChart from "@/components/common/DisplayChart";
import FormLoadMoney from "@/components/FormLoadMoney";
const UserContainer = () => {
  const { todo, loading } = useContext(UserContext);
  const items = todo.tabs;
  const elements = items?.map((item) => <Item key={item.id} item={item} />);
  return (
    <>
      <div className={styles.forms}>
        <FormLoadMoney />
        <FormBill />
      </div>
      <div className={styles.charts}>
        <DisplayChart />
      </div>
      <div className={styles.ul}>
        {!loading ? <div>loading</div> : elements}
      </div>
    </>
  );
};

export default UserContainer;
