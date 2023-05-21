import styles from "@/styles/interfaces/interface.module.css";
import HeadTable from "./bills/HeadTable";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import BodyTable from "./bills/BodyTable";
import TableBodyTest from "../common/TableBodyLoading";
const Bills = () => {
  const { state } = useContext(UserContext);

  return (
    <>
      <table className={styles.table}>
        <HeadTable />
        <tbody>
          {state.tabs.length > 0 ? (
            state.tabs.map((item, index) => (
              <BodyTable key={index} item={item} />
            ))
          ) : (
            <TableBodyTest cantidad={4} />
          )}
        </tbody>
      </table>
    </>
  );
};

export default Bills;
