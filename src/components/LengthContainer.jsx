import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { increment, decrement } from "../store/actions";

import LengthSection from "./LengthSection";

const StyledDiv = styled.div`
  display: flex;
`;

class LengthContainer extends React.Component {
  render() {
    const { break: breakLength, session, increment, decrement } = this.props;
    return (
      <StyledDiv>
        <LengthSection
          label="Break Length"
          labelId="break-label"
          length={breakLength}
          lengthId="break-length"
          onClickDown={() => decrement("break")}
          downId="break-decrement"
          onClickUp={() => increment("break")}
          upId="break-increment"
        />

        <LengthSection
          label="Session Length"
          labelId="session-label"
          length={session}
          lengthId="session-length"
          onClickDown={() => decrement("session")}
          downId="session-decrement"
          onClickUp={() => increment("session")}
          upId="session-increment"
        />
      </StyledDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    break: state.timer.break,
    session: state.timer.session,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment(type) {
      dispatch(increment(type));
    },
    decrement(type) {
      dispatch(decrement(type));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LengthContainer);
