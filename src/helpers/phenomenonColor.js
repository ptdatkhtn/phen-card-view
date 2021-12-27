export const phenomenonColor = (phenomenon) => {
  let iconClassName = "";
  let backgroundColor = "";
  if (String(phenomenon?.["color"]) === "none") {
    if (phenomenon?.["content-type-alias"] === "rising") {
      iconClassName = "rising";
    } else if (phenomenon?.["content-type-alias"] === "weaksignal") {
      iconClassName = "weaksignal";
    } else if (phenomenon?.["content-type-alias"] === "summary") {
      iconClassName = "summary";
    } else if (phenomenon?.["content-type-alias"] === "cooling") {
      iconClassName = "cooling";
    } else if (phenomenon?.["content-type-alias"] === "wildcard") {
      iconClassName = "wildcard";
    } else {
      iconClassName = "undefined";
    }
  } else {
    iconClassName = "undefined";
    backgroundColor = phenomenon?.["color"];
  }
  return {
    iconClassName,
    backgroundColor,
  };
};
