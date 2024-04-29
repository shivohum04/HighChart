import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ShowData = ({ dataset }) => {
  let categories = [];
  let counts = [];

  if (dataset === 'monthlySales') {
    categories = ['Electronics', 'Clothing', 'HomeApp', 'Health', 'Automotive'];
    counts = [5000, 3500, 4500, 2500, 3000];
  } else if (dataset === 'population') {
    categories = ['0-10', '11-20', '21-30', '31-40', '41-50'];
    counts = [5000, 7000, 9000, 8500, 7500];
  } else if (dataset === 'expenditure') {
    categories = ['Groceries', 'Rent', 'Utilities', 'Transportation', 'Dining Out'];
    counts = [600, 1500, 300, 200, 400];
  } else if(dataset==='websiteTraffic'){
    categories = ['North America','Europe','Asia','MiddleEast','Caribbean'];
    counts=[5000,4000,8000,2000,1000]
  } else if(dataset==='employeeSkill'){
    categories=['Beginner','Intermediate','Advanced','Expert','Master'];
    counts=[200,100,80,30,6];

  }

  const barChartOptions = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Bar Graph'
    },
    xAxis: {
      categories: categories
    },
    yAxis: {
      title: {
        text: 'Count'
      }
    },
    series: [{
      name: 'Count',
      data: counts
    }]
  };

  const donutChartOptions = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Donut Chart'
    },
    plotOptions: {
      pie: {
        innerSize: '50%'
      }
    },
    series: [{
      name: 'Count',
      data: categories.map((category, index) => ({
        name: category,
        y: counts[index]
      }))
    }]
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <HighchartsReact
          highcharts={Highcharts}
          options={barChartOptions}
        />
      </div>
      <div style={{ flex: 1 }}>
        <HighchartsReact
          highcharts={Highcharts}
          options={donutChartOptions}
        />
      </div>
    </div>
  );
};

export default ShowData;