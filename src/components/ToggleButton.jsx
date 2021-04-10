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
  margin: 1rem 1rem 1.6rem 1rem;
  border: 2px solid var(--white);
  /* box-shadow: var(--white-shadow) 0px 6px 0px; */
  transition: background-color 0.2s ease-in;

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
    background-color: transparent;
    color: var(--white);
    /* box-shadow: var(--red) 0px 6px 0px; */
  }

  :active {
    box-shadow: none;
    transform: translateY(6px);
  }
`;

const ToggleButton = ({ isRunning, toggleTimer }) => {
  return (
    <StyledButton id="start-stop" onClick={toggleTimer} isRunning={isRunning}>
      {isRunning ? "STOP" : "START"}
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
