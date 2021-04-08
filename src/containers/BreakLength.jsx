import React from "react";
import LengthSection from "../components/LengthSection";

class BreakLength extends React.Component {
  render() {
    return (
      <LengthSection
        label="Break Length"
        labelId="break-label"
        length={5}
        lengthId="break-length"
        onClickDown={() => console.log("click down")}
        downId="break-decrement"
        onClickUp={() => console.log("click up")}
        upId="break-increment"
      />
    );
  }
}

export default BreakLength;
