import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { decrementTimeLeft } from "../store/actions";

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
  border-radius: var(--border-radius);
`;

const TimeDiv = styled.div`
  font-size: 8rem;
`;

class TimerDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.interval = null;
  }

  componentDidUpdate() {
    this.setDecrementInterval();
  }

  componentWillUnmount() {
    this.clearDecrementInterval();
  }

  setDecrementInterval = () => {
    const { isRunning, decrementTimeLeft } = this.props;

    if (isRunning && this.interval === null) {
      this.interval = setInterval(() => {
        decrementTimeLeft();
      }, 1000);
    } else if (!isRunning) {
      this.clearDecrementInterval();
    }
  };

  clearDecrementInterval = () => {
    clearInterval(this.interval);
    this.interval = null;
  };

  secondsToTime = time => {
    const m = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");

    return m + ":" + s;
  };

  render() {
    const { running, timeLeft } = this.props;
    return (
      <StyledDiv>
        <Header id="timer-label">{running.toUpperCase()}</Header>
        <TimeDiv id="time-left">{this.secondsToTime(timeLeft)}</TimeDiv>
      </StyledDiv>
    );
  }
}

const mapStateToProps = ({ timer }) => {
  return {
    isRunning: timer.isRunning,
    running: timer.running,
    timeLeft: timer.timeLeft,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    decrementTimeLeft() {
      dispatch(decrementTimeLeft());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerDisplay);
