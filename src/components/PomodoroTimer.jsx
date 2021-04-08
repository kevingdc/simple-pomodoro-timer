import styled from "styled-components";

import BreakLength from "../containers/BreakLength";

const StyledDiv = styled.div`
  background-color: var(--light-red);
`;

const PomodoroTimer = () => {
  return (
    <StyledDiv>
      <BreakLength />
    </StyledDiv>
  );
};

export default PomodoroTimer;
