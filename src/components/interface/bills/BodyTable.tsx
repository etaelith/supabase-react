import { TabData } from "@/interfaces/interfacesUser";
import deleteButton from "@/assets/delete.svg";
type BodyProps = {
  item: TabData;
};
const BodyTable = ({ item }: BodyProps) => {
  const time = new Date(`${item.created_at}`).toLocaleDateString();
  return (
    <tr>
      <td>{item.name}</td>
      <td>{time}</td>
      <td>{String(item.paid_up)}</td>
      <td>{item.amount}</td>
      <td>
        <img src={deleteButton} />
      </td>
    </tr>
  );
};

export default BodyTable;
