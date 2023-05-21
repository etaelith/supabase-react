import { Doughnut } from "react-chartjs-2";
import { PieChartProps } from "@/interfaces/interfacesUser";

const ChartPie = ({ chartData }: PieChartProps) => {
  return (
    <div className="chart-container" style={{ marginBottom: "2em" }}>
      <h2 style={{ textAlign: "center" }}>{chartData.datasets[0].label}</h2>
      <Doughnut
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: false,
            },

            title: {
              display: true,
              text: "Accountability user",
            },
          },
        }}
      />
    </div>
  );
};

export default ChartPie;
