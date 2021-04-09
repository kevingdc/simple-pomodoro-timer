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
