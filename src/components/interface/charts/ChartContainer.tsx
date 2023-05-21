import { useLocation } from "react-router-dom";
import ChartMenu from "./ChartMenu";
import ChartAmount from "./ChartAmount";
import ChartBills from "./ChartBills";

const ChartContainer = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  let element;
  if (currentPath === "/amount") {
    element = <ChartAmount />;
  } else if (currentPath === "/bills") {
    element = <ChartBills />;
  } else {
    element = <ChartMenu />;
  }
  return <div>{element}</div>;
};

export default ChartContainer;
