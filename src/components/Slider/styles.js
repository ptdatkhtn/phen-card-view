import styled from "styled-components/macro";

export const Container = styled.div `
    width: 100%;
`

export const RatingWidget = styled.div`
  width: 100%;
`

export const RatingHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const RatingSliderScale = styled.div`
    margin-bottom: 0.8em;

    &:after {
        display: block;
        clear: both;
        content: "";
    }
`

export const SliderScaleMin = styled.div`
    float: left;
    width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
`

export const SliderScaleMax = styled.div`
    float: right;
    width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: right;
    font-size: 14px;
`

export const RatingItemHeader = styled.h4`
    font-weight: 700;
    font-size: 14px;
    // margin: 0 0 10px;
    margin-top: 8px;
`

export const RatingItem = styled.div`
    padding-bottom: 24px;
`

export const RatingSlider = styled.input`
    position: relative;
    -webkit-appearance: none;
    width: 100%;
    background: #00c3ff;
    height: 6px;
    border-radius: 6px;

    &:after {
        display: block;
        content: "";
        position: absolute;
        top: -6px;
        left: 50%;
        width: 3px;
        height: 18px;
        background-color: #00c3ff;
        z-index: 1;
        margin-left: -6px;
    }

    &:focus {
        outline: none;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        background: #00c3ff;
        border-radius: 100%;
        width: 20px;
        height: 20px;
        outline: none;
        cursor: pointer;
        z-index: 333;    
    }

    &.inactive {
        background-color: #aaaaaa;
    }

    &.inactive:after {
        background-color: #aaaaaa;
    }

    &.inactive::-webkit-slider-thumb {
        background-color: #aaaaaa;
    }
`

// export const IconToggleVisibility= styled(EyeSlash)`
//   color: #006998
//   font-weight: 500;
//   cursor: pointer;
//   font-size: 15px;
//   display: flex;
//   justify-content: flex-end;
//   position: relative;
//   right: 0;
// `
// export const IconToggleVisibilityWrapper= styled.div `
//   width: 21px;
//   height: 15px;
//   position: relative;
//   top: 22px;

// `
