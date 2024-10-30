import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function SimpleCharts() {
  return (
    <BarChart
      xAxis={[
        {
          id: "barCategories",
          data: ["Orixiguiná", "Faro", "Terra Santa"],
          scaleType: "band",
        },
      ]}
      series={[
        {
          data: [2, 5, 3],
        },
      ]}
      width={500}
      height={300}
    />
  );
}
