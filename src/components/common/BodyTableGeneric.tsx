import { BodyProps } from "@/interfaces/interfacesUser";
import deleteButton from "@/assets/delete.svg";

const BodyTableGeneric = ({ item }: BodyProps) => {
  const time = new Date(`${item.created_at}`).toLocaleDateString();
  const { name, amount } = item;
  return (
    <tr>
      <td>{name}</td>
      <td>{time}</td>
      {"paid_up" in item && <td>{String(item.paid_up)}</td>}
      <td>{amount}</td>
      <td>
        <img src={deleteButton} />
      </td>
    </tr>
  );
};

export default BodyTableGeneric;
