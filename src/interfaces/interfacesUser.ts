import type { ChartData } from "chart.js";
export interface UserContextType {
  name: string;
  tabs: TabData[] | null;
  total: number;
  pay_out: number;
}
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
export interface UserContextType {
  name: string;
  tabs: TabData[] | null;
  total: number;
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
  item: TabData;
}
export interface UserSummary {
  total_user_amount: number;
  total_unpaid: number;
}
