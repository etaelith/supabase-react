import styles from "@/styles/formBill.module.css";
import { useForm } from "@/hooks/useForm";
import { useContext } from "react";
import { BillData } from "@/interfaces/interfacesUser";
import { UserContext } from "@/context/UserContext";

const FormBill = () => {
  const { formData, handleChange } = useForm<BillData>({
    name: "",
    amount: 50,
  });
  const { createData } = useContext(UserContext);
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await createData(formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2 className={styles.h2}>Input payout</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.input}>
          <label>Name:</label>
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <div className={styles.input}>
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            step="0.01"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputCheck}>
          <label>Payed:</label>
          <h4> Default in false</h4>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormBill;
