import React from "react";

import {
  RatingItemHeader,
  RatingItem,
  RatingSlider,
  RatingHeader,
  RatingSliderScale,
  SliderScaleMin,
  SliderScaleMax,
  Container,
} from "./styles";
const Slider = ({
  isSliding,
  axisName,
  leftValue,
  rightValue,
  sliderVal,
  onChangeValue,
  onClickSetMouseState,
}) => {
  const mouseState = (state) => {
    onClickSetMouseState(state);
  };
  return (
    <Container>
      <RatingHeader>
        <RatingItemHeader className="mb-5">{axisName}</RatingItemHeader>
      </RatingHeader>
      <RatingItem>
        <RatingSliderScale>
          <SliderScaleMin className="text-body-text">{leftValue}</SliderScaleMin>
          <SliderScaleMax className="text-body-text">{rightValue}</SliderScaleMax>
        </RatingSliderScale>
        <RatingSlider
          className={!isSliding ? "inactive" : ""}
          type="range"
          min="1"
          max="100"
          value={sliderVal}
          onChange={onChangeValue}
          onMouseDown={() => mouseState("down")}
          onMouseUp={() => mouseState("up")}
        ></RatingSlider>
      </RatingItem>
    </Container>
  );
};

export default Slider;
