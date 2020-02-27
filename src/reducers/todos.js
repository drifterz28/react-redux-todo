import {create} from './create-reducer';
import * as c from '../constants';

const todo = (state, action) => {
  if (state.id !== action.id) {
    return state;
  }
  return {
    ...state,
    completed: !state.completed
  };
};

const actions = {
  [c.ADD_TODO](state, { id, text }) {
    return [
      ...state,
      {
      id: id,
      text: text,
      completed: false
      }
    ];
  },
  [c.TOGGLE_TODO](state, action) {
    return state.map(t => todo(t, action));
  }
};

export default create(actions, []);
