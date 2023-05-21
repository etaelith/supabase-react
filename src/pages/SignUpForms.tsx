import SignUp from "@/components/forms-auth/SignUp";
import SignUpGoogle from "@/components/forms-auth/SignUpGoogle";
import SignUpOTP from "@/components/forms-auth/SignUpOtp";
import AuthContainer from "@/container/AuthContainer";

const SignUpForms = () => {
  return (
    <AuthContainer>
      <SignUp />
      <SignUpOTP />
      <SignUpGoogle />
    </AuthContainer>
  );
};

export default SignUpForms;
