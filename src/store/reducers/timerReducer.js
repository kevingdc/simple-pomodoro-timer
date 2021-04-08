import { timerTypes } from "../types";

const initialState = {
  break: 5,
  session: 25,
  timeLeft: 1500,
  isRunning: false,
  running: "session",
};

const timerReducer = (state = initialState, { type, payload }) => {
  if ([timerTypes.INCREMENT, timerTypes.DECREMENT].includes(type)) {
    return handleIncrementDecrement(state, type, payload);
  }

  switch (type) {
    case timerTypes.TOGGLE_TIMER:
      return { ...state, isRunning: !state.isRunning };
    case timerTypes.RESET:
      return initialState;
    default:
      return state;
  }
};

const handleIncrementDecrement = (state, type, payload) => {
  const lengthType = payload.type;
  let { timeLeft } = state;
  const { isRunning, running } = state;

  let newLength = 0;
  if (type === timerTypes.INCREMENT) {
    newLength = Math.min(state[lengthType] + 1, 60);
  } else if (type === timerTypes.DECREMENT) {
    newLength = Math.max(state[lengthType] - 1, 0);
  }

  if (!isRunning && running === lengthType) {
    timeLeft = newLength * 60;
  }

  return { ...state, lengthType: newLength, timeLeft };
};

export default timerReducer;
