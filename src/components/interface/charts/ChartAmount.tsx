import { UserContext } from "@/context/UserContext";
import { chartTest } from "@/utils/data";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useContext, useEffect, useState } from "react";
import ChartMenuPie from "./ChartPie";
import { backgroundDataSet2 } from "@/utils/data";

const ChartAmount = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const { state } = useContext(UserContext);
  const { amount } = state;
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState(chartTest);
  const DataAmounts = amount.map((item) => item.amount);
  const DataLabels = amount.map((item) => item.name);

  useEffect(() => {
    setLoading(false);
    setChartData({
      labels: DataLabels,
      datasets: [
        {
          label: "Charges",
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

export default ChartAmount;
