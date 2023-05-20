import { Doughnut } from "react-chartjs-2";
import { PieChartProps } from "@/interfaces/interfacesUser";

function PieChart({ chartData }: PieChartProps) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Accountability</h2>
      <Doughnut
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Accountability user",
            },
            subtitle: {
              display: true,
              text: "testeando",
            },
          },
        }}
      />
    </div>
  );
}
export default PieChart;
