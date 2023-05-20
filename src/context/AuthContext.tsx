import { createContext } from "react";
import { AuthContextType } from "@/interfaces/interfacesAuth";

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
