import { useForm } from "@/hooks/useForm";
import { useContext } from "react";
import styles from "@/styles/formBill.module.css";
import { BillData } from "@/interfaces/interfacesUser";
import { UserContext } from "@/context/UserContext";
const FormLoadMoney = () => {
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
  return (
    <div>
      <h2 className={styles.h2}>Charge Money</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.input}>
          <label>From:</label>
          <input type="text" name="name" onChange={handleChange}></input>
        </div>

        <div className={styles.input}>
          <label>Amount:</label>
          <input type="number" name="amount" onChange={handleChange}></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormLoadMoney;
