import undoable from 'redux-undo';
import * as c from '../constants';

const todo = (state, action) => {
  switch (action.type) {
    case c.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case c.TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case c.ADD_TODO:
      return [...state, todo(undefined, action)];
    case c.TOGGLE_TODO:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const undoableTodos = undoable(todos);

export default undoableTodos;
