import React, { useEffect, useRef } from 'react';
import { Line, Chart } from 'react-chartjs-2';
import colors from './styles/colors.module.scss';

const chartStyle = {
  borderCapStyle: 'round',
  borderColor: colors.strongBlue,
  borderWidth: 2,
  tension: 0.4,
  hoverBorderWidth: 3,
  hoverRadius: 6,
  hoverBorderColor: colors.white,
  pointBorderWidth: 0,
  pointBackgroundColor: 'rgba(0, 0, 0, 0)',
  hoverBackgroundColor: colors.strongBlue,
};

const WeatherChart = (props: any) => {
  const { temperatures, selectedDay } = props;
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
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4'],
    datasets: [{
      data: temperatures,
      fill: {
        target: 'origin',
        above: colors.blue,
        below: colors.blue,
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
        min: temperatures ? Math.min(...temperatures) - 10 : 0,
        max: temperatures ? Math.max(...temperatures) + 10 : 50,
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
        bodyColor: colors.strongBlue,
        bodyFont: {
          weight: 'bold',
          size: 22,
          family: 'Open Sans, sans-serif',
        },
        callbacks: {
          title: () => '',
          label(context: any) {
            return `${temperatures[context.dataIndex].toFixed(1)} ˚ᶜ`;
          },
        },
      },
    },
  };

  const highlightElement = (elementNumber: number) => {
    if (chartRef && chartRef.current && temperatures) {
      chartRef.current.setActiveElements([{ datasetIndex: 0, index: elementNumber }]);
      chartRef.current.tooltip.setActiveElements([{ datasetIndex: 0, index: elementNumber }]);
      chartRef.current.tooltip.update();
    }
  };
  useEffect(() => {
    highlightElement(selectedDay);
  }, [selectedDay, temperatures]);

  return (
    <div className="weather-chart-container">
      <p className="temperature-chart-title">Average Temperature</p>
      <Line data={data} ref={chartRef} options={options} height="120px" />
    </div>
  );
};

export default WeatherChart;
