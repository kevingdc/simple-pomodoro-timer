import { connect } from "react-redux";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 2rem;
  margin: 4rem 1rem 1rem 1rem;
  background-color: var(--heading-red-bg);
  padding: 0.5rem 2rem;
  border-radius: 3px;
`;

const TimeDiv = styled.div`
  font-size: 8rem;
`;

const TimerDisplay = ({ running, timeLeft }) => {
  return (
    <StyledDiv>
      <Header>{running.toUpperCase()}</Header>
      <TimeDiv>{secondsToTime(timeLeft)}</TimeDiv>
    </StyledDiv>
  );
};

const secondsToTime = time => {
  const m = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const s = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");

  return m + ":" + s;
};

console.log(secondsToTime(7735));

const mapStateToProps = ({ timer }) => {
  return {
    running: timer.running,
    timeLeft: timer.timeLeft,
  };
};

export default connect(mapStateToProps, null)(TimerDisplay);
