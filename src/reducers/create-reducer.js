export const create = (reducers, initialState) => (
  state = initialState,
  action = {}
) => {
  const reducer = reducers[action.type];
  return reducer ? reducer(state, action) : state;
};