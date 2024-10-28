import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./Chart.css";
import { BiColor } from "react-icons/bi";

class Bar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: "bar",
          stacked: true,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            dataLabels: {
              position: "center",
            },
          },
        },
        xaxis: {
          categories: [
            "category A",
            "category B",
            "category C",
            "adicional c",
            "adicional c2",
          ],
        },
        dataLabels: {
          enabled: true,
        },
        stroke: {
          width: 2,
          fill: {
            opacity: 1, // Opacidade das barras
          },
          colors: ["#FF4560", "#008FFB"],
        },
      },
      series: [
        {
          name: "Value",
          data: [6653, 8133, 7132, 4567, 6899],
        },
        {
          name: "Expected",
          data: [5000, 7000, 5000, 7000, 10000],
        },
      ],
    };
  }

  render() {
    return (
      <div className="bar">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width="500"
        />
      </div>
    );
  }
}

export default Bar;
