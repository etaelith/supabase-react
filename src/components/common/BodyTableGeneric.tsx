import { BodyProps } from "@/interfaces/interfacesUser";
import deleteButton from "@/assets/delete.svg";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";

const BodyTableGeneric = ({ item, table }: BodyProps) => {
  const { deleteData } = useContext(UserContext);
  const time = new Date(`${item.created_at}`).toLocaleDateString();
  const { name, amount, id } = item;
  return (
    <tr>
      <td>{name}</td>
      <td>{time}</td>
      {"paid_up" in item && <td>{String(item.paid_up)}</td>}
      <td>{amount}</td>
      <td>
        <img src={deleteButton} onClick={() => deleteData(id, table)} />
      </td>
    </tr>
  );
};

export default BodyTableGeneric;
