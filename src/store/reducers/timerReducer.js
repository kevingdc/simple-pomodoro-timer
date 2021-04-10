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
    case timerTypes.DECREMENT_TIME_LEFT:
      let { timeLeft, running } = state;
      timeLeft = state.timeLeft - 1;

      if (timeLeft <= 0) {
        if (running === "session") running = "break";
        else if (running === "break") running = "session";

        timeLeft = state[running] * 60;
      }

      return { ...state, timeLeft, running };
    default:
      return state;
  }
};

const handleIncrementDecrement = (state, type, payload) => {
  const lengthType = payload.type;
  let { timeLeft } = state;
  const { isRunning, running } = state;

  if (isRunning) return state;

  let newLength = 0;
  if (type === timerTypes.INCREMENT) {
    newLength = Math.min(state[lengthType] + 1, 60);
  } else if (type === timerTypes.DECREMENT) {
    newLength = Math.max(state[lengthType] - 1, 1);
  }

  if (!isRunning && running === lengthType) {
    timeLeft = newLength * 60;
  }

  const nextState = { ...state, timeLeft };
  nextState[lengthType] = newLength;

  return nextState;
};

export default timerReducer;
