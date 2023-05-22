import { useForm } from "@/hooks/useForm";
import { BillData, FormAction } from "@/interfaces/interfacesUser";
import styles from "@/styles/interfaces/FormBill.module.css";

const FormGeneric = ({ formAction, name, disclaimer }: FormAction) => {
  const { formData, handleChange } = useForm<BillData>({
    name: "",
    amount: 50,
  });
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await formAction(formData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.div}>
      <h2>{name}</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.input}>
          <label>From:</label>
          <input type="text" name="name" onChange={handleChange}></input>
        </div>

        <div className={styles.input}>
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            step="0.01"
            onChange={handleChange}
          ></input>
        </div>
        <div className={styles.inputCheck}>
          <label>{disclaimer.label}</label>
          <h4>{disclaimer.h4}</h4>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormGeneric;
