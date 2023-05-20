import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { useContext, useEffect, useState } from "react";
import PieChart from "./PieChart";
import { UserContext } from "@/context/UserContext";

import {
  backgroundDataSet1,
  backgroundDataSet2,
  backgroundDataSetTest,
  dataset1labels,
} from "@/utils/data";
import PieChartGastos from "./PieChartGastos";
const chartTest = {
  labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
  datasets: [
    {
      label: "Dataset 1",
      data: [1, 5, 43, 25, 9],
      backgroundColor: backgroundDataSetTest,
    },
  ],
};
const DisplayChart = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const { state } = useContext(UserContext);
  const { tabs, total, pay_out } = state;
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState(chartTest);
  const [chartGastos, setChartGastos] = useState(chartTest);
  const positive = total - pay_out;

  const dataset1data = [total - pay_out, pay_out];

  const dataset3labels = tabs?.map((data) => data.name) as string[];
  const dataset3data = tabs?.map((data) => data.amount) as number[];
  useEffect(() => {
    setLoading(false);
    if (tabs) {
      setChartData({
        labels: dataset1labels,
        datasets: [
          {
            label: "Amount",
            data: dataset1data,
            backgroundColor: backgroundDataSet1,
          },
        ],
      });
      setChartGastos({
        labels: ["positive", ...dataset3labels],
        datasets: [
          {
            label: "Amount",
            data: [positive, ...dataset3data] as number[],
            backgroundColor: backgroundDataSet2,
          },
        ],
      });
    }
    setLoading(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
  return (
    <>
      {!loading ? (
        <div>loading</div>
      ) : (
        <>
          <PieChart chartData={chartData} />
          <PieChartGastos chartData={chartGastos} />
        </>
      )}
    </>
  );
};

export default DisplayChart;
