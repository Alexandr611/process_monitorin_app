import * as actionTypes from './actionTypes';
import { socket } from '../../helpers/socket';

export const getIosDeviceInfoSuccess = (data) => {
  return {
    type: actionTypes.GET_IOS_DEVICE_INFO_SUCCESS,
    data
  };
};

export const getIosDeviceFail = err => {
  return {
    type: actionTypes.GET_IOS_DEVICE_INFO_FAIL,
    err
  };
};

export const getIosDeviceInfo = () => {
  return dispatch => {
    return socket.emit('iosdevice');
    // return socket.on('iosdevice', data => dispatch(getIosDeviceInfoSuccess(data)))
  }
}