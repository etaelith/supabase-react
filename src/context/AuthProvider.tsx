import { AuthContext } from "./AuthContext";
import { props } from "@/interfaces/interfaces";
import { AuthUser, INITIAL_STATE } from "@/interfaces/interfacesAuth";
import { useEffect, useState } from "react";
import { client } from "@/supabase/client";
import { useLocation, useNavigate } from "react-router-dom";
import useToast from "@/hooks/useToast";

const AuthProvider = ({ children }: props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const notify = useToast();
  const [user, setUser] = useState<AuthUser>(INITIAL_STATE);

  const signOut = () => {
    client.auth.signOut();

    notify("Success logout", "info");
  };

  useEffect(() => {
    client.auth.onAuthStateChange((_event, session) => {
      const currentPath = location.pathname;

      if (!session) {
        setUser(INITIAL_STATE);
        navigate("/user/");
      } else {
        setUser({
          user: session.user,
          session: session,
        });
        if (
          currentPath !== "/menu" &&
          currentPath !== "/bills" &&
          currentPath !== "/amount"
        ) {
          navigate("/menu");
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);
  return (
    <AuthContext.Provider
      value={{
        user: user.user,
        session: user.session,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
