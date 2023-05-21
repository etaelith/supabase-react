import type { ChartData } from "chart.js";

export interface TabData extends BillData {
  created_at: string;
  paid_up: boolean;
  id: number;
  user_id: string;
}
export interface BillData {
  name: string;
  amount: number;
}
export interface TabAmount {
  id: number;
  created_at: string;
  user_id: string;
  amount: number;
  name: string;
}
export interface UserContextType {
  name: string;
  tabs: TabData[] | [];
  total: number;
  amount: TabAmount[] | [];
  pay_out: number;
  refreshKey: number;
}
export type UserContextProps = {
  state: UserContextType;
  loading: boolean;
  createData: (todo: BillData) => void;
  loadMoney: (todo: BillData) => void;
  changeState: (id: number, paid_up: boolean) => void;
  deleteData: (todo: number) => void;
};

export interface PieChartProps {
  chartData: ChartData<"doughnut">;
}
export interface ItemsProps {
  item: TabData | TabAmount;
}
export interface UserSummary {
  total_user_amount: number;
  total_unpaid: number;
}
export type UpdateState = {
  id: number;
  paid_up: boolean;
};
export type HeadTableProps = {
  headers: string[];
};
export type BodyProps = {
  item: TabData | TabAmount;
};
export type Amount = {
  cantidad: number;
};
export type FormAction = {
  formAction: (todo: BillData) => void;
  name: string;
  disclaimer: { label: string; h4: string };
};
export type UserState = UserContextType;
export type UserAction =
  | { type: "SET_USER_DATA"; payload: UserContextType }
  | {
      type: "SET_TABS";
      payload: {
        tabs: TabData[];
        total: number;
        pay_out: number;
        amount: TabAmount[];
      };
    }
  | { type: "ADD_TAB"; payload: TabData }
  | { type: "REMOVE_TAB"; payload: number }
  | { type: "UPDATE_TAB"; payload: UpdateState }
  | { type: "UPDATE_REFRESH_KEY"; payload: number };
