import { createContext } from "react";
import { UserContextProps } from "@/interfaces/interfacesUser";

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
);
