import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ArrowButton = ({ id, direction, onClick }) => {
  let icon = null;
  if (direction === "up") icon = faAngleUp;
  else if (direction === "down") icon = faAngleDown;

  return (
    <FontAwesomeIcon
      id={id}
      icon={icon}
      size="2x"
      color="var(--white)"
      onClick={onClick}
    />
  );
};

ArrowButton.propTypes = {
  id: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["up", "down"]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ArrowButton;
