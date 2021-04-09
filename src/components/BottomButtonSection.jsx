import styled from "styled-components";

import ToggleButton from "./ToggleButton";
import ResetButton from "./ResetButton";

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const BottomButtonSection = () => {
  return (
    <Flex>
      <ToggleButton />
      <ResetButton />
    </Flex>
  );
};

export default BottomButtonSection;
