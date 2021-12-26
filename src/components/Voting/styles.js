import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    width: 80px;
    justify-content: space-between;
`
export const ButtonGroup = styled.div`
  display: flex;
  width: 64px;
  justify-content: space-between;
`

export const ButtonVoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 46px;
  justify-content: space-between;
`

export const ButtonVote = styled.div`
  display: block;
  position: relative;
  width: 28px;
  height: 28px;
  border-radius: 100%;
  background-color: #000;
  padding-top: 3px;
  text-align: center;
  overflow: visible;
  line-height: 0;
  cursor: pointer;

  &.active {
    background-color: #00c3ff;
    -webkit-box-shadow: 0 0 0 3px #ffffff;
    -moz-box-shadow: 0 0 0 3px #ffffff;
    box-shadow: 0 0 0 3px #ffffff;
  }

  &:hover {
    background-color: #00c3ff;
    text-decoration: none;
}
  }
`

export const VoteAmountItem = styled.div`
  text-align: center;
  font-weight: 600;
  color: #000;
  font-size: 11px;
`

export const TriangleUp = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  margin: 2px auto;
  border-width: 0 9px 9px 9px;
  border-color: transparent transparent #ffffff transparent;
`

export const LineUp = styled.div`
  border-left: 6px solid white;
  height: 9px;
  position: relative;
  left: 11px;
  top: -3px;
`

export const TriangleDown = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  margin: 2px auto;
  border-width: 9px 9px 0px 9px;
  border-color: #ffffff transparent transparent transparent;
`

export const LineDown = styled.div`
  border-left: 6px solid white;
  height: 9px;
  position: relative;
  left: 11px;
  top: 3px;
`

export const VoteResult = styled.div`
  font-weight: 700;
  font-size: 17px;
  margin-top: 20px;
`
