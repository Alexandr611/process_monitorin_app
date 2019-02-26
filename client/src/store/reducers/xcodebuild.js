import * as actionTypes from '../actions/actionTypes';

const initialState = {
  processes: [],
  loading: false,
  error: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_IOS_DEVICE_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        processes: action.data
      };
    case actionTypes.GET_IOS_DEVICE_INFO_FAIL:
      return {
        ...state,
        errors: state.errors.concat(action.err)
      };
    case actionTypes.GET_XCODEBUILD_INFO:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  };
};

export default reducer;