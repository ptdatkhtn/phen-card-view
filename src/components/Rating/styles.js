import styled from "styled-components/macro";

export const RatingWidget = styled.div`
  width: 100%;
`

export const WidgetHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const IconLink = styled.a` 
  margin: auto 0;
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  width: 105px;
  color: #006998 !important;
`
export const CloseIcon = styled.div`
  &:after {
    display: inline-block;
    content: '\\d7';
    font-size: 22px;
  }
`

export const IconName = styled.div`
    font-weight: 600;
    font-size: 14px;
    margin: auto 0;
    padding-top: 3px;
`

export const RatingItems = styled.div`
    background-color: #e8ebeb;
    padding: 15px 15px 10px;

    &:after {
        display: block;
        clear: both;
        content: "";
    }
`

