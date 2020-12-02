import { getCustomedDate } from "../utils/dateUtils.js";

export const getBarChart = (data, barColor = "Tomato") => {
  let scales = [0];
  let minValue = 0;
  let maxValue = 0;
  let chartMaxScale = 0;
  let chartMinScale = 0;
  data.map((item, index) => {
    if (item.value > maxValue) {
      maxValue = item.value;
    }
    if (item.value < minValue) {
      minValue = item.value;
    }
  });
  chartMaxScale = maxValue + (10 - (maxValue % 10)) + 10;
  chartMinScale = minValue;

  let bars = ``;
  data.map((item, index) => {
    bars += `
    <div style="width: ${50 /
      data.length}%; text-align:center; display: flex; flex-direction: column; align-items: center;">
      <div style="height: ${100 -
        (90 *
          (item.value === null || item.value === undefined ? 0 : item.value)) /
          chartMaxScale}%; text-align: center; box-sizing: border-box; padding-top:${(100 -
      (90 *
        (item.value === null || item.value === undefined ? 0 : item.value)) /
        chartMaxScale) /
      4}%;">${
      item.value === null || item.value === undefined
        ? "-"
        : item.value.toFixed(1)
    }</div>
      <div style="font-size: 1px; width: 100%; height: ${(90 *
        (item.value === null || item.value === undefined ? 0 : item.value)) /
        chartMaxScale}%; background-color: ${barColor}; color: ${barColor}">.</div>
      <div style="font-size: 10px;">${getCustomedDate(item.date)}</div>
    </div>
    `;
  });

  const barChartBackground = `
  <div style="display: flex; justify-content: center; justify-content: flex-end; height: 100%; width: 100%;">
    <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between; text-align: right; box-sizign: border-box; padding-right: 2%;">
      <div>${chartMaxScale}</div>
      <div>0</div>
    </div>
    <div style="display: flex; align-items: center; justify-content: center; width: 100%; height 100%; padding 10%; box-sizing: border-box;">
      <div style="height: 80%; width: 100%; border-top: 1px solid LightGrey; border-bottom: 1px solid LightGrey; position: relative;">
       <div style="display: flex; flex-direction: row; justify-content: space-around; width: 100%; height: 100%; position: absolute; bottom: -13px;">${bars}</div>
      </div>
    </div>
  </div>
  `;

  return `<div style="box-sizing: border-box; padding: 2%; height: 100%; width: 100%;">${barChartBackground}</div>`;
};
