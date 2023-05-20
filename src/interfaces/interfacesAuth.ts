import { Session, User } from "@supabase/supabase-js";

export interface Login {
  email: string;
}
export interface LoginDate extends Login {
  password: string;
}
export interface AuthUser {
  user: User | null;
  session: Session | null;
}
export interface AuthContextType extends AuthUser {
  signIn: (date: LoginDate) => void;
  signOut: () => void;
  signUp: (date: LoginDate) => void;
  signMagicClick: (date: Login) => void;
  signUpGoogle: () => void;
}
export interface AuthContainerProps {
  children: React.ReactNode;
}
