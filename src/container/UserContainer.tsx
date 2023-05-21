import { useContext } from "react";
import FormBill from "@/components/forms-user/FormBill";

import Item from "@/components/common/Item";
import styles from "@/styles/userContainer.module.css";
import DisplayChart from "@/components/common/DisplayChart";
import FormLoadMoney from "@/components/forms-user/FormLoadMoney";
import { UserContext } from "@/context/UserContext";
const UserContainer = () => {
  const { state, loading } = useContext(UserContext);
  const items = state.tabs;
  const elements = items?.map((item) => <Item key={item.id} item={item} />);
  return (
    <>
      <div className={styles.forms}>
        <FormLoadMoney />
        <FormBill />
      </div>
      <div className={styles.charts}>{/*  <DisplayChart /> */}</div>

      <table className={styles.table}>
        <thead>
          <tr className={styles.theadWithBorder}>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Payed</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{!loading ? <div>loading</div> : elements}</tbody>
      </table>
    </>
  );
};

export default UserContainer;
