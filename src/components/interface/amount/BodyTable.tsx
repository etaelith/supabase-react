import { TabAmount } from "@/interfaces/interfacesUser";
import deleteButton from "@/assets/delete.svg";
type BodyProps = {
  item: TabAmount;
};
const BodyTable = ({ item }: BodyProps) => {
  const time = new Date(`${item.created_at}`).toLocaleDateString();
  return (
    <tr>
      <td>{item.description}</td>
      <td>{time}</td>
      <td>{item.amount}</td>
      <td>
        <img src={deleteButton} />
      </td>
    </tr>
  );
};

export default BodyTable;
