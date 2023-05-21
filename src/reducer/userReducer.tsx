// reducers/userReducer.js
import { UserState, UserAction } from "@/interfaces/interfacesUser";

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
        amount: action.payload.amount,
        pay_out: action.payload.pay_out,
      };
    case "SET_TABS":
      return {
        ...state,
        tabs: action.payload.tabs,
        total: action.payload.total,
        amount: action.payload.amount,
        pay_out: action.payload.pay_out,
      };
    case "UPDATE_REFRESH_KEY":
      return {
        ...state,
        refreshKey: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
