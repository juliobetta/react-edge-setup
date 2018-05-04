export function initialState(initialValue = 1) {
  return { counter: initialValue };
}

export function increment(state, step = 1) {
  return { counter: (state.counter + step) };
}

export function decrement(state, step = 1) {
  return { counter: (state.counter - step) };
}

export function reset(initialValue = 1) {
  return { counter: initialValue };
}
