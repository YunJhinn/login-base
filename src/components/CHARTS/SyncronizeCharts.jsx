import * as React from "react";
import Stack from "@mui/material/Stack";

import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";

export default function SyncronizeCharts() {
  const [highlightedItem, setHighLightedItem] = React.useState(null);

  return (
    <Stack
      direction={{ xs: "column", xl: "row" }}
      spacing={1}
      sx={{ width: 800 }}
    >
      <BarChart
        {...barChartsProps}
        highlightedItem={highlightedItem}
        onHighlightChange={setHighLightedItem}
      />
      <PieChart
        {...pieChartProps}
        highlightedItem={highlightedItem}
        onHighlightChange={setHighLightedItem}
      />
    </Stack>
  );
}

const barChartsProps = {
  series: [
    {
      data: [4, 1, 6, 5],
      id: "sync",
      highlightScope: { highlight: "item", fade: "global" },
    },
  ],
  xAxis: [
    { scaleType: "band", data: ["Orixiguiná", "Faro", "Terra Santa", "Total"] },
  ],
  height: 300,
  slotProps: {
    legend: {
      hidden: true,
    },
  },
};

const pieChartProps = {
  series: [
    {
      id: "sync",
      data: [
        { value: 4, label: "Orixiguiná", id: "Orixiguiná" },
        { value: 1, label: "Faro", id: "Faro" },
        { value: 6, label: "Terra Santa", id: "Terra Santa" },
        { value: 5, label: "Total", id: "Total" },
      ],
      highlightScope: { highlight: "item", fade: "global" },
    },
  ],
  height: 270,
  slotProps: {
    legend: {
      hidden: true,
    },
  },
};
