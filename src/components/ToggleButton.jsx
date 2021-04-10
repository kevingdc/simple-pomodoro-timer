import { connect } from "react-redux";
import styled, { css } from "styled-components";

import { toggleTimer } from "../store/actions";

const StyledButton = styled.button`
  padding: 1rem 0rem;
  width: 40%;
  text-align: center;
  background-color: var(--white);
  color: var(--red);
  font-size: 2rem;
  border-radius: var(--border-radius);
  border: medium none;
  box-sizing: border-box;
  margin: 1rem 1rem 1.6rem 1rem;
  border: 2px solid var(--white);
  overflow: hidden;
  position: relative;
  display: block;

  :after {
    background-color: var(--light-red);
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    position: absolute;
    transform: translateX(-150%) skewX(45deg);
    transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    z-index: 0;
    box-sizing: border-box;
    margin: 0;
  }

  ${({ isRunning }) => {
    if (isRunning) {
      return css`
        transform: translateY(6px);
      `;
    } else {
      return "box-shadow: var(--white-shadow) 0px 6px 0px;";
    }
  }}

  :hover {
    :after {
      transform: translateX(0) skew(0);
    }
  }

  :hover span span {
    transform: translateY(-100%);
  }

  :hover span span + span {
    transform: translateY(0%);
  }
`;

const SpanCover = styled.span`
  position: relative;
  z-index: 1;
  overflow: hidden;
  display: block;
`;

const SpanInitial = styled.span`
  transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  display: block;
  position: relative;
`;

const SpanHover = styled.span`
  bottom: 0;
  color: var(--white);
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(100%);
  transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  display: block;
`;

const ToggleButton = ({ isRunning, toggleTimer }) => {
  return (
    <StyledButton id="start-stop" onClick={toggleTimer} isRunning={isRunning}>
      <SpanCover>
        <SpanInitial>{isRunning ? "STOP" : "START"}</SpanInitial>
        <SpanHover>{isRunning ? "STOP" : "START"}</SpanHover>
      </SpanCover>
    </StyledButton>
  );
};

const mapStateToProps = ({ timer }) => {
  return {
    isRunning: timer.isRunning,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTimer() {
      dispatch(toggleTimer());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleButton);
