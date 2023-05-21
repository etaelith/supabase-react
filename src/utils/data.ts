export const dataset1labels = ["Positive", "Negative"];
export const dataset2Labels = ["Label 1", "Label 2", "Label 3"];
export const dataset2data = ["Label 1", "Label 2", "Label 3"];

export const backgroundDataSetTest = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(255, 206, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(153, 102, 255, 0.2)",
];
export const backgroundDataSet1 = [
  "rgba(54, 162, 235, 1)",
  "rgba(255, 99, 132, 1)",
];
export const backgroundDataSet2 = [
  "rgba(54, 162, 235, 0.8)",
  "rgba(153, 102, 255, 0.8)",
  "rgba(255, 159, 64, 0.8)",
  "rgba(255, 99, 132, 0.8)",
];
export const backgroundDataSet3 = [
  "rgba(255, 206, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(255, 159, 64, 0.2)",
];
export const chartTest = {
  labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
  datasets: [
    {
      label: "Dataset 1",
      data: [1, 5, 43, 25, 9],
      backgroundColor: backgroundDataSetTest,
    },
  ],
};
export const names = ["Input payout", "Charge Money"];
export const disclaimer = [
  { label: "Payed:", h4: "Default in false" },
  { label: "Disclaimer:", h4: "Can't change or delete" },
];

export const headers = [
  ["Name", "Date", "Amount", "Delete"],
  ["Name", "Date", "Payed", "Amount", "Delete"],
];
export const INITIAL_STATE = {
  name: "etaelith",
  tabs: [],
  total: 100,
  amount: [],
  pay_out: 0,
  refreshKey: 0,
};
