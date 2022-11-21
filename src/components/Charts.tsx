import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import classes from './Charts.module.scss';

const LINE_CHART_OPTIONS: Highcharts.Options = {
  title: {
    text: 'Line chart'
  },
  series: [{
    type: 'line',
    name: 'Rating',
    data: [10, 4, 24, 13, 98, 17]
  }]
};
const PIE_CHART_OPTIONS: Highcharts.Options = {
  title: {
    text: 'Pie chart'
  },
  series: [{
    type: 'pie',
    name: 'Popularity',
    data: [['Shiba', 10], ['Pomeranian', 4], ['Husky', 24], ['Akita', 13], ['Samoyed', 28]]
  }]
};

export default function Charts() {
  return (
    <div className={classes.root}>
      <h2>Charts</h2>
      <div className={classes.charts}>
        <HighchartsReact highcharts={Highcharts} options={LINE_CHART_OPTIONS} />
        <HighchartsReact highcharts={Highcharts} options={PIE_CHART_OPTIONS} />
      </div>
    </div>
  )
}
