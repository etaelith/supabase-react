import { HeadTableProps } from "@/interfaces/interfacesUser";

const HeadTableGeneric: React.FC<HeadTableProps> = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
  );
};

export default HeadTableGeneric;
