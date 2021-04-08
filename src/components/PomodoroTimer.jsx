import styled from "styled-components";

import LengthContainer from "./LengthContainer";
import TimerDisplay from "./TimerDisplay";

const StyledDiv = styled.div`
  background-color: var(--light-red);
  border-radius: 3px;
`;

const PomodoroTimer = () => {
  return (
    <StyledDiv>
      <LengthContainer />
      <TimerDisplay />
    </StyledDiv>
  );
};

export default PomodoroTimer;
