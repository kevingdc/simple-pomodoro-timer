import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Icon = styled.i`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const ArrowButton = ({ id, direction, onClick }) => {
  let icon = null;
  if (direction === "up") icon = faAngleUp;
  else if (direction === "down") icon = faAngleDown;

  return (
    <Icon id={id} onClick={onClick}>
      <FontAwesomeIcon icon={icon} size="2x" color="var(--white)" />
    </Icon>
  );
};

ArrowButton.propTypes = {
  id: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["up", "down"]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ArrowButton;
