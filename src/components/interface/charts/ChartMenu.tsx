import { UserContext } from "@/context/UserContext";
import { backgroundDataSet1, chartTest } from "@/utils/data";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useContext, useEffect, useState } from "react";
import ChartMenuPie from "./ChartPie";

const ChartMenu = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const { state } = useContext(UserContext);
  const { total, pay_out } = state;
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState(chartTest);

  const dataset = [total - pay_out, pay_out];
  useEffect(() => {
    setLoading(false);
    setChartData({
      labels: ["positive", "negative"],
      datasets: [
        {
          label: "Amount Total",
          data: dataset,
          backgroundColor: backgroundDataSet1,
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

export default ChartMenu;
