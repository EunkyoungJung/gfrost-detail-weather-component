export const getSelectPointOptions = (points) => {
  let options = ``;

  points.map((point, index) => {
    if (index === 0) {
      options += `<option id=${index} value=${point.farm_id} selected>${point.farm_address}</option>`;
    } else {
      options += `<option id=${index} value=${point.farm_id}>${point.farm_address}</option>`;
    }
  });
  return options;
};
