import styled from "styled-components";

import PomodoroTimer from "../components/PomodoroTimer";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--red);
  width: 100%;
  height: 100%;
`;

const App = () => {
  return (
    <div>
      <StyledDiv>
        <PomodoroTimer />
      </StyledDiv>
    </div>
  );
};

export default App;
