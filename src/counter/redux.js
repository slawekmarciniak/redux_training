const COUNTER_INC = "counter/COUNTER_INC";
const COUNTER_DEC = "counter/COUNTER_DEC";
const COUNTER_RESET = "counter/COUNTER_RESET";

// action creators

export function inc() {
  return {
    type: COUNTER_INC,
  };
}

export function dec() {
  return {
    type: COUNTER_DEC,
  };
}

export const reset = () => ({ type: COUNTER_RESET });

const INITIAL_STATE = {
  counter: 0,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case COUNTER_INC:
      return { ...state, counter: state.counter + 1 };
    case COUNTER_DEC:
      return { ...state, counter: state.counter - 1 };
    case COUNTER_RESET:
      return { ...state, counter: 0 };
    default:
      return state;
  }
}
