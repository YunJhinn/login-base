import * as React from "react";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import api from "../../services/api";
import axios from "axios";

export default function SyncronizeCharts() {
  const [highlightedItem, setHighLightedItem] = React.useState(null);
  const [barData, setBarData] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [barLabels, setBarLabels] = useState([]);

  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/api/get_isc", config);

        const data = response.data;

        const statusCounts = data.reduce((acc, item) => {
          const status = item.n_conforme || "Desconhecido"; // Fallback para status desconhecido
          acc[status] = (acc[status] || 0) + 1;
          return acc;
        }, {});

        const processedBarData = Object.values(statusCounts);
        const labels = Object.keys(statusCounts);

        const processedPieData = labels.map((label) => ({
          value: statusCounts[label],
          label: label,
          id: label,
        }));

        setBarData(processedBarData);
        setPieData(processedPieData);
        setBarLabels(labels);

        console.log("Bar Data:", processedBarData);
        console.log("Pie Data:", processedPieData);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    }
    fetchData();
  }, []);

  const barChartsProps = {
    series: [
      {
        data: barData,
        id: "sync",
        highlightScope: { highlight: "item", fade: "global" },
      },
    ],
    xAxis: [
      {
        scaleType: "band",
        data: barLabels,
      },
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
        data: pieData,
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
