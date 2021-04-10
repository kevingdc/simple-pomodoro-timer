import styled from "styled-components";

import LengthContainer from "./LengthContainer";
import TimerDisplay from "./TimerDisplay";
import BottomButtonSection from "./BottomButtonSection";
import Audio from "./Audio";

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
      <Audio />
    </StyledDiv>
  );
};

export default PomodoroTimer;
