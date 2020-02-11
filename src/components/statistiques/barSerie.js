import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';



const barSerie =()=> {

    const data = [
        { year: '1950', population: 2.525 },
        { year: '1960', population: 3.018 },
        { year: '1970', population: 3.682 },
        { year: '1980', population: 4.440 },
        { year: '1990', population: 5.310 },
        { year: '2000', population: 6.127 },
        { year: '2010', population: 6.930 },
      ];
 
   

    return (
      <Paper>
        <Chart
          data={data}
        >

          <BarSeries
            valueField="population"
            argumentField="year"
          />
        </Chart>
      </Paper>
    );
  }

export default barSerie; 