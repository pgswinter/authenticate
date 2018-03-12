import { combineReducers } from 'redux';

import {GET_USER} from '../actions/userActions';

function UserReducer(state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user: UserReducer
});

export default rootReducer;