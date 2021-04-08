import styled from "styled-components";

import LengthContainer from "./LengthContainer";

const StyledDiv = styled.div`
  background-color: var(--light-red);
`;

const PomodoroTimer = () => {
  return (
    <StyledDiv>
      <LengthContainer />
    </StyledDiv>
  );
};

export default PomodoroTimer;
