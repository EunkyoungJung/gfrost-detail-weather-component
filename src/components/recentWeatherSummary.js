import { getCustomedDate } from "../utils/dateUtils.js";

const getSingleWeatherItem = (weatherTitle, weatherValue, valueUnit = "") => {
  const frostRateColor = { 낮음: "YellowGreen", 높음: "Tomato" };
  const frozenDamageColor = { 낮음: "YellowGreen", 높음: "Tomato" };

  if (!weatherValue) {
    weatherValue = "-";
  }
  if (weatherTitle === "서리확율") {
    return `
    <div style="height: 100%; width: 100%; box-sizing: border-box; padding-top: 3px; padding-bottom: 3px; 100%; display:flex; justify-content: space-between;">
      <div style="text-align: left;";>${weatherTitle}</div>
      <div style="width: 55%; text-align: center; font-weight: bold; color: ${frostRateColor[weatherValue]}">${weatherValue}${valueUnit}</div>
    </div>`;
  }
  if (weatherTitle === "동상해") {
    return `
    <div style="height: 100%; width: 100%; box-sizing: border-box; padding-top: 3px; padding-bottom: 3px; 100%; display:flex; justify-content: space-between;">
      <div style="text-align: left;";>${weatherTitle}</div>
      <div style="width: 55%; text-align: center; font-weight: bold; color: ${frozenDamageColor[weatherValue]}">${weatherValue}${valueUnit}</div>
    </div>`;
  }
  return `
  <div style="height: 100%; width: 100%; box-sizing: border-box; padding-top: 3px; padding-bottom: 3px; 100%; display:flex; justify-content: space-between;">
    <div style="text-align: left;";>${weatherTitle}</div>
    <div style="width: 55%; text-align: center;">${weatherValue}${valueUnit}</div>
  </div>`;
};

export const getRecentWeatherSummary = (dailyWeathers) => {
  let dailyWeatherSummary = ``;
  let weatherCount = dailyWeathers.length;

  dailyWeathers.map(
    (dailyWeather, index) =>
      (dailyWeatherSummary += `
      <div style="height: 100%; width:${(100 - 3) /
        weatherCount}%; box-sizing: border-box; padding: 5px 10px; font-weight: bold; display: flex; flex-direction: column; justify-contents: space-around; border: 1px solid #cccccc; box-shadow: 0 2px 0 #dddddd; border-radius: 5px; text-align:center;">
        <div style="font-size: 15px; border-bottom: 1px solid #cccccc; padding-top: 10px; padding-bottom: 10px;">${getCustomedDate(
          dailyWeather.date
        )}</div>
        <div style="height: 100%; box-sizing: border-box; padding-top: 5px; padding-bottom: 5px; display: flex; flex-direction: column; justify-contents: space-between;">
          ${getSingleWeatherItem("최고기온", dailyWeather.tmax.toFixed(2), "℃")}
          ${getSingleWeatherItem("최저기온", dailyWeather.tmin.toFixed(2), "℃")}
          ${getSingleWeatherItem("생육", dailyWeather.growthStage)}
          ${getSingleWeatherItem("서리확율", dailyWeather.frostRate)}
          ${getSingleWeatherItem("동상해", dailyWeather.frozenDamage)}
        </div>
    </div>
    `)
  );
  return dailyWeatherSummary;
};
