export const getFormattedDateForMobile = (date) => {
  if (!date) {
    return null;
  }
  const dateString = String(date);
  let formattedDateString = dateString.replaceAll("-", "/");

  return formattedDateString;
};

export const getKoreanDayName = (date) => {
  const daysInKorean = {
    0: "일",
    1: "월",
    2: "화",
    3: "수",
    4: "목",
    5: "금",
    6: "토"
  };
  if (!date) {
    return "-";
  }
  const myDate = new Date(getFormattedDateForMobile(date));

  return daysInKorean[myDate.getDay()];
};

export const getCustomedDate = (date) => {
  if (!date) {
    return "-";
  }

  const myDate = new Date(getFormattedDateForMobile(date));

  return `${myDate.getMonth() + 1}/${myDate.getDate()}(${getKoreanDayName(
    myDate
  )})`;
};

export const getCustomedTime = (date) => {
  if (!date) {
    return "-";
  }

  const myDate = new Date(getFormattedDateForMobile(date));
  const hour =
    myDate.getHours() < 10 ? "0" + myDate.getHours() : myDate.getHours();
  const minute =
    myDate.getMinutes() < 10 ? "0" + myDate.getMinutes() : myDate.getMinutes();

  return `${hour}:${minute}`;
};
