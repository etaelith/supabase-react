import { useForm } from "@/hooks/useForm";
import { useContext } from "react";
import styles from "@/styles/interfaces/FormBill.module.css";
import { BillData } from "@/interfaces/interfacesUser";
import { UserContext } from "@/context/UserContext";
const FormCash = () => {
  const { formData, handleChange } = useForm<BillData>({
    name: "",
    amount: 1000,
  });
  const { loadMoney } = useContext(UserContext);
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await loadMoney(formData);
    } catch (error) {
      console.log(error);
    }
  };
  const { amount, name } = formData;
  return (
    <div className={styles.div}>
      <h2>Charge Money</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.input}>
          <label>From:</label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={handleChange}
          ></input>
        </div>
        <div className={styles.input}>
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={handleChange}
          ></input>
        </div>
        <div className={styles.inputCheck}>
          <label>Disclaimer:</label>
          <h4> Can't change or delete</h4>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormCash;
