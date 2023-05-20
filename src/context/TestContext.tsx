import { createContext } from "react";
import { UserContextProps } from "@/interfaces/interfacesUser";

export const TestContext = createContext<UserContextProps>(
  {} as UserContextProps
);
