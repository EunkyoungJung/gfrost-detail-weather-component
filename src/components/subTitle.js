export const getSubTitle = (subTitle) => {
  return `
  <div id="subTitle" style="font-size: 14px; line-height: 14px; font-weight: bold; padding-bottom: 10px; box-sizing: border-box;">${
    subTitle.title
  }<span style="color: #cccccc; ine-height: 14px;">${
    subTitle.unit ? `(${subTitle.unit})` : ``
  }</span>
  </div>`;
};
