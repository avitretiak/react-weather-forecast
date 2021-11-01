import React, { useEffect, useRef } from 'react';
import { Line, Chart } from 'react-chartjs-2';
import colors from './styles/_colors.module.scss';
import './styles/WeatherChart.scss';

const chartStyle = {
  borderCapStyle: 'round',
  borderColor: colors.fillBlue,
  borderWidth: 2,
  tension: 0.4,
  hoverBorderWidth: 3,
  hoverRadius: 6,
  hoverBorderColor: colors.white,
  pointBorderWidth: 0,
  pointBackgroundColor: 'rgba(0, 0, 0, 0)',
  hoverBackgroundColor: colors.fillBlue,
};

const WeatherChart = ({ temperatures, selectedDay }: any) => {
  const chartRef = useRef<any>(null);

  const tooltipPlugin = Chart.registry.getPlugin('tooltip') as any;
  tooltipPlugin.positioners.top = (items: any) => {
    const pos = tooltipPlugin.positioners.average(items);
    const currentItemValue = items[0].element.$context.raw;

    if (pos === false) {
      return false;
    }

    return {
      x: pos.x,
      y: currentItemValue > 0 ? pos.y - 30 : pos.y + 30,
    };
  };
  const data = {
    labels: ['day1Morn', 'day1Day', 'day1Eve', 'day1Night',
      'day2Morn', 'day2Day', 'day2Eve', 'day2Night',
      'day3Morn', 'day3Day', 'day3Eve', 'day3Night',
      'day4Morn', 'day4Day', 'day4Eve', 'day4Night'],
    datasets: [{
      data: temperatures,
      fill: {
        target: 'origin',
        above: colors.areaBlue,
        below: colors.areaBlue,
      },
    }],
  };

  const options = {
    ...chartStyle,
    events: [],
    scales: {
      y: {
        display: false,
        ticks: {
          display: false,
        },
        min: temperatures ? Math.min(...temperatures) - 3.33 : 0,
        max: temperatures ? Math.max(...temperatures) + 3.33 : 50,
      },
      x: {
        ticks: {
          display: false,
        },
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        position: 'top' as 'average',
        backgroundColor: 'transparent',
        displayColors: false,
        bodyFontSize: 32,
        bodyColor: colors.fillBlue,
        bodyFont: {
          weight: 'bold',
          size: 22,
          family: 'Open Sans, sans-serif',
        },
        callbacks: {
          title: () => '',
          label(context: any) {
            return `${temperatures[context.dataIndex].toFixed(1)}˚c`;
          },
        },
      },
    },
  };

  const highlightElement = (elementNumber: number) => {
    const getSelectionOffset = (dayOffset: number) => (1 + (4 * dayOffset));
    if (chartRef && chartRef.current && temperatures) {
      chartRef.current.setActiveElements([
        { datasetIndex: 0, index: getSelectionOffset(elementNumber) }]);
      chartRef.current.tooltip.setActiveElements([
        { datasetIndex: 0, index: getSelectionOffset(elementNumber) }]);
      chartRef.current.tooltip.update();
    }
  };
  useEffect(() => {
    highlightElement(selectedDay);
  }, [selectedDay, temperatures]);

  return (
    <div className="weather-chart-container">
      {temperatures
        ? (
          <div className="weather-chart-container">
            <p className="temperature-chart-title">Daily Average</p>
            <Line data={data} ref={chartRef} options={options} height="150px" className="weather-chart" />
          </div>
        )
        : null}

    </div>
  );
};

export default WeatherChart;
