import { client } from "@/supabase/client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
const TestLogin = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "640px",
        margin: "auto",
      }}
    >
      <Auth
        supabaseClient={client}
        appearance={{
          theme: ThemeSupa,
        }}
        providers={["google"]}
        theme="dark"
        magicLink
      ></Auth>
    </div>
  );
};

export default TestLogin;
