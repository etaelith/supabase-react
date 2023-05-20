import { Doughnut } from "react-chartjs-2";
import { PieChartProps } from "@/interfaces/interfacesUser";

function PieChartGastos({ chartData }: PieChartProps) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Gastos</h2>
      <Doughnut
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Gastos user",
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
export default PieChartGastos;
