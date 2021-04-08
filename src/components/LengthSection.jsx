import PropTypes from "prop-types";
import styled from "styled-components";

import ArrowButton from "./ArrowButton";

const StyledDiv = styled.div`
  text-align: center;
`;

const Header = styled.h2`
  margin: 1rem;
  font-family: "Open Sans", sans-serif;
  text-decoration: underline;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1rem;
`;

const LengthDiv = styled.div`
  font-size: 3rem;
`;

const LengthSection = ({
  label,
  labelId,
  length,
  lengthId,
  onClickDown,
  downId,
  onClickUp,
  upId,
}) => {
  return (
    <StyledDiv>
      <Header id={labelId}>{label}</Header>
      <FlexDiv>
        <ArrowButton id={downId} direction="down" onClick={onClickDown} />
        <LengthDiv id={lengthId}>{length}</LengthDiv>
        <ArrowButton id={upId} direction="up" onClick={onClickUp} />
      </FlexDiv>
    </StyledDiv>
  );
};

LengthSection.propTypes = {
  label: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  lengthId: PropTypes.string.isRequired,
  onClickDown: PropTypes.func.isRequired,
  downId: PropTypes.string.isRequired,
  onClickUp: PropTypes.func.isRequired,
  upId: PropTypes.string.isRequired,
};

export default LengthSection;
