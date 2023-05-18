import { useContext } from "react";
import { useForm } from "@/hooks/useForm";
import { LoginDate } from "@/interfaces/interfaces";
import { AuthContext } from "@/context/AuthContext";
const SignUp = () => {
  const { handleChange, formData } = useForm<LoginDate>({
    email: "",
    password: "",
  });
  const { signUp } = useContext(AuthContext);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      signUp(formData);
    } catch (error) {
      console.error(error, 2);
    }
  };
  return (
    <>
      <h3>Sign In with email and password</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="test@test.com"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="123@%$123"
          onChange={handleChange}
          autoComplete="on"
        />
        <button>Send</button>
      </form>
    </>
  );
};

export default SignUp;
