import * as actionTypes from './actionTypes';
import { socket } from '../../helpers/socket';

export const getIosDeployInfoSuccess = (data) => {
  return {
    type: actionTypes.GET_IOS_DEPLOY_INFO_SUCCESS,
    data
  };
};

export const getIosDeployInfoFail = (err) => {
  return {
    type: actionTypes.GET_IOS_DEPLOY_INFO_FAIL,
    err
  };
};

export const getIosDeployInfo = () => {
  return dispatch => {
    socket.emit('iosdeploy', data => {
      dispatch(getIosDeployInfoSuccess(data));
    });
  }
}