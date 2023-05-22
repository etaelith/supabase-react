import { useContext } from "react";
import styles from "@/styles/interfaces/interface.module.css";
import { UserContext } from "@/context/UserContext";

import BodyTableLoading from "@/components/common/BodyTableLoading";

import BodyTableGeneric from "@/components/common/BodyTableGeneric";
import HeadTableGeneric from "@/components/common/HeadTableGeneric";

import { headers } from "@/utils/data";
const Amount = () => {
  const { state } = useContext(UserContext);
  return (
    <>
      <table className={styles.table}>
        <HeadTableGeneric headers={headers[0]} />
        <tbody>
          {state.amount.length > 0 ? (
            state.amount.map((item, index) => (
              <BodyTableGeneric
                key={index}
                item={item}
                table={{ table: "user_amount" }}
              />
            ))
          ) : (
            <BodyTableLoading cantidad={3} />
          )}
        </tbody>
      </table>
    </>
  );
};

export default Amount;
