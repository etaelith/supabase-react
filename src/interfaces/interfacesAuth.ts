import { Session, User } from "@supabase/supabase-js";

export interface AuthUser {
  user: User | null;
  session: Session | null;
}
export interface AuthContextType extends AuthUser {
  signOut: () => void;
}
export interface AuthContainerProps {
  children: React.ReactNode;
}
export const INITIAL_STATE: AuthUser = {
  user: null,
  session: null,
};
