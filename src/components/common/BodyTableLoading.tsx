import deleteButton from "@/assets/delete.svg";
import { Amount } from "@/interfaces/interfacesUser";

const BodyTableLoading = ({ cantidad }: Amount) => {
  const tds = [];

  for (let i = 0; i < cantidad; i++) {
    tds.push(<td>Loading</td>);
  }
  return (
    <tr>
      {tds.map((_td, index) => (
        <td key={index}>Loading</td>
      ))}

      <td>
        <img src={deleteButton} />
      </td>
    </tr>
  );
};

export default BodyTableLoading;
