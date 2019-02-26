import * as actionTypes from './actionTypes';

export const SetSocketConn = (conn) => {
  return {
    type: actionTypes.SET_SOCKET_CONNECTION,
    connection: conn
  };
}

// export const getProcessInfoByName = (name) => {

// }

// export const getProcessInfoByName = ()