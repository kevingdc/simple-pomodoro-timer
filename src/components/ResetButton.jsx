import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { reset } from "../store/actions";

const Icon = styled.i`
  font-size: 1.2rem;
  padding: 1rem;
  margin: 0.5rem;
  line-height: 1.6;
  display: inline-flex;
  align-items: center;
  transition: transform 0.3s ease-in;

  :hover {
    animation-name: rotate;
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const ResetButton = ({ reset }) => {
  return (
    <Icon id="reset" onClick={reset}>
      <FontAwesomeIcon
        id="reset"
        icon={faRedo}
        size="2x"
        color="var(--white)"
      />
    </Icon>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    reset() {
      dispatch(reset());
    },
  };
};

export default connect(null, mapDispatchToProps)(ResetButton);
