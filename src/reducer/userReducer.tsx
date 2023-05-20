// reducers/userReducer.js
import {
  TabData,
  UserContextType,
  UpdateState,
} from "@/interfaces/interfacesUser";

type UserState = UserContextType;
type UserAction =
  | { type: "SET_USER_DATA"; payload: UserContextType }
  | {
      type: "SET_TABS";
      payload: { tabs: TabData[]; total: number; pay_out: number };
    }
  | { type: "ADD_TAB"; payload: TabData }
  | { type: "REMOVE_TAB"; payload: number }
  | { type: "UPDATE_TAB"; payload: UpdateState };

export const INITIAL_STATE = {
  name: "etaelith",
  tabs: null,
  total: 100,
  pay_out: 0,
};

export const userReducer = (
  state: UserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        name: action.payload.name,
        tabs: action.payload.tabs,
        total: action.payload.total,
        pay_out: action.payload.pay_out,
      };
    case "SET_TABS":
      return {
        ...state,
        tabs: action.payload.tabs,
        total: action.payload.total,
        pay_out: action.payload.pay_out,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
