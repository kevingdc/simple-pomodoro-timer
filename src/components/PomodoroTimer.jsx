import styled from "styled-components";

import LengthContainer from "./LengthContainer";
import TimerDisplay from "./TimerDisplay";
import BottomButtonSection from "./BottomButtonSection";

const StyledDiv = styled.div`
  background-color: var(--light-red);
  border-radius: var(--border-radius);
`;

const PomodoroTimer = () => {
  return (
    <StyledDiv>
      <LengthContainer />
      <TimerDisplay />
      <BottomButtonSection />
    </StyledDiv>
  );
};

export default PomodoroTimer;
