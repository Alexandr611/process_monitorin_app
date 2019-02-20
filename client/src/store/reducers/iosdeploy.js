import * as actionTypes from '../actions/actionTypes';

const initialState = {
  processes: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_IOS_DEPLOY_INFO_SUCCESS:
      return {
        ...state,
        processes: action.data,
        loading: false
      };
    case actionTypes.GET_IOS_DEPLOY_INFO_FAIL:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.GET_IOS_DEPLOY_INFO:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default reducer;