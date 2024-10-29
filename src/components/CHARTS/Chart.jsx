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
          stackType: "100%",
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: "center",
            },
          },
        },
        xaxis: {
          categories: [
            "Municipio A",
            "Municipio B",
            "Municipio C",
            "Municipio c",
            "Municipio c2",
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
        },
      },
      series: [
        {
          name: "Conformes",
          data: [6653, 8133, 7132, 4567, 6899],
        },
        {
          name: "Não Conformes",
          data: [5000, 5000, 5000, 5000, 5000],
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
