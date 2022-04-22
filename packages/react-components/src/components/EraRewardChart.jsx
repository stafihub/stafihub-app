import ReactEcharts from "echarts-for-react";
import React from "react";
import { graphic } from "echarts";

export const EraRewardChart = (props) => {
  const getChartOption = () => {
    return {
      animation: false,
      color: ["#FF7FA7"],
      // lenend: {
      //   height: "320px",
      // },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line",
        },
        formatter: (params) => {
          if (params && params.length > 0) {
            const stakedValue = params[0].data;
            let formatStakedValue = stakedValue;
            const parts = formatStakedValue.split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            formatStakedValue = parts.join(".");

            return `<div>
            <div>era: ${params[0].axisValue}</div>
            <div >Staked Value: <span style="color:#23292F;font-weight:bold;">$${formatStakedValue}<span></div>
          </div>`;
          }
          // console.log(params, "======params");
        },
      },
      xAxis: [
        {
          type: "category",
          data: props.xData,
          boundaryGap: false,
          axisTick: {
            show: false,
            alignWithLabel: true,
          },
          axisLabel: {
            padding: [0, 10, 0, 10],
            interval: 0,
            // rotate: -40,
            color: "#A5A5A5",
            formatter: (value) => {
              return value;
            },
          },
        },
      ],
      grid: {
        left: "3%",
        right: "3%",
      },
      yAxis: [
        {
          show: false,
          type: "value",
          min: function (value) {
            return Math.max(0, value.min - (value.max - value.min));
          },
          max: "dataMax",
          axisLabel: {
            formatter: (value) => {
              return value;
            },
            color: "#FFFFFF",
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "#444755",
              width: 2,
            },
          },
        },
      ],
      series: [
        {
          name: "value",
          type: "line",
          showSymbol: false,
          areaStyle: {
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(255,62,116,0.5)",
              },
              {
                offset: 1,
                color: "rgba(255,168,195,0.3)",
              },
            ]),
          },
          barWidth: "60%",
          data: props.yData,
        },
      ],
    };
  };

  return (
    <div style={{ width: "610px", maxWidth: "610px", height: "360px" }}>
      <ReactEcharts
        option={getChartOption()}
        style={{ height: "360px" }}
      ></ReactEcharts>
    </div>
  );
};
