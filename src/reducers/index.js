import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
  todos: undoable(todos),
  visibilityFilter
});

export default todoApp;
