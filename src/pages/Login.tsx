import AuthContainer from "@/container/AuthContainer";
import SignIn from "@/components/forms/SignIn";
const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AuthContainer>
        <SignIn />
      </AuthContainer>
    </div>
  );
};

export default Login;
