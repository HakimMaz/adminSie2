import React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  SplineSeries
} from "@devexpress/dx-react-chart-material-ui";

const generateData = (start, end, step) => {
  const data = [];
  for (let i = start; i < end; i += step) {
    data.push({ value: Math.sin(i) / i, argument: i });
  }

  return data;
};

const Courbe=()=> {


  //adding comment

    return (
      <Paper>
        <Chart data={generateData(2.5,12,0.5)} width={650} height={500}>
          <ArgumentAxis showGrid />
          <ValueAxis />

          <SplineSeries valueField="value" argumentField="argument" />
        </Chart>
      </Paper>
    );
  }

export default Courbe;