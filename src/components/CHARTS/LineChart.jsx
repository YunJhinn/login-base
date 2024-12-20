import React, { Component } from "react";
import Chart from "react-apexcharts";

class Line extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        stroke: {
          curve: "smooth",
        },
        markers: {
          size: 3,
        },
        xaxis: {
          categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
      },
      series: [
        {
          data: [30, 40, 25, 50, 49, 21, 70, 51],
        },
      ],
    };
  }

  render() {
    return (
      <div className="line">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          width="450"
        />
      </div>
    );
  }
}

export default Line;
