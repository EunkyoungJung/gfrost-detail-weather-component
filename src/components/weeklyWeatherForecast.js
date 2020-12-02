import { getCustomedDate, getKoreanDayName } from "../utils/dateUtils.js";

export const getWeeklyWeatherForecast = (data) => {
  let weeklyWeatherForecast = ``;
  data.map((item, index) => {
    let dayName = "";
    if (index === 0) {
      dayName = "오늘";
    } else if (index === 1) {
      dayName = "내일";
    } else if (index === 2) {
      dayName = "모레";
    } else {
      dayName = getKoreanDayName(item.date);
    }

    weeklyWeatherForecast += `
      <div style="margin-top: 15px; margin-bottom: 15px; text-align: center; width: ${99 /
        10}%; font-size: 12px; font-weight: bold; display: flex; flex-direction: column; justify-content:center; algin-items: center; ${
      index ? `border-left: 1px solid #cccccc;` : ``
    }">
        <div>${dayName}</div>
        <div style="font-size: 9px; color:#cccccc;">${getCustomedDate(
          item.date
        )}</div>
        <div style="margin-top:5px; color: #cccccc;"><span style="color: black; font-weight: normal;">${
          item.tmin ? item.tmin.toFixed(0) : "-"
        }℃</span>/<span style="color: black; font-weight: normal;">${
      item.tmax ? item.tmax.toFixed(0) : "-"
    }℃</span></div>
      </div>`;
  });
  return weeklyWeatherForecast;
};
