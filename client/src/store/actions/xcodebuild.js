import * as actionTypes from './actionTypes';
import { socket } from '../../helpers/socket';

export const getXcodebuildInfoSuccess = data => {
  return {
    type: actionTypes.GET_XCODEBUILD_INFO_SUCCESS,
    data
  };
};

export const getXcodebuildInfoFail = err => {
  return {
    type: actionTypes.GET_XCODEBUILD_INFO_FAIL,
    err
  };
};

export const getXcodebuildInfo = () => {
  return dispatch => {
    return socket.emit('xcodebuild');
    // return socket.on('xcodebuild', data => dispatch(getXcodebuildInfoSuccess(data)))
  }
}