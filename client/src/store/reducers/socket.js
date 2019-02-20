import * as actionTypes from '../actions/actionTypes';

const initialState = {
  connection: null
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_SOCKET_CONNECTION:
      return {
        connection: state.connection
      };
    default:
      return state;
  }
}

export default reducer;