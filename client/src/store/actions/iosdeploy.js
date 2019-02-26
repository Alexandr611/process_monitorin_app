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
    return socket.emit('iosdeploy');
    // return socket.on('iosdeploy', data => dispatch(getIosDeployInfoSuccess(data)))
  }
}

const getIosDeployPromisify = () => {
  return new Promise((resolve, reject) => {
    socket.emit('iosdeploy', data => {
      return resolve(data)
    });
    socket.on('error', err => reject(err))
    socket.on('disconnect', err => reject(err))
  })
}