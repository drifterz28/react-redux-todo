import * as c from '../constants';
import {create} from './create-reducer';

const actions = {
  [c.SET_VISIBILITY_FILTER](state, {filter}) {
    return filter;
  }
};

export default create(actions, 'SHOW_ALL');