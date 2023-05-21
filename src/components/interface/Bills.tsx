import styles from "@/styles/interfaces/interface.module.css";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import BodyTableLoading from "@/components/common/BodyTableLoading";
import BodyTableGeneric from "@/components/common/BodyTableGeneric";
import HeadTableGeneric from "@/components/common/HeadTableGeneric";
import { headers } from "@/utils/data";

const Bills = () => {
  const { state } = useContext(UserContext);
  return (
    <>
      <table className={styles.table}>
        <HeadTableGeneric headers={headers[1]} />
        <tbody>
          {state.tabs.length > 0 ? (
            state.tabs.map((item, index) => (
              <BodyTableGeneric item={item} key={index} />
            ))
          ) : (
            <BodyTableLoading cantidad={4} />
          )}
        </tbody>
      </table>
    </>
  );
};

export default Bills;
