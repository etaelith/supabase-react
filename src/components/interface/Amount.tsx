import { useContext } from "react";
import BodyTable from "./amount/BodyTable";
import HeadTable from "./amount/HeadTable";
import styles from "@/styles/interface.module.css";
import { UserContext } from "@/context/UserContext";
import TableBodyTest from "../common/TableBodyLoading";
const Amount = () => {
  const { state } = useContext(UserContext);
  return (
    <>
      <table className={styles.table}>
        <HeadTable />
        <tbody>
          {state.amount.length > 0 ? (
            state.amount.map((item, index) => (
              <BodyTable key={index} item={item} />
            ))
          ) : (
            <TableBodyTest cantidad={3} />
          )}
        </tbody>
      </table>
    </>
  );
};

export default Amount;
