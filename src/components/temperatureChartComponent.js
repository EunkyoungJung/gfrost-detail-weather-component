import { getSubTitle } from "./subTitle.js";

export const getTemperatureChartComponent = (tagCanvasId) => {
  return `
  ${getSubTitle({ title: "기온", unit: "℃" })}
  <div style="display: flex; align-items: center; justify-content: center; box-sizing: border-box; width: 100%; height: 280px; border: 1px solid #cccccc; box-shadow: 0 2px 0 #dddddd; border-radius: 5px; display: flex; align-items: center; justify-contents: center;position: relative;">
    <div style="position: relative;">
      <canvas id="${tagCanvasId}" width="350" height="200" style="position:absolute; top: 12px; right: 0px;"></canvas>
      <div id="lineChartBackground"></div>
    </div>
  </div>`;
};
