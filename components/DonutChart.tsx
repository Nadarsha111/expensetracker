"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
 
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        label: "Banks",
      },
    ],
    labels: ["Bank A", "Bank B", "Bank C"],
  };

  return (
    <Doughnut 
      data={data}
      options={{
        cutout: "60%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

export default DonutChart;
