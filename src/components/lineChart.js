import { getCustomedTime, getCustomedDate } from "../utils/dateUtils";

export const getMinMaxScale = (data) => {
  let minValue = -10;
  let maxValue = 40;
  data.map((item, index) => {
    if (item.value < minValue) {
      minValue = item.value;
    } else if (item.value > maxValue) {
      maxValue = item.value;
    }
  });
  minValue = minValue % 10 === 0 ? minValue : minValue - 10;
  maxValue = maxValue % 10 === 0 ? maxValue : maxValue + 10;
  return { minValue: minValue, maxValue: maxValue };
};

export const getLineChart = (
  elementId,
  data,
  width,
  height,
  lineColor = "Crimson"
) => {
  // <canvas id="myCanvas" width="800" height="150" style="border:1px solid #d3d3d3;"></canvas>
  const chartWidth = width;
  const chartHeight = height;
  let { minValue, maxValue } = getMinMaxScale(data);

  const canvas = document.getElementById(elementId);
  const context = canvas.getContext("2d");

  const xScale = chartWidth / data.length;
  const yScale = chartHeight / (maxValue + minValue * -1);
  let [startX, startY] = [0, 0];

  const calculateY = (value) => {
    return value > 0 ? maxValue - value : maxValue + value * -1;
  };

  context.beginPath();
  context.strokeStyle = lineColor;
  data.map((item, index) => {
    if (index == 0) {
      context.moveTo(startX, calculateY(item.value) * yScale);
      startX += xScale;
    } else {
      context.lineTo(startX, calculateY(item.value) * yScale);
      startX += xScale;
    }
  });
  context.stroke();
};

export const getLineChartBackground = (
  data,
  width,
  height,
  xScaleCount = 6
) => {
  let minInterval = 10;
  let { minValue, maxValue } = getMinMaxScale(data);

  const getXLengedScale = () => {
    const interval = width / xScaleCount;

    let lineChartBackground = ``;
    data.map((item, index) => {
      if (index === 0 || (index % 12 === 0 && index !== data.length - 1)) {
        lineChartBackground += `
        <div style="position: relative;">
          <div style="width: ${interval}px; height: 10px; border-left: 1px solid lightgrey;"></div>
          <div style="position: absolute; left: -15px;">
           <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <div>${getCustomedTime(item.date)}</div>
            <div style="font-size: 8px">${getCustomedDate(item.date)}</div>
           </div>
          </div>
        </div>
        `;
      }
    });
    return lineChartBackground;
  };

  const getYLegendScale = () => {
    const scaleHeight = height / ((minValue * -1 + maxValue) / 10);
    let yLegendScale = ``;
    for (let scaleValue = maxValue; scaleValue > minValue; scaleValue -= 10) {
      yLegendScale += `
      <div id="scale" style="height: ${scaleHeight}px; display: flex; align-items: center;">
        <div style="width: ${30}px; text-align:center;">${scaleValue}</div>
        <div style="width: ${width}px; border-top: 1px solid lightgrey;"></div>
      </div>
      `;
    }
    yLegendScale += `
    <div id="scale" style="height: ${scaleHeight}px; display: flex; align-items: center;">
      <div style="width: ${30}px; text-align:center;">${minValue}</div>
      <div style="width: ${width}px; border-top: 1px solid lightgrey;">
        <div style="display: flex;">${getXLengedScale()}</div>
      </div>
    </div>
    `;
    return `
    <div style="height:${height + scaleHeight + 10}px; width:${
      width + 30
    }px; text-align: right; display: flex; flex-direction: column; text-align: right;">
      ${yLegendScale}
    </div>
    `;
  };

  return getYLegendScale();
};
