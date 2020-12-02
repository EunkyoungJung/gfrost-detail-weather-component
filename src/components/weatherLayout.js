import { getSubTitle } from "./subTitle";
import { getBarChart } from "./barChart";

const weatherColor = {
  temperature: "#ec5858",
  rain: "#aee6e6",
  humid: "#aee6e6",
  averageWind: "#9088d4",
  maxWind: "#9088d4",
  ins: "#ffda77",
  sunshineDuration: "#ffda77"
};

export const getWeatherLayout = (
  dailyRain,
  dailyHumid,
  dailyAverageWind,
  dailyMaxWind,
  dailyIns,
  dailySunshineDuration
) => {
  return `
  <div style="width: 100%; height: 400px; display:flex; flex-direction: column; justify-content: space-between;" >
    <div style="width: 100%; height: 33%; box-sizing: border-box; margin-bottom: 15px; display: flex; justify-content: space-between;">
      <div style="width: 49%; height: 100%;">
        ${getSubTitle({ title: "강우량", unit: "mm" })}
        <div style="box-sizing: border-box; padding: 10px; height: 80%; width: 100%; border: 1px solid #cccccc; box-shadow: 0 2px 0 #dddddd; border-radius: 5px;">${getBarChart(
          dailyRain,
          weatherColor["rain"]
        )}</div>
      </div>
      <div style="width: 49%; height: 100%;">
        ${getSubTitle({ title: "습도", unit: "%" })}
        <div style="box-sizing: border-box; padding: 10px; height: 80%; width: 100%; border: 1px solid #cccccc; box-shadow: 0 2px 0 #dddddd; border-radius: 5px;">${getBarChart(
          dailyHumid,
          weatherColor["humid"]
        )}</div>
      </div>
    </div>
    <div style="width: 100%; height: 33%; box-sizing: border-box; margin-bottom: 15px; display: flex; justify-content: space-between;">
      <div style="width: 49%; height: 100%;">
      ${getSubTitle({ title: "평균풍속", unit: "km/h" })}
      <div style="box-sizing: border-box; padding: 10px; height: 80%; width: 100%; border: 1px solid #cccccc; box-shadow: 0 2px 0 #dddddd; border-radius: 5px;">${getBarChart(
        dailyAverageWind,
        weatherColor["averageWind"]
      )}</div>
      </div>
      <div style="width: 49%; height: 100%;">
        ${getSubTitle({ title: "최고풍속", unit: "km/h" })}
        <div style="box-sizing: border-box; padding: 10px; height: 80%; width: 100%; border: 1px solid #cccccc; box-shadow: 0 2px 0 #dddddd; border-radius: 5px;">${getBarChart(
          dailyMaxWind,
          weatherColor["maxWind"]
        )}</div>
      </div>
    </div>
    <div style="width: 100%; height: 33%; box-sizing: border-box; display: flex; justify-content: space-between;">
      <div style="width: 49%; height: 100%;">
      ${getSubTitle({ title: "일사량", unit: "MJ/㎡" })}
      <div style="box-sizing: border-box; padding: 10px; height: 80%; width: 100%; border: 1px solid #cccccc; box-shadow: 0 2px 0 #dddddd; border-radius: 5px;">${getBarChart(
        dailyIns,
        weatherColor["ins"]
      )}</div>
      </div>
      <div style="width: 49%; height: 100%;">
        ${getSubTitle({ title: "일조시간", unit: "h" })}
        <div style="box-sizing: border-box; padding: 10px; height: 80%; width: 100%; border: 1px solid #cccccc; box-shadow: 0 2px 0 #dddddd; border-radius: 5px;">${getBarChart(
          dailySunshineDuration,
          weatherColor["sunshineDuration"]
        )}</div>
      </div>
    </div>
  <div>`;
};
