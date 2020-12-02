import { growthStage } from "../data/data.json";

const getParsedDateString = (dateString) => {
  return `${dateString.slice(0, 4)}/${dateString.slice(
    4,
    6
  )}/${dateString.slice(6, 8)}`;
};

const getFrostRate = (hourlyWeathers, start = 0, end = 24) => {
  let frostRate = null;
  if (hourlyWeathers && hourlyWeathers.length >= end) {
    let dayFrostData = hourlyWeathers.slice(start, end);
    dayFrostData.map((data, index) => {
      let frostValue = data.frost_val;
      if (frostValue && frostValue["rf"] < 1 && frostValue["sv"] < 1) {
        frostRate = "낮음";
      } else if (frostValue && (frostValue["rf"] || frostValue["sv"])) {
        frostRate = "높음";
        return frostRate;
      }
    });
  }
  return frostRate;
};

const getFreezingRate = (hourlyWeathers, start = 0, end = 24) => {
  let freezingRate = null;
  if (hourlyWeathers && hourlyWeathers.length >= end) {
    let dayFrreezingData = hourlyWeathers.slice(start, end);
    dayFrreezingData.map((data, index) => {
      let freezeValue = data.freeze_risk;
      if (freezeValue && freezeValue > 0) {
        freezingRate = "낮음";
      } else if (freezeValue && freezeValue > 1) {
        freezingRate = "높음";
        return freezingRate;
      }
    });
  }
  return freezingRate;
};

const getDailyWeatherSummary = (
  farmPlantName,
  dailyWeathers,
  hourlyWeathers
) => {
  let dailyWeatherSummary = [];
  dailyWeathers.map((weather, index) => {
    let summary = {};
    summary["date"] = getParsedDateString(weather.logged_at);
    summary["tmin"] = weather["estimation:tmin"];
    summary["tmax"] = weather["estimation:tmax"];
    summary["growthStage"] =
      growthStage[weather[`growth_stage:stage:${farmPlantName}`]];
    summary["frostRate"] = getFrostRate(
      hourlyWeathers,
      index * 24,
      24 + 24 * index
    );
    summary["frozenDamage"] = getFreezingRate(
      hourlyWeathers,
      index * 24,
      24 + 24 * index
    );
    dailyWeatherSummary.push(summary);
  });
  return dailyWeatherSummary;
};

const getTemperatureTimeline = (hourlyWeathers) => {
  let temperatureTimeline = [];
  hourlyWeathers.map((weather, index) => {
    let hourlyTemp = {
      date: getParsedDateString(weather.logged_at),
      value: weather.htemp
    };
    temperatureTimeline.push(hourlyTemp);
  });
  return temperatureTimeline;
};

const getOneTypeWeathers = (dailyWeathers, weatherTitle) => {
  let oneTypeWeathers = [];
  dailyWeathers.map((weather, index) => {
    let oneTypeWeather = {
      date: getParsedDateString(weather.logged_at),
      value: weather[`estimation:${weatherTitle}`]
    };
    oneTypeWeathers.push(oneTypeWeather);
  });
  return oneTypeWeathers;
};

const getMinMaxTemperatures = (dailyWeathers) => {
  let minMaxTemperatures = [];
  dailyWeathers.map((weather, index) => {
    let minMaxTemperature = {
      date: getParsedDateString(weather.logged_at),
      tmin: weather[`estimation:tmin`],
      tmax: weather[`estimation:tmax`]
    };
    minMaxTemperatures.push(minMaxTemperature);
  });
  return minMaxTemperatures;
};

export const getRefinedData = (selectedPointInfo, data) => {
  console.log(data);
  let farmPlantName = selectedPointInfo.farm_plants[0].species__eng;
  let dailyWeathers = data.farm_value.dailies;
  let hourlyWeathers = data.farm_value.hourlies;

  let refinedData = {};
  refinedData["dailyWeatherSummary"] = getDailyWeatherSummary(
    farmPlantName,
    dailyWeathers.slice(0, 3),
    hourlyWeathers
  );
  refinedData["temperatureTimeline"] = getTemperatureTimeline(
    hourlyWeathers.slice(0, 72)
  );
  refinedData["dailyRain"] = getOneTypeWeathers(
    dailyWeathers.slice(0, 3),
    "rain"
  );
  refinedData["dailyHumid"] = getOneTypeWeathers(
    dailyWeathers.slice(0, 3),
    "hm"
  );
  refinedData["dailyAverageWind"] = getOneTypeWeathers(
    dailyWeathers.slice(0, 3),
    "wsa"
  );
  refinedData["dailyMaxWind"] = getOneTypeWeathers(
    dailyWeathers.slice(0, 3),
    "wsx"
  );
  refinedData["dailyIns"] = getOneTypeWeathers(
    dailyWeathers.slice(0, 3),
    "ins"
  );
  refinedData["dailySunshine"] = getOneTypeWeathers(
    dailyWeathers.slice(0, 3),
    "sunshine"
  );
  refinedData["minMaxTemperatures"] = getMinMaxTemperatures(dailyWeathers);

  return refinedData;
};
