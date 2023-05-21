import { useContext } from "react";
import { useForm } from "@/hooks/useForm";
import { LoginDate } from "@/interfaces/interfacesAuth";
import { AuthContext } from "@/context/AuthContext";
import { PASSWORD_VALID_REGEX } from "@/utils/REGEX";
const SignUp = () => {
  const { handleChange, formData } = useForm<LoginDate>({
    email: "",
    password: "",
  });
  const { signUp } = useContext(AuthContext);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        <div>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={handleChange}
          />
          <span></span>
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            pattern={PASSWORD_VALID_REGEX.source}
            onChange={handleChange}
          />
          <span></span>
        </div>
        <button>Send</button>
      </form>
    </>
  );
};

export default SignUp;
