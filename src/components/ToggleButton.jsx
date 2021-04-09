import { connect } from "react-redux";
import styled from "styled-components";

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
  box-shadow: var(--white-highlighted) 0px 6px 0px;
  margin: 1rem 1rem 1.6rem 1rem;
`;

const ToggleButton = ({ isRunning, toggleTimer }) => {
  return (
    <StyledButton id="start-stop" onClick={toggleTimer}>
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
