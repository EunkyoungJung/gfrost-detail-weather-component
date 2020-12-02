import "./styles.css";

import * as API from "./backendAPI";
import { getSubTitle } from "./components/subTitle";
import { getWeatherLayout } from "./components/weatherLayout";
import { getTemperatureChartComponent } from "./components/temperatureChartComponent";
import { getLineChart, getLineChartBackground } from "./components/lineChart";
import { getRecentWeatherSummary } from "./components/recentWeatherSummary";
import { getWeeklyWeatherForecast } from "./components/weeklyWeatherForecast";
import { getSelectPointOptions } from "./components/selectPoints";
import { movingBlueBalls } from "./images/movingBlueBalls";
import { farmList } from "./backend/apiList";
import { getRefinedData } from "./backend/refindBackendData";

let spotList = null;

const loadingComponent = () => {
  return `
  <div style="opacity: 1; font-size: 12px; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: space-around; align-items: center;">
    <img id="detailWeatherInfoModal-loadingImage" src="${movingBlueBalls}" alt="loadingImage" style="width: 30%"></img>
  </div>`;
};

const onLoading = () => {
  document.getElementById("detailWeatherInfoModal").innerHTML = `
  <div style="opacity: 1; font-size: 12px; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: space-around; align-items: center;">
    <img id="detailWeatherInfoModal-loadingImage" src="${movingBlueBalls}" alt="loadingImage" style="width: 30%"></img>
  </div>`;
};

const updateSpotList = (data) => {
  fetch(farmList)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("api call: ", data);
      spotList = data.farms;
      if (spotList) {
        initComponent();
        updateComponent(spotList[0]);
      } else {
        document.getElementById("detailWeatherInfoModal").innerHTML = `
        <div style="opacity: 1; font-size: 12px; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: space-around; align-items: center;">
          <img id="detailWeatherInfoModal-loadingImage" src="${movingBlueBalls}" alt="loadingImage" style="width: 30%"></img>
        </div>
        `;
      }
    })
    .catch((error) => {
      console.log("Fetch Error: ", error);
    });
};

const initComponent = () => {
  const onChangeSelectBox = (e) => {
    console.log("onChangeSelectBox and API CAll: ", e.target.selectedIndex);
    updateComponent(spotList[e.target.selectedIndex]);
  };

  document.getElementById("detailWeatherInfoModal").innerHTML = `
  <div style="opacity: 1; font-size: 12px; width: 100%; height: 1100px; display: flex; flex-direction: column; justify-content: space-around;">
    <select
      id="detailWeatherInfoModal-selectPoints"
      style="box-sizing: border-box; padding: 5px 10px; border: 1px solid #cccccc; box-shadow: 0 2px 0 #dddddd; border-radius: 5px;"
    ></select>
    <div id="detailWeatherInfoModal-recentWeatherSummary" style="display:flex; justify-content: space-between;"></div>
    <div id="detailWeatherInfoModal-temperatureLineChart" style="width: 100%;"></div>
    <div id="detailWeatherInfoModal-leftoverWeathers" style="width: 100%;"></div>
    <div id="detailWeatherInfoModal-weeklyForecast" style="width: 100%; height: 100px;"></div>
  </div>
  `;

  document.getElementById(
    "detailWeatherInfoModal-selectPoints"
  ).innerHTML = getSelectPointOptions(spotList);

  const selectComponent = document.getElementById(
    "detailWeatherInfoModal-selectPoints"
  );
  selectComponent.addEventListener("change", onChangeSelectBox);
};

const renderComponent = (data) => {
  const dailyWeatherSummary = data.dailyWeatherSummary;
  const temperatureTimeline = data.temperatureTimeline;
  const dailyRain = data.dailyRain;
  const dailyHumid = data.dailyHumid;
  const dailyAverageWind = data.dailyAverageWind;
  const dailyMaxWind = data.dailyMaxWind;
  const dailyIns = data.dailyIns;
  const dailySunshine = data.dailySunshine;
  const minMaxTemperatures = data.minMaxTemperatures;

  document.getElementById(
    "detailWeatherInfoModal-recentWeatherSummary"
  ).innerHTML = getRecentWeatherSummary(dailyWeatherSummary);

  document.getElementById(
    "detailWeatherInfoModal-temperatureLineChart"
  ).innerHTML = getTemperatureChartComponent("temperatureLineChartCanvas");
  getLineChart("temperatureLineChartCanvas", temperatureTimeline, 350, 200);

  document.getElementById(
    "lineChartBackground"
  ).innerHTML = getLineChartBackground(temperatureTimeline, 350, 200);

  document.getElementById(
    "detailWeatherInfoModal-leftoverWeathers"
  ).innerHTML = getWeatherLayout(
    dailyRain,
    dailyHumid,
    dailyAverageWind,
    dailyMaxWind,
    dailyIns,
    dailySunshine
  );

  document.getElementById("detailWeatherInfoModal-weeklyForecast").innerHTML = `
  ${getSubTitle({ title: "주간예보", unit: "" })}
  <div style="text-align: center; box-sizing: border-box; padding: 5px; height: 80%; width: 100%; border: 1px solid #cccccc; box-shadow: 0 2px 0 #dddddd; border-radius: 5px; display: flex; justify-content: space-between;">
        ${getWeeklyWeatherForecast(minMaxTemperatures)}
  </div>
`;
};

const updateComponent = (selectedPointInfo) => {
  const farmId = selectedPointInfo.farm_id;
  console.log("ahahah farmId: ", farmId);
  const farmWeatherAPI = `https://ggfrost.epinet.kr/farm/value/${farmId}/`;
  fetch(farmWeatherAPI)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderComponent(getRefinedData(selectedPointInfo, data));
    })
    .catch((error) => {
      console.log("Fetch Error: ", error);
    });
};

onLoading();
updateSpotList();
