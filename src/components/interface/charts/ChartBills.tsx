import { UserContext } from "@/context/UserContext";
import { backgroundDataSet2, chartTest } from "@/utils/data";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useContext, useEffect, useState } from "react";
import ChartMenuPie from "./ChartPie";

const ChartBills = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const { state } = useContext(UserContext);
  const { tabs } = state;
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState(chartTest);
  const DataAmounts = tabs.map((item) => item.amount);
  const DataLabels = tabs.map((item) => item.name);

  useEffect(() => {
    setLoading(false);
    setChartData({
      labels: DataLabels,
      datasets: [
        {
          label: "Bills",
          data: DataAmounts,
          backgroundColor: backgroundDataSet2,
        },
      ],
    });
    setLoading(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
  return (
    <>
      {!loading ? <div>loading</div> : <ChartMenuPie chartData={chartData} />}
    </>
  );
};

export default ChartBills;
