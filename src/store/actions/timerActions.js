import { timerTypes } from "../types";

export const increment = type => {
  return {
    type: timerTypes.INCREMENT,
    payload: { type },
  };
};

export const decrement = type => {
  return {
    type: timerTypes.DECREMENT,
    payload: { type },
  };
};

export const toggleTimer = () => {
  return {
    type: timerTypes.TOGGLE_TIMER,
  };
};

export const reset = () => {
  return {
    type: timerTypes.RESET,
  };
};

export const decrementTimeLeft = () => {
  return {
    type: timerTypes.DECREMENT_TIME_LEFT,
  };
};

export const toggleAudio = isPlaying => {
  return {
    type: timerTypes.TOGGLE_AUDIO,
    payload: { isPlaying },
  };
};
