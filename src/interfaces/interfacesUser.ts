import type { ChartData } from "chart.js";

export interface TabData extends BillData {
  created_at: string;
  paid_up: boolean;
  id: number;
  user_id: string;
}
export interface BillData {
  name: string | null;
  amount: number | null;
}
export interface TabAmount {
  id: number;
  created_at: string;
  user_id: string;
  amount: number;
  description: string;
}
export interface UserContextType {
  name: string;
  tabs: TabData[] | [];
  total: number;
  amount: TabAmount[] | [];
  pay_out: number;
}
export type UserContextProps = {
  state: UserContextType;
  loading: boolean;
  createData: (todo: BillData) => void;
  loadMoney: (todo: BillData) => void;
  changeState: (id: number, paid_up: boolean) => void;
  deleteData: (todo: number) => void;
};
export type UpdateState = {
  id: number;
  paid_up: boolean;
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
